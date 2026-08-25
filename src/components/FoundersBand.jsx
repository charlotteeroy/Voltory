import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import Button from './ds/Button.jsx'

/**
 * L'aspect humain de l'entreprise : les deux dirigeants, père et fils.
 * Remplace sur l'accueil le bloc « notre façon de travailler », qui reste
 * développé sur la page Entreprise.
 */
const FOUNDERS = [
  { name: 'Olivier Gury', role: 'Fondateur — depuis 2007' },
  { name: 'Félicien Gury', role: 'Gérant — votre interlocuteur' },
]

export default function FoundersBand({ navigate }) {
  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div
        style={{
          ...WRAP,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(36px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        {/* Portrait */}
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--e2)',
                background: 'var(--petrole-800)',
              }}
            >
              <img
                src="assets/histoire-pere-fils.png"
                alt="Olivier et Félicien Gury, les deux dirigeants de Voltory"
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 62%, rgba(11,33,38,.55))',
                  pointerEvents: 'none',
                }}
              />
            </div>

            <figcaption
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px 28px',
                marginTop: '20px',
              }}
            >
              {FOUNDERS.map((f) => (
                <div key={f.name} style={{ flex: '1 1 180px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '9px',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '15.5px',
                      color: 'var(--text-strong)',
                      letterSpacing: '-.01em',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--or-500)',
                        flexShrink: 0,
                      }}
                    />
                    {f.name}
                  </div>
                  <div
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.45,
                      color: 'var(--text-muted)',
                      marginTop: '4px',
                      paddingLeft: '17px',
                    }}
                  >
                    {f.role}
                  </div>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>

        {/* Récit */}
        <div style={{ flex: '1 1 380px', minWidth: 0 }}>
          <span style={eyebrowStyle()}>De père en fils</span>
          <hr style={goldRule} />
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.08,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Deux générations,
            <br />
            un seul interlocuteur
          </h2>

          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.65,
              color: 'var(--text-body)',
              margin: '22px 0 0',
              maxWidth: '46ch',
            }}
          >
            Olivier a créé Voltory en 2007. Son fils Félicien a repris le flambeau et pilote
            aujourd'hui les chantiers, du premier échange jusqu'au suivi de l'installation.
          </p>

          <p
            style={{
              fontSize: '15.5px',
              lineHeight: 1.65,
              color: 'var(--text-body)',
              margin: '16px 0 0',
              maxWidth: '46ch',
            }}
          >
            Une entreprise familiale à taille humaine, où vous parlez à la personne qui vient
            réellement travailler chez vous. C'est le sens du bouche-à-oreille qui nous fait
            vivre depuis bientôt vingt ans.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '32px' }}>
            <Button variant="primary" onClick={() => navigate('contact')}>
              Rencontrer Félicien
            </Button>
            <Button variant="ghost" onClick={() => navigate('entreprise')}>
              Notre histoire
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
