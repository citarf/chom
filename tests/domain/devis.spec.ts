import { describe, expect, it } from 'vitest'
import {
  createDevis,
  DevisValidationError,
  SERVICE_LINES,
  type DevisInput,
} from '../../server/devis/domain/devis'

const validInput: DevisInput = {
  name: '  Awa Hoarau  ',
  organisation: 'Sucrerie du Sud',
  email: 'awa@sucrerie-sud.re',
  serviceLines: ['cyber', 'data'],
  message: "Nous devons prouver notre posture cyber à notre donneur d'ordre.",
  echeance: 'trimestre',
}

describe('createDevis', () => {
  it('construit un Devis valide et normalise les champs', () => {
    const devis = createDevis(validInput)

    expect(devis.name).toBe('Awa Hoarau') // trimmé
    expect(devis.organisation).toBe('Sucrerie du Sud')
    expect(devis.email).toBe('awa@sucrerie-sud.re')
    expect(devis.serviceLines).toEqual(['cyber', 'data'])
    expect(devis.echeance).toBe('trimestre')
  })

  it('déduplique les lignes de service', () => {
    const devis = createDevis({ ...validInput, serviceLines: ['cyber', 'cyber', 'data'] })
    expect(devis.serviceLines).toEqual(['cyber', 'data'])
  })

  it("applique l'échéance 'non_definie' par défaut quand absente", () => {
    const { echeance: _omitted, ...rest } = validInput
    const devis = createDevis(rest)
    expect(devis.echeance).toBe('non_definie')
  })

  it("applique l'objet 'devis' par défaut quand absent", () => {
    const devis = createDevis(validInput)
    expect(devis.requestType).toBe('devis')
  })

  it("accepte l'objet 'rencontre'", () => {
    const devis = createDevis({ ...validInput, requestType: 'rencontre' })
    expect(devis.requestType).toBe('rencontre')
  })

  it("rejette un objet de demande inconnu", () => {
    expect(() =>
      createDevis({ ...validInput, requestType: 'cafe' as unknown as DevisInput['requestType'] }),
    ).toThrowError(DevisValidationError)
  })

  it('couvre les trois lignes de service', () => {
    expect(SERVICE_LINES).toEqual(['cyber', 'data', 'sites'])
  })

  it('rejette un nom vide', () => {
    expect(() => createDevis({ ...validInput, name: '   ' })).toThrowError(DevisValidationError)
  })

  it('rejette une organisation absente', () => {
    expect(() => createDevis({ ...validInput, organisation: '' })).toThrowError(DevisValidationError)
  })

  it('rejette un email invalide', () => {
    expect(() => createDevis({ ...validInput, email: 'pas-un-email' })).toThrowError(
      DevisValidationError,
    )
  })

  it('rejette une liste de lignes de service vide', () => {
    expect(() => createDevis({ ...validInput, serviceLines: [] })).toThrowError(
      DevisValidationError,
    )
  })

  it('rejette une ligne de service inconnue', () => {
    expect(() =>
      createDevis({ ...validInput, serviceLines: ['marketing'] as unknown as DevisInput['serviceLines'] }),
    ).toThrowError(DevisValidationError)
  })

  it('rejette un message trop court pour un devis', () => {
    expect(() => createDevis({ ...validInput, message: 'trop court' })).toThrowError(
      DevisValidationError,
    )
  })

  it('accepte un message court ou vide pour une première rencontre', () => {
    const devis = createDevis({ ...validInput, requestType: 'rencontre', message: '' })
    expect(devis.requestType).toBe('rencontre')
    expect(devis.message).toBe('')
  })

  it('expose les erreurs par champ', () => {
    try {
      createDevis({ ...validInput, name: '', email: 'x' })
      expect.unreachable('createDevis aurait dû lever')
    } catch (error) {
      expect(error).toBeInstanceOf(DevisValidationError)
      const { fieldErrors } = error as DevisValidationError
      expect(Object.keys(fieldErrors)).toEqual(expect.arrayContaining(['name', 'email']))
    }
  })
})
