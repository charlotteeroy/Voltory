import { WRAP } from '../lib/layout.js'
import Button from '../components/ds/Button.jsx'

/** Adresse inconnue : message court et retour vers l'accueil ou le contact. */
export default function NotFound({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <section style={{ background: 'var(--surface-page)', padding: 'clamp(96px,14vw,160px) 0' }}>
        <div style={{ ...WRAP, textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--text-accent)',
            }}
          >
            Erreur 404
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(2.2rem,4.2vw,3rem)',
              letterSpacing: '-.03em',
              lineHeight: 1.08,
              color: 'var(--text-strong)',
              margin: '16px 0 14px',
            }}
          >
            Cette page n'existe pas
          </h1>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-body)', margin: '0 auto', maxWidth: '44ch' }}>
            Le lien est peut-être ancien ou mal saisi.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <Button variant="primary" onClick={() => navigate('home')}>
              Retour à l'accueil
            </Button>
            <Button variant="ghost" onClick={() => navigate('contact')}>
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
