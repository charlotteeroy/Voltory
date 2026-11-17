import { WRAP, scrollToId } from '../lib/layout.js'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { CheckList, Chips, IconTiles, PhotoTiles } from '../components/ServiceBlocks.jsx'
import Method from '../components/Method.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Button from '../components/ds/Button.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import { BEFORE_AFTER } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'

const C = '/assets/chantiers'

/* Une intervention = un besoin du client (textes de Félicien, 17/11/2026). */
const INTERVENTIONS = [
  {
    title: 'Audit avant achat',
    text: "Comprendre et évaluer le coût d'une remise aux normes électrique simple.",
    img: `${C}/madeleine/03.jpg`,
  },
  {
    title: 'Tableau électrique',
    text: 'Remplacement complet\u00a0: protégez votre installation électrique.',
    img: `${C}/pas-tableau/01.jpg`,
    pos: 'center 25%',
  },
  {
    title: 'Cuisine & salle de bain',
    text: 'Rendre vos projets compatibles avec votre installation électrique.',
    img: `${C}/ric-appartement/07.jpg`,
  },
  {
    title: 'Extension & création',
    text: "Création et distribution d'un réseau électrique neuf.",
    img: `${C}/bou-renovation/05.jpg`,
  },
]

/* Équipements que nous installons (liste de Félicien). */
const EQUIPEMENTS = [
  { icon: Icons.outlet, title: 'Prises de courant' },
  { icon: Icons.bulb, title: 'Éclairage', text: 'Intérieur et extérieur' },
  { icon: Icons.network, title: 'Réseau RJ45', text: 'Câble Ethernet' },
  { icon: Icons.shutter, title: 'Pilotage des volets roulants' },
  { icon: Icons.waterHeater, title: "Ballon d'eau chaude électrique" },
  { icon: Icons.radiator, title: 'Radiateurs électriques' },
  { icon: Icons.fan, title: 'Ventilation VMC' },
  { icon: Icons.hob, title: 'Plaque à induction invisible' },
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
          <PhotoTiles items={INTERVENTIONS} min="250px" ratio="4 / 3" />
        </div>
      </section>

      {/* Zoom : remplacement du tableau électrique */}
      <section style={{ background: 'var(--surface-brand)', color: 'var(--text-on-dark)', padding: '88px 0' }}>
        <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          {/* Photos du tableau en portrait (3:4) : le cadre garde leurs proportions, sans recadrage. */}
          <div style={{ flex: '1 1 340px', maxWidth: '440px', margin: '0 auto' }}>
            <BeforeAfter
              before={BEFORE_AFTER.tableau.before}
              after={BEFORE_AFTER.tableau.after}
              alt="Tableau électrique"
              ratio="3 / 4"
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

      {/* Équipements installés (les avant / après restent dans « Nos réalisations »). */}
      <section style={{ background: 'var(--surface-page)', padding: '88px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Équipements" title="Ce que nous installons" mb="36px" />
          <IconTiles items={EQUIPEMENTS} min="260px" />
        </div>
      </section>

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
          <Button variant="ghost" onClick={() => navigate('photovoltaique', 'simulateur')}>
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
