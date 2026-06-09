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
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
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
        icon="i-lucide-info"
        title="Une expérience à l'échelle"
        description="Notre approche s'appuie sur des chantiers réels de gouvernance et de valorisation de données météorologiques — patrimoine de l'ordre du téraoctet, des milliers de tables, des centaines de pipelines — et sur des projets data d'intérêt général (Data For Good)."
      />
    </UPageSection>

    <UPageCTA
      title="Un patrimoine de données à fiabiliser ou à valoriser ?"
      description="Parlons-en : on cadre le besoin et on propose un devis adapté à votre maturité."
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
    />
  </div>
</template>
