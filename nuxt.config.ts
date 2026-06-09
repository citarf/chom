// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxt/ui'],
  css: [
    // Polices auto-hébergées (souveraineté / RGPD — pas de CDN Google).
    '@fontsource-variable/fraunces',
    '@fontsource-variable/inter',
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    // Destinataire des demandes (email Resend + repli journal).
    devisRecipient: process.env.DEVIS_RECIPIENT ?? 'pamahe@proton.me',
    // Resend (email) — prioritaire si la clé est présente. Clé via .env, jamais commitée.
    resendApiKey: process.env.RESEND_API_KEY ?? '',
    resendFrom: process.env.RESEND_FROM ?? 'CHOM <onboarding@resend.dev>',
    // URL de webhook (repli si pas de Resend) : Slack, Make/n8n, transfert email…
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
