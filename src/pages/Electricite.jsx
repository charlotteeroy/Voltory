import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { CheckList, FeatureGrid } from '../components/ServiceBlocks.jsx'
import StepsSection from '../components/StepsSection.jsx'
import GoodToKnow from '../components/GoodToKnow.jsx'
import Button from '../components/ds/Button.jsx'
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

/* Remplacement du tableau électrique — détail repris du devis type de Félicien. */
const TABLEAU_STEPS = [
  'Repérage et identification de tous les circuits existants',
  'Recherche et séparation des neutres communs, pour protéger chaque circuit',
  'Pose d’un tableau électrique et d’une gaine technique (GTL) Schneider',
  'Protections différentielles adaptées à chacun de vos circuits',
  'Raccordement, organisation et étiquetage clair et durable',
  'Tests de fonctionnement et mise en service',
  'Nettoyage du chantier et évacuation des déchets',
]

/* TODO Félicien : confirmer la durée type (2 jours sur le devis d'exemple). */
const TABLEAU_NOTES = [
  {
    icon: Icons.bulb,
    title: 'Le courant chaque soir',
    text: "L'installation est remise sous tension à la fin de chaque journée : votre maison fonctionne normalement pendant le chantier.",
  },
  {
    icon: Icons.shield,
    title: 'Pas de mauvaise surprise',
    text: "Une anomalie invisible avant démontage ? On vous l'explique et on vous la chiffre avant toute intervention supplémentaire.",
  },
  {
    icon: Icons.clock,
    title: 'Une durée annoncée',
    text: 'Le nombre de jours est indiqué dès le devis — environ deux jours pour le tableau d’une maison.',
  },
]

function DarkNote({ n }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <span
        style={{
          flexShrink: 0,
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: 'rgba(253,190,3,.16)',
          color: 'var(--or-400)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {n.icon}
      </span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px' }}>{n.title}</div>
        <p style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'var(--text-on-dark-soft)', margin: '4px 0 0' }}>
          {n.text}
        </p>
      </div>
    </div>
  )
}

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

      {/* Zoom : remplacement du tableau électrique */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--surface-brand)',
          color: 'var(--text-on-dark)',
          padding: '96px 0',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            top: '-200px',
            right: '-140px',
            background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
            opacity: 0.14,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            ...WRAP,
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ flex: '1 1 380px' }}>
            <SectionHead
              onDark
              mb="36px"
              eyebrow="Zoom sur · Le tableau électrique"
              title="Un tableau neuf, clair et sécurisé"
              intro="Remplacer le tableau remet votre installation en sécurité et protège les personnes comme les équipements. Vous gagnez un tableau organisé, adapté à vos usages d'aujourd'hui… et de demain."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {TABLEAU_NOTES.map((n) => (
                <DarkNote key={n.title} n={n} />
              ))}
            </div>
          </div>
          <div
            style={{
              flex: '1 1 380px',
              background: 'var(--surface-card)',
              color: 'var(--text-strong)',
              borderRadius: 'var(--r-lg)',
              padding: 'clamp(26px,3vw,36px)',
              boxShadow: 'var(--e3)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>
              Ce que comprend l'intervention
            </div>
            <CheckList items={TABLEAU_STEPS} />
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', margin: '20px 0 24px' }}>
              Il s'agit du remplacement et de la réorganisation du tableau existant, pas d'une
              réfection complète de l'installation du logement.
            </p>
            <Button variant="primary" full onClick={() => navigate('contact')}>
              Demander un devis pour mon tableau
            </Button>
          </div>
        </div>
      </section>

      <StepsSection background="var(--surface-page)" />

      <GoodToKnow />

      <LatestProjects
        metier="electricite"
        background="var(--surface-page)"
        intro="Maisons, appartements, demeures de caractère : un aperçu de nos derniers chantiers. Cliquez pour voir toutes les photos."
      />

      {/* Passerelle vers le photovoltaïque (remise clients) */}
      <section style={{ background: 'var(--surface-card)', padding: '72px 0' }}>
        <div
          style={{
            ...WRAP,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '28px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 420px', maxWidth: '62ch' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.4rem,2.4vw,1.8rem)',
                letterSpacing: '-.02em',
                margin: 0,
              }}
            >
              Déjà client ? 200 € de remise sur votre centrale solaire
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-body)', margin: '12px 0 0' }}>
              Les clients Voltory bénéficient de 200 € TTC de remise sur l'installation de leur
              centrale photovoltaïque. Estimez vos économies en quelques secondes.
            </p>
          </div>
          <Button variant="ghost" onClick={() => navigate('photovoltaique')}>
            Estimer mes économies →
          </Button>
        </div>
      </section>

      <CtaBand
        onContact={() => navigate('contact')}
        title="Un projet électrique ?"
        text="Rénovation, mise aux normes, nouveau tableau : parlons-en. Étude et devis sans engagement."
        label="Demander mon devis"
      />
    </div>
  )
}
