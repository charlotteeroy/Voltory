/**
 * Envoi des demandes d'étude.
 *
 * Tant que `CONTACT_ENDPOINT` est vide, le formulaire ne prétend jamais avoir
 * envoyé quoi que ce soit : il prépare un message dans le logiciel de messagerie
 * du visiteur et lui rappelle le téléphone. Aucune demande n'est perdue en
 * silence, contrairement à la version précédente qui affichait un remerciement
 * sans rien expédier.
 *
 * POUR ACTIVER L'ENVOI AUTOMATIQUE : renseigner CONTACT_ENDPOINT avec l'URL du
 * service de réception (Formspree, Web3Forms, Cloudflare Function…). Le reste
 * du formulaire n'a pas besoin d'être touché.
 */
export const CONTACT_ENDPOINT = ''

export const CONTACT_EMAIL = 'felicien.gury@voltory.fr'
export const CONTACT_PHONE = '06 19 19 73 52'

/** Corps du message, lisible aussi bien par un humain que dans une boîte mail. */
export function formatRequest({ name, email, phone, projectType, message }) {
  return [
    `Nom : ${name}`,
    `Email : ${email}`,
    phone ? `Téléphone : ${phone}` : 'Téléphone : non communiqué',
    `Type de projet : ${projectType}`,
    '',
    'Projet :',
    message,
  ].join('\n')
}

export function buildMailtoHref(data) {
  const subject = `Demande d'étude — ${data.projectType} — ${data.name}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    formatRequest(data)
  )}`
}

/**
 * @returns {Promise<{mode: 'sent'|'mailto', href?: string}>}
 * @throws  {Error} si l'envoi automatique est configuré mais échoue.
 */
export async function sendContactRequest(data) {
  if (!CONTACT_ENDPOINT) {
    return { mode: 'mailto', href: buildMailtoHref(data) }
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      projectType: data.projectType,
      message: data.message,
      _subject: `Demande d'étude — ${data.projectType} — ${data.name}`,
    }),
  })

  if (!response.ok) {
    throw new Error(`Envoi refusé par le serveur (${response.status})`)
  }

  return { mode: 'sent' }
}

/* ---------- Validation ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i
/* Numéros français, avec ou sans espaces, points ou tirets. */
const PHONE_RE = /^(?:\+33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

export function validateContact({ name, email, phone, message }) {
  const errors = {}

  if (!name.trim()) errors.name = 'Merci d’indiquer votre nom.'
  else if (name.trim().length < 2) errors.name = 'Ce nom semble trop court.'

  if (!email.trim()) errors.email = 'Nous avons besoin d’un email pour vous répondre.'
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Cet email ne semble pas valide.'

  if (phone.trim() && !PHONE_RE.test(phone.trim()))
    errors.phone = 'Ce numéro ne semble pas valide (ex. 06 19 19 73 52).'

  if (!message.trim()) errors.message = 'Décrivez votre projet en quelques mots.'
  else if (message.trim().length < 10) errors.message = 'Quelques mots de plus nous aideraient.'

  return errors
}
