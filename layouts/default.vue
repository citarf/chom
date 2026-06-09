<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { contactEmail } = useRuntimeConfig().public

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Cyber', to: '/cyber', icon: 'i-lucide-shield-check' },
  { label: 'Data-platform', to: '/data', icon: 'i-lucide-database' },
  { label: 'Sites vitrine', to: '/sites', icon: 'i-lucide-layout-template' },
])

const year = new Date().getFullYear()
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-lg text-highlighted">
        <UIcon name="i-lucide-hexagon" class="size-6 text-primary" />
        CHOM
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Demander un devis"
        to="/devis"
        icon="i-lucide-file-text"
        class="hidden sm:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton label="Demander un devis" to="/devis" block class="mt-4" />
    </template>
  </UHeader>

  <UMain>
    <slot />
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        © {{ year }} CHOM SASU — La Réunion. Cyber, data &amp; web.
      </p>
    </template>
    <template #right>
      <UButton
        :label="contactEmail"
        :to="`mailto:${contactEmail}`"
        icon="i-lucide-mail"
        color="neutral"
        variant="ghost"
        size="sm"
      />
    </template>
  </UFooter>
</template>
