import { DevisValidationError, type DevisInput } from '../devis/domain/devis'
import { submitDevis } from '../devis/application/submit-devis'
import { InMemoryDevisRepository } from '../devis/infrastructure/in-memory-repo'
import { LogNotifier } from '../devis/infrastructure/log-notifier'

// Adapter de persistance partagé entre requêtes (références incrémentales).
const repo = new InMemoryDevisRepository()

/**
 * Adapter ENTRANT (HTTP) du use case « demande de devis ».
 * Parse le corps → submitDevis → 200 { reference } ou 422 { fieldErrors }.
 */
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const notifier = new LogNotifier(config.devisRecipient)

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
