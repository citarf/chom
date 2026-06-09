# Design — CHOM

Système de design verrouillé pour le site CHOM. Toute refonte de page lit ce
fichier avant d'émettre du code. Ne pas régénérer par page : étendre ou amender
ici quand le système doit évoluer. Construit sur **@nuxt/ui v4** — les tokens
sémantiques de Nuxt UI (pilotés par `app.config.ts`) font foi.

## Genre
modern-minimal

## Macrostructure — familles
- **Accueil** : index éditorial asymétrique (hero aligné à gauche en 2 colonnes,
  lignes de service en liste à filets, pas de grille de cartes).
- **Pages service** (cyber · data · sites) : document aligné à gauche — hero +
  sections de features + figures produit réelles encadrées.
- **Pages légales / à-propos** : long document, colonne de lecture étroite.

Variété = macrostructure/rythme, **pas** thème. Diversification inversée :
les pages partagent thème, accent, polices, voix CTA.

## Thème (Nuxt UI) — quiet luxury
- `primary` : **pétrole muté** — alias `teal` dans `app.config`, mais la valeur réelle
  est forcée via `--ui-primary` dans `main.css` (Nuxt UI fige les couleurs au build et
  n'accepte pas de couleur custom ; on surcharge donc la variable sémantique).
  Clair : `oklch(45% 0.055 212)` · Sombre : `oklch(66% 0.062 212)`. Texte blanc sur CTA.
  Distinct de KAITAIN violet & Mentat vert. · `neutral` : **slate**
- **Papier ivoire** + **encre espresso** : tokens sémantiques surchargés en mode clair
  dans `main.css` (`--ui-bg*` réchauffés vers l'ivoire, `--ui-text*` vers l'espresso).
  Le mode sombre reste piloté par Nuxt UI.
- Accent teal ≤ ~5 % par vue, surtout le CTA primaire (plein). Secondaire discret (subtle).
- Pas de palette brute dans les pages (couleurs sémantiques uniquement).

## Typographie
- **Display** : Fraunces Variable (serif, titres `h1`–`h4`, wordmark), poids 500, romain
- **Body** : Inter Variable
- Auto-hébergées via `@fontsource-variable/*` (souveraineté / RGPD — pas de CDN Google)
- Câblage : `--font-sans` (Inter) dans `@theme`, `--font-display` (Fraunces) + `h1..h4` dans `main.css`

## Alignement
Tout aligné à gauche. Les variantes `vertical` de `UPageHero` / `UPageSection`
sont surchargées dans `app.config.ts` (plus de `text-center`). Un seul CTA de bas
de page peut rester en bande centrée.

## Eyebrows
Off par défaut. 1–2 max par page, et seulement si l'étiquette est porteuse de sens
(ex. segments d'audience sur /cyber). Jamais le motif étiquette-gauche / titre-droite.

## Motion
Défauts Nuxt UI, sobres. Pas de fade-up au scroll généralisé. Succès silencieux.

## Voix CTA
- Primaire : `UButton` plein, « Demander un devis »
- Secondaire : `UButton` subtle, « Première rencontre » (faible engagement)

## Ce que les pages DOIVENT partager
Wordmark · accent indigo et sa parcimonie · Space Grotesk + Inter · voix CTA
bi-niveau · alignement à gauche · honnêteté (aucune métrique inventée, captures réelles).

## Ce que les pages PEUVENT varier
Macrostructure dans la famille · archétype de hero · présence/absence de figures produit.
