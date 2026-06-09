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

/** Saisie brute (côté formulaire / HTTP) avant validation. */
export interface DevisInput {
  name: string
  organisation: string
  email: string
  serviceLines: ServiceLine[]
  message: string
  echeance?: Echeance
}

/** Entité de domaine validée et normalisée. */
export interface Devis {
  readonly name: string
  readonly organisation: string
  readonly email: string
  readonly serviceLines: ReadonlyArray<ServiceLine>
  readonly message: string
  readonly echeance: Echeance
}

/** Erreur de validation portant le détail par champ (pour 422 + formulaire). */
export class DevisValidationError extends Error {
  constructor(readonly fieldErrors: Record<string, string>) {
    super('Demande de devis invalide')
    this.name = 'DevisValidationError'
  }
}

/** Schéma de validation du domaine (validation HTTP faisant autorité). */
export const DevisSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre nom.')),
  organisation: v.pipe(v.string(), v.trim(), v.minLength(1, 'Indiquez votre organisation.')),
  email: v.pipe(v.string(), v.trim(), v.email('Adresse email invalide.')),
  serviceLines: v.pipe(
    v.array(v.picklist(SERVICE_LINES, 'Ligne de service inconnue.')),
    v.minLength(1, 'Choisissez au moins une ligne de service.'),
  ),
  message: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(20, 'Décrivez votre besoin en quelques mots (20 caractères min.).'),
  ),
  echeance: v.optional(v.picklist(ECHEANCES, 'Échéance inconnue.'), 'non_definie'),
})

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
  })
}
