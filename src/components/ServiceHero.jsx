import { WRAP, eyebrowStyle, goldRule } from '../lib/layout.js'
import Button from './ds/Button.jsx'

/** En-tête d'une page métier : photo plein cadre, titre, chapeau et deux actions. */
export default function ServiceHero({ eyebrow, title, intro, img, primary, secondary }) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--petrole-800)',
        color: 'var(--text-on-dark)',
        minHeight: 'clamp(440px,62vh,600px)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'vFade .8s var(--ease-out) both',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(4,30,34,.9) 0%, rgba(4,30,34,.72) 45%, rgba(4,30,34,.25) 100%), linear-gradient(0deg, rgba(4,30,34,.6), transparent 60%)',
        }}
      />
      <div style={{ ...WRAP, position: 'relative', zIndex: 1, width: '100%', paddingTop: '72px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '42rem' }}>
          <span style={eyebrowStyle(true)}>{eyebrow}</span>
          <hr style={goldRule} />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.3rem,4.4vw,3.4rem)',
              letterSpacing: '-.03em',
              lineHeight: 1.05,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem,1.3vw,1.1rem)',
              lineHeight: 1.6,
              color: 'var(--text-on-dark-soft)',
              margin: '18px 0 0',
              maxWidth: '50ch',
            }}
          >
            {intro}
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
            {primary && (
              <Button variant="accent" onClick={primary.onClick}>
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button variant="ghostDark" onClick={secondary.onClick}>
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
