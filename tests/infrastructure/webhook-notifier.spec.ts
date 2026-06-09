import { describe, expect, it, vi } from 'vitest'
import { createDevis } from '../../server/devis/domain/devis'
import { WebhookNotifier } from '../../server/devis/infrastructure/webhook-notifier'

const devis = createDevis({
  name: 'Awa Hoarau',
  organisation: 'Sucrerie du Sud',
  email: 'awa@sucrerie-sud.re',
  serviceLines: ['cyber'],
  message: "Nous devons prouver notre posture cyber à notre donneur d'ordre.",
  requestType: 'rencontre',
})

describe('WebhookNotifier', () => {
  it('poste le lead en JSON vers l\'URL configurée', async () => {
    const fetchFn = vi.fn(
      async (_url: RequestInfo | URL, _init?: RequestInit) => new Response(null, { status: 200 }),
    )
    const notifier = new WebhookNotifier('https://hook.example/devis', fetchFn)

    await notifier.notify(devis, 'DV-0007')

    expect(fetchFn).toHaveBeenCalledTimes(1)
    const [url, init] = fetchFn.mock.calls[0]!
    expect(url).toBe('https://hook.example/devis')
    expect(init?.method).toBe('POST')
    const payload = JSON.parse(init!.body as string)
    expect(payload).toMatchObject({
      reference: 'DV-0007',
      requestType: 'rencontre',
      organisation: 'Sucrerie du Sud',
      email: 'awa@sucrerie-sud.re',
      serviceLines: ['cyber'],
    })
  })

  it('ne lève pas si le webhook renvoie une erreur HTTP (best-effort)', async () => {
    const fetchFn = vi.fn(async () => new Response('boom', { status: 500 }))
    const notifier = new WebhookNotifier('https://hook.example/devis', fetchFn)
    await expect(notifier.notify(devis, 'DV-0008')).resolves.toBeUndefined()
  })

  it('ne lève pas si le réseau échoue (best-effort)', async () => {
    const fetchFn = vi.fn(async () => {
      throw new Error('network down')
    })
    const notifier = new WebhookNotifier('https://hook.example/devis', fetchFn)
    await expect(notifier.notify(devis, 'DV-0009')).resolves.toBeUndefined()
  })
})
