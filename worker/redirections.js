// Règles d'adresse du site, sans accès réseau (testées dans redirections.test.js).
// Seuls les deux domaines voltory.fr sont concernés : les adresses *.workers.dev
// et localhost (wrangler dev) passent telles quelles.

export const DOMAINE = 'voltory.fr'
export const DOMAINE_WWW = 'www.voltory.fr'

// Un an. Sans includeSubDomains (les services e-mail Microsoft 365 utilisent des
// sous-domaines) et sans preload.
export const HSTS = 'max-age=31536000'

/**
 * Adresse vers laquelle rediriger (301), ou null si la requête est servie telle quelle.
 * - www.voltory.fr (http ou https) → https://voltory.fr, même chemin et paramètres ;
 * - http://voltory.fr → https://voltory.fr.
 * @param {URL} url
 * @returns {string | null}
 */
export function redirection(url) {
  const versHttps = url.hostname === DOMAINE_WWW || (url.hostname === DOMAINE && url.protocol === 'http:')
  if (!versHttps) return null
  return `https://${DOMAINE}${url.pathname}${url.search}`
}

/**
 * La réponse doit-elle porter l'en-tête Strict-Transport-Security ?
 * @param {URL} url
 */
export function avecHsts(url) {
  return url.hostname === DOMAINE && url.protocol === 'https:'
}
