# Déploiement — CHOM (VM Debian + Docker Compose, derrière Traefik externe)

Runbook SRE. Le site est une app **Nuxt 4 / Nitro** servie en conteneur sur la VM.

**Topologie** : la VM **n'expose rien sur Internet**. L'unique point d'entrée
public (80/443 + TLS) est un **Traefik dans un LXC séparé**, qui proxifie vers
l'app sur le **LAN** :

```
Internet ──443──> [ Traefik (LXC) ]  ──LAN:HOST_PORT──>  [ VM Debian : conteneur web (Nitro :3000) ]
                   TLS / Let's Encrypt                     docker compose (cette stack)
```

La stack Docker ci-dessous ne fait **pas** de TLS : elle publie l'app sur un port
du LAN. C'est Traefik qui gère certificat, HTTPS et redirection 80→443.

---

## 1. Prérequis (VM Debian)

- Debian 12+ avec **Docker Engine** + plugin **Docker Compose v2** (`docker compose version`).
- La VM est joignable depuis le LXC Traefik sur le **LAN** (IP privée + `HOST_PORT`).
- **Aucun** port de la VM ouvert sur Internet. Seul Traefik est exposé.
- Sortie réseau autorisée (API Resend, registres pour le build).
- DNS : `chom.re → IP publique du Traefik` (géré côté Traefik, pas ici).

---

## 2. Code + secrets

```bash
git clone https://github.com/citarf/chom.git && cd chom
cp .env.prod.example .env
```

Renseigner `.env` :

| Variable | Rôle |
|---|---|
| `HOST_PORT` | port publié sur la VM (Traefik proxifie vers `http://<IP_VM>:<HOST_PORT>`). Défaut `3000`. |
| `HTTP_BIND` | interface d'écoute. Mettre l'**IP LAN de la VM** pour ne pas écouter ailleurs. |
| `RESEND_API_KEY` | clé Resend — **sans elle, les demandes ne partent pas par email**. |
| `RESEND_FROM` | expéditeur ; domaine **vérifié** chez Resend en prod. |
| `CONTACT_EMAIL` / `DEVIS_RECIPIENT` | email affiché / destinataire des demandes. |

`.env` est **gitignoré** : ne jamais le committer ; préférer l'injection via le
gestionnaire de secrets de la plateforme.

> **Resend** : tant que `chom.re` n'est pas vérifié dans Resend, garder
> `RESEND_FROM=CHOM <onboarding@resend.dev>` (mails possibles en spam). Une fois le
> domaine vérifié → `RESEND_FROM=CHOM <contact@chom.re>`.

---

## 3. Lancer (sur la VM)

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Vérifier en local sur la VM :

```bash
docker compose -f docker-compose.prod.yml ps                 # web "healthy"
curl -fsS http://localhost:${HOST_PORT:-3000}/api/health      # {"status":"ok"}
```

Et depuis le LXC Traefik (remplacer par l'IP LAN de la VM) :

```bash
curl -fsS http://<IP_VM>:3000/api/health                      # {"status":"ok"}
```

---

## 4. Côté Traefik (LXC séparé)

Traefik n'a **pas** accès au socket Docker de la VM → utiliser le **provider
fichier** (dynamic config). Exemple à ajouter à la config dynamique de Traefik
(`/etc/traefik/dynamic/chom.yml` ou équivalent) :

```yaml
http:
  routers:
    chom:
      rule: "Host(`chom.re`)"
      entryPoints: ["websecure"]
      service: chom
      tls:
        certResolver: le          # votre resolver ACME Traefik
      middlewares: ["chom-sec"]
  services:
    chom:
      loadBalancer:
        servers:
          - url: "http://<IP_VM>:3000"   # IP LAN de la VM + HOST_PORT
        healthCheck:
          path: /api/health
          interval: "15s"
  middlewares:
    chom-sec:
      headers:
        stsSeconds: 31536000
        stsIncludeSubdomains: true
        contentTypeNosniff: true
        referrerPolicy: "strict-origin-when-cross-origin"
```

Prévoir aussi la redirection 80→443 sur l'entrypoint `web` (config classique Traefik).

> **Alternative** : si ce Traefik partageait le socket/réseau Docker de la VM
> (ce n'est pas le cas ici), on utiliserait les **labels** déjà présents en
> commentaire dans `docker-compose.prod.yml` au lieu du provider fichier.

---

## 5. Exploitation

```bash
# Logs
docker compose -f docker-compose.prod.yml logs -f web

# Mise à jour
git pull && docker compose -f docker-compose.prod.yml up -d --build && docker image prune -f

# Redémarrage / arrêt
docker compose -f docker-compose.prod.yml restart web
docker compose -f docker-compose.prod.yml down

# Rollback
git checkout <sha> && docker compose -f docker-compose.prod.yml up -d --build
```

Ressources bornées sur `web` (`mem_limit: 512m`, `cpus: 1.0`) ; logs en rotation
(json-file, 10 Mo × 3). `restart: unless-stopped`.

---

## 6. Points d'attention

- **Persistance des leads** : dépôt **en mémoire** (références réinitialisées au
  redémarrage). La livraison durable est l'**email Resend** — aucune base à
  sauvegarder. Pour un historique, brancher un vrai dépôt (hors périmètre) ou
  exploiter Resend / un webhook.
- **Sécurité** : image runtime minimale (bundle Nitro), utilisateur **non-root**,
  `no-new-privileges`. La VM n'expose que le port LAN nécessaire à Traefik — viser
  `HTTP_BIND=<IP_LAN_VM>` pour ne pas écouter sur d'autres interfaces.
- **En-têtes de sécurité / HSTS** : posés côté **Traefik** (middleware ci-dessus),
  puisqu'il termine le TLS.
- **Souveraineté** : police (Geist) auto-hébergée, aucun CDN tiers. Données du
  formulaire traitées uniquement pour la demande (cf. `/confidentialite`).
- **Healthcheck applicatif** : `GET /api/health` → `{"status":"ok"}` (utilisé par le
  conteneur ET par Traefik).
