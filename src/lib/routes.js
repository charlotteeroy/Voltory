/** Une page = une adresse. Les clés servent à `navigate(key)` dans toute l'app. */
const SUFFIX = 'Voltory · Cholet'

export const ROUTES = {
  home: {
    path: '/',
    title: 'Voltory — Électricité · Bornes de recharge · Photovoltaïque · Cholet',
  },
  electricite: { path: '/electricite', title: `Électricité générale — ${SUFFIX}` },
  bornes: { path: '/bornes-de-recharge', title: `Bornes de recharge — ${SUFFIX}` },
  photovoltaique: { path: '/photovoltaique', title: `Panneaux photovoltaïques — ${SUFFIX}` },
  entreprise: { path: '/entreprise', title: `L'entreprise — ${SUFFIX}` },
  contact: { path: '/contact', title: `Demander une étude — ${SUFFIX}` },
}

/** Adresse → clé de page (adresse inconnue : accueil). */
export function keyFromPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'
  const hit = Object.entries(ROUTES).find(([, r]) => r.path === clean)
  return hit ? hit[0] : 'home'
}
