import Button from './ds/Button.jsx'

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

export default function Nav({ page, navigate }) {
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
          onClick={() => navigate('home')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src="assets/voltory-logo-white.png"
            alt="Voltory"
            style={{ height: '32px', display: 'block' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {NAV_DEFS.map((n) => {
              const active = n.key === page
              return (
                <button
                  key={n.key}
                  onClick={() => navigate(n.key)}
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
          <Button variant="accent" size="sm" onClick={() => navigate('contact')}>
            Demander une étude
          </Button>
        </div>
      </div>
    </nav>
  )
}

export { NAV_DEFS }
