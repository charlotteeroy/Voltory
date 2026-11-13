import { WRAP } from '../lib/layout.js'
import { STEPS } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'
import SectionHead from './SectionHead.jsx'

/* Conditions communes à toutes les interventions (reprises des devis Voltory). */
const PERKS = [
  { icon: Icons.car, label: 'Déplacement offert sous 15 km' },
  { icon: Icons.layers, label: 'Chantier rendu propre' },
  { icon: Icons.doc, label: 'Paiement échelonné' },
  { icon: Icons.shield, label: 'Remise fidélité' },
]

/** Précisions sur les engagements (frais de déplacement, échéancier). */
function PerksNote({ style }) {
  return (
    <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '14px 0 0', ...style }}>
      Au-delà de 15 km autour de l'agence de Cholet : 8 € HT par tranche de 5 km. Acompte à la
      signature, solde à la réception des travaux.
    </p>
  )
}

/** Étiquettes d'engagements (déplacement, chantier, paiement, fidélité). */
export function Perks() {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '22px' }}>
        {PERKS.map((p) => (
          <span
            key={p.label}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px 9px 12px',
              borderRadius: 'var(--r-pill)',
              background: 'var(--or-100)',
              color: 'var(--petrole-800)',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            <span style={{ display: 'flex', fontSize: '17px' }}>{p.icon}</span>
            {p.label}
          </span>
        ))}
      </div>
      <PerksNote />
    </>
  )
}

/** Engagements en barre alignée (sous la frise de la page Photovoltaïque). */
export function PerksBar() {
  return (
    <>
      <div className="v-perks">
        {PERKS.map((p) => (
          <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                flexShrink: 0,
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'var(--or-100)',
                color: 'var(--petrole-800)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {p.icon}
            </span>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.35 }}>
              {p.label}
            </span>
          </div>
        ))}
      </div>
      <PerksNote style={{ marginTop: '18px' }} />
    </>
  )
}

/** Méthode + engagements, en une section compacte reprise sur chaque page métier. */
export default function Method({ background = 'var(--surface-card)' }) {
  // Les cartes d'étapes prennent la teinte opposée à la section pour rester lisibles.
  const cardBg = background === 'var(--surface-page)' ? 'var(--surface-card)' : 'var(--surface-page)'
  return (
    <section style={{ background, padding: '80px 0' }}>
      <div style={WRAP}>
        <SectionHead eyebrow="Notre méthode" title={'Un interlocuteur unique, à\u00a0chaque étape'} mb="36px" />
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
            gap: '14px',
          }}
        >
          {STEPS.map((st) => (
            <li
              key={st.n}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'flex-start',
                padding: '18px',
                borderRadius: 'var(--r-md)',
                background: cardBg,
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--petrole-600)',
                  color: 'var(--or-400)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {st.n}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15.5px', color: 'var(--text-strong)' }}>
                  {st.t}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '2px' }}>{st.d}</div>
              </div>
            </li>
          ))}
        </ol>
        <Perks />
      </div>
    </section>
  )
}
