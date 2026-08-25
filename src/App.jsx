import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Realisations from './pages/Realisations.jsx'
import Entreprise from './pages/Entreprise.jsx'
import Contact from './pages/Contact.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  /* Intention de navigation : filtre à pré-appliquer, chantier à ouvrir. */
  const [intent, setIntent] = useState(null)

  const scrollTop = () => {
    try {
      const el = document.scrollingElement || document.documentElement
      el.scrollTop = 0
      window.scrollTo(0, 0)
    } catch {
      /* no-op */
    }
  }

  const navigate = (target, options = null) => {
    /* Ancres de la page d'accueil : on fait défiler au lieu de changer de page. */
    if (target === 'simulateur') {
      if (page !== 'home') {
        setPage('home')
        setIntent(null)
        /* Laisse l'accueil se monter avant de chercher l'ancre. */
        requestAnimationFrame(() => requestAnimationFrame(() => scrollToAnchor('simulateur')))
        return
      }
      scrollToAnchor('simulateur')
      return
    }

    setPage(target)
    setIntent(options)
    scrollTop()
  }

  const scrollToAnchor = (id) => {
    const node = document.getElementById(id)
    if (!node) return scrollTop()
    node.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-card)' }}>
      <Nav page={page} navigate={navigate} />
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'realisations' && <Realisations navigate={navigate} intent={intent} />}
      {page === 'entreprise' && <Entreprise navigate={navigate} />}
      {page === 'contact' && <Contact navigate={navigate} intent={intent} />}
      {page === 'mentions' && <MentionsLegales navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  )
}
