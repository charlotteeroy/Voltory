import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { FeatureGrid } from '../components/ServiceBlocks.jsx'
import StepsSection from '../components/StepsSection.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'

const INTERVENTIONS = [
  {
    icon: Icons.key,
    title: 'Audit avant achat',
    text: "Un état des lieux de l'installation avant d'acheter : ce qui est sûr, ce qui est à reprendre, et ce que cela représente.",
  },
  {
    icon: Icons.zap,
    title: 'Tableau électrique',
    text: 'Remplacement ou mise en conformité du tableau : protections adaptées, circuits repérés, une installation claire et sécurisée.',
  },
  {
    icon: Icons.home,
    title: 'Rénovation complète',
    text: "Reprise de l'installation de A à Z, en maison comme en appartement, dans le respect de vos lieux et de vos décors.",
  },
  {
    icon: Icons.layers,
    title: 'Cuisine, salle de bain, extension',
    text: "Adaptation de l'électricité à vos travaux : circuits spécialisés, éclairage, pergola, dépendances.",
  },
  {
    icon: Icons.bulb,
    title: 'Éclairage intérieur & extérieur',
    text: "Éclairage d'ambiance, corniches lumineuses, mise en valeur des façades, terrasses et jardins.",
  },
  {
    icon: Icons.network,
    title: 'Domotique & réseaux',
    text: "Pilotage de l'éclairage et du chauffage, prises RJ45 et réseau informatique de la maison.",
  },
]

export default function Electricite({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Électricité générale"
        title="Une installation sûre, du tableau à la dernière prise"
        intro="Rénovation, mise aux normes, tableau électrique, éclairage : nous intervenons chez vous, en neuf comme en rénovation, à Cholet et dans un rayon d'environ 50 km."
        img="/assets/hero/01-salon.jpg"
        primary={{ label: 'Demander un devis', onClick: () => navigate('contact') }}
        secondary={{ label: 'Voir nos réalisations', onClick: () => scrollToId('realisations') }}
      />

      <section style={{ background: 'var(--surface-card)', padding: '96px 0' }}>
        <div style={WRAP}>
          <SectionHead
            eyebrow="Nos interventions"
            title="Du diagnostic à la rénovation complète"
            intro="Des installations conformes, pensées pour durer — et un électricien qui prend le temps de vous expliquer ce qu'il fait."
          />
          <FeatureGrid items={INTERVENTIONS} />
        </div>
      </section>

      <StepsSection background="var(--surface-page)" />

      <LatestProjects
        metier="electricite"
        intro="Maisons, appartements, demeures de caractère : un aperçu de nos derniers chantiers. Cliquez pour voir toutes les photos."
      />

      <CtaBand
        onContact={() => navigate('contact')}
        title="Un projet électrique ?"
        text="Rénovation, mise aux normes, nouveau tableau : parlons-en. Étude et devis sans engagement."
        label="Demander mon devis"
      />
    </div>
  )
}
