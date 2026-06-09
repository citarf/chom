<script setup lang="ts">
useSeoMeta({
  title: 'Data-platform — CHOM',
  description:
    'Ingénierie, gouvernance et valorisation de données : pipelines fiables, lineage et catalogue, contrats de données, dataviz et cartographie. Hébergement souverain.',
})

const engineering = [
  {
    icon: 'i-lucide-workflow',
    title: 'Pipelines fiables',
    description:
      'Ingestion, intégration et orchestration de vos flux — du cron legacy aux orchestrateurs modernes, sans tout réécrire.',
  },
  {
    icon: 'i-lucide-database-zap',
    title: 'Socle adapté',
    description:
      'Le bon stockage pour le bon usage : relationnel, séries temporelles (TimescaleDB), graphe — selon vos données, pas selon la mode.',
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Qualité & réconciliation',
    description:
      'Détection des doublons, fantômes et orphelins ; rapprochement multi-source pour une vérité unique sur laquelle décider.',
  },
]

const governance = [
  {
    icon: 'i-lucide-git-branch',
    title: 'Lineage de bout en bout',
    description:
      'Traçabilité des flux avec OpenLineage / Marquez : d\'où vient chaque donnée, ce qui casse si on change une source.',
  },
  {
    icon: 'i-lucide-book-marked',
    title: 'Catalogue de données',
    description:
      'Un inventaire vivant des jeux de données, propriétaires et usages — pour arrêter de chercher « qui sait où est quoi ».',
  },
  {
    icon: 'i-lucide-file-signature',
    title: 'Contrats de données (ODCS)',
    description:
      'Des contrats par dataset qui figent le schéma et les attentes : les consommateurs ne se réveillent plus avec une colonne disparue.',
  },
]

const valorisation = [
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Tableaux de bord',
    description:
      'Restitution claire et actionnable : vos indicateurs là où vos équipes décident, pas dans un tableur oublié.',
  },
  {
    icon: 'i-lucide-map',
    title: 'Cartographie',
    description:
      'Visualisation géographique de vos données (territoires, sites, capteurs) — voir « où », pas lire des lignes.',
  },
  {
    icon: 'i-lucide-share-2',
    title: 'Ouverture & partage',
    description:
      'Exposition maîtrisée : API, exports, open data — partager sans perdre le contrôle ni la gouvernance.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Data-platform"
      title="Vos données, fiables, gouvernées et utiles"
      description="Beaucoup d'organisations accumulent des données sans pouvoir y faire confiance ni les exploiter. CHOM construit le socle qui manque : des pipelines fiables, une gouvernance qui rend la donnée traçable, et une restitution qui éclaire les décisions."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=data', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=data&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />

    <UPageSection
      headline="Ingénierie"
      title="Construire un socle de données qui tient"
      description="On part de votre existant — bases hétérogènes, scripts historiques, exports — pour en faire un flux maîtrisé."
      :features="engineering"
    />

    <UPageSection
      headline="Gouvernance"
      title="Rendre la donnée traçable et fiable"
      description="La gouvernance n'est pas de la paperasse : c'est savoir d'où vient une donnée, qui en dépend, et ce qu'on garantit à ceux qui la consomment."
      :features="governance"
    />

    <UPageSection
      headline="Valorisation"
      title="Tirer de la valeur de vos données"
      description="Une fois la donnée fiable, on la met au service de la décision et de vos publics."
      :features="valorisation"
    />

    <UPageSection orientation="horizontal" :ui="{ container: 'py-8 sm:py-12' }">
      <UPageCard
        variant="subtle"
        icon="i-lucide-compass"
        title="Une méthode, pas des promesses"
        description="Notre approche vient de chantiers réels : remettre d'aplomb des systèmes de données hétérogènes et volumineux, y instaurer de la traçabilité, et faire parler la donnée — y compris sur des projets d'intérêt général. On applique cette rigueur à votre échelle, sans jargon ni sur-ingénierie."
      />
    </UPageSection>

    <UPageCTA
      title="Un patrimoine de données à fiabiliser ou à valoriser ?"
      description="On cadre le besoin avec vous. Demandez un devis, ou commençons par une première rencontre — sans engagement."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=data', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=data&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
