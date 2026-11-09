import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Simulator from '../components/Simulator.jsx'
import { CheckList, FeatureGrid } from '../components/ServiceBlocks.jsx'
import StepsSection from '../components/StepsSection.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'

const WHY = [
  {
    icon: Icons.doc,
    title: 'Démarches administratives gérées',
    text: 'Déclaration en mairie, raccordement, échanges avec Enedis : on s’occupe de tout. Zéro paperasse pour vous.',
  },
  {
    icon: Icons.layers,
    title: 'Une installation évolutive',
    text: 'Commencez simple, sans option, et voyez comment elle produit. Vous pourrez ensuite ajouter des panneaux, une batterie ou un routeur.',
  },
  {
    icon: Icons.trend,
    title: 'Une étude de rentabilité honnête',
    text: 'Une installation dimensionnée sur votre consommation réelle — jamais vendue à la hâte.',
  },
  {
    icon: Icons.sun,
    title: 'Une pose pensée pour produire',
    text: 'Implantation étudiée selon l’orientation et les ombres portées (arbre, cheminée, pignon), installation soignée en surimposition.',
  },
]

const MAINTENANCE = [
  'Nettoyage des panneaux',
  'Sécurisation de l’installation',
  'Vérification complète : modules, connexions, production',
]

export default function Photovoltaique({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Panneaux photovoltaïques"
        title="Produisez votre propre électricité"
        intro="Un solaire en autoconsommation dimensionné sur votre consommation réelle — de l'étude de rentabilité au suivi de production, démarches comprises."
        img="/assets/real-solaire-toiture.webp"
        primary={{ label: 'Estimer mes économies', onClick: () => scrollToId('simulateur') }}
        secondary={{ label: 'Demander une étude', onClick: () => navigate('contact') }}
      />

      <Simulator id="simulateur" onStudy={() => navigate('contact')} />

      <section style={{ background: 'var(--surface-card)', padding: '96px 0' }}>
        <div style={WRAP}>
          <SectionHead
            eyebrow="Pourquoi choisir Voltory"
            title="Un solaire simple, évolutif et bien posé"
          />
          <FeatureGrid items={WHY} min="250px" />
        </div>
      </section>

      {/* Entretien & nettoyage */}
      <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div
          style={{
            ...WRAP,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 380px' }}>
            <SectionHead
              mb="0"
              eyebrow="Entretien & nettoyage"
              title="Des panneaux propres produisent plus"
              intro="Fientes, poussières, feuilles : il suffit d'une salissure ou d'une ombre sur un coin de panneau pour qu'un tiers de sa surface cesse de produire. Une fois par an, nous passons entretenir votre installation — sans que vous ayez à monter sur le toit."
            />
          </div>
          <div
            style={{
              flex: '1 1 360px',
              background: 'var(--petrole-600)',
              color: 'var(--text-on-dark)',
              borderRadius: 'var(--r-lg)',
              padding: 'clamp(26px,3vw,36px)',
              boxShadow: 'var(--e3)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '18px',
                marginBottom: '20px',
              }}
            >
              Un passage par an
            </div>
            <CheckList items={MAINTENANCE} onDark />
            <div
              style={{
                marginTop: '26px',
                paddingTop: '22px',
                borderTop: '1px solid var(--border-on-dark)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '20px',
                  color: 'var(--or-400)',
                }}
              >
                Le premier entretien est offert
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'var(--text-on-dark-soft)', margin: '8px 0 0' }}>
                Vous voyez comment nous entretenons et sécurisons votre centrale. Ensuite, un
                abonnement annuel — seulement si vous souhaitez continuer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StepsSection />

      <LatestProjects
        metier="photovoltaique"
        background="var(--surface-page)"
        intro="Toitures de particuliers et de professionnels équipées par nos soins."
      />

      <CtaBand
        onContact={() => navigate('contact')}
        title="Et si vous produisiez votre électricité ?"
        text="Une étude de rentabilité précise et gratuite, sur votre consommation réelle. Sans engagement."
      />
    </div>
  )
}
