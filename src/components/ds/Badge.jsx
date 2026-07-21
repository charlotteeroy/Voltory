/**
 * Voltory — Badge
 * Pastille pilule pour certifications, labels, ancrage local.
 */
const VARIANTS = {
  eco: { background: 'var(--eco-bg)', color: 'var(--eco)' },
  or: { background: 'var(--or-100)', color: 'var(--or-700)' },
  petrole: { background: 'var(--petrole-100)', color: 'var(--petrole-700)' },
  data: { background: 'var(--data-bg)', color: 'var(--data)' },
  alerte: { background: 'var(--alerte-bg)', color: 'var(--alerte)' },
}

export default function Badge({ children, variant = 'petrole', icon = null, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        fontFamily: 'var(--font-display)',
        fontSize: '12.5px',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: '.02em',
        padding: '7px 15px',
        borderRadius: 'var(--r-pill)',
        ...VARIANTS[variant],
        ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  )
}
