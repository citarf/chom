// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Destinataire des demandes (journalisé si aucun webhook n'est configuré).
    devisRecipient: process.env.DEVIS_RECIPIENT ?? 'pamahe@proton.me',
    // URL de webhook où acheminer les leads (Slack, Make/n8n, transfert email…).
    devisWebhookUrl: process.env.DEVIS_WEBHOOK_URL ?? '',
    public: {
      contactEmail: process.env.CONTACT_EMAIL ?? 'pamahe@proton.me',
    },
  },

  colorMode: { preference: 'light' },
  typescript: { strict: true, typeCheck: false },
  devtools: { enabled: true },
  devServer: { port: 3000 },

  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
})
