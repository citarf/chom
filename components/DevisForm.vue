<script setup lang="ts">
import * as v from 'valibot'
import type { FormSubmitEvent } from '@nuxt/ui'

type ServiceLine = 'cyber' | 'data' | 'sites'
type Echeance = 'immediate' | 'trimestre' | 'semestre' | 'exploratoire'
type RequestType = 'devis' | 'rencontre'

// Schéma UX (côté client) — miroir des règles du domaine. La validation
// faisant autorité reste server-side (/api/devis renvoie 422 + fieldErrors).
// Le message n'est exigé que pour un devis ; facultatif pour une rencontre.
const schema = v.pipe(
  v.object({
    name: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre nom.')),
    organisation: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre organisation.')),
    email: v.pipe(v.string(), v.trim(), v.email('Adresse email invalide.')),
    serviceLines: v.pipe(
      v.array(v.picklist(['cyber', 'data', 'sites'] as const)),
      v.minLength(1, 'Choisissez au moins une ligne de service.'),
    ),
    message: v.pipe(v.string(), v.trim()),
    echeance: v.optional(v.picklist(['immediate', 'trimestre', 'semestre', 'exploratoire'] as const)),
    requestType: v.picklist(['devis', 'rencontre'] as const),
  }),
  v.forward(
    v.check(
      (input) => input.requestType !== 'devis' || input.message.length >= 20,
      'Décrivez votre besoin en quelques mots (20 caractères min.).',
    ),
    ['message'],
  ),
)

type Schema = v.InferOutput<typeof schema>

const route = useRoute()
const initialType: RequestType = route.query.objet === 'rencontre' ? 'rencontre' : 'devis'
const initialLines: ServiceLine[] = (['cyber', 'data', 'sites'] as const).includes(
  route.query.ligne as ServiceLine,
)
  ? [route.query.ligne as ServiceLine]
  : []

const state = reactive<{
  name: string
  organisation: string
  email: string
  serviceLines: ServiceLine[]
  message: string
  echeance: Echeance | undefined
  requestType: RequestType
}>({
  name: '',
  organisation: '',
  email: '',
  serviceLines: initialLines,
  message: '',
  echeance: undefined,
  requestType: initialType,
})

const requestTypeItems: { label: string; value: RequestType; description: string }[] = [
  {
    label: 'Recevoir un devis chiffré',
    value: 'devis',
    description: 'Une proposition adaptée à votre besoin.',
  },
  {
    label: 'Une première rencontre',
    value: 'rencontre',
    description: 'Un premier échange court, sans engagement.',
  },
]

const serviceItems: { label: string; value: ServiceLine }[] = [
  { label: 'Cybersécurité', value: 'cyber' },
  { label: 'Data-platform', value: 'data' },
  { label: 'Site vitrine', value: 'sites' },
]

const echeanceItems: { label: string; value: Echeance }[] = [
  { label: 'Dès que possible', value: 'immediate' },
  { label: 'Ce trimestre', value: 'trimestre' },
  { label: 'Ce semestre', value: 'semestre' },
  { label: 'Exploratoire / pas de date', value: 'exploratoire' },
]

const isRencontre = computed(() => state.requestType === 'rencontre')
const submitLabel = computed(() =>
  isRencontre.value ? 'Demander une première rencontre' : 'Envoyer ma demande de devis',
)

const form = useTemplateRef('form')
const toast = useToast()
const submitting = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  submitting.value = true
  try {
    const { reference } = await $fetch('/api/devis', { method: 'POST', body: event.data })
    toast.add({
      title: isRencontre.value ? 'Demande de rencontre envoyée' : 'Demande de devis envoyée',
      description: `Merci, nous revenons vers vous sous 48 h ouvrées (réf. ${reference}).`,
      color: 'success',
      icon: 'i-lucide-circle-check',
    })
    Object.assign(state, {
      name: '',
      organisation: '',
      email: '',
      serviceLines: [],
      message: '',
      echeance: undefined,
    })
  } catch (error: unknown) {
    const fieldErrors = (error as { data?: { data?: { fieldErrors?: Record<string, string> } } })
      ?.data?.data?.fieldErrors
    if (fieldErrors) {
      form.value?.setErrors(
        Object.entries(fieldErrors).map(([name, message]) => ({ name, message })),
      )
    } else {
      toast.add({
        title: 'Envoi impossible',
        description: 'Une erreur est survenue. Réessayez ou écrivez-nous directement.',
        color: 'error',
        icon: 'i-lucide-triangle-alert',
      })
    }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-5" @submit="onSubmit">
    <UFormField name="requestType" label="Votre demande" required>
      <URadioGroup v-model="state.requestType" :items="requestTypeItems" orientation="horizontal" />
    </UFormField>

    <div class="grid sm:grid-cols-2 gap-5">
      <UFormField name="name" label="Nom" required>
        <UInput v-model="state.name" placeholder="Prénom Nom" class="w-full" />
      </UFormField>
      <UFormField name="organisation" label="Organisation" required>
        <UInput v-model="state.organisation" placeholder="Votre structure" class="w-full" />
      </UFormField>
    </div>

    <UFormField name="email" label="Email professionnel" required>
      <UInput v-model="state.email" type="email" placeholder="vous@organisation.re" class="w-full" />
    </UFormField>

    <UFormField
      name="serviceLines"
      label="Ligne(s) de service"
      description="Sélectionnez un ou plusieurs métiers concernés."
      required
    >
      <UCheckboxGroup v-model="state.serviceLines" :items="serviceItems" />
    </UFormField>

    <UFormField name="echeance" label="Échéance" hint="Optionnel">
      <USelect
        v-model="state.echeance"
        :items="echeanceItems"
        placeholder="À quelle échéance ?"
        class="w-full"
      />
    </UFormField>

    <UFormField
      name="message"
      :label="isRencontre ? 'Ce dont vous aimeriez parler' : 'Votre besoin'"
      :description="isRencontre
        ? 'Quelques mots suffisent — on creusera ensemble.'
        : 'Contexte, périmètre, contrainte réglementaire éventuelle…'"
      :hint="isRencontre ? 'Optionnel' : undefined"
      :required="!isRencontre"
    >
      <UTextarea
        v-model="state.message"
        :rows="4"
        autoresize
        :maxrows="8"
        placeholder="Décrivez votre projet ou votre besoin en quelques lignes."
        class="w-full"
      />
    </UFormField>

    <UButton type="submit" :label="submitLabel" icon="i-lucide-send" size="lg" :loading="submitting" />

    <p class="text-xs text-muted">
      En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour traiter
      votre demande et vous recontacter. Aucune revente.
      <ULink to="/confidentialite" class="text-primary">Politique de confidentialité</ULink>.
    </p>
  </UForm>
</template>
