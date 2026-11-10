/**
 * Envoi du formulaire de contact par Web3Forms (gratuit, sans serveur).
 *
 * L'adresse qui reçoit les demandes est liée à la clé d'accès : pour changer de
 * destinataire, il suffit de remplacer la clé (VITE_WEB3FORMS_KEY).
 *   - .env        → clé de production (felicien.gury@voltory.fr)
 *   - .env.local  → clé de test, prioritaire en local (non versionnée)
 * La clé n'est pas un secret : elle est faite pour être publique côté navigateur.
 */
const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

/* L'ordre des clés = l'ordre des lignes dans l'e-mail reçu par Félicien. */
export async function sendContact({ name, email, phone, city, type, callback, message, botcheck }) {
  if (!ACCESS_KEY) throw new Error('Clé Web3Forms manquante (VITE_WEB3FORMS_KEY).')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Nouvelle demande · ${type} · ${name}${city ? ` (${city})` : ''}`,
      from_name: 'Site Voltory',
      Projet: type,
      Nom: name,
      Téléphone: phone,
      // `email` : adresse du client, utilisée comme « Répondre à » par Web3Forms.
      email,
      Commune: city || 'non précisée',
      'Rappel souhaité': callback || 'Peu importe',
      Message: message || '(aucun message)',
      botcheck: Boolean(botcheck),
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || `Erreur ${res.status}`)
  return data
}
