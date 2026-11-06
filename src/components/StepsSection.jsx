import { WRAP } from '../lib/layout.js'
import { STEPS } from '../lib/data.js'
import StepCard from './ds/StepCard.jsx'
import SectionHead from './SectionHead.jsx'

/** Les quatre temps du chantier — repris sur chaque page métier. */
export default function StepsSection({ background = 'var(--surface-card)' }) {
  return (
    <section style={{ background, padding: '96px 0' }}>
      <div style={WRAP}>
        <SectionHead eyebrow="Les quatre temps du chantier" title="Un interlocuteur unique, à chaque étape" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: '22px',
          }}
        >
          {STEPS.map((st) => (
            <StepCard key={st.n} number={st.n} title={st.t}>
              {st.d}
            </StepCard>
          ))}
        </div>
      </div>
    </section>
  )
}
