/**
 * Voltory — StepCard
 * Étape de méthode numérotée : grand numéro doré, titre, texte.
 * Reprend l'élément signature (numéro doré) à petite échelle.
 */
export default function StepCard({ number, title, children, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--r-md)',
        padding: '24px',
        boxShadow: 'var(--e1)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '34px',
          color: 'var(--or-500)',
          lineHeight: 1,
          letterSpacing: 'var(--ls-tight)',
        }}
      >
        {number}
      </div>
      <h5
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: '16px',
          color: 'var(--text-strong)',
          margin: '10px 0 7px',
        }}
      >
        {title}
      </h5>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13.5px',
          lineHeight: '1.5',
          color: 'var(--text-body)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  )
}
