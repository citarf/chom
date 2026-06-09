import type { Devis } from '../domain/devis'
import type { NotifierPort } from '../application/ports'

export interface ResendConfig {
  apiKey: string
  /** Expéditeur — doit être un domaine vérifié chez Resend (ou onboarding@resend.dev en test). */
  from: string
  /** Destinataire des demandes. */
  to: string
}

const REQUEST_LABEL: Record<Devis['requestType'], string> = {
  devis: 'demande de devis',
  rencontre: 'demande de rencontre',
}

/**
 * Adapter de notification par email via l'API Resend (REST, sans SDK).
 * Best-effort : ne lève jamais — on ne fait pas échouer la soumission du
 * prospect sur un incident d'envoi ; les échecs sont journalisés. Le `reply_to`
 * est l'email du prospect, pour répondre directement depuis sa boîte.
 */
export class ResendNotifier implements NotifierPort {
  constructor(
    private readonly config: ResendConfig,
    private readonly fetchFn: typeof fetch = fetch,
  ) {}

  async notify(devis: Devis, reference: string): Promise<void> {
    const label = REQUEST_LABEL[devis.requestType]
    const subject = `[CHOM] Nouvelle ${label} — ${devis.organisation} (réf. ${reference})`
    const text = [
      `Nouvelle ${label} (réf. ${reference})`,
      '',
      `Nom          : ${devis.name}`,
      `Organisation : ${devis.organisation}`,
      `Email        : ${devis.email}`,
      `Lignes       : ${devis.serviceLines.join(', ')}`,
      `Échéance     : ${devis.echeance}`,
      '',
      'Message :',
      devis.message || '(aucun)',
    ].join('\n')

    try {
      const res = await this.fetchFn('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          from: this.config.from,
          to: [this.config.to],
          reply_to: devis.email,
          subject,
          text,
        }),
      })
      if (!res.ok) {
        console.error(`[demande] Resend ${res.status} pour ${reference} — email non envoyé`)
      }
    } catch (error) {
      console.error(
        `[demande] Resend injoignable pour ${reference} — email non envoyé:`,
        (error as Error).message,
      )
    }
  }
}
