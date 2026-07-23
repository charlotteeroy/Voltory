import { useEffect, useState } from 'react'
import Button from './ds/Button.jsx'
import { useMediaQuery } from '../lib/useMediaQuery.js'

const NAV_DEFS = [
  { key: 'realisations', label: 'Prestations' },
  { key: 'entreprise', label: "L'entreprise" },
]

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
  const isMobile = useMediaQuery('(max-width: 719px)')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  const go = (key) => {
    setOpen(false)
    navigate(key)
  }

  return (
    <nav
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
        <div
          onClick={() => go('home')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src="assets/voltory-logo-white.png"
            alt="Voltory"
            style={{ height: '32px', display: 'block' }}
          />
        </div>
        {isMobile ? (
          <BurgerButton open={open} onClick={() => setOpen(!open)} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {NAV_DEFS.map((n) => {
                const active = n.key === page
                return (
                  <button
                    key={n.key}
                    onClick={() => go(n.key)}
                    style={{
                      ...NAV_LINK_BASE,
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
                  </button>
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
              <button
                key={n.key}
                onClick={() => go(n.key)}
                style={{
                  ...NAV_LINK_BASE,
                  fontSize: '17px',
                  border: 'none',
                  textAlign: 'left',
                  padding: '14px 4px',
                  opacity: active ? 0.45 : 1,
                  borderBottom: '1px solid var(--border-on-dark)',
                }}
              >
                {n.label}
              </button>
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
