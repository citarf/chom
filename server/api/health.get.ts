/**
 * Sonde de santé légère pour le healthcheck conteneur / load balancer.
 * Pas de rendu SSR, pas d'I/O — répond 200 tant que le process Nitro tourne.
 */
export default defineEventHandler(() => ({ status: 'ok' }))
