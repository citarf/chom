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
      'Mesurer votre risque, le réduire, le prouver. De la sensibilisation des équipes à la conformité NIS2 ou DORA.',
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
      'Des données sur lesquelles on peut enfin compter : des flux qui tiennent, traçables, et qui parlent à ceux qui décident.',
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
      'Des sites rapides, accessibles et bien référencés. Celui que vous parcourez en est un.',
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
        Société française, à La Réunion comme en métropole. On sécurise votre informatique,
        on fiabilise vos données et on soigne votre présence en ligne. À partir de vos outils
        actuels, hébergé en Europe.
        <span class="block mt-3 text-sm text-muted">
          Réponse sous 48 h ouvrées · échange sans engagement · interlocuteur unique.
        </span>
      </template>
    </UPageHero>

    <UPageSection
      id="services"
      headline="Protéger · fiabiliser · exposer"
      title="Trois métiers, un seul interlocuteur"
      description="Protéger, fiabiliser, exposer : trois facettes du même numérique. L'avantage d'avoir le même monde au bout du fil quand vos sujets se recoupent."
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
      title="Un projet, une échéance réglementaire, ou juste une question ?"
      description="Décrivez votre besoin, on vous répond avec un devis sans jargon. Ou prenez une première rencontre pour défricher. Sans engagement, réponse sous 48 h ouvrées."
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
