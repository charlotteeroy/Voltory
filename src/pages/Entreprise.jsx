import { WRAP } from '../lib/layout.js'
import { CLIENTS, ENG_COL_A, ENG_COL_B } from '../lib/data.js'
import Button from '../components/ds/Button.jsx'
import Card from '../components/ds/Card.jsx'
import StatCard from '../components/ds/StatCard.jsx'

/* Équipe (noms et rôles transmis par Félicien, 13/11/2026). Portraits carrés 480 px
   sur fond de mur clair ; celui d'Olivier reprend l'ancien détourage sur un fond assorti. */
const TEAM = [
  { img: '/assets/equipe/felicien.jpg', name: 'Félicien Gury', role: "Cogérant, responsable d'activité & référent technique" },
  { img: '/assets/equipe/olivier.jpg', name: 'Olivier Gury', role: "Cogérant, maître d'œuvre" },
  { img: '/assets/equipe/patrice.jpg', name: 'Patrice', role: "Technicien d'intervention en électricité" },
  { img: '/assets/equipe/gery.jpg', name: 'Gery', role: "Technicien d'intervention en électricité" },
]

const ON_SITE = [
  { img: '/assets/chantiers/ric-appartement/05.jpg', pos: 'center 30%' },
  { img: '/assets/chantiers/ric-facade/02.jpg', pos: 'center 35%' },
  { img: '/assets/chantiers/gur-sol/04.jpg', pos: 'center' },
  { img: '/assets/chantiers/ric-cuisine/05.jpg', pos: 'center' },
]

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
        flex: '1 1 0',
        minWidth: 0,
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
            padding: 'clamp(16px,4.5vw,22px)',
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
              fontWeight: 600,
            }}
          >
            ✓
          </span>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(14px,4vw,15.5px)',
              lineHeight: 1.4,
              color: dark ? 'var(--blanc)' : 'var(--text-strong)',
              marginTop: '14px',
              overflowWrap: 'break-word',
              hyphens: 'auto',
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
                fontWeight: 600,
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
        {/* 4 colonnes sur ordinateur et tablette, 2 × 2 sur mobile : jamais de carte seule sur sa ligne. */}
        <div
          style={{
            ...WRAP,
            maxWidth: '920px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(140px,100%),1fr))',
            gap: 'clamp(12px,2.5vw,20px)',
          }}
        >
          <StatCard value="2007" label="année de création" />
          <StatCard value="3" label="métiers complémentaires" />
          <StatCard value="1" label="interlocuteur, du début à la fin" />
          <StatCard value="≈50" unit="km" label="d'intervention autour de Cholet" />
        </div>
      </section>

      {/* Équipe */}
      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <div
            style={{
              flex: '1 1 380px',
              minHeight: '440px',
              alignSelf: 'stretch',
              borderRadius: 'var(--r-xl)',
              backgroundImage: "url('/assets/equipe/felicien-agence.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              boxShadow: 'var(--e2)',
            }}
            role="img"
            aria-label="Félicien Gury devant l'agence Voltory de Cholet"
          />
          <div style={{ flex: '1 1 380px' }}>
            {eyebrow('Électriciens à Cholet')}
            <hr style={rule} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.8rem,3.2vw,2.5rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              Notre équipe
            </h2>
            {/* 4 portraits sur une ligne quand la place le permet, 2 × 2 sur mobile. */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(118px,1fr))',
                gap: '24px 16px',
                margin: '28px 0 32px',
              }}
            >
              {TEAM.map((m) => (
                <div key={m.img} style={{ textAlign: 'center', minWidth: 0 }}>
                  <div
                    style={{
                      width: '112px',
                      height: '112px',
                      margin: '0 auto',
                      borderRadius: '50%',
                      background: 'var(--or-100)',
                      overflow: 'hidden',
                      boxShadow: 'var(--e1)',
                    }}
                  >
                    <img
                      src={m.img}
                      alt={`${m.name}, ${m.role}`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14.5px', marginTop: '10px' }}>
                    {m.name}
                  </div>
                  <div style={{ fontSize: '12.5px', lineHeight: 1.4, color: 'var(--text-muted)', marginTop: '2px', textWrap: 'balance' }}>
                    {m.role}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
              {ON_SITE.map((o) => (
                <div
                  key={o.img}
                  style={{
                    aspectRatio: '3 / 4',
                    borderRadius: 'var(--r-md)',
                    backgroundImage: `url('${o.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: o.pos,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau agence */}
      <section style={{ padding: 0 }}>
        {/* Hauteur minimale (et non fixe) : le texte agrandit le bandeau au lieu d'en déborder. */}
        <div
          style={{
            position: 'relative',
            minHeight: 'clamp(260px,42vw,460px)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/assets/agence-aerien.jpg"
            alt="L'agence Voltory à Cholet, toiture photovoltaïque"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(0,95,111,.86), rgba(0,95,111,.55) 60%, rgba(0,95,111,.15))',
            }}
          />
          <div style={{ position: 'relative', width: '100%', padding: '40px 0' }}>
            <div style={{ ...WRAP, width: '100%' }}>
              <div style={{ maxWidth: '34ch', color: 'var(--text-on-dark)' }}>
                {eyebrow('Notre agence · Cholet', true)}
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
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
                fontWeight: 600,
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
                fontWeight: 600,
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
              minWidth: 0,
              display: 'flex',
              gap: 'clamp(12px,3vw,20px)',
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
              fontWeight: 600,
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
