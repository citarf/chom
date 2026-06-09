<script setup lang="ts">
defineProps<{
  items: { icon: string; title: string; description: string }[]
  /** Affiche un numéro (01, 02…) au lieu de l’icône — pour les séquences ordonnées. */
  numbered?: boolean
}>()

const pad = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <ul class="border-t border-default">
    <li
      v-for="(it, i) in items"
      :key="it.title"
      class="border-b border-default py-6 sm:py-7"
    >
      <div class="grid sm:grid-cols-12 gap-2 sm:gap-8 items-baseline">
        <div class="sm:col-span-4 flex items-center gap-2.5">
          <span
            v-if="numbered"
            class="font-mono text-sm text-primary tabular-nums"
          >{{ pad(i) }}</span>
          <UIcon v-else :name="it.icon" class="size-5 text-primary shrink-0" />
          <h3 class="font-display text-lg font-semibold text-highlighted">{{ it.title }}</h3>
        </div>
        <p class="sm:col-span-8 text-muted text-pretty">{{ it.description }}</p>
      </div>
    </li>
  </ul>
</template>
