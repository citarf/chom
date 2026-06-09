import { describe, expect, it, vi } from 'vitest'
import { createDevis } from '../../server/devis/domain/devis'
import { ResendNotifier } from '../../server/devis/infrastructure/resend-notifier'

const devis = createDevis({
  name: 'Awa Hoarau',
  organisation: 'Sucrerie du Sud',
  email: 'awa@sucrerie-sud.re',
  serviceLines: ['cyber', 'data'],
  message: "Nous devons prouver notre posture cyber à notre donneur d'ordre.",
  requestType: 'devis',
})

const config = {
  apiKey: 're_test_123',
  from: 'CHOM <onboarding@resend.dev>',
  to: 'pamahe@proton.me',
}

describe('ResendNotifier', () => {
  it("poste l'email à l'API Resend avec auth, from/to et reply_to du prospect", async () => {
    const fetchFn = vi.fn(
      async (_url: RequestInfo | URL, _init?: RequestInit) =>
        new Response(JSON.stringify({ id: 'email_1' }), { status: 200 }),
    )
    const notifier = new ResendNotifier(config, fetchFn)

    await notifier.notify(devis, 'DV-0042')

    expect(fetchFn).toHaveBeenCalledTimes(1)
    const [url, init] = fetchFn.mock.calls[0]!
    expect(url).toBe('https://api.resend.com/emails')
    expect(init?.method).toBe('POST')
    expect((init?.headers as Record<string, string>).Authorization).toBe('Bearer re_test_123')

    const body = JSON.parse(init!.body as string)
    expect(body.from).toBe('CHOM <onboarding@resend.dev>')
    expect(body.to).toEqual(['pamahe@proton.me'])
    expect(body.reply_to).toBe('awa@sucrerie-sud.re') // répondre = répondre au prospect
    expect(body.subject).toContain('DV-0042')
    expect(body.subject.toLowerCase()).toContain('devis')
    expect(body.text).toContain('Sucrerie du Sud')
    expect(body.text).toContain('cyber, data')
  })

  it('ne lève pas si Resend renvoie une erreur HTTP (best-effort)', async () => {
    const fetchFn = vi.fn(
      async (_u: RequestInfo | URL, _i?: RequestInit) => new Response('nope', { status: 422 }),
    )
    const notifier = new ResendNotifier(config, fetchFn)
    await expect(notifier.notify(devis, 'DV-0043')).resolves.toBeUndefined()
  })

  it('ne lève pas si le réseau échoue (best-effort)', async () => {
    const fetchFn = vi.fn(async () => {
      throw new Error('network down')
    })
    const notifier = new ResendNotifier(config, fetchFn)
    await expect(notifier.notify(devis, 'DV-0044')).resolves.toBeUndefined()
  })
})
