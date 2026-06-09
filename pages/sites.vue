<script setup lang="ts">
useSeoMeta({
  title: 'Sites vitrine — CHOM',
  description:
    'Création de sites vitrine rapides, accessibles et bien référencés (Nuxt / Nuxt UI) : performances, SEO, mode sombre, formulaires connectés à vos outils.',
})

const features = [
  {
    icon: 'i-lucide-rocket',
    title: 'Rapides',
    description:
      'Sites légers et performants (rendu serveur), pensés pour le mobile et les connexions réelles.',
  },
  {
    icon: 'i-lucide-accessibility',
    title: 'Accessibles',
    description:
      'Composants accessibles par défaut (ARIA), contraste et navigation clavier — l\'inclusion n\'est pas une option.',
  },
  {
    icon: 'i-lucide-search',
    title: 'Bien référencés',
    description:
      'SEO soigné : métadonnées, structure, performances — pour qu\'on vous trouve.',
  },
  {
    icon: 'i-lucide-moon-star',
    title: 'Mode sombre natif',
    description:
      'Thème clair / sombre intégré et identité de marque pilotée par une seule source.',
  },
  {
    icon: 'i-lucide-mail-check',
    title: 'Formulaires connectés',
    description:
      'Contact, devis, prise de rendez-vous — branchés à vos outils (email, CRM), avec validation soignée.',
  },
  {
    icon: 'i-lucide-wrench',
    title: 'Maintenables',
    description:
      'Code clair et testé, hébergement souverain, et la possibilité de reprendre la main quand vous voulez.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Sites vitrine"
      title="Un site qui vous ressemble — et qui performe"
      description="Le site que vous parcourez en est l'exemple : rapide, accessible, sobre et bien référencé. CHOM conçoit des sites vitrine sur une stack moderne (Nuxt), avec une attention réelle aux performances, au SEO et à l'accessibilité."
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
    />

    <UPageSection
      headline="Ce que vous obtenez"
      title="Des sites soignés, pas des usines à gaz"
      :features="features"
    />

    <UPageSection orientation="horizontal" :ui="{ container: 'py-8 sm:py-12' }">
      <UPageCard
        variant="subtle"
        icon="i-lucide-sparkles"
        title="La démo, c'est ce site"
        description="Pas besoin de portfolio à rallonge : ce site est notre vitrine. Mêmes principes, même stack, même exigence — du hero au formulaire de devis connecté à un vrai backend."
      />
    </UPageSection>

    <UPageCTA
      title="Besoin d'un site vitrine ou d'une refonte ?"
      description="Décrivez votre projet : nous revenons vers vous avec une proposition claire."
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
    />
  </div>
</template>
