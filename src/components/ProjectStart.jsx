import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import { SERVICES } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'

/**
 * « Votre projet commence ici » — trois portes d'entrée par métier.
 * Chaque carte mène à un chemin différent : la galerie filtrée, le simulateur
 * ou le formulaire. Section d'orientation, pas de description.
 */
export default function ProjectStart({ navigate }) {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '96px 0' }}>
      <div style={WRAP}>
        <div style={{ maxWidth: '54ch', marginBottom: '48px' }}>
          <span style={eyebrowStyle()}>Votre projet commence ici</span>
          <hr style={goldRule} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.08,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Dites-nous simplement ce que vous souhaitez faire
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => navigate(s.target, { filter: s.filter })}
              style={{
                textAlign: 'left',
                font: 'inherit',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-md)',
                padding: '30px 28px 26px',
                boxShadow: 'var(--e1)',
                cursor: 'pointer',
                transition:
                  'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = 'var(--e2)'
                e.currentTarget.style.borderColor = 'var(--petrole-200)'
                const arrow = e.currentTarget.querySelector('[data-arrow]')
                if (arrow) arrow.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--e1)'
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                const arrow = e.currentTarget.querySelector('[data-arrow]')
                if (arrow) arrow.style.transform = 'translateX(0)'
              }}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--or-100)',
                  color: 'var(--petrole-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                {s.icon}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: 'var(--ls-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--text-accent)',
                  marginBottom: '8px',
                }}
              >
                {s.eyebrow}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '19px',
                  letterSpacing: '-.01em',
                  color: 'var(--text-strong)',
                  margin: '0 0 10px',
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  margin: '0 0 24px',
                }}
              >
                {s.text}
              </p>

              <span
                style={{
                  marginTop: 'auto',
                  paddingTop: '18px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14.5px',
                  color: 'var(--petrole-700)',
                }}
              >
                {s.cta}
                <span
                  data-arrow
                  style={{
                    display: 'inline-flex',
                    color: 'var(--or-600)',
                    transition: 'transform var(--dur-base) var(--ease-out)',
                  }}
                >
                  {Icons.arrow}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
