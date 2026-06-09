// Thème CHOM (ombrelle) — indigo. Distinct du violet KAITAIN et du vert Mentat.
// Couleur de marque pilotée ici uniquement → pas de palette brute dans les pages.
//
// Hallmark redesign : on dé-centre tout le site (heroes + en-têtes de section)
// en surchargeant la variante `vertical` des composants Page de Nuxt UI. Un seul
// endroit, façon Nuxt UI — pas de CSS dispersé dans les pages.
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'slate',
    },
    pageHero: {
      slots: {
        title: 'text-4xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted',
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
            title: 'text-left',
            description: 'text-left',
            links: 'justify-start',
            features: 'sm:grid-cols-2 lg:grid-cols-3 gap-8',
          },
        },
      },
    },
  },
})
