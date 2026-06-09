<script setup lang="ts">
useSeoMeta({
  title: 'À propos — CHOM',
  description:
    "CHOM : une société française qui protège, fiabilise et expose le numérique des organisations, à La Réunion comme dans l'Hexagone. Souveraineté et proximité.",
})

const fil = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Protéger',
    description:
      'Votre cyber : mesurer le risque, le réduire, le prouver. Rester assurable, tenir vos obligations.',
  },
  {
    icon: 'i-lucide-database',
    title: 'Fiabiliser',
    description:
      'Vos données : des flux maîtrisés et traçables, sur lesquels vous pouvez vraiment décider.',
  },
  {
    icon: 'i-lucide-globe',
    title: 'Exposer',
    description:
      'Votre présence en ligne : un site rapide, accessible et soigné, qui vous représente.',
  },
]

const principes = [
  {
    icon: 'i-lucide-puzzle',
    title: 'Sur votre existant',
    description: "On se branche sur vos outils, on ne lance pas un chantier de remplacement.",
  },
  {
    icon: 'i-lucide-scale',
    title: 'Franc-jeu',
    description: 'On dit ce qu\'on fait et ce qu\'on ne fait pas. Pas de survente, pas de FUD.',
  },
  {
    icon: 'i-lucide-receipt',
    title: 'Prévisible',
    description: 'Des forfaits clairs plutôt qu\'une facture à l\'usage qui dérape.',
  },
  {
    icon: 'i-lucide-server',
    title: 'Souverain',
    description: "Hébergement en France ou dans l'UE, données maîtrisées. Aucune dépendance lointaine.",
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="À propos"
      title="Un numérique maîtrisé, en France"
      description="CHOM est une société française. On part d'une idée simple : à La Réunion comme en métropole, les organisations méritent le même niveau d'exigence sur leur numérique, sans dépendre de prestataires lointains qui ne connaissent ni leur métier ni leurs contraintes."
    />

    <UPageSection
      title="Protéger, fiabiliser, exposer"
      description="Nos trois métiers ne sont pas un catalogue. C'est le même numérique, vu sous trois angles. Le même monde au bout du fil, et de la cohérence quand vos sujets se croisent : sécuriser une plateforme de données, ou outiller un site qui collecte des contacts."
      :features="fil"
    />

    <UPageSection
      title="Ce qui ne change pas, quel que soit le métier"
      :features="principes"
    />

    <UPageCTA
      title="Envie d'en parler ?"
      description="Un devis chiffré, ou simplement une première rencontre pour défricher votre besoin."
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
