<script setup lang="ts">
useSeoMeta({
  title: 'CHOM — Cyber, data & web à La Réunion',
  description:
    "CHOM SASU : cabinet réunionnais. Pilotage du risque cyber, plateformes de données et sites vitrine — sur votre existant, en hébergement souverain.",
})

const services = [
  {
    icon: 'i-lucide-shield-check',
    title: 'Cybersécurité',
    description:
      'Pilotage du risque cyber et protection des PME — de la sensibilisation managée à la conformité NIS2 / DORA.',
    to: '/cyber',
    points: [
      'Vue unifiée et score de risque explicable',
      'Sensibilisation, hygiène MFA, attestation',
      'Cadres NIS2 (entités essentielles) & DORA (finance)',
    ],
  },
  {
    icon: 'i-lucide-database',
    title: 'Data-platform',
    description:
      'Ingénierie, gouvernance et valorisation de vos données — pipelines fiables, traçabilité, restitution.',
    to: '/data',
    points: [
      'Pipelines, intégration, qualité',
      'Lineage, catalogue, contrats de données',
      'Valorisation : dataviz & cartographie',
    ],
  },
  {
    icon: 'i-lucide-layout-template',
    title: 'Sites vitrine',
    description:
      'Sites web rapides, accessibles et bien référencés — comme celui que vous parcourez.',
    to: '/sites',
    points: [
      'Performances et SEO soignés',
      'Accessibilité & mode sombre natifs',
      'Formulaires connectés à vos outils',
    ],
  },
]
</script>

<template>
  <div>
    <UPageHero
      title="Cyber, data & web — depuis La Réunion"
      description="CHOM est un cabinet réunionnais qui aide les organisations à maîtriser leur risque cyber, à tirer de la valeur de leurs données et à exister en ligne. Sur votre existant, en hébergement souverain."
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
        { label: 'Découvrir nos services', to: '#services', color: 'neutral', variant: 'subtle', trailingIcon: 'i-lucide-arrow-down' },
      ]"
    />

    <UPageSection
      id="services"
      headline="Protéger · fiabiliser · exposer"
      title="Trois métiers, un seul numérique maîtrisé"
      description="Protéger votre cyber, fiabiliser vos données, exposer votre activité en ligne : trois faces d'un même fil rouge. Un seul interlocuteur, et la cohérence quand vos besoins se recoupent."
    >
      <UPageGrid>
        <ServiceCard
          v-for="service in services"
          :key="service.to"
          v-bind="service"
        />
      </UPageGrid>
    </UPageSection>

    <TrustBand />

    <UPageCTA
      title="Un projet, une obligation réglementaire, une idée ?"
      description="Décrivez votre besoin : nous vous répondons avec un devis qualifié, sans jargon."
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
    />
  </div>
</template>
