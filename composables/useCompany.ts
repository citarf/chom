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
    legalName: 'CHOM SASU',
    form: 'Société par actions simplifiée unipersonnelle (SASU)',
    capital: '[capital social] €',
    rcs: '[SIREN] — RCS [ville d’immatriculation]',
    tva: '[n° TVA intracommunautaire]',
    siege: '[adresse du siège], La Réunion',
    director: '[nom du président]',
    email: contactEmail,
    host: {
      name: '[nom de l’hébergeur]',
      details: '[raison sociale, adresse et téléphone de l’hébergeur]',
    },
  }
}
