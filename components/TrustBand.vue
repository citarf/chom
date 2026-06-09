<script setup lang="ts">
const points = [
  {
    icon: 'i-lucide-server',
    title: 'Hébergement souverain',
    description: 'Vos données restent en France ou dans l’UE, conformes RGPD. Option HDS pour la santé.',
  },
  {
    icon: 'i-lucide-map-pin',
    title: 'Proximité La Réunion & Hexagone',
    description: "Un interlocuteur unique qui prend le temps de comprendre votre contexte, à La Réunion comme en métropole.",
  },
  {
    icon: 'i-lucide-puzzle',
    title: 'Sur votre existant',
    description: 'On se branche sur vos outils. Pas de remplacement, pas de projet à rallonge.',
  },
]
</script>

<template>
  <UPageSection
    :ui="{ container: 'py-12 sm:py-16' }"
    :features="points"
  />
</template>
