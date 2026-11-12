import { WRAP } from '../lib/layout.js'
import { BEFORE_AFTER } from '../lib/data.js'
import SectionHead from './SectionHead.jsx'
import BeforeAfter from './BeforeAfter.jsx'

/** Grille de comparateurs avant / après — `keys` choisit les chantiers montrés. */
export default function BeforeAfterSection({
  keys = ['tableau', 'chateau', 'toiture'],
  eyebrow = 'Avant / après',
  title = 'Découvrez les avant-après de nos réalisations',
  background = 'var(--surface-card)',
}) {
  return (
    <section style={{ background, padding: '88px 0' }}>
      <div style={WRAP}>
        <SectionHead eyebrow={eyebrow} title={title} mb="36px" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          {keys.map((k) => {
            const b = BEFORE_AFTER[k]
            return <BeforeAfter key={k} before={b.before} after={b.after} alt={b.title} caption={b.title} height="360px" />
          })}
        </div>
      </div>
    </section>
  )
}
