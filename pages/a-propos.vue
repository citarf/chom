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
      'La cybersécurité : maîtriser et prouver son risque, rester assurable, tenir ses obligations.',
  },
  {
    icon: 'i-lucide-database',
    title: 'Fiabiliser',
    description:
      'La donnée : des flux maîtrisés, traçables et gouvernés, sur lesquels on peut décider.',
  },
  {
    icon: 'i-lucide-globe',
    title: 'Exposer',
    description:
      'Le web : une présence en ligne rapide, accessible et soignée, qui vous représente.',
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
    description: 'Hébergement en France / UE, données maîtrisées — pas de dépendance lointaine.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="À propos"
      title="Un numérique maîtrisé, en France"
      description="CHOM est une société française. Notre conviction : les organisations — à La Réunion comme en métropole — méritent le même niveau d'exigence sur leur numérique, sans dépendre de prestataires lointains qui ne connaissent ni leur contexte ni leurs contraintes."
    />

    <UPageSection
      headline="Le fil rouge"
      title="Protéger, fiabiliser, exposer"
      description="Nos trois métiers ne sont pas un catalogue disparate : ce sont trois faces d'un même numérique maîtrisé. Un même cabinet, une même exigence, et la cohérence quand vos besoins se recoupent — par exemple sécuriser une plateforme de données ou outiller un site de collecte."
      :features="fil"
    />

    <UPageSection
      headline="Notre façon de travailler"
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
