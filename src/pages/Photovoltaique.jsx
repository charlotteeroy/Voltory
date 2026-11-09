import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Simulator from '../components/Simulator.jsx'
import { CheckList, FeatureGrid, ScopeGrid } from '../components/ServiceBlocks.jsx'
import StepsSection from '../components/StepsSection.jsx'
import GoodToKnow from '../components/GoodToKnow.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'

const WHY = [
  {
    icon: Icons.doc,
    title: 'Démarches administratives gérées',
    text: 'Constitution et dépôt du dossier de raccordement Enedis, déclaration en mairie, suivi des échanges avec les organismes : gardez l’esprit tranquille.',
  },
  {
    icon: Icons.layers,
    title: 'Une installation évolutive',
    text: 'Commencez simple et voyez comment elle produit. Batterie, panneaux supplémentaires, borne de recharge : elle évolue avec vos besoins.',
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

/* Contenu d'une centrale clé en main — repris du devis type (centrale 3 kWc). */
const SCOPE = [
  {
    title: 'La production',
    items: [
      'Panneaux solaires de 500 W',
      'Garantie constructeur 25 ans',
      'Pose sur toiture ou au sol (structures lestées)',
    ],
  },
  {
    title: 'La conversion & le suivi',
    items: [
      'Micro-onduleurs : une ombre sur un panneau ne pénalise pas les autres',
      'Garantie constructeur 12 ans',
      'Suivi de votre production en temps réel',
    ],
  },
  {
    title: 'Protections & raccordement',
    items: [
      'Coffret de protection photovoltaïque',
      'Différentiels, disjoncteurs et parafoudre',
      'Mise à la terre de toute l’installation',
      'Câbles sous goulotte jusqu’au tableau',
    ],
  },
  {
    title: 'Mise en service & chantier',
    items: [
      'Tests de production et de bon fonctionnement',
      'Paramétrage du suivi de production',
      'Chantier nettoyé, déchets évacués en filière agréée',
    ],
  },
]

/* Options pour augmenter l'autoconsommation. */
const OPTIONS = [
  {
    icon: Icons.zap,
    title: 'Routeur solaire',
    text: 'Le chauffe-eau représente 15 à 25 % de la consommation d’une maison. Plutôt que de revendre votre surplus, le routeur l’envoie automatiquement chauffer votre ballon d’eau chaude.',
  },
  {
    icon: Icons.battery,
    title: 'Batterie de stockage',
    text: 'Une batterie de 5 kWh conserve l’électricité produite en journée pour alimenter la maison le soir et la nuit.',
  },
  {
    icon: Icons.car,
    title: 'Borne de recharge',
    text: 'Rechargez votre véhicule avec l’électricité de vos propres panneaux.',
  },
]

const MAINTENANCE = [
  'Nettoyage professionnel de vos panneaux',
  'Contrôle de sécurité de toute l’installation électrique',
  'Rapport de performance de votre centrale',
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
            eyebrow="Une centrale clé en main"
            title="Tout est compris, et détaillé sur votre devis"
            intro="Matériel, pose, raccordement, mise en service et démarches : chaque poste apparaît ligne par ligne. Vous savez exactement ce que vous payez."
          />
          <ScopeGrid groups={SCOPE} />
        </div>
      </section>

      <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={WRAP}>
          <SectionHead
            eyebrow="Les options"
            title="Consommez davantage votre propre électricité"
            intro="Chaque kilowattheure consommé chez vous plutôt que revendu vous rapporte davantage. Ces options s'ajoutent dès l'installation, ou plus tard."
          />
          <FeatureGrid items={OPTIONS} />
        </div>
      </section>

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
              intro="Poussières, pollens, feuilles, mousses : sans entretien, une installation perd en moyenne 5 à 10 % de sa production — et une simple salissure sur un coin de panneau peut suffire à en faire chuter le rendement. Une fois par an, nous passons entretenir votre centrale, sans que vous ayez à monter sur le toit."
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
              Entretien VOLTORY+, une fois par an
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

      <GoodToKnow background="var(--surface-page)" />

      <LatestProjects
        metier="photovoltaique"
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
