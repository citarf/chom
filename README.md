# CHOM — site corporate

[![CI](https://github.com/citarf/chom/actions/workflows/ci.yml/badge.svg)](https://github.com/citarf/chom/actions/workflows/ci.yml)
[![CodeQL](https://github.com/citarf/chom/actions/workflows/codeql.yml/badge.svg)](https://github.com/citarf/chom/actions/workflows/codeql.yml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/citarf/chom/badge)](https://securityscorecards.dev/viewer/?uri=github.com/citarf/chom)

Site vitrine de **CHOM** (société française) présentant ses trois lignes de
service : **cybersécurité**, **data-platform** et **sites vitrine** — à La Réunion
comme en métropole. Conversion via un formulaire de devis / première rencontre,
acheminé par email.

## Stack

- **Nuxt 4 / Nitro** + **@nuxt/ui v4** (Tailwind v4)
- Typographie **Geist** auto-hébergée (souveraineté / RGPD, pas de CDN tiers)
- Endpoint `/api/devis` : domaine **hexagonal testé en TDD**, envoi email via **Resend**
- Conteneur **Docker** multi-stage (runtime Nitro non-root)

## Développement

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # vitest (domaine devis)
pnpm typecheck    # nuxt typecheck
pnpm build        # build de production
```

Variables d'environnement : voir [`.env.example`](.env.example). Les secrets
(clé Resend) vont dans `.env` (gitignoré), jamais commités.

## Déploiement

VM Debian + Docker Compose, derrière un Traefik externe (TLS). Runbook complet :
**[`DEPLOY.md`](DEPLOY.md)**.

## Sécurité & supply chain

Politique et posture : **[`SECURITY.md`](SECURITY.md)**. CI durcie (lockfile gelé,
SBOM, harden-runner), CodeQL, dependency-review, Dependabot, actions épinglées au
SHA, secret scanning + push protection, image release à provenance SLSA attestée.
