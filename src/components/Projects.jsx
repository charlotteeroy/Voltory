import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { WRAP } from '../lib/layout.js'
import { PROJECTS } from '../lib/data.js'
import SectionHead from './SectionHead.jsx'

/* Pop-up chantier : toutes les photos du projet + son descriptif. */
export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  /* Rendu dans <body> via portal : un ancêtre animé (transform) ferait
     sinon dériver le position:fixed et sortirait le pop-up de l'écran. */
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(7,58,67,.58)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px,3vw,40px)',
        animation: 'vFade .25s var(--ease-out) both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        style={{
          background: 'var(--surface-card)',
          borderRadius: 'var(--r-lg)',
          boxShadow: 'var(--e3, 0 24px 64px rgba(7,58,67,.35))',
          maxWidth: '980px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          animation: 'vRise .35s var(--ease-out) both',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '26px 28px 18px',
            background: 'var(--surface-card)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-flex',
                fontFamily: 'var(--font-display)',
                fontSize: '11.5px',
                fontWeight: 600,
                color: 'var(--petrole-900)',
                background: 'var(--or-500)',
                padding: '5px 11px',
                borderRadius: 'var(--r-pill)',
              }}
            >
              {project.catLabel}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(1.3rem,2.4vw,1.7rem)',
                letterSpacing: '-.02em',
                color: 'var(--text-strong)',
                margin: '10px 0 6px',
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h3>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              {project.place} · {project.date}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            style={{
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1.5px solid var(--border-strong)',
              background: 'var(--surface-card)',
              color: 'var(--petrole-700)',
              fontSize: '18px',
              lineHeight: 1,
              cursor: 'pointer',
              transition: 'all var(--dur-fast) var(--ease-out)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--petrole-600)'
              e.currentTarget.style.color = 'var(--blanc)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface-card)'
              e.currentTarget.style.color = 'var(--petrole-700)'
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: '22px 28px 30px' }}>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--text-body)',
              margin: '0 0 22px',
              maxWidth: '70ch',
            }}
          >
            {project.blurb}
          </p>
          <div style={{ columns: '2 300px', columnGap: '16px' }}>
            {project.photos.map((src) => (
              <img
                key={src}
                src={src}
                alt={project.title}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 'var(--r-md)',
                  marginBottom: '16px',
                  breakInside: 'avoid',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

/** Carte chantier : photo de couverture, descriptif, lieu et date. */
export function ProjectCard({ p, onOpen }) {
  return (
    <div
      onClick={onOpen}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        boxShadow: 'var(--e1)',
        cursor: 'pointer',
        animation: 'vRise .45s var(--ease-out) both',
        transition:
          'transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = 'var(--e2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'var(--e1)'
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '230px',
          flexShrink: 0,
          overflow: 'hidden',
          background: `url('${p.img}') center/cover, linear-gradient(140deg, var(--petrole-500), var(--petrole-800))`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(11,33,38,.05) 40%, rgba(11,33,38,.35))',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-display)',
            fontSize: '11.5px',
            fontWeight: 600,
            color: 'var(--petrole-900)',
            background: 'var(--or-500)',
            padding: '6px 12px',
            borderRadius: 'var(--r-pill)',
          }}
        >
          {p.catLabel}
        </span>
      </div>
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '18px',
            color: 'var(--text-strong)',
            letterSpacing: '-.01em',
            margin: '0 0 16px',
            lineHeight: 1.25,
          }}
        >
          {p.title}
        </h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '10px 14px',
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', minWidth: 0 }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                Localisation
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--text-strong)',
                  marginTop: '5px',
                  letterSpacing: '-.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.place}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                Réalisation
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--text-strong)',
                  marginTop: '5px',
                  letterSpacing: '-.01em',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.date}
              </div>
            </div>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'var(--or-700)',
              whiteSpace: 'nowrap',
              paddingBottom: '1px',
              marginLeft: 'auto',
            }}
          >
            Voir le chantier →
          </span>
        </div>
      </div>
    </div>
  )
}

/**
 * « Nos dernières réalisations » d'un métier : les plus récentes d'abord,
 * `initial` cartes affichées puis bouton pour voir le reste. Clic → pop-up photos.
 */
export function LatestProjects({
  metier,
  title = 'Nos dernières réalisations',
  intro,
  initial = 4,
  background = 'var(--surface-card)',
}) {
  const [selected, setSelected] = useState(null)
  const [all, setAll] = useState(false)
  const list = PROJECTS.filter((p) => p.metier === metier)
  if (!list.length) return null
  const visible = all ? list : list.slice(0, initial)

  return (
    <section id="realisations" style={{ background, padding: '88px 0 96px' }}>
      <div style={WRAP}>
        <SectionHead eyebrow="Nos réalisations" title={title} intro={intro} />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(min(280px,100%),1fr))',
            gap: '24px',
          }}
        >
          {visible.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={() => setSelected(p)} />
          ))}
        </div>
        {list.length > initial && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
            <button
              onClick={() => setAll(!all)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '15px',
                padding: '12px 24px',
                borderRadius: 'var(--r-pill)',
                border: '1.5px solid var(--border-strong)',
                background: 'var(--surface-card)',
                color: 'var(--petrole-700)',
                cursor: 'pointer',
              }}
            >
              {all ? 'Voir moins' : `Voir toutes les réalisations (${list.length})`}
            </button>
          </div>
        )}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
