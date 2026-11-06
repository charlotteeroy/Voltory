import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Electricite from './pages/Electricite.jsx'
import Bornes from './pages/Bornes.jsx'
import Photovoltaique from './pages/Photovoltaique.jsx'
import Entreprise from './pages/Entreprise.jsx'
import Contact from './pages/Contact.jsx'
import { ROUTES, keyFromPath } from './lib/routes.js'

const PAGES = {
  home: Home,
  electricite: Electricite,
  bornes: Bornes,
  photovoltaique: Photovoltaique,
  entreprise: Entreprise,
  contact: Contact,
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

  /* Boutons précédent / suivant du navigateur. */
  useEffect(() => {
    const onPop = () => setPage(keyFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  /* Titre d'onglet propre à chaque page (partage de lien, historique, SEO). */
  useEffect(() => {
    document.title = ROUTES[page].title
  }, [page])

  const navigate = (key) => {
    const path = ROUTES[key].path
    if (window.location.pathname !== path) window.history.pushState({}, '', path)
    setPage(key)
    scrollTop()
  }

  const Page = PAGES[page]

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-card)' }}>
      <Nav page={page} navigate={navigate} />
      <Page key={page} navigate={navigate} />
      <Footer navigate={navigate} />
    </div>
  )
}
