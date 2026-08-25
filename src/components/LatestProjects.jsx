import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import { HOME_PROJECTS } from '../lib/data.js'
import Button from './ds/Button.jsx'

/**
 * « Nos dernières réalisations » — sélection du Grand Ouest, la plus récente
 * d'abord. Un clic ouvre le chantier ; le bouton mène à la galerie complète.
 */
export default function LatestProjects({ navigate }) {
  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={WRAP}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '44px',
          }}
        >
          <div style={{ maxWidth: '52ch' }}>
            <span style={eyebrowStyle()}>Nos dernières réalisations</span>
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
              Des projets réalisés à Cholet et dans les environs
            </h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('realisations')}>
            Voir toutes nos réalisations
          </Button>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))',
            gap: '22px',
          }}
        >
          {HOME_PROJECTS.map((p) => (
            <button
              key={p.title}
              onClick={() => navigate('realisations', { project: p.title })}
              aria-label={`Voir le chantier : ${p.title}`}
              style={{
                textAlign: 'left',
                font: 'inherit',
                color: 'inherit',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-md)',
                overflow: 'hidden',
                boxShadow: 'var(--e1)',
                cursor: 'pointer',
                transition:
                  'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = 'var(--e2)'
                const im = e.currentTarget.querySelector('[data-cover]')
                if (im) im.style.transform = 'scale(1.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--e1)'
                const im = e.currentTarget.querySelector('[data-cover]')
                if (im) im.style.transform = 'scale(1)'
              }}
            >
              <span
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '172px',
                  flexShrink: 0,
                  overflow: 'hidden',
                  background: 'linear-gradient(140deg, var(--petrole-500), var(--petrole-800))',
                }}
              >
                <span
                  data-cover
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `url('${p.img}') center/cover`,
                    transition: 'transform var(--dur-slow) var(--ease-out)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(11,33,38,.05) 45%, rgba(11,33,38,.4))',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '13px',
                    left: '13px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    color: 'var(--petrole-900)',
                    background: 'var(--or-500)',
                    padding: '6px 12px',
                    borderRadius: 'var(--r-pill)',
                  }}
                >
                  {p.catLabel}
                </span>
              </span>

              <span
                style={{
                  padding: '20px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '16.5px',
                    color: 'var(--text-strong)',
                    letterSpacing: '-.01em',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>

                <span
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginTop: 'auto',
                    paddingTop: '18px',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    {p.place} · {p.date}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--or-700)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Voir →
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
