<script setup lang="ts">
useSeoMeta({
  title: 'Data-platform — CHOM',
  description:
    'Ingénierie, gouvernance et valorisation de données : pipelines fiables, lineage et catalogue, contrats de données, dataviz et cartographie. Hébergement souverain.',
})

const engineering = [
  {
    icon: 'i-lucide-workflow',
    title: 'Des flux qui tiennent',
    description:
      "Ingestion, intégration, orchestration. Du vieux cron aux orchestrateurs modernes, sans tout réécrire.",
  },
  {
    icon: 'i-lucide-database-zap',
    title: 'Le bon socle',
    description:
      "Relationnel, séries temporelles, graphe : on choisit selon vos données, pas selon la mode du moment.",
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Une seule vérité',
    description:
      "Doublons, fantômes, orphelins repérés et rapprochés. Vous décidez sur une donnée propre, pas sur trois versions.",
  },
]

const governance = [
  {
    icon: 'i-lucide-git-branch',
    title: 'Savoir d’où ça vient',
    description:
      "Le lineage (OpenLineage / Marquez) trace chaque donnée et vous dit ce qui casse si vous touchez une source.",
  },
  {
    icon: 'i-lucide-book-marked',
    title: 'Un catalogue vivant',
    description:
      "Vos jeux de données, leurs propriétaires, leurs usages. La fin du « c'est qui qui sait où est quoi ? ».",
  },
  {
    icon: 'i-lucide-file-signature',
    title: 'Des contrats de données',
    description:
      "Un contrat par dataset fige le schéma et les attentes. Personne ne se réveille avec une colonne disparue.",
  },
]

const valorisation = [
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Des tableaux de bord',
    description:
      "Vos indicateurs là où vos équipes décident, pas perdus dans un tableur que plus personne n'ouvre.",
  },
  {
    icon: 'i-lucide-map',
    title: 'Sur une carte',
    description:
      "Territoires, sites, capteurs : on montre « où », au lieu de vous faire lire des lignes.",
  },
  {
    icon: 'i-lucide-share-2',
    title: 'Partagé, sous contrôle',
    description:
      "API, exports, open data. Vous ouvrez vos données sans en perdre la maîtrise.",
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Data-platform"
      title="Des données auxquelles vous pouvez vous fier"
      description="On accumule des données partout, sans toujours pouvoir s'y fier ni s'en servir. On construit le socle qui manque : des flux qui tiennent, une donnée traçable, et des restitutions qui aident vraiment à décider."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=data', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=data&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />

    <UPageSection
      title="Construire un socle qui tient"
      description="On part de ce que vous avez : bases éparpillées, scripts d'époque, exports manuels. On en fait un flux qu'on maîtrise."
    >
      <FeatureList :items="engineering" />
    </UPageSection>

    <UPageSection
      title="Reprendre la main sur la donnée"
      description="La gouvernance, ce n'est pas de la paperasse. C'est savoir d'où vient une donnée, qui s'en sert, et ce qu'on promet à ceux qui la consomment."
    >
      <FeatureList :items="governance" />
    </UPageSection>

    <UPageSection
      title="Les faire travailler"
      description="Une fois la donnée propre, on la met au travail : pour vos décisions en interne, et pour vos publics."
    >
      <FeatureList :items="valorisation" />
    </UPageSection>

    <UPageSection orientation="horizontal" :ui="{ container: 'py-8 sm:py-12' }">
      <UPageCard
        variant="subtle"
        icon="i-lucide-compass"
        title="Une méthode, pas des promesses"
        description="Notre approche vient du terrain : remettre d'aplomb des systèmes lourds et hétérogènes, y mettre de la traçabilité, faire enfin parler les chiffres. On l'a fait, y compris sur des projets d'intérêt général. On l'applique à votre échelle, sans jargon ni sur-ingénierie."
      />
    </UPageSection>

    <UPageCTA
      title="Des données à fiabiliser ou à exploiter ?"
      description="On cadre le besoin ensemble. Demandez un devis, ou commençons par une première rencontre. Sans engagement."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=data', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=data&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
