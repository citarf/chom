<script setup lang="ts">
const points = [
  {
    icon: 'i-lucide-server',
    title: 'Hébergement souverain',
    description: 'Données hébergées en France / UE, RGPD — option HDS pour la santé.',
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Ancrage réunionnais',
    description: "Un cabinet local, un seul interlocuteur, à votre fuseau et sur votre terrain.",
  },
  {
    icon: 'i-lucide-puzzle',
    title: 'Sur votre existant',
    description: 'On se branche sur vos outils — pas de projet à rallonge, pas de remplacement.',
  },
]
</script>

<template>
  <UPageSection
    :ui="{ container: 'py-12 sm:py-16' }"
    :features="points"
  />
</template>
