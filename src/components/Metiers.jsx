import { useEffect, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { METIERS } from '../lib/data.js'

/** Savoir-faire : trois métiers en grands blocs, photos qui défilent en fond. */
export default function Metiers({ onSeeMore }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setTick((t) => t + 1)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section style={{ background: 'var(--surface-page)', padding: '104px 0 96px' }}>
      <div style={WRAP}>
        <div style={{ marginBottom: '56px' }}>
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
            Notre savoir-faire
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
              fontWeight: 700,
              fontSize: 'clamp(2rem,3.6vw,2.8rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.06,
              margin: 0,
            }}
          >
            Trois métiers,
            <br />
            une même exigence
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '128px' }}>
          {METIERS.map((m, mi) => {
            const idx = tick % m.imgs.length
            return (
              <div
                key={m.eyebrow}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '44px',
                  alignItems: 'center',
                  flexDirection: mi % 2 === 1 ? 'row-reverse' : 'row',
                }}
              >
                <div
                  style={{
                    flex: '1.15 1 420px',
                    position: 'relative',
                    minHeight: '380px',
                    borderRadius: 'var(--r-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--e2)',
                    background: 'var(--petrole-800)',
                  }}
                >
                  {m.imgs.map((src, i) => (
                    <div
                      key={src}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url('${src}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: i === idx ? 1 : 0,
                        zIndex: i === idx ? 1 : 0,
                        transition: 'opacity 1.2s var(--ease-out)',
                      }}
                    />
                  ))}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 2,
                      background: 'linear-gradient(0deg, rgba(4,30,34,.35), transparent 45%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      zIndex: 3,
                      display: 'flex',
                      gap: '6px',
                    }}
                  >
                    {m.imgs.map((src, i) => (
                      <span
                        key={src}
                        style={{
                          width: i === idx ? '20px' : '8px',
                          height: '8px',
                          borderRadius: 'var(--r-pill)',
                          background: i === idx ? 'var(--or-500)' : 'rgba(255,255,255,.55)',
                          transition: 'all var(--dur-base) var(--ease-out)',
                          display: 'inline-block',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ flex: '1 1 380px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 'clamp(2.1rem,4vw,3.1rem)',
                      letterSpacing: '-.03em',
                      lineHeight: 1.02,
                      margin: 0,
                      color: 'var(--text-strong)',
                    }}
                  >
                    {m.eyebrow}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 'clamp(1.05rem,1.6vw,1.25rem)',
                      letterSpacing: '-.01em',
                      color: 'var(--text-accent)',
                      margin: '10px 0 0',
                    }}
                  >
                    {m.title}
                  </div>
                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: 'var(--text-body)',
                      margin: '18px 0 0',
                      maxWidth: '48ch',
                    }}
                  >
                    {m.text}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '22px 0 0',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '11px',
                    }}
                  >
                    {m.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'flex-start',
                          fontSize: '15px',
                          color: 'var(--text-strong)',
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            width: '22px',
                            height: '22px',
                            borderRadius: 'var(--r-pill)',
                            background: 'var(--or-500)',
                            color: 'var(--petrole-900)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '12px',
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '26px' }}>
                    <button
                      onClick={onSeeMore}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '15px',
                        color: 'var(--petrole-700)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'gap var(--dur-fast) var(--ease-out)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                    >
                      Voir les réalisations →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
