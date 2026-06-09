import type { Devis } from '../domain/devis'

/** Référence de suivi d'une demande de devis persistée. */
export interface DevisReference {
  readonly reference: string
}

/**
 * Port de persistance (driven). Une implémentation décide du stockage réel
 * (in-memory, base, CRM…) et renvoie la référence attribuée.
 */
export interface DevisRepositoryPort {
  save(devis: Devis): Promise<DevisReference>
}

/**
 * Port de notification (driven). Prévient l'équipe CHOM qu'une demande est arrivée.
 * L'adapter stub se contente de journaliser ; un adapter email/CRM viendra plus tard.
 */
export interface NotifierPort {
  notify(devis: Devis, reference: string): Promise<void>
}
