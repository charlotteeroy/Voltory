import { useEffect, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { HERO_IMGS } from '../lib/data.js'
import Button from './ds/Button.jsx'

/** Header plein-cadre : carrousel des réalisations en fondu (Ken Burns lent). */
export default function HeroCarousel({ onDiscover }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setIndex((i) => (i + 1) % HERO_IMGS.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--petrole-800)',
        color: 'var(--text-on-dark)',
        minHeight: 'clamp(560px,88vh,860px)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {HERO_IMGS.map((src, i) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === index ? 1 : 0,
            transform: i === index ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 1.4s var(--ease-out), transform 6s linear',
            zIndex: i === index ? 1 : 0,
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(90deg, rgba(4,30,34,.9) 0%, rgba(4,30,34,.74) 42%, rgba(4,30,34,.35) 72%, rgba(4,30,34,.12) 100%), linear-gradient(0deg, rgba(4,30,34,.75), transparent 62%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          ...WRAP,
          padding: '0 clamp(24px,5vw,72px) 72px',
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '44rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem,4.8vw,3.9rem)',
              lineHeight: 1.05,
              letterSpacing: '-.03em',
              margin: 0,
              textShadow: '0 2px 24px rgba(4,30,34,.4)',
            }}
          >
            L'énergie de <span style={{ color: 'var(--or-500)' }}>votre maison</span>,<br />
            maîtrisée
          </h1>
          <p
            style={{
              fontSize: 'clamp(.95rem,1.3vw,1.05rem)',
              lineHeight: 1.6,
              color: 'var(--text-on-dark-soft)',
              margin: '18px 0 0',
              maxWidth: '48ch',
            }}
          >
            Électricité, photovoltaïque, recharge électrique. Conseil, installation, suivi. Une
            entreprise familiale, un travail durable.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Button variant="accent" onClick={onDiscover}>
              Découvrir nos prestations →
            </Button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '44px' }}>
          {HERO_IMGS.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1}`}
              style={{
                width: i === index ? '26px' : '10px',
                height: '10px',
                padding: 0,
                borderRadius: 'var(--r-pill)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--dur-base) var(--ease-out)',
                background: i === index ? 'var(--or-500)' : 'rgba(255,255,255,.45)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
