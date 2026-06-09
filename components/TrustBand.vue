<script setup lang="ts">
const points = [
  {
    icon: 'i-lucide-server',
    title: 'Hébergement souverain',
    description: 'Données hébergées en France / UE, RGPD — option HDS pour la santé.',
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Proximité La Réunion & Hexagone',
    description: "Un interlocuteur unique qui prend le temps de comprendre votre contexte, à La Réunion comme en métropole.",
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
