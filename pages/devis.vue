<script setup lang="ts">
const route = useRoute()
const isRencontre = computed(() => route.query.objet === 'rencontre')

useSeoMeta({
  title: 'Demander un devis ou une rencontre — CHOM',
  description:
    'Décrivez votre besoin en cyber, data ou web : CHOM vous répond avec un devis qualifié, ou lors d’une première rencontre sans engagement.',
})

const reassurance = [
  { icon: 'i-lucide-clock', text: 'Réponse sous 48 h ouvrées' },
  { icon: 'i-lucide-handshake', text: 'Sans engagement' },
  { icon: 'i-lucide-map-pin', text: 'Cabinet local, à votre fuseau' },
]

const steps = [
  {
    icon: 'i-lucide-pencil-line',
    title: 'Vous décrivez',
    description: 'Quelques champs : qui vous êtes, le ou les métiers concernés, votre besoin.',
  },
  {
    icon: 'i-lucide-phone-call',
    title: 'On échange',
    description: 'Un court échange pour cadrer le périmètre, les contraintes et l\'échéance.',
  },
  {
    icon: 'i-lucide-file-text',
    title: 'Vous recevez un devis',
    description: 'Une proposition claire et chiffrée, adaptée à votre situation — sans engagement.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      :headline="isRencontre ? 'Première rencontre' : 'Devis'"
      :title="isRencontre ? 'Réserver une première rencontre' : 'Demander un devis qualifié'"
      :description="isRencontre
        ? 'Pas encore prêt pour un devis ? Échangeons d’abord. Dites-nous l’essentiel, on cale un premier rendez-vous — sans engagement.'
        : 'Dites-nous l’essentiel. On revient vers vous rapidement avec une proposition claire — cyber, data, web, ou une combinaison des trois.'"
    />

    <UContainer class="pb-16 sm:pb-24">
      <div class="grid lg:grid-cols-5 gap-10 lg:gap-16">
        <div class="lg:col-span-3">
          <UPageCard>
            <DevisForm />
          </UPageCard>
        </div>

        <aside class="lg:col-span-2 space-y-8">
          <ul class="space-y-3">
            <li
              v-for="r in reassurance"
              :key="r.text"
              class="flex items-center gap-3 text-sm text-default"
            >
              <UIcon :name="r.icon" class="size-5 text-primary shrink-0" />
              {{ r.text }}
            </li>
          </ul>

          <div>
            <h2 class="font-semibold text-highlighted mb-4">Comment ça se passe</h2>
            <ol class="space-y-5">
              <li v-for="(step, i) in steps" :key="step.title" class="flex gap-3">
                <div class="flex items-center justify-center size-9 rounded-full bg-elevated text-primary shrink-0">
                  <UIcon :name="step.icon" class="size-5" />
                </div>
                <div>
                  <p class="font-medium text-default">{{ i + 1 }}. {{ step.title }}</p>
                  <p class="text-sm text-muted">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>

          <UPageCard variant="subtle" icon="i-lucide-shield" title="Vos données">
            <p class="text-sm text-muted">
              Vos informations servent uniquement à traiter votre demande. Hébergement souverain
              (France / UE), aucune revente.
            </p>
          </UPageCard>
        </aside>
      </div>
    </UContainer>
  </div>
</template>
