/**
 * Informations société, centralisées pour les mentions légales et la
 * politique de confidentialité.
 *
 * ⚠️ Les valeurs entre crochets DOIVENT être complétées avant la mise en ligne
 * (obligation légale — art. 6 III LCEN). Renseignez-les ici, une seule fois.
 */
export function useCompany() {
  const { contactEmail } = useRuntimeConfig().public

  return {
    name: 'CHOM',
    legalName: 'CHOM — Combinat des Honnêtes Ober Marchands',
    form: 'Société par actions simplifiée unipersonnelle (SASU)',
    capital: '2 100 €',
    rcs: '943 843 441 — R.C.S. Paris',
    tva: 'FR37943843441',
    siege: '60 rue François Ier, 75008 Paris',
    director: 'Pierre-Alexandre Mahé',
    email: contactEmail,
    host: {
      name: '[nom de l’hébergeur]',
      details: '[raison sociale, adresse et téléphone de l’hébergeur]',
    },
  }
}
