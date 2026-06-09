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
    title: 'Tout au même endroit',
    description:
      "Identités, comptes, postes, vulnérabilités, alertes : rapprochés automatiquement. Vous arrêtez de recouper six exports à la main.",
  },
  {
    icon: 'i-lucide-gauge',
    title: 'Un score qui se justifie',
    description:
      "Trois axes (humain, technique, organisation), chaque point traçable et versionné. De quoi tenir face à un auditeur.",
  },
  {
    icon: 'i-lucide-user-x',
    title: 'Les angles morts',
    description:
      "Comptes sans propriétaire, départs jamais déprovisionnés, écarts à votre politique. On remonte ce que personne ne surveille.",
  },
  {
    icon: 'i-lucide-list-checks',
    title: 'Quoi corriger en premier',
    description:
      "Chaque action classée par le risque qu'elle fait baisser. Petit budget : vous commencez par ce qui compte.",
  },
  {
    icon: 'i-lucide-monitor-dot',
    title: 'De quoi briefer le COMEX',
    description:
      "Une vue d'ensemble et une carte des sites, lisibles en cinq minutes. C'est ce que NIS2 attend de votre direction (art. 20).",
  },
  {
    icon: 'i-lucide-plug',
    title: 'Branché sur votre stack',
    description:
      "On se connecte à vos outils actuels. Pas de migration, pas de projet qui s'étale sur un an.",
  },
]

// Volet Mentat — service cyber PME.
const pme = [
  {
    icon: 'i-lucide-graduation-cap',
    title: 'Vos campagnes, pilotées',
    description:
      "Phishing et formation, gérés à votre place. Vous gardez votre outil d'envoi, on vous rend des décisions, pas un export brut.",
  },
  {
    icon: 'i-lucide-shield',
    title: "L'hygiène, en continu",
    description:
      "Qui n'a pas le MFA, quels comptes traînent après un départ, où ça dérive. Le suivi de base, mais fait pour de vrai.",
  },
  {
    icon: 'i-lucide-file-check',
    title: 'Une preuve à montrer',
    description:
      "Une attestation de posture pour votre donneur d'ordre et votre assureur. Souvent ce qui décide du renouvellement d'un marché.",
  },
]
</script>

<template>
  <div>
    <UPageHero
      headline="Cybersécurité"
      title="Maîtrisez votre risque cyber. Et prouvez-le."
      description="Vous avez des outils de sécurité, mais pas de réponse claire le jour où la direction demande « où en est notre risque, et comment le prouve-t-on ? ». On répond à cette question, à partir de ce que vous avez déjà."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=cyber', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=cyber&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />

    <UPageSection
      headline="Entités essentielles & secteur financier"
      title="Le pilotage du risque, avec KAITAIN"
      description="Vous relevez de NIS2 (santé, collectivités, énergie, eau, transport, télécoms) ou de DORA (assureurs, mutuelles, banques) ? KAITAIN rattache chaque capacité au bon cadre. NIS2 pour les uns, DORA pour les autres. On ne confond pas les deux."
      :features="pilotage"
    />

    <UPageSection
      title="Ce que voit votre RSSI"
      description="De vraies captures de la plateforme. Pas des illustrations de stock."
      :ui="{ container: 'py-12 sm:py-16' }"
    >
      <div class="space-y-10">
        <ProductShot
          src="/screens/kaitain-dashboard.jpg"
          alt="Tableau de bord exécutif KAITAIN — score global, MFA, clic phishing, top risques"
          title="Tour de contrôle cyber"
          pain="Le score et les chiffres que votre direction réclame, prêts à présenter au COMEX. C'est ce que NIS2 attend de l'organe de direction (art. 20)."
          img-class="max-h-[460px] object-cover object-top"
        />
        <div class="grid md:grid-cols-2 gap-10">
          <ProductShot
            src="/screens/kaitain-identites.jpg"
            alt="Inventaire des identités KAITAIN avec sources, MFA et score par personne"
            title="Chaque identité, son score"
            pain="Toutes vos sources réconciliées, le MFA et le score visibles d'un coup. La fin du tableur recoupé à la main."
          />
          <ProductShot
            src="/screens/kaitain-remediation.jpg"
            alt="Backlog de remédiation KAITAIN priorisé par réduction de risque"
            title="Les actions, dans le bon ordre"
            pain="Classées par le risque qu'elles font baisser. Vous savez par quoi commencer, sans y passer la journée."
          />
        </div>
      </div>
    </UPageSection>

    <UPageSection
      headline="Pour les PME · service managé"
      title="Le forfait essentiel cyber PME"
      description="Une PME est rarement soumise à NIS2. Mais elle doit rester assurable, garder ses marchés quand un donneur d'ordre devient exigeant, et tenir le jour où ça tombe. Un forfait, un interlocuteur."
      :features="pme"
      orientation="horizontal"
      reverse
    >
      <div class="space-y-6">
        <ProductShot
          src="/screens/mentat-campagnes.jpg"
          alt="Pilotage des campagnes de sensibilisation dans CHOM Mentat"
          title="On pilote, vous décidez"
          pain="Sensibilisation et phishing simulé suivis pour vous. Vous gardez votre outil d'envoi, on en tire un plan d'action."
        />
        <UPageCard variant="subtle">
          <div class="space-y-3">
            <p class="font-semibold text-highlighted">Pour commencer : un diagnostic à risque nul</p>
            <p class="text-sm text-muted">
              Donnez-nous l'export d'une campagne déjà faite, ou laissez-nous regarder votre
              posture. Sous quelques jours, vous avez un rapport clair, celui que vous n'avez
              jamais réussi à sortir. Sans engagement, souvent subventionnable.
            </p>
          </div>
        </UPageCard>
      </div>
    </UPageSection>

    <UPageCTA
      title="Une échéance NIS2 ou DORA, un client ou un assureur qui demande des preuves ?"
      description="Commencez par un diagnostic à risque nul, ou prenez une première rencontre pour situer votre besoin. Sans engagement."
      :links="[
        { label: 'Demander un devis', to: '/devis?ligne=cyber', icon: 'i-lucide-file-text' },
        { label: 'Première rencontre', to: '/devis?ligne=cyber&objet=rencontre', color: 'neutral', variant: 'subtle', icon: 'i-lucide-calendar' },
      ]"
    />
  </div>
</template>
