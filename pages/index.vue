<script setup lang="ts">
useSeoMeta({
  title: "CHOM — Cyber, data & web pour La Réunion et l’Hexagone",
  description:
    "CHOM, société française : pilotage du risque cyber, plateformes de données et sites vitrine — à La Réunion comme en métropole, sur votre existant, en hébergement souverain.",
})

const services = [
  {
    num: '01',
    icon: 'i-lucide-shield-check',
    title: 'Cybersécurité',
    description:
      'Mesurer votre risque, le réduire, le prouver. De la sensibilisation des équipes à la conformité NIS2 ou DORA.',
    to: '/cyber',
  },
  {
    num: '02',
    icon: 'i-lucide-database',
    title: 'Data-platform',
    description:
      'Des données sur lesquelles on peut enfin compter : des flux qui tiennent, traçables, et qui parlent à ceux qui décident.',
    to: '/data',
  },
  {
    num: '03',
    icon: 'i-lucide-layout-template',
    title: 'Sites vitrine',
    description:
      'Des sites rapides, accessibles et bien référencés. Celui que vous parcourez en est un.',
    to: '/sites',
  },
]

const trust = [
  { label: 'Hébergement souverain', detail: 'France / UE, RGPD' },
  { label: 'La Réunion & Hexagone', detail: 'un seul interlocuteur' },
  { label: 'Sur votre existant', detail: 'pas de remplacement' },
]
</script>

<template>
  <div>
    <!-- Hero asymétrique, aligné à gauche -->
    <UContainer class="py-20 sm:py-28 lg:py-32">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div class="lg:col-span-7">
          <h1 class="font-display text-4xl sm:text-6xl font-medium tracking-tight text-highlighted text-pretty">
            Cyber, data &amp; web pour La Réunion et l’Hexagone
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-muted max-w-xl text-pretty">
            Société française. On sécurise votre informatique, on fiabilise vos données et on
            soigne votre présence en ligne — à partir de vos outils actuels, hébergé en Europe.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton label="Demander un devis" to="/devis" icon="i-lucide-file-text" size="lg" />
            <UButton
              label="Première rencontre"
              to="/devis?objet=rencontre"
              icon="i-lucide-calendar"
              color="neutral"
              variant="subtle"
              size="lg"
            />
          </div>
          <p class="mt-4 text-sm text-muted">
            Réponse sous 48 h ouvrées · sans engagement · interlocuteur unique.
          </p>
        </div>

        <div class="lg:col-span-5 lg:border-l lg:border-default lg:pl-12">
          <dl class="space-y-5">
            <div v-for="t in trust" :key="t.label" class="flex flex-col">
              <dt class="font-display font-semibold text-default">{{ t.label }}</dt>
              <dd class="text-sm text-muted">{{ t.detail }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </UContainer>

    <!-- Lignes de service en index éditorial (pas de grille de cartes) -->
    <UContainer class="pb-20 sm:pb-28">
      <p class="text-sm font-medium text-muted mb-2">Nos métiers</p>
      <div class="border-t border-default">
        <NuxtLink
          v-for="s in services"
          :key="s.to"
          :to="s.to"
          class="group block border-b border-default py-8 sm:py-10 transition-colors hover:bg-elevated/40"
        >
          <div class="grid sm:grid-cols-12 gap-3 sm:gap-8 items-baseline">
            <span class="sm:col-span-1 font-mono text-sm text-primary">{{ s.num }}</span>
            <h2 class="sm:col-span-4 font-display text-2xl font-medium text-highlighted flex items-center gap-2">
              <UIcon :name="s.icon" class="size-5 text-primary shrink-0" />
              {{ s.title }}
            </h2>
            <p class="sm:col-span-5 text-muted text-pretty">{{ s.description }}</p>
            <span class="sm:col-span-2 sm:text-right text-sm font-medium text-primary inline-flex items-center gap-1 sm:justify-end group-hover:gap-2 transition-[gap]">
              En savoir plus
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </UContainer>

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
