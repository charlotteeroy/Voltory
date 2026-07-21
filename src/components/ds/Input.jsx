/**
 * Voltory — Input
 * Champ de saisie pour formulaires (contact, estimation).
 * Label optionnel, focus annelé or.
 */
export default function Input({ label, id, hint = null, type = 'text', style = {}, ...rest }) {
  const inputId = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 'var(--fw-semibold)',
            color: 'var(--text-strong)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-strong)',
          padding: '12px 16px',
          borderRadius: 'var(--r-sm)',
          border: '1.5px solid var(--border-strong)',
          background: 'var(--surface-card)',
          outline: 'none',
          width: '100%',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--petrole-400)'
          e.currentTarget.style.boxShadow = '0 0 0 3px var(--or-200)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-strong)'
          e.currentTarget.style.boxShadow = 'none'
        }}
        {...rest}
      />
      {hint && (
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '12.5px',
            color: 'var(--text-muted)',
          }}
        >
          {hint}
        </span>
      )}
    </div>
  )
}
