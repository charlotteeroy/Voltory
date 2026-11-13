import Card from './ds/Card.jsx'

/** Pastille dorée ✓ (listes à puces des pages métier). */
export function Tick({ size = 22 }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: 'var(--r-pill)',
        background: 'var(--or-500)',
        color: 'var(--petrole-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${Math.round(size * 0.55)}px`,
        fontWeight: 600,
      }}
    >
      ✓
    </span>
  )
}

/** Liste à coches. */
export function CheckList({ items, onDark = false, gap = '12px' }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap }}>
      {items.map((it) => (
        <li
          key={it}
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            fontSize: '15px',
            lineHeight: 1.5,
            color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
          }}
        >
          <Tick />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/** Grille de cartes à pictogramme (prestations, avantages, options). */
export function FeatureGrid({ items, min = '280px' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(min(${min},100%),1fr))`, gap: '24px' }}>
      {items.map((it) => (
        <Card key={it.title} icon={it.icon} title={it.title}>
          {it.text}
        </Card>
      ))}
    </div>
  )
}

/** Mosaïque de photos légendées (une prestation = une photo + un titre court). */
export function PhotoTiles({ items, min = '260px', height = '240px' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(min(${min},100%),1fr))`, gap: '16px' }}>
      {items.map((it) => (
        <figure
          key={it.title}
          style={{
            position: 'relative',
            margin: 0,
            height,
            borderRadius: 'var(--r-md)',
            overflow: 'hidden',
            background: 'var(--petrole-800)',
            boxShadow: 'var(--e1)',
          }}
        >
          <img
            src={it.img}
            alt=""
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <figcaption
            style={{
              position: 'absolute',
              inset: 'auto 0 0 0',
              padding: '40px 18px 16px',
              background: 'linear-gradient(0deg, rgba(4,30,34,.85), rgba(4,30,34,0))',
              color: 'var(--text-on-dark)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px' }}>{it.title}</div>
            {it.text && (
              <div style={{ fontSize: '13.5px', color: 'var(--text-on-dark-soft)', marginTop: '2px' }}>{it.text}</div>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

/** Étiquettes « pilule » (remplacent les listes à puces courtes). */
export function Chips({ items, onDark = false }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {items.map((it) => (
        <span
          key={it}
          style={{
            fontSize: '13.5px',
            fontWeight: 500,
            padding: '7px 14px',
            borderRadius: 'var(--r-pill)',
            background: onDark ? 'rgba(255,255,255,.1)' : 'var(--surface-page)',
            border: `1px solid ${onDark ? 'rgba(255,255,255,.2)' : 'var(--border-subtle)'}`,
            color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
          }}
        >
          {it}
        </span>
      ))}
    </div>
  )
}
