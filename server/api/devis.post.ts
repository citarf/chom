import { DevisValidationError, type DevisInput } from '../devis/domain/devis'
import { submitDevis } from '../devis/application/submit-devis'
import { InMemoryDevisRepository } from '../devis/infrastructure/in-memory-repo'
import { createNotifier } from '../devis/infrastructure/notifier-factory'

// Adapter de persistance partagé entre requêtes (références incrémentales).
const repo = new InMemoryDevisRepository()

/**
 * Adapter ENTRANT (HTTP) du use case « demande de devis ».
 * Parse le corps → submitDevis → 200 { reference } ou 422 { fieldErrors }.
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  // On lit process.env en priorité : les valeurs de runtimeConfig sont figées au
  // build (l'override d'exécution exigerait le préfixe NUXT_). process.env est, lui,
  // live à l'exécution (dev, `node --env-file`, docker) avec les noms tels quels.
  const notifier = createNotifier({
    resendApiKey: process.env.RESEND_API_KEY || config.resendApiKey,
    resendFrom: process.env.RESEND_FROM || config.resendFrom,
    webhookUrl: process.env.DEVIS_WEBHOOK_URL || config.devisWebhookUrl,
    recipient: process.env.DEVIS_RECIPIENT || config.devisRecipient,
  })

  const body = await readBody<Partial<DevisInput>>(event)

  try {
    const { reference } = await submitDevis(body as DevisInput, { repo, notifier })
    return { reference }
  } catch (error) {
    if (error instanceof DevisValidationError) {
      throw createError({
        statusCode: 422,
        statusMessage: 'Demande de devis invalide',
        data: { fieldErrors: error.fieldErrors },
      })
    }
    throw error
  }
})
