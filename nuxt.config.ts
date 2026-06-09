// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Destinataire des demandes de devis (adapter d'envoi). Stub pour l'instant.
    devisRecipient: process.env.DEVIS_RECIPIENT ?? 'contact@chom.re',
    public: {
      contactEmail: process.env.CONTACT_EMAIL ?? 'contact@chom.re',
    },
  },

  colorMode: { preference: 'light' },
  typescript: { strict: true, typeCheck: false },
  devtools: { enabled: true },
  devServer: { port: 3000 },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
})
