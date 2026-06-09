<script setup lang="ts">
useSeoMeta({
  title: 'Cybersécurité — CHOM',
  description:
    'Pilotage du risque cyber (NIS2 / DORA) et protection des PME : vue unifiée, score explicable, sensibilisation managée, attestation supply chain et assurance.',
})

// Volet KAITAIN — pilotage du risque (entités assujetties NIS2/DORA).
const pilotage = [
  {
    icon: 'i-lucide-layers',
    title: 'Vue unifiée',
    description:
      "Identités, comptes, devices, vulnérabilités, signaux humains et EDR consolidés et réconciliés — fini le recoupement manuel entre 8 outils.",
  },
  {
    icon: 'i-lucide-gauge',
    title: 'Score de risque explicable',
    description:
      "Un score sur 3 dimensions (humain, technique, organisation), versionné et traçable — défendable en audit, pas une boîte noire.",
  },
  {
    icon: 'i-lucide-user-x',
    title: 'Angles morts détectés',
    description:
      'Actifs orphelins, départs encore provisionnés, écarts à votre politique de criticité : les risques que personne ne voit.',
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'Backlog priorisé',
    description:
      "Budget limité ? La remédiation est ordonnée par impact réel — vous savez quoi corriger en premier.",
  },
  {
    icon: 'i-lucide-monitor-dot',
    title: 'Restitution pour la direction',
    description:
      'Dashboard exécutif et heatmap géographique pour briefer le COMEX / CA — la responsabilité de l\'organe de direction (NIS2 art. 20).',
  },
  {
    icon: 'i-lucide-plug',
    title: 'Sur votre existant',
    description:
      'Connecteurs agnostiques : on se branche sur votre stack, sans la remplacer ni lancer un projet de 12 mois.',
  },
]

// Volet Mentat — service cyber PME.
const pme = [
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Sensibilisation managée',
    description:
      'Phishing simulé et formation pilotés et reportés pour vous : vous gardez votre outil d\'envoi, nous transformons l\'export en décisions.',
  },
  {
    icon: 'i-lucide-shield',
    title: 'Hygiène continue',
    description:
      'Suivi du MFA, des comptes orphelins, des départs non déprovisionnés et des dérives — la base qui tient dans la durée.',
  },
  {
    icon: 'i-lucide-file-check',
    title: 'Attestation présentable',
    description:
      'Une posture à montrer à votre donneur d\'ordre (supply chain) et à votre assureur, pour garder vos marchés et rester couvert.',
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Cybersécurité"
      title="Maîtrisez votre risque cyber — et prouvez-le"
      description="Vous avez plusieurs outils de sécurité mais aucune réponse simple quand la direction demande « où en est notre risque, et comment le prouve-t-on ? ». CHOM consolide, score, priorise et prouve — à partir de ce que vous avez déjà."
      :links="[
        { label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' },
      ]"
    />

    <UPageSection
      headline="Pour les entités assujetties · NIS2 & DORA"
      title="Le pilotage du risque (plateforme KAITAIN)"
      description="Pour les organisations soumises à NIS2 (santé, collectivités, énergie/eau/transport, télécoms) ou DORA (assureurs, mutuelles, banques) : une tour de contrôle qui relie chaque capacité à une obligation."
      :features="pilotage"
    />

    <UPageSection
      headline="Pour les PME · service managé"
      title="Le forfait essentiel cyber PME (Mentat)"
      description="La PME n'est presque jamais assujettie NIS2 — mais elle doit rester assurable, garder ses marchés face à des donneurs d'ordre exigeants, et survivre à une attaque. Un seul forfait, un seul interlocuteur."
      :features="pme"
      orientation="horizontal"
      reverse
    >
      <UPageCard variant="subtle">
        <div class="space-y-3">
          <p class="font-semibold text-highlighted">Le déclencheur : un diagnostic à risque nul</p>
          <p class="text-sm text-muted">
            Confiez-nous l'export d'une campagne déjà réalisée, ou laissez-nous regarder votre
            posture : sous quelques jours, vous recevez un rapport clair — celui que vous n'avez
            jamais pu produire. Sans engagement, souvent subventionnable.
          </p>
        </div>
      </UPageCard>
    </UPageSection>

    <UPageCTA
      title="Une obligation NIS2/DORA, une exigence client ou assureur ?"
      description="On évalue votre situation et on vous propose le bon niveau d'accompagnement."
      :links="[{ label: 'Demander un devis', to: '/devis', icon: 'i-lucide-file-text' }]"
    />
  </div>
</template>
