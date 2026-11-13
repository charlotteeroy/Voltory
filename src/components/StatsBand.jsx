import { useEffect, useRef, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { STATS } from '../lib/data.js'

const SPINS = 2

/** Une colonne-chiffre type odomètre : monte en tournant vers sa valeur finale. */
function DigitColumn({ digit, colIdx, roll }) {
  const total = SPINS * 10 + digit
  const cells = []
  for (let n = 0; n <= total; n++) {
    cells.push(
      <span key={n} style={{ height: '1em', lineHeight: '1em', display: 'block' }}>
        {n % 10}
      </span>
    )
  }
  return (
    <span
      style={{
        display: 'inline-block',
        height: '1em',
        lineHeight: '1em',
        overflow: 'hidden',
        verticalAlign: 'top',
        width: '0.62em',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          display: 'block',
          transform: roll ? `translateY(-${total}em)` : 'translateY(0em)',
          transition: 'transform 1.6s cubic-bezier(.16,1,.3,1)',
          transitionDelay: `${0.05 + colIdx * 0.11}s`,
        }}
      >
        {cells}
      </span>
    </span>
  )
}

/** Reconstruit un nombre (préfixe + chiffres roulants + suffixe). */
function RollNumber({ prefix, num, suffix, roll }) {
  let colIdx = -1
  const parts = num.split('').map((ch, i) => {
    if (/[0-9]/.test(ch)) {
      colIdx++
      return <DigitColumn key={i} digit={parseInt(ch, 10)} colIdx={colIdx} roll={roll} />
    }
    return (
      <span
        key={i}
        style={{ display: 'inline-block', width: ch === ' ' ? '0.26em' : 'auto', verticalAlign: 'top' }}
      >
        {ch === ' ' ? '' : ch}
      </span>
    )
  })
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        whiteSpace: 'nowrap',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {prefix && (
        <span style={{ verticalAlign: 'top', marginRight: '0.14em' }}>{prefix.trim()}</span>
      )}
      {parts}
      {suffix && (
        <span style={{ verticalAlign: 'top', marginLeft: '0.22em' }}>{suffix.trim()}</span>
      )}
    </span>
  )
}

/** Bande de chiffres clés — l'animation se déclenche au scroll (≈35 % visible). */
export default function StatsBand() {
  const [roll, setRoll] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setRoll(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.disconnect()
            requestAnimationFrame(() => setRoll(true))
          }
        })
      },
      { threshold: 0.35 }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--surface-brand-deep)',
        color: 'var(--text-on-dark)',
        padding: '104px 0',
      }}
    >
      <div
        style={{
          ...WRAP,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
          gap: 'clamp(32px,4vw,56px)',
        }}
      >
        {STATS.map((s, i) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: "'Poppins',var(--font-display)",
                fontWeight: 600,
                fontSize: 'clamp(3.4rem,7vw,5.4rem)',
                color: 'var(--or-500)',
                lineHeight: 1,
                letterSpacing: '-.01em',
                minHeight: '1em',
              }}
            >
              {/* « jusqu'à » posé au-dessus du chiffre, hors flux : le chiffre reste centré
                 et aligné avec les autres colonnes. */}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                {s.lead && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginBottom: '.18em',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'max(.8125rem,.22em)',
                      fontWeight: 500,
                      lineHeight: 1.2,
                      letterSpacing: '.02em',
                      color: 'var(--text-on-dark-soft)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {s.lead}
                  </span>
                )}
                <RollNumber prefix={s.prefix} num={s.num} suffix={s.suffix} roll={roll} />
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '22px 0 18px' }}>
              <span
                style={{
                  display: 'block',
                  height: '3px',
                  borderRadius: '2px',
                  background: 'var(--or-500)',
                  width: roll ? '46px' : '0px',
                  transition: 'width .7s cubic-bezier(.16,1,.3,1)',
                  transitionDelay: `${0.5 + i * 0.08}s`,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.4,
                color: 'var(--text-on-dark-soft)',
                maxWidth: '24ch',
                margin: '0 auto',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
