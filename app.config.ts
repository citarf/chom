// Thème CHOM (ombrelle) — quiet luxury.
// Accent « pétrole » (cyan assagi) défini dans main.css (@theme). Couleurs pilotées
// ici uniquement → pas de palette brute dans les pages.
//
// Hallmark redesign : dé-centrage global (variantes vertical de UPageHero/UPageSection),
// boutons sombres par défaut (l'accent ne sert qu'aux détails), titres en serif medium.
export default defineAppConfig({
  ui: {
    colors: {
      // Cyan assagi → teal (natif Nuxt UI), profond et sobre. Distinct de
      // KAITAIN (violet) et Mentat (vert/emerald).
      primary: 'teal',
      neutral: 'slate',
    },
    pageHero: {
      slots: {
        title: 'text-4xl sm:text-6xl text-pretty tracking-tight font-semibold text-highlighted',
        container: 'py-20 sm:py-28 lg:py-32 gap-12',
      },
      variants: {
        orientation: {
          vertical: {
            wrapper: 'text-left max-w-3xl',
            headline: 'justify-start',
            links: 'justify-start',
            description: 'text-pretty',
          },
        },
      },
    },
    pageSection: {
      variants: {
        orientation: {
          vertical: {
            headline: 'justify-start',
            leading: 'justify-start',
            title: 'text-left font-semibold',
            description: 'text-left',
            links: 'justify-start',
            features: 'sm:grid-cols-2 lg:grid-cols-3 gap-8',
          },
        },
      },
    },
  },
})
