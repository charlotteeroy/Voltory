import { WRAP } from '../lib/layout.js'
import { REVIEWS } from '../lib/data.js'

/** Avis Google — badge note + carrousel horizontal en boucle (pause au survol). */
export default function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS] // duplication pour un défilement continu

  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 0', overflow: 'hidden' }}>
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
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: 'var(--text-accent)',
              }}
            >
              Avis clients
            </span>
            <hr
              style={{
                width: '48px',
                height: '2px',
                background: 'var(--or-500)',
                border: 'none',
                margin: '16px 0 20px',
              }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Ils nous font confiance
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-md)',
              padding: '16px 22px',
              boxShadow: 'var(--e1)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '26px',
                color: 'var(--text-strong)',
              }}
            >
              G
            </span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '20px',
                    color: 'var(--text-strong)',
                  }}
                >
                  5,0
                </span>
                <span style={{ color: 'var(--or-500)', fontSize: '16px', letterSpacing: '2px' }}>
                  ★★★★★
                </span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                Avis Google — vérifiés
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          overflow: 'hidden',
          WebkitMaskImage:
            'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)',
          maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)',
        }}
      >
        <div
          className="v-marquee"
          style={{
            display: 'flex',
            gap: '24px',
            width: 'max-content',
            animation: 'hScroll 45s linear infinite',
            padding: '4px clamp(24px,5vw,72px)',
          }}
        >
          {loop.map((r, i) => (
            <div
              key={i}
              style={{
                width: '360px',
                flexShrink: 0,
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-md)',
                padding: '26px',
                boxShadow: 'var(--e1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--or-500)', fontSize: '15px', letterSpacing: '2px' }}>
                  ★★★★★
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'var(--text-muted)',
                  }}
                >
                  G
                </span>
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-body)', margin: 0, flex: 1 }}>
                « {r.text} »
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--r-pill)',
                    background: 'var(--petrole-600)',
                    color: 'var(--blanc)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  {r.initial}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '13.5px',
                      color: 'var(--text-strong)',
                    }}
                  >
                    {r.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
