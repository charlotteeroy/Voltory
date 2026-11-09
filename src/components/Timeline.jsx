/** Frise d'étapes numérotées (ex. déroulé d'un projet solaire). */
export default function Timeline({ steps }) {
  return (
    <ol className="v-timeline" style={{ '--steps': steps.length }}>
      {steps.map((st, i) => (
        <li key={st.title}>
          <span
            style={{
              position: 'relative',
              zIndex: 1,
              flexShrink: 0,
              width: '44px',
              height: '44px',
              borderRadius: 'var(--r-pill)',
              background: i === steps.length - 1 ? 'var(--or-500)' : 'var(--petrole-600)',
              color: i === steps.length - 1 ? 'var(--petrole-900)' : 'var(--or-400)',
              border: '4px solid var(--surface-page)',
              boxSizing: 'content-box',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '-4px',
              marginTop: '-4px',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div style={{ marginTop: '14px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '16.5px', color: 'var(--text-strong)' }}>
              {st.title}
            </div>
            <div style={{ fontSize: '14px', lineHeight: 1.5, color: 'var(--text-muted)', marginTop: '4px' }}>{st.text}</div>
            {st.tag && (
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--or-700)',
                  background: 'var(--or-100)',
                  padding: '4px 10px',
                  borderRadius: 'var(--r-pill)',
                }}
              >
                {st.tag}
              </span>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
