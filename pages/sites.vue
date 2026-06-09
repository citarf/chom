<script setup lang="ts">
useSeoMeta({
  title: 'Sites vitrine — CHOM',
  description:
    'Création de sites vitrine rapides, accessibles et bien référencés (Nuxt / Nuxt UI) : performances, SEO, mode sombre, formulaires connectés à vos outils.',
})

const process = [
  {
    icon: 'i-lucide-messages-square',
    title: '1. Cadrage',
    description: 'On clarifie vos objectifs, vos cibles et vos contenus. Devis ferme avant de démarrer.',
  },
  {
    icon: 'i-lucide-pen-tool',
    title: '2. Design',
    description: 'Maquette de l\'identité et des pages clés, validée avec vous avant l\'intégration.',
  },
  {
    icon: 'i-lucide-code',
    title: '3. Intégration',
    description: 'Développement sur stack moderne (Nuxt), responsive, accessible, optimisé pour le SEO.',
  },
  {
    icon: 'i-lucide-rocket',
    title: '4. Mise en ligne',
    description: 'Déploiement, nom de domaine, certificat, hébergement souverain — on s\'occupe de tout.',
  },
  {
    icon: 'i-lucide-life-buoy',
    title: '5. Suivi',
    description: 'Évolutions, contenus, maintenance — ou transmission propre si vous reprenez la main.',
  },
]

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
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=sites', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=sites&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />

    <UPageSection
      headline="Ce que vous obtenez"
      title="Des sites soignés, pas des usines à gaz"
      :features="features"
    />

    <UPageSection
      headline="Comment on procède"
      title="Un déroulé clair, du cadrage au suivi"
      description="Pas de tunnel opaque : à chaque étape, vous savez où on en est et ce que vous validez."
      :features="process"
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
      description="Décrivez votre projet et recevez une proposition claire — ou prenez une première rencontre pour en parler de vive voix."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=sites', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=sites&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
