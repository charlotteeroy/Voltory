import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Simulator from '../components/Simulator.jsx'
import { Chips, FeatureGrid } from '../components/ServiceBlocks.jsx'
import Timeline from '../components/Timeline.jsx'
import { Perks } from '../components/Method.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import { BEFORE_AFTER } from '../lib/data.js'

/* Déroulé d'un projet solaire — repris du devis type (centrale 3 kWc). */
const PROJECT_STEPS = [
  { title: 'Étude', text: 'Rentabilité calculée sur votre consommation réelle.' },
  { title: 'Démarches', text: 'Dossier Enedis et mairie : on s’en occupe.' },
  { title: 'Pose', text: 'Panneaux 500 W, sur toiture ou au sol.', tag: 'Garantie 25 ans' },
  { title: 'Raccordement', text: 'Micro-onduleurs, protections, mise à la terre.', tag: 'Garantie 12 ans' },
  { title: 'Mise en service', text: 'Tests de production, suivi en temps réel.' },
  { title: 'Entretien', text: 'Le premier passage est offert.' },
]

const OPTIONS = [
  { icon: Icons.zap, title: 'Routeur solaire', text: 'Votre surplus chauffe le ballon d’eau chaude.' },
  { icon: Icons.battery, title: 'Batterie 5 kWh', text: 'L’énergie du jour, utilisée le soir.' },
  { icon: Icons.car, title: 'Borne de recharge', text: 'Roulez avec votre propre électricité.' },
]

export default function Photovoltaique({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Panneaux photovoltaïques"
        title="Produisez votre propre électricité"
        intro="Du solaire dimensionné sur votre consommation réelle, démarches comprises."
        img="/assets/real-solaire-toiture.webp"
        primary={{ label: 'Estimer mes économies', onClick: () => scrollToId('simulateur') }}
        secondary={{ label: 'Demander une étude', onClick: () => navigate('contact') }}
      />

      <Simulator id="simulateur" onStudy={() => navigate('contact')} />

      {/* Avant / après + pose au sol */}
      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Nos poses" title="Sur votre toit… ou au sol" mb="36px" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '20px' }}>
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
          <SectionHead eyebrow="Clé en main" title="Votre projet, de l'étude à l'entretien" mb="44px" />
          <Timeline steps={PROJECT_STEPS} />
          <div style={{ marginTop: '30px' }}>
            <Perks />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Les options" title="Consommez davantage votre électricité" mb="36px" />
          <FeatureGrid items={OPTIONS} min="240px" />
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
