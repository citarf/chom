import { beforeEach, describe, expect, it, vi } from 'vitest'
import { DevisValidationError, type DevisInput } from '../../server/devis/domain/devis'
import { submitDevis } from '../../server/devis/application/submit-devis'
import type { DevisRepositoryPort, NotifierPort } from '../../server/devis/application/ports'

const validInput: DevisInput = {
  name: 'Awa Hoarau',
  organisation: 'Sucrerie du Sud',
  email: 'awa@sucrerie-sud.re',
  serviceLines: ['cyber'],
  message: "Nous devons prouver notre posture cyber à notre donneur d'ordre.",
}

let repo: DevisRepositoryPort & { save: ReturnType<typeof vi.fn> }
let notifier: NotifierPort & { notify: ReturnType<typeof vi.fn> }

beforeEach(() => {
  repo = { save: vi.fn(async (_devis) => ({ reference: 'DV-001' })) }
  notifier = { notify: vi.fn(async () => {}) }
})

describe('submitDevis', () => {
  it('persiste, notifie et renvoie la référence pour une saisie valide', async () => {
    const result = await submitDevis(validInput, { repo, notifier })

    expect(repo.save).toHaveBeenCalledTimes(1)
    expect(notifier.notify).toHaveBeenCalledTimes(1)
    // Le use case passe une entité de domaine validée (email trimmé, etc.).
    const savedDevis = repo.save.mock.calls[0]![0]
    expect(savedDevis.email).toBe('awa@sucrerie-sud.re')
    expect(result.reference).toBe('DV-001')
  })

  it('notifie avec le devis et sa référence', async () => {
    await submitDevis(validInput, { repo, notifier })
    const [notifiedDevis, ref] = notifier.notify.mock.calls[0]!
    expect(notifiedDevis.organisation).toBe('Sucrerie du Sud')
    expect(ref).toBe('DV-001')
  })

  it('rejette une saisie invalide sans toucher au repo ni au notifier', async () => {
    await expect(
      submitDevis({ ...validInput, email: 'invalide' }, { repo, notifier }),
    ).rejects.toBeInstanceOf(DevisValidationError)

    expect(repo.save).not.toHaveBeenCalled()
    expect(notifier.notify).not.toHaveBeenCalled()
  })

  it('notifie après la persistance (ordre)', async () => {
    const order: string[] = []
    repo.save.mockImplementation(async () => {
      order.push('save')
      return { reference: 'DV-002' }
    })
    notifier.notify.mockImplementation(async () => {
      order.push('notify')
    })

    await submitDevis(validInput, { repo, notifier })
    expect(order).toEqual(['save', 'notify'])
  })
})
