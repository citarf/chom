<script setup lang="ts">
useSeoMeta({
  title: "CHOM — Cyber, data & web pour La Réunion et l'Hexagone",
  description:
    "CHOM, société française : pilotage du risque cyber, plateformes de données et sites vitrine — à La Réunion comme en métropole, sur votre existant, en hébergement souverain.",
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
      title="Cyber, data & web — La Réunion & Hexagone"
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    >
      <template #description>
        CHOM est une société française qui aide les organisations — à La Réunion comme en
        métropole — à maîtriser leur risque cyber, à tirer de la valeur de leurs données et à
        exister en ligne. Sur votre existant, en hébergement souverain.
        <span class="block mt-3 text-sm text-muted">
          Réponse sous 48 h ouvrées · échange sans engagement · interlocuteur unique.
        </span>
      </template>
    </UPageHero>

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
      description="Décrivez votre besoin et recevez un devis sans jargon, ou prenez une première rencontre pour défricher — sans engagement, réponse sous 48 h ouvrées."
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
