<script setup lang="ts">
useSeoMeta({
  title: 'Sites vitrine — CHOM',
  description:
    'Création de sites vitrine rapides, accessibles et bien référencés (Nuxt / Nuxt UI) : performances, SEO, mode sombre, formulaires connectés à vos outils.',
})

const process = [
  {
    icon: 'i-lucide-messages-square',
    title: 'Cadrage',
    description: 'On clarifie vos objectifs, vos cibles et vos contenus. Devis ferme avant de démarrer.',
  },
  {
    icon: 'i-lucide-pen-tool',
    title: 'Design',
    description: 'Maquette de l’identité et des pages clés, validée avec vous avant l’intégration.',
  },
  {
    icon: 'i-lucide-code',
    title: 'Intégration',
    description: 'Développement sur stack moderne (Nuxt), responsive, accessible, optimisé pour le SEO.',
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Mise en ligne',
    description: 'Déploiement, nom de domaine, certificat, hébergement souverain. On s’occupe de tout.',
  },
  {
    icon: 'i-lucide-life-buoy',
    title: 'Suivi',
    description: 'Évolutions, contenus, maintenance. Ou on vous passe la main proprement si vous préférez.',
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
      "Accessibles par défaut (ARIA), contraste, navigation au clavier. L’inclusion n’est pas une option.",
  },
  {
    icon: 'i-lucide-search',
    title: 'Bien référencés',
    description:
      "Métadonnées, structure, vitesse : tout ce qu’il faut pour qu’on vous trouve.",
  },
  {
    icon: 'i-lucide-moon-star',
    title: 'Mode sombre natif',
    description:
      'Thème clair et sombre intégré, votre identité pilotée depuis un seul endroit.',
  },
  {
    icon: 'i-lucide-mail-check',
    title: 'Formulaires connectés',
    description:
      'Contact, devis, rendez-vous : branchés à vos outils (email, CRM), avec une vraie validation.',
  },
  {
    icon: 'i-lucide-wrench',
    title: 'Maintenables',
    description:
      'Code clair et testé, hébergé en Europe. Vous reprenez la main quand vous voulez.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Sites vitrine"
      title="Un site qui vous ressemble, et qui va vite"
      description="Celui que vous parcourez en est un : rapide, sobre, accessible, bien référencé. On les construit sur une stack moderne (Nuxt), avec un vrai soin des performances et du référencement."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=sites', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=sites&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />

    <UPageSection title="Des sites soignés, pas des usines à gaz">
      <FeatureList :items="features" />
    </UPageSection>

    <UPageSection
      title="Un déroulé clair, du cadrage au suivi"
      description="Pas de tunnel opaque : à chaque étape, vous savez où on en est et ce que vous validez."
    >
      <FeatureList :items="process" numbered />
    </UPageSection>

    <UPageSection orientation="horizontal" :ui="{ container: 'py-8 sm:py-12' }">
      <UPageCard
        variant="subtle"
        icon="i-lucide-sparkles"
        title="La démo, c’est ce site"
        description="Pas besoin d’un portfolio à rallonge : ce site est notre vitrine. Même stack, même exigence, du grand titre jusqu’au formulaire de devis branché sur un vrai backend."
      />
    </UPageSection>

    <UPageCTA
      title="Un site à créer ou à refondre ?"
      description="Décrivez votre projet, on revient avec une proposition claire. Ou prenez une première rencontre pour en parler de vive voix."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=sites', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=sites&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
