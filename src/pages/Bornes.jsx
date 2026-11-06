import { WRAP, scrollToId } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import ServiceHero from '../components/ServiceHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import { CheckList, FeatureGrid } from '../components/ServiceBlocks.jsx'
import StepsSection from '../components/StepsSection.jsx'
import GoodToKnow from '../components/GoodToKnow.jsx'
import { LatestProjects } from '../components/Projects.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Button from '../components/ds/Button.jsx'

/* Les deux solutions qui couvrent les besoins d'un particulier. */
const SOLUTIONS = [
  {
    tag: 'La plus accessible',
    name: 'Prise renforcée',
    price: 'dès 349 € TTC',
    spec: "≈ 10 km d'autonomie récupérés par heure de charge",
    points: [
      'Idéale pour les trajets du quotidien',
      'Recharge la nuit, sur une prise dédiée et sécurisée',
      'Le budget le plus léger',
    ],
    dark: false,
  },
  {
    tag: 'La plus rapide',
    name: 'Borne de recharge',
    price: 'de 7 à 11 kW',
    spec: '≈ 4× plus rapide qu’une prise renforcée',
    points: [
      'Pour les gros rouleurs ou les foyers à deux véhicules',
      'Pilotage intelligent de la recharge',
      'Couplage possible avec vos panneaux solaires',
    ],
    dark: true,
  },
]

/* TODO Félicien : distance incluse à confirmer (3 m sur le flyer, 5 m évoqués à l'oral). */
const INCLUDED = [
  'Pose à moins de 3 m du tableau électrique*',
  'Protection électrique dédiée',
  'Câblage protégé sous tube',
]

const OPTIONS = [
  {
    icon: Icons.tool,
    title: 'Borne éloignée du tableau',
    text: 'Garage, allée, parking : la borne est posée où vous le souhaitez. Le câble supplémentaire est chiffré selon la distance.',
  },
  {
    icon: Icons.zap,
    title: 'Étude de puissance',
    text: 'On vérifie que votre abonnement et votre installation supportent la recharge, sans faire disjoncter la maison.',
  },
  {
    icon: Icons.sun,
    title: 'Couplage avec le solaire',
    text: 'Rechargez votre véhicule avec l’électricité produite par vos propres panneaux.',
  },
]

function SolutionCard({ s }) {
  const fg = s.dark ? 'var(--text-on-dark)' : 'var(--text-strong)'
  const soft = s.dark ? 'var(--text-on-dark-soft)' : 'var(--text-muted)'
  return (
    <div
      style={{
        flex: '1 1 340px',
        background: s.dark ? 'var(--petrole-600)' : 'var(--surface-card)',
        border: s.dark ? 'none' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--r-lg)',
        padding: 'clamp(26px,3vw,38px)',
        boxShadow: s.dark ? 'var(--e3)' : 'var(--e1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          alignSelf: 'flex-start',
          fontFamily: 'var(--font-display)',
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--petrole-900)',
          background: 'var(--or-500)',
          padding: '6px 12px',
          borderRadius: 'var(--r-pill)',
        }}
      >
        {s.tag}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem,2.4vw,1.9rem)',
          letterSpacing: '-.02em',
          color: fg,
          margin: '18px 0 0',
        }}
      >
        {s.name}
      </h3>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '20px',
          color: s.dark ? 'var(--or-400)' : 'var(--or-700)',
          margin: '8px 0 0',
        }}
      >
        {s.price}
      </div>
      <div
        style={{
          fontSize: '15px',
          color: soft,
          margin: '14px 0 22px',
          paddingBottom: '22px',
          borderBottom: `1px solid ${s.dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
        }}
      >
        {s.spec}
      </div>
      <CheckList items={s.points} onDark={s.dark} />
    </div>
  )
}

export default function Bornes({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <ServiceHero
        eyebrow="Bornes de recharge"
        title="Rechargez votre véhicule électrique à la maison"
        intro="Prise renforcée ou borne : on vous conseille la solution adaptée à vos trajets et à votre installation, posée en une journée, à un prix standard connu d'avance."
        img="/assets/real-borne-felicien.jpg"
        primary={{ label: 'Recevoir mon devis', onClick: () => navigate('contact') }}
        secondary={{ label: 'Comparer les solutions', onClick: () => scrollToId('solutions') }}
      />

      {/* Deux solutions */}
      <section id="solutions" style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
        <div style={WRAP}>
          <SectionHead
            eyebrow="Deux solutions"
            title="Laquelle vous correspond ?"
            intro="Pour un particulier, l'une de ces deux solutions suffit amplement. Les options viennent ensuite rendre la recharge plus confortable."
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'stretch' }}>
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.name} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Installation standard */}
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
            bottom: '-220px',
            left: '-120px',
            background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
            opacity: 0.16,
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
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '1 1 360px' }}>
            <SectionHead
              onDark
              mb="0"
              eyebrow="Un prix clair"
              title="Une installation standard, un prix connu d'avance"
              intro="Nous avons standardisé la pose pour vous envoyer un devis dès votre demande. Il est ensuite confirmé lors d'une visite sur place — parce qu'en électricité, chaque maison est différente."
            />
          </div>
          <div
            style={{
              flex: '1 1 360px',
              background: 'var(--surface-card)',
              color: 'var(--text-strong)',
              borderRadius: 'var(--r-lg)',
              padding: 'clamp(26px,3vw,36px)',
              boxShadow: 'var(--e3)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>
              Inclus dans l'installation standard
            </div>
            <CheckList items={INCLUDED} />
            <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--text-muted)', margin: '20px 0 24px' }}>
              * Implantation plus éloignée du tableau : supplément selon la distance, chiffré sur
              devis.
            </p>
            <Button variant="primary" full onClick={() => navigate('contact')}>
              Recevoir mon devis standard
            </Button>
          </div>
        </div>
      </section>

      {/* Options */}
      <section style={{ background: 'var(--surface-card)', padding: '96px 0' }}>
        <div style={WRAP}>
          <SectionHead eyebrow="Pour aller plus loin" title="Les options, selon votre projet" />
          <FeatureGrid items={OPTIONS} />
        </div>
      </section>

      {/* Tableau ancien → passerelle vers l'électricité générale */}
      <section style={{ background: 'var(--surface-page)', padding: '72px 0' }}>
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
              Votre tableau électrique est ancien ?
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-body)', margin: '12px 0 0' }}>
              C'est fréquent. Nous pouvons installer un coffret dédié à côté de votre tableau pour la
              recharge, ou profiter de l'intervention pour remettre votre tableau aux normes.
            </p>
          </div>
          <Button variant="ghost" onClick={() => navigate('electricite')}>
            Voir l'électricité générale →
          </Button>
        </div>
      </section>

      <StepsSection />

      <GoodToKnow background="var(--surface-page)" />

      <LatestProjects
        metier="bornes"
        intro="Prises renforcées et bornes posées chez nos clients. Cliquez pour voir les photos."
      />

      <CtaBand
        onContact={() => navigate('contact')}
        title="Vous passez à l'électrique ?"
        text="Recevez un devis standard pour votre prise renforcée ou votre borne, confirmé lors d'une visite sur place."
        label="Recevoir mon devis"
      />
    </div>
  )
}
