import { WRAP } from '../lib/layout.js'
import { CLIENTS, ENG_COL_A, ENG_COL_B } from '../lib/data.js'
import Button from '../components/ds/Button.jsx'
import Card from '../components/ds/Card.jsx'
import StatCard from '../components/ds/StatCard.jsx'

function eyebrow(label, onDark = false) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '.22em',
        textTransform: 'uppercase',
        color: onDark ? 'var(--or-400)' : 'var(--text-accent)',
      }}
    >
      {label}
    </span>
  )
}

const rule = {
  width: '48px',
  height: '2px',
  background: 'var(--or-500)',
  border: 'none',
  margin: '16px 0 20px',
}

/** Une colonne du marquee des engagements (défile en boucle). */
function EngColumn({ items, animation, dark }) {
  const loop = [...items, ...items]
  return (
    <div
      className="v-marquee"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        animation,
      }}
    >
      {loop.map((e, i) => (
        <div
          key={i}
          style={{
            background: dark ? 'var(--petrole-600)' : 'var(--surface-page)',
            border: dark ? 'none' : '1px solid var(--border-subtle)',
            borderRadius: 'var(--r-md)',
            padding: '22px',
            boxShadow: 'var(--e1)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: 'flex',
              width: '30px',
              height: '30px',
              borderRadius: 'var(--r-pill)',
              background: 'var(--or-500)',
              color: 'var(--petrole-900)',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            ✓
          </span>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '15.5px',
              lineHeight: 1.4,
              color: dark ? 'var(--blanc)' : 'var(--text-strong)',
              marginTop: '14px',
            }}
          >
            {e}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Entreprise({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      {/* Histoire */}
      <section style={{ background: 'var(--surface-page)', padding: '80px 0 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 360px' }}>
            {eyebrow('Une histoire de père en fils')}
            <hr style={rule} />
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem,4.2vw,3rem)',
                letterSpacing: '-.03em',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Une entreprise familiale,
              <br />
              proche de vous
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.65, color: 'var(--text-body)', margin: '20px 0 0' }}>
              Créée en 2007 par Olivier Gury, Voltory s'est bâtie sur le bouche-à-oreille et la
              confiance — avec une volonté simple : un travail sérieux, soigné et durable.
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-body)', margin: '16px 0 0' }}>
              Aujourd'hui, la transmission père-fils allie près de vingt ans d'expérience à une
              vision moderne : photovoltaïque, bornes de recharge et gestion intelligente de
              l'énergie. Nous vous accueillons dans notre nouvelle agence à Cholet.
            </p>
            <div style={{ marginTop: '28px' }}>
              <Button variant="ghost" onClick={() => navigate('contact')}>
                Rencontrer Félicien
              </Button>
            </div>
          </div>
          <div
            style={{
              flex: '1 1 360px',
              position: 'relative',
              minHeight: '400px',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--e2)',
            }}
          >
            <img
              src="/assets/histoire-pere-fils.png"
              alt="Olivier & Félicien Gury"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(11,33,38,.45))',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                zIndex: 1,
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--text-on-dark)',
                background: 'rgba(7,58,67,.55)',
                backdropFilter: 'blur(6px)',
                border: '1px solid var(--border-on-dark)',
                padding: '8px 13px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              Olivier &amp; Félicien Gury — de père en fils
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--surface-page)', padding: '72px 0' }}>
        <div style={{ ...WRAP, display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <StatCard value="2007" label="année de création" style={{ width: '200px' }} />
          <StatCard value="3" label="métiers complémentaires" style={{ width: '200px' }} />
          <StatCard value="1" label="interlocuteur, du début à la fin" style={{ width: '200px' }} />
          <StatCard value="≈50" unit="km" label="d'intervention autour de Cholet" style={{ width: '200px' }} />
        </div>
      </section>

      {/* Bandeau agence */}
      <section style={{ padding: 0 }}>
        <div style={{ position: 'relative', height: 'clamp(260px,42vw,460px)', overflow: 'hidden' }}>
          <img
            src="/assets/agence-aerien.png"
            alt="L'agence Voltory à Cholet, toiture photovoltaïque"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(0,95,111,.82), rgba(0,95,111,.25) 60%, transparent)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ ...WRAP, width: '100%' }}>
              <div style={{ maxWidth: '34ch', color: 'var(--text-on-dark)' }}>
                {eyebrow('Notre agence · Cholet', true)}
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.6rem,3vw,2.4rem)',
                    letterSpacing: '-.02em',
                    lineHeight: 1.08,
                    margin: '14px 0 0',
                    color: 'var(--text-on-dark)',
                  }}
                >
                  Un bâtiment qui produit sa propre énergie
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-on-dark-soft)', margin: '14px 0 0' }}>
                  Nos locaux sont eux-mêmes équipés en photovoltaïque — nous appliquons d'abord chez
                  nous ce que nous installons chez vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={WRAP}>
          <div style={{ maxWidth: '56ch', marginBottom: '64px' }}>
            {eyebrow('Pour qui ?')}
            <hr style={{ ...rule, margin: '16px 0 24px' }} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.15,
                margin: 0,
                textWrap: 'balance',
              }}
            >
              Particuliers &amp; professionnels
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-body)', margin: '20px 0 0' }}>
              Chaque projet est étudié sur mesure, pour des besoins actuels comme à venir.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: '28px',
            }}
          >
            {CLIENTS.map((c) => (
              <Card key={c.title} icon={c.icon} title={c.title}>
                {c.text}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section style={{ background: 'var(--surface-card)', padding: '96px 0', overflow: 'hidden' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px' }}>
            {eyebrow('Nos engagements')}
            <hr style={rule} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Une relation de confiance,
              <br />
              durable
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-body)', margin: '18px 0 0', maxWidth: '40ch' }}>
              Faire entrer une entreprise chez soi est une décision importante. Voilà ce sur quoi
              vous pouvez compter.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 460px',
              display: 'flex',
              gap: '20px',
              height: '480px',
              overflow: 'hidden',
              WebkitMaskImage:
                'linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent)',
              maskImage: 'linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent)',
            }}
          >
            <EngColumn items={ENG_COL_A} animation="vScrollUp 26s linear infinite" dark={false} />
            <EngColumn items={ENG_COL_B} animation="vScrollDown 26s linear infinite" dark />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--surface-brand)',
          color: 'var(--text-on-dark)',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div style={WRAP}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem,3.4vw,2.6rem)',
              letterSpacing: '-.02em',
              margin: 0,
              color: 'var(--text-on-dark)',
            }}
          >
            Travaillons ensemble
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-on-dark-soft)', margin: '16px auto 28px', maxWidth: '42ch' }}>
            De la rénovation au patrimoine d'exception, parlons de votre lieu.
          </p>
          <Button variant="accent" size="lg" onClick={() => navigate('contact')}>
            Prendre contact
          </Button>
        </div>
      </section>
    </div>
  )
}
