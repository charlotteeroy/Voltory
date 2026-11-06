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
        fontWeight: 700,
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
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(${min},1fr))`, gap: '24px' }}>
      {items.map((it) => (
        <Card key={it.title} icon={it.icon} title={it.title}>
          {it.text}
        </Card>
      ))}
    </div>
  )
}
