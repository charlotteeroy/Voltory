import { useEffect, useRef, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { HERO_IMGS, CERTIFICATIONS } from '../lib/data.js'
import Button from './ds/Button.jsx'

/** Qualifications : logos officiels dès qu'ils sont fournis, badge texte en attendant. */
function Certifications() {
  return (
    <div style={{ marginTop: '36px' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: 'var(--text-on-dark-soft)',
          marginBottom: '14px',
        }}
      >
        Qualifiés &amp; assurés
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px 32px' }}>
        {CERTIFICATIONS.map((c) => (
          <img
            key={c.label}
            src={c.logo}
            alt={`${c.label} — ${c.detail}`}
            title={`${c.label} — ${c.detail}`}
            style={{ height: c.label.includes('APRIL') ? '28px' : '34px', display: 'block', opacity: 0.92 }}
          />
        ))}
      </div>
    </div>
  )
}

/** Header plein-cadre : carrousel des réalisations en fondu (Ken Burns lent).
 *  Seule la 1re photo est chargée d'emblée (préchargée dans index.html) ; chaque
 *  photo suivante est téléchargée pendant l'affichage de la précédente, et le
 *  carrousel n'avance que lorsqu'elle est prête — jamais de fondu vers le vide. */
export default function HeroCarousel({ onContact }) {
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(() => new Set([0]))
  const loadedRef = useRef(loaded)
  loadedRef.current = loaded

  const next = (index + 1) % HERO_IMGS.length

  // Précharge la photo suivante pendant que la courante est affichée.
  useEffect(() => {
    if (loadedRef.current.has(next)) return
    let cancelled = false
    const img = new Image()
    const done = () => {
      if (!cancelled) setLoaded((s) => new Set(s).add(next))
    }
    img.onload = done
    img.onerror = done
    img.src = HERO_IMGS[next]
    return () => {
      cancelled = true
    }
  }, [next])

  useEffect(() => {
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return
      setIndex((i) => {
        const n = (i + 1) % HERO_IMGS.length
        return loadedRef.current.has(n) ? n : i
      })
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
            backgroundImage: loaded.has(i) || i === index ? `url('${src}')` : 'none',
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
              fontWeight: 600,
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
            Électricité, bornes de recharge et photovoltaïque à Cholet. Une entreprise familiale, depuis 2007.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Button variant="accent" onClick={onContact}>
              Parler de mon projet
            </Button>
          </div>
          <Certifications />
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '44px' }}>
          {HERO_IMGS.map((src, i) => (
            <button
              key={src}
              onClick={() => {
                // La photo choisie est chargée par son fond : on la garde en place
                // ensuite pour que son fondu de sortie ne parte pas dans le vide.
                setLoaded((s) => (s.has(i) ? s : new Set(s).add(i)))
                setIndex(i)
              }}
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
