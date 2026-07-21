import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Realisations from './pages/Realisations.jsx'
import Entreprise from './pages/Entreprise.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    try {
      const el = document.scrollingElement || document.documentElement
      el.scrollTop = 0
      window.scrollTo(0, 0)
    } catch {
      /* no-op */
    }
  }

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-card)' }}>
      <Nav page={page} navigate={navigate} />
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'realisations' && <Realisations navigate={navigate} />}
      {page === 'entreprise' && <Entreprise navigate={navigate} />}
      {page === 'contact' && <Contact navigate={navigate} />}
      <Footer navigate={navigate} />
    </div>
  )
}
