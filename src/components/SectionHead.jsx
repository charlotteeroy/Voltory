import { eyebrowStyle, goldRule } from '../lib/layout.js'

/** En-tête de section : surtitre doré, trait, titre et chapeau optionnel. */
export default function SectionHead({ eyebrow, title, intro, onDark = false, center = false, mb = '44px' }) {
  return (
    <div
      style={{
        maxWidth: '60ch',
        marginBottom: mb,
        marginLeft: center ? 'auto' : undefined,
        marginRight: center ? 'auto' : undefined,
        textAlign: center ? 'center' : undefined,
      }}
    >
      <span style={eyebrowStyle(onDark)}>{eyebrow}</span>
      <hr style={{ ...goldRule, margin: center ? '16px auto 20px' : goldRule.margin }} />
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
          letterSpacing: '-.02em',
          lineHeight: 1.1,
          margin: 0,
          textWrap: 'balance',
          color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: onDark ? 'var(--text-on-dark-soft)' : 'var(--text-body)',
            margin: '18px 0 0',
          }}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
