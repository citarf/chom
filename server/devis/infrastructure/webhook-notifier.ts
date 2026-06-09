import type { Devis } from '../domain/devis'
import type { NotifierPort } from '../application/ports'

/**
 * Adapter de notification par webhook : POST le lead en JSON vers une URL
 * configurée (Slack, Make/n8n, service de transfert email…). Best-effort :
 * ne lève jamais — on ne fait pas échouer la soumission du prospect sur un
 * incident d'acheminement ; les échecs sont journalisés.
 */
export class WebhookNotifier implements NotifierPort {
  constructor(
    private readonly url: string,
    private readonly fetchFn: typeof fetch = fetch,
  ) {}

  async notify(devis: Devis, reference: string): Promise<void> {
    const payload = {
      reference,
      requestType: devis.requestType,
      name: devis.name,
      organisation: devis.organisation,
      email: devis.email,
      serviceLines: devis.serviceLines,
      echeance: devis.echeance,
      message: devis.message,
    }

    try {
      const res = await this.fetchFn(this.url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        console.error(`[demande] webhook ${res.status} pour ${reference} — lead non acheminé`)
      }
    } catch (error) {
      console.error(
        `[demande] webhook injoignable pour ${reference} — lead non acheminé:`,
        (error as Error).message,
      )
    }
  }
}
