/**
 * Voltory — Button
 * Pétrole (primaire), Or solaire (accent / temps fort), Ghost (secondaire).
 * Forme pilule, légère élévation au survol.
 */
const SIZES = {
  sm: { padding: '9px 18px', fontSize: '14px' },
  md: { padding: '13px 26px', fontSize: '15px' },
  lg: { padding: '16px 34px', fontSize: '17px' },
}

const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--blanc)',
    boxShadow: 'var(--e2)',
    border: '2px solid transparent',
  },
  accent: {
    background: 'var(--action-accent)',
    color: 'var(--petrole-900)',
    boxShadow: 'var(--e2)',
    border: '2px solid transparent',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--action-primary)',
    border: '2px solid var(--petrole-200)',
  },
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  full = false,
  disabled = false,
  as = 'button',
  style = {},
  ...rest
}) {
  const Tag = as

  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-semibold)',
        borderRadius: 'var(--r-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: full ? '100%' : 'auto',
        textDecoration: 'none',
        lineHeight: 1,
        opacity: disabled ? 0.5 : 1,
        transition:
          'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
        ...SIZES[size],
        ...VARIANTS[variant],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (disabled) return
        e.currentTarget.style.transform = 'translateY(-2px)'
        if (variant === 'primary') e.currentTarget.style.background = 'var(--action-primary-hover)'
        if (variant === 'accent') e.currentTarget.style.background = 'var(--action-accent-hover)'
        if (variant === 'ghost') {
          e.currentTarget.style.borderColor = 'var(--action-primary)'
          e.currentTarget.style.background = 'var(--petrole-50)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = VARIANTS[variant].background
        if (variant === 'ghost') e.currentTarget.style.borderColor = 'var(--petrole-200)'
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', fontSize: '1.1em' }}>{icon}</span>}
      {children}
    </Tag>
  )
}
