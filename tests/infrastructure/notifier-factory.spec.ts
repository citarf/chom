import { describe, expect, it } from 'vitest'
import { createNotifier } from '../../server/devis/infrastructure/notifier-factory'
import { WebhookNotifier } from '../../server/devis/infrastructure/webhook-notifier'
import { LogNotifier } from '../../server/devis/infrastructure/log-notifier'

describe('createNotifier', () => {
  it('renvoie un WebhookNotifier quand une URL de webhook est configurée', () => {
    const notifier = createNotifier({ webhookUrl: 'https://hook.example/x', recipient: 'c@chom.re' })
    expect(notifier).toBeInstanceOf(WebhookNotifier)
  })

  it('retombe sur le LogNotifier sans URL de webhook', () => {
    expect(createNotifier({ recipient: 'c@chom.re' })).toBeInstanceOf(LogNotifier)
    expect(createNotifier({ webhookUrl: '', recipient: 'c@chom.re' })).toBeInstanceOf(LogNotifier)
  })
})
