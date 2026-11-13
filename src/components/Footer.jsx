import { WRAP } from '../lib/layout.js'
import { NAV_DEFS, navLinkProps } from './Nav.jsx'

/** Lien téléphone / e-mail du pied de page : même apparence que le texte, survol doré. */
const footerContactLink = {
  style: { color: 'inherit', textDecoration: 'none', padding: '7px 0', alignSelf: 'flex-start' },
  onMouseEnter: (e) => (e.currentTarget.style.color = 'var(--or-300)'),
  onMouseLeave: (e) => (e.currentTarget.style.color = 'inherit'),
}

export default function Footer({ navigate }) {
  return (
    <footer
      style={{
        background: 'var(--surface-brand-deep)',
        color: 'var(--text-on-dark)',
        padding: '56px 0 32px',
      }}
    >
      <div
        style={{
          ...WRAP,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: '1 1 260px', maxWidth: '320px' }}>
          <img
            src="/assets/voltory-logo-white.png"
            alt="Voltory"
            style={{ height: '30px', display: 'block' }}
          />
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-on-dark-soft)',
              lineHeight: 1.6,
              margin: '18px 0 0',
            }}
          >
            Entreprise familiale d'électricité, de photovoltaïque et de bornes de recharge à Cholet.
            De père en fils depuis 2007 — un interlocuteur unique, du conseil au suivi.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--or-400)',
                marginBottom: '14px',
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {NAV_DEFS.map((n) => (
                <a
                  key={n.key}
                  {...navLinkProps(n.key, navigate)}
                  style={{
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-on-dark-soft)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    // Zone de toucher confortable sur mobile, même rendu visuel.
                    padding: '7px 0',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--or-300)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-on-dark-soft)')}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--or-400)',
                marginBottom: '14px',
              }}
            >
              Contact
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                fontSize: '14px',
                color: 'var(--text-on-dark-soft)',
              }}
            >
              <span style={{ padding: '7px 0' }}>41 avenue du Lac, 49300 Cholet</span>
              {/* Appel et e-mail en un toucher sur mobile. */}
              <a href="tel:+33619197352" {...footerContactLink}>
                06 19 19 73 52
              </a>
              <a href="mailto:felicien.gury@voltory.fr" {...footerContactLink}>
                felicien.gury@voltory.fr
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: '1180px',
          margin: '36px auto 0',
          padding: '24px 28px 0',
          borderTop: '1px solid var(--border-on-dark)',
          fontSize: '12.5px',
          color: 'var(--text-on-dark-soft)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'space-between',
        }}
      >
        <span>© 2026 Voltory · Électricité · Photovoltaïque · Bornes de recharge</span>
        <span>
          RGE QualiPV · SIRET 498 685 692 00044 · RCS Angers · Garantie décennale APRIL
        </span>
      </div>
    </footer>
  )
}
