import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import { SELF_PROOF } from '../lib/data.js'

/**
 * « Nous utilisons ce que nous installons » — la preuve par l'exemple.
 * Trois faits vérifiables sur l'entreprise elle-même, appuyés par la vue
 * aérienne de l'agence et de sa toiture photovoltaïque.
 */
export default function SelfProof() {
  return (
    <section
      style={{
        background: 'var(--surface-brand-deep)',
        color: 'var(--text-on-dark)',
        padding: '96px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          top: '-240px',
          right: '-140px',
          background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
          opacity: 0.14,
          pointerEvents: 'none',
        }}
      />

      <div style={{ ...WRAP, position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(36px,5vw,64px)',
            alignItems: 'center',
          }}
        >
          {/* Discours + preuves */}
          <div style={{ flex: '1 1 400px', minWidth: 0 }}>
            <span style={eyebrowStyle(true)}>{SELF_PROOF.eyebrow}</span>
            <hr style={goldRule} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.08,
                margin: 0,
                color: 'var(--text-on-dark)',
                textWrap: 'balance',
              }}
            >
              {SELF_PROOF.title}
            </h2>
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.65,
                color: 'var(--text-on-dark-soft)',
                margin: '20px 0 0',
                maxWidth: '48ch',
              }}
            >
              {SELF_PROOF.intro}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginTop: '36px',
              }}
            >
              {SELF_PROOF.items.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    padding: '22px 0',
                    borderTop: i === 0 ? 'none' : '1px solid var(--border-on-dark)',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(253,190,3,.14)',
                      color: 'var(--or-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '16.5px',
                        letterSpacing: '-.01em',
                        color: 'var(--text-on-dark)',
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.6,
                        color: 'var(--text-on-dark-soft)',
                        margin: '7px 0 0',
                        maxWidth: '44ch',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vue de l'agence */}
          <div style={{ flex: '1 1 340px', minWidth: 0 }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--e3)',
                border: '1px solid var(--border-on-dark)',
              }}
            >
              <img
                src="assets/agence-aerien.png"
                alt="Vue aérienne de l'agence Voltory à Cholet et de sa toiture photovoltaïque"
                loading="lazy"
                style={{ width: '100%', display: 'block', aspectRatio: '4 / 3', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(7,58,67,.78))',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'absolute', left: '22px', right: '22px', bottom: '20px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: 'var(--ls-eyebrow)',
                    textTransform: 'uppercase',
                    color: 'var(--or-400)',
                  }}
                >
                  Notre agence · Cholet
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: 'var(--blanc)',
                    marginTop: '6px',
                    lineHeight: 1.35,
                  }}
                >
                  Un bâtiment qui produit sa propre énergie
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(1.05rem,1.9vw,1.3rem)',
            lineHeight: 1.5,
            letterSpacing: '-.01em',
            color: 'var(--text-on-dark)',
            margin: '56px 0 0',
            paddingTop: '36px',
            borderTop: '1px solid var(--border-on-dark)',
            maxWidth: '68ch',
            textWrap: 'balance',
          }}
        >
          {SELF_PROOF.outro}
        </p>
      </div>
    </section>
  )
}
