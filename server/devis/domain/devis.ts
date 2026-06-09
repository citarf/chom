import * as v from 'valibot'

/**
 * Cœur de domaine « devis » — TS pur, aucune dépendance Nuxt/Vue.
 * Règles métier de la demande de devis qualifié + construction de l'entité.
 */

export const SERVICE_LINES = ['cyber', 'data', 'sites'] as const
export type ServiceLine = (typeof SERVICE_LINES)[number]

export const ECHEANCES = [
  'immediate',
  'trimestre',
  'semestre',
  'exploratoire',
  'non_definie',
] as const
export type Echeance = (typeof ECHEANCES)[number]

/**
 * Objet de la demande : un devis chiffré, ou une première rencontre (échange court,
 * faible engagement). Deux portes d'entrée pour deux niveaux de maturité d'achat.
 */
export const REQUEST_TYPES = ['devis', 'rencontre'] as const
export type RequestType = (typeof REQUEST_TYPES)[number]

/** Saisie brute (côté formulaire / HTTP) avant validation. */
export interface DevisInput {
  name: string
  organisation: string
  email: string
  serviceLines: ServiceLine[]
  message: string
  echeance?: Echeance
  requestType?: RequestType
}

/** Entité de domaine validée et normalisée. */
export interface Devis {
  readonly name: string
  readonly organisation: string
  readonly email: string
  readonly serviceLines: ReadonlyArray<ServiceLine>
  readonly message: string
  readonly echeance: Echeance
  readonly requestType: RequestType
}

/** Erreur de validation portant le détail par champ (pour 422 + formulaire). */
export class DevisValidationError extends Error {
  constructor(readonly fieldErrors: Record<string, string>) {
    super('Demande de devis invalide')
    this.name = 'DevisValidationError'
  }
}

/**
 * Schéma de validation du domaine (validation HTTP faisant autorité).
 * Le message n'est exigé (≥ 20 car.) que pour une demande de devis ; pour une
 * première rencontre, on réduit la friction et il reste facultatif.
 */
export const DevisSchema = v.pipe(
  v.object({
    name: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre nom.')),
    organisation: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre organisation.')),
    email: v.pipe(v.string(), v.trim(), v.email('Adresse email invalide.')),
    serviceLines: v.pipe(
      v.array(v.picklist(SERVICE_LINES, 'Ligne de service inconnue.')),
      v.minLength(1, 'Choisissez au moins une ligne de service.'),
    ),
    message: v.pipe(v.string(), v.trim()),
    echeance: v.optional(v.picklist(ECHEANCES, 'Échéance inconnue.'), 'non_definie'),
    requestType: v.optional(v.picklist(REQUEST_TYPES, 'Objet de demande inconnu.'), 'devis'),
  }),
  v.forward(
    v.check(
      (input) => input.requestType !== 'devis' || input.message.length >= 20,
      'Décrivez votre besoin en quelques mots (20 caractères min.).',
    ),
    ['message'],
  ),
)

function uniqueServiceLines(lines: ServiceLine[]): ServiceLine[] {
  return [...new Set(lines)]
}

/**
 * Valide et construit un Devis. Lève {@link DevisValidationError} (erreurs par champ)
 * si l'entrée est invalide.
 */
export function createDevis(input: DevisInput): Devis {
  const result = v.safeParse(DevisSchema, input)

  if (!result.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of result.issues) {
      const key = issue.path?.[0]?.key
      if (typeof key === 'string' && !(key in fieldErrors)) {
        fieldErrors[key] = issue.message
      }
    }
    throw new DevisValidationError(fieldErrors)
  }

  const parsed = result.output
  return Object.freeze({
    name: parsed.name,
    organisation: parsed.organisation,
    email: parsed.email,
    serviceLines: Object.freeze(uniqueServiceLines(parsed.serviceLines)),
    message: parsed.message,
    echeance: parsed.echeance,
    requestType: parsed.requestType,
  })
}
