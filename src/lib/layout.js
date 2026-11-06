/** Conteneur de contenu unifié (1440px, gouttières fluides) — utilisé partout. */
export const WRAP = {
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 clamp(24px,5vw,72px)',
}

/** Surtitre (eyebrow) : petit label majuscule espacé. */
export const eyebrowStyle = (onDark = false) => ({
  fontFamily: 'var(--font-display)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  color: onDark ? 'var(--or-400)' : 'var(--text-accent)',
})

/** Le trait doré sous les surtitres. */
export const goldRule = {
  width: '48px',
  height: '2px',
  background: 'var(--or-500)',
  border: 'none',
  margin: '16px 0 20px',
}

/** Défilement doux vers une section de la page (ancres internes). */
export const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
