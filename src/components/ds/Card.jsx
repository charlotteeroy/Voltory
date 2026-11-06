/**
 * Voltory — Card
 * Carte bénéfice / fonctionnalité : icône en pastille or, titre, texte.
 * Fond blanc, bordure subtile, ombre douce.
 */
export default function Card({ icon = null, title, children, eyebrow = null, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--r-md)',
        padding: '26px',
        boxShadow: 'var(--e1)',
        transition:
          'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = 'var(--e2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--e1)'
      }}
      {...rest}
    >
      {icon && (
        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'var(--or-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--petrole-900)',
            fontSize: '23px',
            marginBottom: '16px',
          }}
        >
          {icon}
        </div>
      )}
      {eyebrow && (
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--text-accent)',
            marginBottom: '8px',
          }}
        >
          {eyebrow}
        </div>
      )}
      {title && (
        <h5
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-strong)',
            margin: '0 0 8px',
            letterSpacing: 'var(--ls-normal)',
          }}
        >
          {title}
        </h5>
      )}
      {children && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14.5px',
            lineHeight: '1.55',
            color: 'var(--text-body)',
            margin: 0,
          }}
        >
          {children}
        </p>
      )}
    </div>
  )
}
