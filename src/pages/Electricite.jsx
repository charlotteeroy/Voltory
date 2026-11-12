import { WRAP, scrollToId } from '../lib/layout.js'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { CheckList, Chips, PhotoTiles } from '../components/ServiceBlocks.jsx'
import Method from '../components/Method.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Button from '../components/ds/Button.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import BeforeAfterSection from '../components/BeforeAfterSection.jsx'
import { BEFORE_AFTER } from '../lib/data.js'

const C = '/assets/chantiers'

const INTERVENTIONS = [
  { title: 'Tableau électrique', text: 'Remplacement & mise aux normes', img: `${C}/big-tableau/01.jpg` },
  { title: 'Rénovation complète', text: 'Maison ou appartement', img: `${C}/bou-renovation/01.jpg` },
  { title: 'Cuisine & salle de bain', text: 'Extension, pergola, dépendances', img: `${C}/ric-appartement/07.jpg` },
  { title: 'Éclairage', text: 'Intérieur & extérieur', img: `${C}/isr-hotel/01.jpg` },
  { title: 'Audit avant achat', text: "L'état réel de l'installation", img: `${C}/madeleine/03.jpg` },
  { title: 'Domotique & réseaux', text: 'Pilotage, interphonie, RJ45', img: `${C}/dragon/02.jpg` },
]

/* Remplacement du tableau — repris du devis type de Félicien. */
const TABLEAU_STEPS = [
  'Repérage de tous les circuits',
  'Séparation des neutres communs',
  'Tableau & GTL Schneider',
  'Protections adaptées à chaque circuit',
  'Étiquetage clair et durable',
  'Tests et mise en service',
]

/* TODO Félicien : confirmer la durée type (2 jours sur le devis d'exemple). */
const TABLEAU_CHIPS = ['Courant rétabli chaque soir', '≈ 2 jours', 'Imprévu ? Chiffré avant travaux']

export default function Electricite({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Électricité générale"
        title="Une installation sûre, du tableau à la dernière prise"
        intro="Rénovation, mise aux normes, éclairage — à Cholet et dans un rayon de 50 km."
        img="/assets/hero/01-salon.webp"
        primary={{ label: 'Demander un devis', onClick: () => navigate('contact') }}
        secondary={{ label: 'Voir nos réalisations', onClick: () => scrollToId('realisations') }}
      />

      <section style={{ background: 'var(--surface-card)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Nos interventions" title="Du diagnostic à la rénovation complète" mb="36px" />
          <PhotoTiles items={INTERVENTIONS} min="300px" height="250px" />
        </div>
      </section>

      {/* Zoom : remplacement du tableau électrique */}
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-dark)', padding: '88px 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 380px' }}>
            <BeforeAfter
              before={BEFORE_AFTER.tableau.before}
              after={BEFORE_AFTER.tableau.after}
              alt="Tableau électrique"
              height="480px"
            />
          </div>
          <div style={{ flex: '1 1 380px' }}>
            <SectionHead
              onDark
              mb="28px"
              eyebrow="Zoom sur · Le tableau électrique"
              title="Un tableau neuf, clair et sécurisé"
            />
            <CheckList items={TABLEAU_STEPS} onDark gap="10px" />
            <div style={{ margin: '26px 0 30px' }}>
              <Chips items={TABLEAU_CHIPS} onDark />
            </div>
            <Button variant="accent" onClick={() => navigate('contact')}>
              Devis pour mon tableau
            </Button>
          </div>
        </div>
      </section>

      <BeforeAfterSection keys={['chambre', 'chateau']} background="var(--surface-page)" />

      <Method />

      <LatestProjects metier="electricite" background="var(--surface-page)" />

      {/* Passerelle vers le photovoltaïque (remise clients) */}
      <section style={{ background: 'var(--surface-card)', padding: '56px 0' }}>
        <div
          style={{
            ...WRAP,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.25rem,2.2vw,1.6rem)',
              letterSpacing: '-.02em',
              margin: 0,
            }}
          >
            Déjà client ? <span style={{ color: 'var(--or-700)' }}>200 € offerts</span> sur votre centrale solaire
          </h3>
          <Button variant="ghost" onClick={() => navigate('photovoltaique')}>
            Estimer mes économies →
          </Button>
        </div>
      </section>

      <CtaBand
        onContact={() => navigate('contact')}
        title="Un projet électrique ?"
        text="Étude et devis sans engagement."
        label="Demander mon devis"
      />
    </div>
  )
}
