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

export async function sendContact({ name, email, phone, type, message, botcheck }) {
  if (!ACCESS_KEY) throw new Error('Clé Web3Forms manquante (VITE_WEB3FORMS_KEY).')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `Demande de devis · ${type} · ${name}`,
      from_name: 'Site Voltory',
      // Champs affichés dans l'email reçu (« Répondre » écrit directement au client).
      Nom: name,
      email,
      Téléphone: phone || 'non renseigné',
      'Type de projet': type,
      Message: message || '(aucun message)',
      botcheck: Boolean(botcheck),
    }),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || `Erreur ${res.status}`)
  return data
}
