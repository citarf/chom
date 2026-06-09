# Politique de sécurité

## Signaler une vulnérabilité

Merci de **ne pas** ouvrir d'issue publique pour une faille de sécurité.

- Privément : **GitHub → onglet _Security_ → _Report a vulnerability_** (advisory privé).
- Ou par email : **pamahe@proton.me**.

Merci d'inclure : description, impact, étapes de reproduction, et version/commit
concernés. Réponse visée sous **72 h ouvrées** ; correctif coordonné avant
divulgation publique.

## Périmètre

Ce dépôt — le site vitrine de CHOM (Nuxt) et son endpoint `/api/devis`. Les
produits KAITAIN et Mentat sont hors périmètre ici.

## Posture supply-chain

- **Actions GitHub épinglées au SHA** (anti-mutation de tag), permissions minimales,
  `harden-runner` (audit egress) sur chaque job.
- **CI** : lockfile gelé (`pnpm install --frozen-lockfile`), typecheck, tests, build,
  **SBOM** (SPDX).
- **Analyses** : CodeQL (SAST), `dependency-review` sur les PR, OpenSSF Scorecard.
- **Dependabot** : dépendances JS, actions et image Docker.
- **Secret scanning + push protection** activés ; secrets jamais commités (`.env`).
- **Image release** : publiée sur GHCR avec **provenance SLSA** attestée (keyless).
