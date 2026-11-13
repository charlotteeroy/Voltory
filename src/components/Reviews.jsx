import { useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { REVIEWS, GOOGLE_PROFILE } from '../lib/data.js'

/** Logo « G » officiel de Google (quatre couleurs). */
function GoogleLogo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

/** Avis Google — badge note (lien vers la fiche) + carrousel horizontal en boucle (pause au survol). */
export default function Reviews() {
  const [badgeHover, setBadgeHover] = useState(false)
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
          <a
            href={GOOGLE_PROFILE.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Note Google ${GOOGLE_PROFILE.rating} sur 5, ${GOOGLE_PROFILE.count} avis — voir la fiche Google (nouvel onglet)`}
            onMouseEnter={() => setBadgeHover(true)}
            onMouseLeave={() => setBadgeHover(false)}
            style={{
              display: 'flex',
              textDecoration: 'none',
              color: 'inherit',
              alignItems: 'center',
              gap: '16px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-md)',
              padding: '16px 22px',
              boxShadow: badgeHover ? 'var(--e2)' : 'var(--e1)',
              transform: badgeHover ? 'translateY(-2px)' : 'none',
              transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
            }}
          >
            <GoogleLogo size={30} />
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
                  {GOOGLE_PROFILE.rating}
                </span>
                <span style={{ color: 'var(--or-500)', fontSize: '16px', letterSpacing: '2px' }}>
                  ★★★★★
                </span>
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                {GOOGLE_PROFILE.count} avis Google ·{' '}
                <span style={{ color: 'var(--text-accent)', fontWeight: 600 }}>Voir la fiche →</span>
              </div>
            </div>
          </a>
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
                <GoogleLogo size={18} />
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--text-body)', margin: 0, flex: 1, whiteSpace: 'pre-line' }}>
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
