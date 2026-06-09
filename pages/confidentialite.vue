<script setup lang="ts">
const c = useCompany()

useSeoMeta({
  title: 'Politique de confidentialité — CHOM',
  description:
    'Comment CHOM SASU traite les données personnelles collectées via son formulaire de contact.',
})
</script>

<template>
  <UContainer class="py-12 sm:py-16 max-w-3xl">
    <h1 class="text-3xl font-bold text-highlighted mb-8">Politique de confidentialité</h1>

    <div class="space-y-8 text-default">
      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Responsable du traitement</h2>
        <p class="text-muted">
          {{ c.legalName }} ({{ c.siege }}). Pour toute question relative à vos données :
          <ULink :to="`mailto:${c.email}`" class="text-primary">{{ c.email }}</ULink>.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Données collectées</h2>
        <p class="text-muted">
          Via le formulaire de demande (devis ou première rencontre) : nom, organisation,
          adresse email, ligne(s) de service concernées, échéance et le contenu de votre message.
          Aucune donnée n’est collectée à votre insu, et nous n’utilisons pas de cookies de
          mesure d’audience ni de traçage. Seule une préférence d’affichage (thème clair/sombre)
          est conservée localement dans votre navigateur.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Finalité et base légale</h2>
        <p class="text-muted">
          Ces données servent uniquement à traiter votre demande et à vous recontacter. La base
          légale est l’exécution de mesures précontractuelles prises à votre demande (RGPD
          art. 6.1.b) et, le cas échéant, notre intérêt légitime à répondre à une sollicitation
          professionnelle (art. 6.1.f).
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Destinataires</h2>
        <p class="text-muted">
          Vos informations sont destinées aux seules personnes habilitées de {{ c.legalName }}.
          Elles peuvent transiter par un outil de réception des demandes (messagerie ou service
          de notification) opéré pour notre compte, sans réutilisation à d’autres fins.
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Hébergement et durée de conservation</h2>
        <p class="text-muted">
          Les données sont hébergées au sein de l’Union européenne. Elles sont conservées le
          temps nécessaire au traitement de votre demande, puis archivées ou supprimées dans un
          délai raisonnable (au plus 3 ans à compter du dernier contact à des fins de prospection).
        </p>
      </section>

      <section class="space-y-2">
        <h2 class="text-lg font-semibold text-highlighted">Vos droits</h2>
        <p class="text-muted">
          Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et
          d’opposition au traitement de vos données. Pour les exercer, écrivez à
          <ULink :to="`mailto:${c.email}`" class="text-primary">{{ c.email }}</ULink>. Vous
          pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).
        </p>
      </section>
    </div>
  </UContainer>
</template>
