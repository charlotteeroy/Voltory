import { useEffect, useRef, useState } from 'react'
import Button from './ds/Button.jsx'
import { useMediaQuery } from '../lib/useMediaQuery.js'
import { ROUTES } from '../lib/routes.js'

/* Ordre = priorité d'activité : électricité, puis bornes, puis solaire. */
const NAV_DEFS = [
  { key: 'electricite', label: 'Électricité' },
  { key: 'bornes', label: 'Bornes de recharge' },
  { key: 'photovoltaique', label: 'Photovoltaïque' },
  { key: 'entreprise', label: "L'entreprise" },
]

/** Lien interne : vraie adresse (clic droit, nouvel onglet, SEO), navigation SPA au clic simple. */
export function navLinkProps(key, go) {
  return {
    href: ROUTES[key].path,
    onClick: (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      e.preventDefault()
      go(key)
    },
  }
}

const NAV_LINK_BASE = {
  fontFamily: 'var(--font-display)',
  fontSize: '15px',
  fontWeight: 600,
  background: 'none',
  cursor: 'pointer',
  padding: '6px 4px',
  paddingBottom: '4px',
  textDecoration: 'none',
  color: 'var(--or-500)',
  transition: 'color var(--dur-fast), opacity var(--dur-fast)',
}

/* Bouton hamburger : trois traits qui se croisent en X à l'ouverture. */
function BurgerButton({ open, onClick }) {
  const bar = {
    display: 'block',
    width: '22px',
    height: '2px',
    borderRadius: '1px',
    background: 'var(--blanc)',
    transition: 'transform var(--dur-base) var(--ease-out), opacity var(--dur-fast)',
  }
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={open}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '5px',
        width: '44px',
        height: '44px',
        padding: '0 11px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <span style={{ ...bar, transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
    </button>
  )
}

export default function Nav({ page, navigate }) {
  const isMobile = useMediaQuery('(max-width: 959px)')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  /* Menu mobile ouvert : Échap, un toucher hors de la barre ou un défilement le referment. */
  const navRef = useRef(null)
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    const onKey = (e) => e.key === 'Escape' && close()
    const onPointer = (e) => !navRef.current?.contains(e.target) && close()
    const startY = window.scrollY
    const onScroll = () => Math.abs(window.scrollY - startY) > 40 && close()
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [open])

  const go = (key) => {
    setOpen(false)
    navigate(key)
  }

  return (
    <nav
      ref={navRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'var(--petrole-600)',
        boxShadow: 'var(--e2)',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0 clamp(20px,3vw,56px)',
          height: '74px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <a
          {...navLinkProps('home', go)}
          aria-label="Voltory — accueil"
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src="/assets/voltory-logo-white.png"
            alt="Voltory"
            style={{ height: '32px', display: 'block' }}
          />
        </a>
        {isMobile ? (
          <BurgerButton open={open} onClick={() => setOpen(!open)} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {NAV_DEFS.map((n) => {
                const active = n.key === page
                return (
                  <a
                    key={n.key}
                    {...navLinkProps(n.key, go)}
                    aria-current={active ? 'page' : undefined}
                    style={{
                      ...NAV_LINK_BASE,
                      whiteSpace: 'nowrap',
                      border: 'none',
                      opacity: active ? 0.45 : 1,
                      borderBottom: active
                        ? '2px solid var(--or-500)'
                        : '2px solid transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--or-400)'
                      e.currentTarget.style.opacity = '1'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--or-500)'
                      e.currentTarget.style.opacity = active ? '0.45' : '1'
                    }}
                  >
                    {n.label}
                  </a>
                )
              })}
            </div>
            <Button variant="accent" size="sm" onClick={() => go('contact')}>
              Demander une étude
            </Button>
          </div>
        )}
      </div>
      {isMobile && open && (
        <div
          style={{
            position: 'absolute',
            top: '74px',
            left: 0,
            right: 0,
            background: 'var(--petrole-600)',
            borderTop: '1px solid var(--border-on-dark)',
            boxShadow: 'var(--e2)',
            padding: '10px 20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            animation: 'vFadeUp .25s var(--ease-out) both',
          }}
        >
          {NAV_DEFS.map((n) => {
            const active = n.key === page
            return (
              <a
                key={n.key}
                {...navLinkProps(n.key, go)}
                aria-current={active ? 'page' : undefined}
                style={{
                  ...NAV_LINK_BASE,
                  display: 'block',
                  fontSize: '17px',
                  border: 'none',
                  textAlign: 'left',
                  padding: '14px 4px',
                  opacity: active ? 0.45 : 1,
                  borderBottom: '1px solid var(--border-on-dark)',
                }}
              >
                {n.label}
              </a>
            )
          })}
          <div style={{ marginTop: '16px' }}>
            <Button variant="accent" full onClick={() => go('contact')}>
              Demander une étude
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export { NAV_DEFS }
