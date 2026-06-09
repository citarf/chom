<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  title: string
  pain: string
  /** Classes image additionnelles (ex. recadrage : max-h + object-cover object-top). */
  imgClass?: string
}>()
</script>

<template>
  <figure class="space-y-3">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      :class="['w-full rounded-lg ring ring-default shadow-lg bg-elevated', imgClass]"
    >
    <figcaption>
      <p class="font-medium text-highlighted">{{ title }}</p>
      <p class="text-sm text-muted">{{ pain }}</p>
    </figcaption>
  </figure>
</template>
