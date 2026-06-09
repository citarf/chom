import type { NotifierPort } from '../application/ports'
import { LogNotifier } from './log-notifier'
import { WebhookNotifier } from './webhook-notifier'

export interface NotifierConfig {
  /** URL de webhook où acheminer les leads (Slack, Make, transfert email…). */
  webhookUrl?: string
  /** Destinataire affiché dans le journal quand aucun webhook n'est configuré. */
  recipient: string
}

/**
 * Composition root des adapters de notification : webhook si configuré,
 * sinon repli sur la journalisation (utile en dev / avant branchement CRM).
 */
export function createNotifier(config: NotifierConfig): NotifierPort {
  if (config.webhookUrl) {
    return new WebhookNotifier(config.webhookUrl)
  }
  return new LogNotifier(config.recipient)
}
