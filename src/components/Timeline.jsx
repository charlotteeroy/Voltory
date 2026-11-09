/** Frise d'étapes numérotées (ex. déroulé d'un projet solaire).
    Chaque étape : titre, repère court (doré) et une ligne d'explication. */
export default function Timeline({ steps, ring = 'var(--surface-card)' }) {
  return (
    <ol className="v-timeline" style={{ '--steps': steps.length }}>
      {steps.map((st, i) => {
        const last = i === steps.length - 1
        return (
          <li key={st.title}>
            <span
              style={{
                position: 'relative',
                zIndex: 1,
                flexShrink: 0,
                width: '44px',
                height: '44px',
                borderRadius: 'var(--r-pill)',
                background: last ? 'var(--or-500)' : 'var(--petrole-600)',
                color: last ? 'var(--petrole-900)' : 'var(--blanc)',
                boxShadow: `0 0 0 6px ${ring}`,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {i + 1}
            </span>
            <div className="v-timeline-body">
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: 'var(--or-700)',
                }}
              >
                {st.meta}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '17px',
                  color: 'var(--text-strong)',
                  margin: '4px 0 6px',
                }}
              >
                {st.title}
              </div>
              <div style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--text-muted)' }}>{st.text}</div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
