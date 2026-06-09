import { createDevis, type DevisInput } from '../domain/devis'
import type { DevisReference, DevisRepositoryPort, NotifierPort } from './ports'

export interface SubmitDevisDeps {
  repo: DevisRepositoryPort
  notifier: NotifierPort
}

/**
 * Use case : valide la saisie (domaine), persiste, puis notifie.
 * Propage {@link DevisValidationError} si la saisie est invalide — sans toucher
 * au repo ni au notifier.
 */
export async function submitDevis(
  input: DevisInput,
  { repo, notifier }: SubmitDevisDeps,
): Promise<DevisReference> {
  const devis = createDevis(input)
  const saved = await repo.save(devis)
  await notifier.notify(devis, saved.reference)
  return saved
}
