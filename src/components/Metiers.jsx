import { useEffect, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { METIERS } from '../lib/data.js'
import { navLinkProps } from './Nav.jsx'
import SectionHead from './SectionHead.jsx'

/** Une carte métier : photos qui défilent, nom, étiquettes, lien vers la page. */
function MetierCard({ m, index, tick, onOpen }) {
  const [hover, setHover] = useState(false)
  const idx = (tick + index) % m.imgs.length

  return (
    <a
      {...navLinkProps(m.key, onOpen)}
      aria-label={m.cta}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: 'clamp(420px,52vw,540px)',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        background: 'var(--petrole-800)',
        color: 'var(--text-on-dark)',
        textDecoration: 'none',
        boxShadow: hover ? 'var(--e3)' : 'var(--e2)',
        transition: 'box-shadow var(--dur-base) var(--ease-out)',
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
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1.2s var(--ease-out), transform .8s var(--ease-out)',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, rgba(4,30,34,.92) 0%, rgba(4,30,34,.55) 42%, rgba(4,30,34,0) 72%)',
        }}
      />
      {/* Flèche */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '46px',
          height: '46px',
          borderRadius: 'var(--r-pill)',
          background: hover ? 'var(--or-500)' : 'rgba(255,255,255,.16)',
          color: hover ? 'var(--petrole-900)' : 'var(--blanc)',
          border: '1px solid rgba(255,255,255,.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          transform: hover ? 'rotate(-45deg)' : 'none',
          transition: 'all var(--dur-base) var(--ease-out)',
        }}
      >
        →
      </span>

      <div style={{ position: 'relative', padding: 'clamp(22px,2.4vw,30px)' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '.12em',
            color: 'var(--or-400)',
          }}
        >
          {String(index + 1).padStart(2, '0')} · {m.title}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(1.6rem,2.4vw,2rem)',
            letterSpacing: '-.02em',
            lineHeight: 1.1,
            margin: '8px 0 18px',
          }}
        >
          {m.eyebrow}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {m.points.map((pt) => (
            <span
              key={pt}
              style={{
                fontSize: '13px',
                fontWeight: 500,
                padding: '7px 13px',
                borderRadius: 'var(--r-pill)',
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.22)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                whiteSpace: 'nowrap',
              }}
            >
              {pt}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

/** Nos trois métiers : trois cartes photo cliquables vers chaque page. */
export default function Metiers({ onOpen }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setTick((t) => t + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="metiers" style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={WRAP}>
        <SectionHead eyebrow="Nos métiers" title="Trois métiers, une même exigence" mb="40px" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '20px',
          }}
        >
          {METIERS.map((m, i) => (
            <MetierCard key={m.key} m={m} index={i} tick={tick} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
