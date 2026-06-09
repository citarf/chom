import type { Devis } from '../domain/devis'
import type { DevisReference, DevisRepositoryPort } from '../application/ports'

/**
 * Adapter STUB de persistance : conserve les demandes en mémoire du process.
 * Suffisant tant qu'aucun stockage durable n'est branché ; à remplacer par un
 * adapter base/CRM le moment venu (l'interface ne bouge pas).
 */
export class InMemoryDevisRepository implements DevisRepositoryPort {
  private readonly items: Array<{ reference: string; devis: Devis }> = []

  async save(devis: Devis): Promise<DevisReference> {
    const reference = `DV-${String(this.items.length + 1).padStart(4, '0')}`
    this.items.push({ reference, devis })
    return { reference }
  }
}
