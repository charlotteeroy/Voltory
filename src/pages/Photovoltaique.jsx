import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Simulator from '../components/Simulator.jsx'
import { Chips, FeatureGrid, ScopeGrid } from '../components/ServiceBlocks.jsx'
import Method from '../components/Method.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'

/* Contenu d'une centrale clé en main — repris du devis type (centrale 3 kWc). */
const SCOPE = [
  { title: 'Production', items: ['Panneaux 500 W', 'Garantie 25 ans', 'Toiture ou sol'] },
  { title: 'Conversion & suivi', items: ['Micro-onduleurs', 'Garantie 12 ans', 'Suivi en temps réel'] },
  { title: 'Protections', items: ['Coffret photovoltaïque', 'Parafoudre', 'Mise à la terre'] },
  { title: 'Mise en service', items: ['Tests de production', 'Démarches Enedis', 'Chantier propre'] },
]

const OPTIONS = [
  { icon: Icons.zap, title: 'Routeur solaire', text: 'Votre surplus chauffe le ballon d’eau chaude.' },
  { icon: Icons.battery, title: 'Batterie 5 kWh', text: 'L’énergie du jour, utilisée le soir.' },
  { icon: Icons.car, title: 'Borne de recharge', text: 'Roulez avec votre propre électricité.' },
]

const WHY = [
  { icon: Icons.doc, title: 'Zéro paperasse', text: 'Enedis, mairie : on s’occupe de tout.' },
  { icon: Icons.layers, title: 'Évolutive', text: 'Commencez simple, complétez ensuite.' },
  { icon: Icons.trend, title: 'Étude honnête', text: 'Dimensionnée sur votre consommation réelle.' },
  { icon: Icons.sun, title: 'Pose optimisée', text: 'Orientation et ombres étudiées.' },
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

      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Clé en main" title="Tout est compris, et détaillé sur le devis" mb="36px" />
          <ScopeGrid groups={SCOPE} min="230px" />
        </div>
      </section>

      <section style={{ background: 'var(--surface-page)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Pourquoi Voltory" title="Simple, évolutif et bien posé" mb="36px" />
          <FeatureGrid items={WHY} min="220px" />
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

      <Method />

      <LatestProjects metier="photovoltaique" background="var(--surface-page)" />

      <CtaBand
        onContact={() => navigate('contact')}
        title="Et si vous produisiez votre électricité ?"
        text="Étude de rentabilité gratuite, sans engagement."
      />
    </div>
  )
}
