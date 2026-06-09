import type { Devis } from '../domain/devis'
import type { NotifierPort } from '../application/ports'

/**
 * Adapter STUB de notification : journalise la demande de devis.
 * L'envoi réel (email/CRM) est volontairement différé — voir runtimeConfig.devisRecipient.
 */
export class LogNotifier implements NotifierPort {
  constructor(private readonly recipient: string) {}

  async notify(devis: Devis, reference: string): Promise<void> {
    console.info(
      `[devis] ${reference} → ${this.recipient} | ${devis.organisation} (${devis.email}) ` +
        `| lignes: ${devis.serviceLines.join(', ')} | échéance: ${devis.echeance}`,
    )
  }
}
