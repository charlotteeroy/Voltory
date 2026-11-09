import { useState } from 'react'
import { WRAP } from '../lib/layout.js'
import Button from './ds/Button.jsx'

const fmt = (n) => Math.round(n).toLocaleString('fr-FR')

/** Simulateur d'économies solaires : facture → puissance, production, économies. */
export default function Simulator({ onStudy, id }) {
  const [bill, setBill] = useState(120)

  const annual = bill * 12
  const kwc = Math.max(3, Math.min(9, Math.round(annual / 520)))
  const production = Math.round(kwc * 1150)
  const savings = Math.round(annual * 0.55)

  const resultBoxLight = {
    background: 'var(--surface-page)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--r-md)',
    padding: '18px',
  }
  const resultNum = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px,5.5vw,30px)',
    color: 'var(--petrole-700)',
    lineHeight: 1,
    letterSpacing: '-.02em',
    whiteSpace: 'nowrap',
  }
  const resultLabel = { fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '7px' }

  return (
    <section
      id={id}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface-brand)',
        color: 'var(--text-on-dark)',
        padding: '96px 0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          bottom: '-220px',
          left: '-120px',
          background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          ...WRAP,
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '1 1 360px' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--or-400)',
            }}
          >
            Une preuve, pas une promesse
          </span>
          <hr
            style={{
              width: '48px',
              height: '2px',
              background: 'var(--or-500)',
              border: 'none',
              margin: '16px 0 20px',
            }}
          />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.9rem,3.4vw,2.7rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.06,
              margin: 0,
              color: 'var(--text-on-dark)',
            }}
          >
            Estimez vos économies
            <br />
            en quelques secondes
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: 'var(--text-on-dark-soft)',
              margin: '18px 0 0',
              maxWidth: '40ch',
            }}
          >
            Réglez votre facture actuelle — on vous montre la puissance conseillée et les économies
            réalistes. Étude précise gratuite, sans engagement.
          </p>
        </div>
        <div
          style={{
            flex: '1 1 360px',
            background: 'var(--surface-card)',
            color: 'var(--text-strong)',
            borderRadius: 'var(--r-lg)',
            padding: '32px',
            boxShadow: 'var(--e3)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '18px',
              color: 'var(--text-strong)',
            }}
          >
            Simulateur d'économies solaires
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              margin: '24px 0 8px',
            }}
          >
            <label
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-body)',
              }}
            >
              Votre facture d'électricité
            </label>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '22px',
                color: 'var(--petrole-700)',
              }}
            >
              {bill} €{' '}
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>
                / mois
              </span>
            </span>
          </div>
          <input
            type="range"
            min={40}
            max={400}
            step={10}
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11.5px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              marginTop: '4px',
            }}
          >
            <span>40 €</span>
            <span>400 €</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              marginTop: '26px',
            }}
          >
            <div style={{ background: 'var(--petrole-600)', borderRadius: 'var(--r-md)', padding: '18px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(22px,5.5vw,30px)',
                  color: 'var(--or-500)',
                  lineHeight: 1,
                  letterSpacing: '-.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {fmt(savings)}{' '}€
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-on-dark-soft)', marginTop: '7px' }}>
                économisés / an
              </div>
            </div>
            <div style={resultBoxLight}>
              <div style={resultNum}>
                {kwc} <span style={{ fontSize: '15px' }}>kWc</span>
              </div>
              <div style={resultLabel}>puissance conseillée</div>
            </div>
            <div style={resultBoxLight}>
              <div style={resultNum}>{fmt(production)}</div>
              <div style={resultLabel}>kWh produits / an</div>
            </div>
            <div style={resultBoxLight}>
              <div style={resultNum}>{fmt(savings * 20)}{' '}€</div>
              <div style={resultLabel}>économisés sur 20 ans</div>
            </div>
          </div>
          <div style={{ marginTop: '22px' }}>
            <Button variant="primary" full onClick={onStudy}>
              Affiner avec une étude gratuite
            </Button>
          </div>
          <p
            style={{
              fontSize: '11.5px',
              color: 'var(--text-muted)',
              margin: '12px 0 0',
              textAlign: 'center',
            }}
          >
            Estimation indicative pour le secteur choletais. Chiffrage précis après visite.
          </p>
        </div>
      </div>
    </section>
  )
}
