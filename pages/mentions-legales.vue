<script setup lang="ts">
const c = useCompany()

useSeoMeta({
  title: 'Mentions légales — CHOM',
  description: 'Mentions légales du site de CHOM SASU.',
})
</script>

<template>
  <UContainer class="py-12 sm:py-16 max-w-3xl">
    <h1 class="text-3xl font-bold text-highlighted mb-8">Mentions légales</h1>

    <div class="space-y-8 text-default">
      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Éditeur du site</h2>
        <p class="text-muted">
          {{ c.legalName }} — {{ c.form }}<br>
          Capital social : {{ c.capital }}<br>
          {{ c.rcs }}<br>
          TVA : {{ c.tva }}<br>
          Siège : {{ c.siege }}<br>
          Directeur de la publication : {{ c.director }}<br>
          Contact :
          <ULink :to="`mailto:${c.email}`" class="text-primary">{{ c.email }}</ULink>
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Hébergement</h2>
        <p class="text-muted">
          {{ c.host.name }}<br>
          {{ c.host.details }}
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Propriété intellectuelle</h2>
        <p class="text-muted">
          L'ensemble des contenus de ce site (textes, éléments graphiques, code) est, sauf
          mention contraire, la propriété de {{ c.legalName }}. Toute reproduction sans
          autorisation préalable est interdite.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Données personnelles</h2>
        <p class="text-muted">
          Le traitement des données collectées via ce site est décrit dans notre
          <ULink to="/confidentialite" class="text-primary">politique de confidentialité</ULink>.
        </p>
      </section>
    </div>
  </UContainer>
</template>
