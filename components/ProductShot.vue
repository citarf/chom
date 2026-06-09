<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  title: string
  pain: string
}>()
</script>

<template>
  <figure class="space-y-3">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      class="w-full rounded-lg ring ring-default shadow-lg bg-elevated"
    >
    <figcaption>
      <p class="font-medium text-highlighted">{{ title }}</p>
      <p class="text-sm text-muted">{{ pain }}</p>
    </figcaption>
  </figure>
</template>
