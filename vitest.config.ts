import { defineConfig } from 'vitest/config'

// Le cœur hexagonal (server/devis/{domain,application}) est du TS pur, sans dépendance
// Nuxt/Vue. On le teste donc avec vitest « nu », sans @nuxt/test-utils.
export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts'],
    environment: 'node',
  },
})
