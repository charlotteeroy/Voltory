import { useRef, useState } from 'react'

const tag = {
  position: 'absolute',
  top: '14px',
  zIndex: 3,
  fontFamily: 'var(--font-display)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '.06em',
  textTransform: 'uppercase',
  padding: '6px 12px',
  borderRadius: 'var(--r-pill)',
  pointerEvents: 'none',
}

/** Comparateur avant / après : on touche ou fait glisser n'importe où pour révéler l'après. */
export default function BeforeAfter({ before, after, alt = '', caption, height = '380px', start = 50 }) {
  const [pos, setPos] = useState(start)
  const [focused, setFocused] = useState(false)
  const frame = useRef(null)
  const dragging = useRef(false)

  /* Position du doigt / de la souris → pourcentage. Géré à la main car, sur iPhone,
     un <input type="range"> ne réagit qu'au glisser de sa poignée, pas à un simple toucher. */
  const moveTo = (clientX) => {
    const r = frame.current.getBoundingClientRect()
    setPos(Math.round(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100))))
  }
  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    dragging.current = true
    moveTo(e.clientX)
    try {
      e.currentTarget.setPointerCapture(e.pointerId) // le glisser continue même hors du cadre
    } catch {
      /* pointeur déjà relâché : rien à capturer */
    }
  }
  const onPointerMove = (e) => {
    if (dragging.current) moveTo(e.clientX)
  }
  const stopDrag = () => {
    dragging.current = false
  }

  return (
    <figure style={{ margin: 0 }}>
      <div
        ref={frame}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        style={{
          position: 'relative',
          height,
          borderRadius: 'var(--r-lg)',
          overflow: 'hidden',
          background: 'var(--petrole-800)',
          boxShadow: 'var(--e2)',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          touchAction: 'pan-y',
          cursor: 'ew-resize',
        }}
      >
        <img
          src={after}
          alt={alt ? `${alt} — après` : ''}
          loading="lazy"
          draggable="false"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <img
          src={before}
          alt={alt ? `${alt} — avant` : ''}
          loading="lazy"
          draggable="false"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        />
        <span style={{ ...tag, left: '14px', background: 'rgba(4,30,34,.75)', color: 'var(--blanc)' }}>Avant</span>
        <span style={{ ...tag, right: '14px', background: 'var(--or-500)', color: 'var(--petrole-900)' }}>Après</span>
        {/* Poignée */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${pos}%`,
            width: '2px',
            marginLeft: '-1px',
            background: 'var(--blanc)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '44px',
              height: '44px',
              transform: 'translate(-50%,-50%)',
              borderRadius: 'var(--r-pill)',
              background: 'var(--blanc)',
              color: 'var(--petrole-800)',
              boxShadow: focused ? '0 0 0 3px var(--or-500), var(--e2)' : 'var(--e2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600,
            }}
          >
            ‹ ›
          </span>
        </div>
        {/* Curseur invisible conservé pour le clavier (flèches) et les lecteurs d'écran ;
            la souris et le doigt passent par le cadre ci-dessus. */}
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          onFocus={(e) => setFocused(e.currentTarget.matches(':focus-visible'))}
          onBlur={() => setFocused(false)}
          aria-label={`Comparer avant et après${alt ? ` : ${alt}` : ''}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            margin: 0,
            opacity: 0,
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />
      </div>
      {caption && (
        <figcaption style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '10px' }}>{caption}</figcaption>
      )}
    </figure>
  )
}
