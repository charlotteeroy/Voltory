import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Electricite from './pages/Electricite.jsx'
import Bornes from './pages/Bornes.jsx'
import Photovoltaique from './pages/Photovoltaique.jsx'
import Entreprise from './pages/Entreprise.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { ROUTES, NOT_FOUND, keyFromPath } from './lib/routes.js'

const PAGES = {
  home: Home,
  electricite: Electricite,
  bornes: Bornes,
  photovoltaique: Photovoltaique,
  entreprise: Entreprise,
  contact: Contact,
  [NOT_FOUND.key]: NotFound,
}

const scrollTop = () => {
  try {
    const el = document.scrollingElement || document.documentElement
    el.scrollTop = 0
    window.scrollTo(0, 0)
  } catch {
    /* no-op */
  }
}

export default function App() {
  const [page, setPage] = useState(() => keyFromPath(window.location.pathname))
  /* Page précédente : permet au formulaire de présélectionner le bon type de projet. */
  const [from, setFrom] = useState(null)

  /* Boutons précédent / suivant du navigateur. */
  useEffect(() => {
    const onPop = () => setPage(keyFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  /* Titre d'onglet propre à chaque page (partage de lien, historique, SEO). */
  useEffect(() => {
    document.title = (ROUTES[page] || NOT_FOUND).title
    /* La page introuvable ne doit pas être indexée par les moteurs de recherche. */
    let robots = document.querySelector('meta[name="robots"]')
    if (page === NOT_FOUND.key) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.name = 'robots'
        document.head.appendChild(robots)
      }
      robots.content = 'noindex'
    } else if (robots) {
      robots.remove()
    }
  }, [page])

  /* Ancre à atteindre une fois la nouvelle page affichée (ex. le simulateur). */
  const pendingAnchor = useRef(null)
  useEffect(() => {
    const id = pendingAnchor.current
    if (!id) return
    pendingAnchor.current = null
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }))
  }, [page])

  const navigate = (key, anchor) => {
    const path = ROUTES[key].path
    if (window.location.pathname !== path) window.history.pushState({}, '', path)
    setFrom(page)
    setPage(key)
    scrollTop()
    if (anchor) pendingAnchor.current = anchor
  }

  const Page = PAGES[page]

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-card)' }}>
      <Nav page={page} navigate={navigate} />
      <Page key={page} navigate={navigate} from={from} />
      <Footer navigate={navigate} />
    </div>
  )
}
