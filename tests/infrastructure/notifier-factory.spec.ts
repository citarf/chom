import { describe, expect, it } from 'vitest'
import { createNotifier } from '../../server/devis/infrastructure/notifier-factory'
import { ResendNotifier } from '../../server/devis/infrastructure/resend-notifier'
import { WebhookNotifier } from '../../server/devis/infrastructure/webhook-notifier'
import { LogNotifier } from '../../server/devis/infrastructure/log-notifier'

describe('createNotifier', () => {
  it('priorise Resend quand une clé API est configurée', () => {
    const notifier = createNotifier({
      resendApiKey: 're_x',
      resendFrom: 'CHOM <onboarding@resend.dev>',
      webhookUrl: 'https://hook.example/x',
      recipient: 'c@chom.re',
    })
    expect(notifier).toBeInstanceOf(ResendNotifier)
  })

  it('renvoie un WebhookNotifier quand une URL de webhook est configurée (sans Resend)', () => {
    const notifier = createNotifier({ webhookUrl: 'https://hook.example/x', recipient: 'c@chom.re' })
    expect(notifier).toBeInstanceOf(WebhookNotifier)
  })

  it('retombe sur le LogNotifier sans Resend ni webhook', () => {
    expect(createNotifier({ recipient: 'c@chom.re' })).toBeInstanceOf(LogNotifier)
    expect(createNotifier({ webhookUrl: '', recipient: 'c@chom.re' })).toBeInstanceOf(LogNotifier)
  })
})
