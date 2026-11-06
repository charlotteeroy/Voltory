import { WRAP } from '../lib/layout.js'
import Button from './ds/Button.jsx'

/** Bandeau CTA final (pétrole + halo doré). */
export default function CtaBand({
  onContact,
  title = 'Parlons de votre projet',
  text = 'Une étude chiffrée, sans engagement. Un seul interlocuteur, dès le départ.',
  label = 'Demander mon étude gratuite',
}) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--petrole-600)',
        color: 'var(--text-on-dark)',
        padding: '88px 0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          top: '-180px',
          right: '8%',
          background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />
      <div style={{ ...WRAP, position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2rem,4vw,3rem)',
            letterSpacing: '-.025em',
            lineHeight: 1.04,
            margin: 0,
            color: 'var(--text-on-dark)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-on-dark-soft)',
            margin: '16px auto 32px',
            maxWidth: '42ch',
          }}
        >
          {text}
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="accent" size="lg" onClick={onContact}>
            {label}
          </Button>
        </div>
      </div>
    </section>
  )
}
