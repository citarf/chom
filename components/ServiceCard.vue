<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  points: string[]
  to: string
}>()
</script>

<template>
  <UPageCard
    :title="title"
    :description="description"
    :icon="icon"
    :to="to"
    spotlight
    class="h-full"
  >
    <ul class="space-y-2">
      <li v-for="point in points" :key="point" class="flex items-start gap-2 text-sm text-muted">
        <UIcon name="i-lucide-check" class="size-4 mt-0.5 text-primary shrink-0" />
        <span>{{ point }}</span>
      </li>
    </ul>

    <template #footer>
      <span class="text-sm font-medium text-primary inline-flex items-center gap-1">
        En savoir plus
        <UIcon name="i-lucide-arrow-right" class="size-4" />
      </span>
    </template>
  </UPageCard>
</template>
