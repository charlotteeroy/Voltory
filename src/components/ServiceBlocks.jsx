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

/** Contenu détaillé d'une prestation, par groupes (repris des devis Voltory). */
export function ScopeGrid({ groups, min = '250px' }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit,minmax(${min},1fr))`, gap: '22px' }}>
      {groups.map((g, i) => (
        <div
          key={g.title}
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--r-md)',
            padding: '26px',
            boxShadow: 'var(--e1)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '.08em',
              color: 'var(--or-700)',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-strong)',
              margin: '6px 0 18px',
            }}
          >
            {g.title}
          </div>
          <CheckList items={g.items} gap="10px" />
        </div>
      ))}
    </div>
  )
}
