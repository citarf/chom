import type { NotifierPort } from '../application/ports'
import { LogNotifier } from './log-notifier'
import { WebhookNotifier } from './webhook-notifier'
import { ResendNotifier } from './resend-notifier'

export interface NotifierConfig {
  /** Clé API Resend — si présente, l'email prime sur tout le reste. */
  resendApiKey?: string
  /** Expéditeur Resend (domaine vérifié, ou onboarding@resend.dev en test). */
  resendFrom?: string
  /** URL de webhook où acheminer les leads (Slack, Make, transfert email…). */
  webhookUrl?: string
  /** Destinataire des demandes (email Resend + journal de repli). */
  recipient: string
}

/**
 * Composition root des adapters de notification :
 * Resend (email) si configuré → sinon webhook → sinon journalisation.
 */
export function createNotifier(config: NotifierConfig): NotifierPort {
  if (config.resendApiKey) {
    return new ResendNotifier({
      apiKey: config.resendApiKey,
      from: config.resendFrom || 'CHOM <onboarding@resend.dev>',
      to: config.recipient,
    })
  }
  if (config.webhookUrl) {
    return new WebhookNotifier(config.webhookUrl)
  }
  return new LogNotifier(config.recipient)
}
