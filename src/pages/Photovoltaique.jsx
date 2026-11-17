import { WRAP } from '../lib/layout.js'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Simulator from '../components/Simulator.jsx'
import { CheckList, Chips } from '../components/ServiceBlocks.jsx'
import Timeline from '../components/Timeline.jsx'
import { PerksBar } from '../components/Method.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import { BEFORE_AFTER } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'

/* Déroulé d'un projet solaire — repris du devis type (centrale 3 kWc). */
const PROJECT_STEPS = [
  { title: 'Étude', meta: 'Gratuite', text: 'Sur votre consommation réelle.' },
  { title: 'Démarches', meta: 'Incluses', text: 'Enedis et mairie, on s’en occupe.' },
  { title: 'Pose', meta: 'Garantie 25 ans', text: 'Panneaux 500 W, toit ou sol.' },
  { title: 'Raccordement', meta: 'Garantie 12 ans', text: 'Micro-onduleurs et protections.' },
  { title: 'Mise en service', meta: 'Suivi en direct', text: 'Production visible en temps réel.' },
  { title: 'Entretien', meta: '1er offert', text: 'Panneaux propres, production maximale.' },
]

/* Ce que montre l'application de suivi (section « Pilotez votre énergie »). */
const SUIVI = ['Votre production', 'Votre consommation', "Votre niveau d'autonomie", 'Vos économies réalisées']

/* Écran de téléphone stylisé : illustration de l'application de suivi (valeurs d'exemple).
   À remplacer par une vraie capture de l'application si Félicien en fournit une. */
function PhoneMockup() {
  const tile = {
    background: 'rgba(255,255,255,.07)',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: '14px',
    padding: '12px 14px',
  }
  const label = { fontSize: '11.5px', color: 'var(--text-on-dark-soft)' }
  const value = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '22px', marginTop: '2px' }
  return (
    <div
      aria-hidden="true"
      style={{
        width: 'min(300px,100%)',
        margin: '0 auto',
        background: 'var(--petrole-900)',
        borderRadius: '40px',
        padding: '14px',
        boxShadow: 'var(--e3)',
        border: '6px solid #10282c',
      }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: '28px',
          background: 'linear-gradient(180deg,var(--petrole-700),var(--petrole-900))',
          color: 'var(--text-on-dark)',
          padding: '22px 16px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div style={{ ...label, display: 'flex', justifyContent: 'space-between' }}>
          <span>Aujourd'hui</span>
          <span style={{ color: 'var(--or-400)' }}>● En direct</span>
        </div>
        <div style={{ ...tile, textAlign: 'center', padding: '18px 14px' }}>
          <div style={{ color: 'var(--or-400)', display: 'flex', justifyContent: 'center' }}>{Icons.sun}</div>
          <div style={{ ...value, fontSize: '30px' }}>3,4 kW</div>
          <div style={label}>Production solaire</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={tile}>
            <div style={label}>Produit</div>
            <div style={value}>14,2</div>
            <div style={label}>kWh</div>
          </div>
          <div style={tile}>
            <div style={label}>Consommé</div>
            <div style={value}>11,8</div>
            <div style={label}>kWh</div>
          </div>
        </div>
        <div style={tile}>
          <div style={{ ...label, display: 'flex', justifyContent: 'space-between' }}>
            <span>Autonomie</span>
            <span style={{ color: 'var(--text-on-dark)', fontWeight: 600 }}>78 %</span>
          </div>
          <div style={{ height: '8px', borderRadius: '99px', background: 'rgba(255,255,255,.12)', marginTop: '10px' }}>
            <div style={{ width: '78%', height: '100%', borderRadius: '99px', background: 'var(--or-500)' }} />
          </div>
        </div>
        <div style={tile}>
          <div style={label}>Économies ce mois-ci</div>
          <div style={value}>42 €</div>
        </div>
      </div>
    </div>
  )
}

export default function Photovoltaique({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Panneaux photovoltaïques"
        title="Produisez votre propre électricité"
        intro="Du solaire dimensionné sur votre consommation réelle, démarches comprises."
        img="/assets/real-solaire-toiture.webp"
        primary={{ label: 'Demander une étude', onClick: () => navigate('contact') }}
      />

      <Simulator id="simulateur" onStudy={() => navigate('contact')} />

      {/* Avant / après + pose au sol */}
      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Nos poses" title="Sur votre toit… ou au sol" mb="36px" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))', gap: '20px' }}>
            <BeforeAfter
              before={BEFORE_AFTER.toiture.before}
              after={BEFORE_AFTER.toiture.after}
              alt="Toiture tuiles"
              caption="Toiture tuiles — avant / après"
              height="380px"
            />
            <figure style={{ margin: 0 }}>
              <img
                src="/assets/chantiers/gur-sol/01.jpg"
                alt="Centrale au sol sur structures lestées"
                loading="lazy"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 'var(--r-lg)',
                  boxShadow: 'var(--e2)',
                }}
              />
              <figcaption style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '10px' }}>
                Centrale au sol — structures lestées, sans fixation dans le terrain
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-page)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Clé en main" title="Votre projet, de l'étude à l'entretien" mb="36px" />
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-lg)',
              boxShadow: 'var(--e1)',
              padding: 'clamp(26px,3.4vw,44px)',
            }}
          >
            <Timeline steps={PROJECT_STEPS} />
            <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '40px 0 28px' }} />
            <PerksBar />
          </div>
        </div>
      </section>

      {/* Suivi de production : l'application */}
      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <SectionHead
              eyebrow="Suivi de production"
              title="Pilotez votre énergie en toute transparence"
              intro={"Sur l'application, vous suivez en temps réel\u00a0:"}
              mb="24px"
            />
            <CheckList items={SUIVI} />
            <p style={{ fontSize: '15.5px', lineHeight: 1.6, color: 'var(--text-muted)', margin: '24px 0 0', maxWidth: '52ch' }}>
              Vous repérez les meilleurs moments pour consommer et vous profitez de chaque kWh produit.
              Objectif : consommer le plus possible de votre propre électricité et alléger vos
              factures.
            </p>
          </div>
          <div style={{ flex: '1 1 280px' }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Entretien VOLTORY+ */}
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-dark)', padding: '80px 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 380px' }}>
            <SectionHead
              onDark
              mb="0"
              eyebrow="Entretien VOLTORY+"
              title="Des panneaux propres produisent plus"
              intro="Sans entretien, une installation perd 5 à 10 % de sa production."
            />
          </div>
          <div style={{ flex: '1 1 340px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.4rem,2.4vw,1.8rem)',
                color: 'var(--or-400)',
                marginBottom: '16px',
              }}
            >
              Le premier entretien est offert
            </div>
            <Chips items={['Nettoyage des panneaux', 'Contrôle de sécurité', 'Rapport de performance']} onDark />
          </div>
        </div>
      </section>

      <LatestProjects metier="photovoltaique" background="var(--surface-page)" />

      <CtaBand
        onContact={() => navigate('contact')}
        title="Et si vous produisiez votre électricité ?"
        text="Étude de rentabilité gratuite, sans engagement."
      />
    </div>
  )
}
