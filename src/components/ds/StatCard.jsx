/**
 * Voltory — StatCard
 * Chiffre clé : grand numéro doré sur fond pétrole.
 * value = nombre, unit = suffixe (ans, %, kWc…), label = description.
 */
export default function StatCard({ value, unit = null, label, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-brand)',
        color: 'var(--text-on-dark)',
        borderRadius: 'var(--r-md)',
        padding: '24px',
        display: 'inline-flex',
        flexDirection: 'column',
        minWidth: '160px',
        boxShadow: 'var(--e2)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '40px',
          fontWeight: 600,
          color: 'var(--or-500)',
          lineHeight: 1,
          letterSpacing: 'var(--ls-snug)',
        }}
      >
        {value}
        {unit && (
          <span style={{ fontSize: '17px', color: 'var(--blanc)', fontWeight: 'var(--fw-semibold)' }}>
            {' '}
            {unit}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'var(--text-on-dark-soft)',
          marginTop: '8px',
        }}
      >
        {label}
      </div>
    </div>
  )
}
