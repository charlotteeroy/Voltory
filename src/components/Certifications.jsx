import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import { CERTIFICATIONS } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'

/**
 * « Une équipe qualifiée et assurée » — réassurance placée bas de page,
 * juste avant l'appel à l'action. Chaque qualification est traduite en
 * bénéfice concret : le sigle seul ne parle qu'aux initiés.
 */
export default function Certifications() {
  return (
    <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
      <div style={WRAP}>
        <div style={{ maxWidth: '52ch', marginBottom: '40px' }}>
          <span style={eyebrowStyle()}>Qualifications</span>
          <hr style={goldRule} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.7rem,3vw,2.2rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.1,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Une équipe qualifiée et assurée
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: '20px',
          }}
        >
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.name}
              style={{
                background: 'var(--surface-sunken)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-md)',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--eco-bg)',
                  color: 'var(--eco)',
                  marginBottom: '18px',
                }}
              >
                {Icons.shield}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: 'var(--ls-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '7px',
                }}
              >
                {c.scope}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '17px',
                  letterSpacing: '-.01em',
                  color: 'var(--text-strong)',
                  margin: '0 0 10px',
                }}
              >
                {c.name}
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  lineHeight: 1.6,
                  color: 'var(--text-body)',
                  margin: 0,
                }}
              >
                {c.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
