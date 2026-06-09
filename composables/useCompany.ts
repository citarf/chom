/**
 * Informations société, centralisées pour les mentions légales et la
 * politique de confidentialité (obligation légale — art. 6 III LCEN).
 */
export function useCompany() {
  const { contactEmail } = useRuntimeConfig().public

  const legalName = 'CHOM — Combinat des Honnêtes Ober Marchands'
  const siege = '60 rue François Ier, 75008 Paris'

  return {
    name: 'CHOM',
    legalName,
    form: 'Société par actions simplifiée unipersonnelle (SASU)',
    capital: '2 100 €',
    rcs: '943 843 441 — R.C.S. Paris',
    tva: 'FR37943843441',
    siege,
    director: 'Pierre-Alexandre Mahé',
    email: contactEmail,
    // Site auto-hébergé : l'hébergeur déclaré est la société elle-même.
    host: {
      name: `Site auto-hébergé par ${legalName}`,
      details: `${siege} — ${contactEmail}`,
    },
  }
}
