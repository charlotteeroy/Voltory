import { useEffect, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { PROJECTS, FILTER_DEFS, SERVICES } from '../lib/data.js'
import Card from '../components/ds/Card.jsx'
import Button from '../components/ds/Button.jsx'

/* Pop-up chantier : toutes les photos du projet + son descriptif. */
function ProjectModal({ project, onClose }) {
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

  return (
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
                fontWeight: 700,
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
    </div>
  )
}

const chipBase = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '14px',
  padding: '9px 18px',
  borderRadius: 'var(--r-pill)',
  cursor: 'pointer',
  transition: 'all var(--dur-fast) var(--ease-out)',
}

function sectionEyebrow(label) {
  return (
    <>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: 'var(--text-accent)',
        }}
      >
        {label}
      </span>
      <hr
        style={{
          width: '48px',
          height: '2px',
          background: 'var(--or-500)',
          border: 'none',
          margin: '16px 0 20px',
        }}
      />
    </>
  )
}

export default function Realisations({ navigate }) {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)
  const countText = visible.length + (visible.length > 1 ? ' projets' : ' projet')

  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      {/* Header band */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--surface-brand-deep)',
          color: 'var(--text-on-dark)',
          padding: '72px 0 64px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            top: '-200px',
            right: '-100px',
            background: 'radial-gradient(circle,var(--or-500) 0%,rgba(253,190,3,0) 68%)',
            opacity: 0.16,
            pointerEvents: 'none',
          }}
        />
        <div style={{ ...WRAP, position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--or-400)',
            }}
          >
            Nos prestations
          </span>
          <hr
            style={{
              width: '48px',
              height: '2px',
              background: 'var(--or-500)',
              border: 'none',
              margin: '16px 0 20px',
            }}
          />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem,4.4vw,3.2rem)',
              letterSpacing: '-.03em',
              lineHeight: 1.04,
              margin: 0,
              color: 'var(--text-on-dark)',
            }}
          >
            Des prestations menées
            <br />
            avec la même main
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--text-on-dark-soft)',
              margin: '18px 0 0',
              maxWidth: '60ch',
            }}
          >
            Du tableau électrique au château restauré : une sélection de chantiers en photos.
            Filtrez par métier, cliquez pour ouvrir la galerie.
          </p>
        </div>
      </section>

      {/* Récap prestations */}
      <section style={{ background: 'var(--surface-card)', padding: '80px 0' }}>
        <div style={WRAP}>
          <div style={{ marginBottom: '40px' }}>
            {sectionEyebrow('Nos prestations')}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.06,
                margin: 0,
              }}
            >
              Trois métiers,
              <br />
              une même exigence
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '28px',
            }}
          >
            {SERVICES.map((s) => (
              <Card key={s.eyebrow} icon={s.icon} eyebrow={s.eyebrow} title={s.title}>
                {s.text}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie filtrable */}
      <section style={{ background: 'var(--surface-page)', padding: '80px 0 96px' }}>
        <div style={WRAP}>
          <div style={{ marginBottom: '36px' }}>
            {sectionEyebrow('Nos réalisations')}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
                letterSpacing: '-.02em',
                lineHeight: 1.06,
                margin: 0,
              }}
            >
              Une sélection de chantiers
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {FILTER_DEFS.map((f) => {
                const active = f.key === filter
                return (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    style={{
                      ...chipBase,
                      background: active ? 'var(--petrole-600)' : 'var(--surface-card)',
                      color: active ? 'var(--blanc)' : 'var(--petrole-700)',
                      border: active
                        ? '1.5px solid var(--petrole-600)'
                        : '1.5px solid var(--border-strong)',
                    }}
                  >
                    {f.label}
                  </button>
                )
              })}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-muted)',
              }}
            >
              {countText}
            </span>
          </div>
          <div
            key={filter}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
              gap: '24px',
            }}
          >
            {visible.map((p) => (
              <div
                key={p.title}
                onClick={() => setSelected(p)}
                style={{
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
                    height: '184px',
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
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--text-on-dark)',
                      background: 'rgba(7,58,67,.5)',
                      backdropFilter: 'blur(4px)',
                      padding: '6px 11px',
                      borderRadius: 'var(--r-pill)',
                    }}
                  >
                    {p.photos.length > 1 ? `${p.photos.length} photos` : '1 photo'}
                  </span>
                </div>
                <div style={{ padding: '22px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: 'var(--text-strong)',
                      letterSpacing: '-.01em',
                      margin: 0,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--text-body)', margin: '12px 0 0' }}>
                    {p.blurb}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: '12px',
                      marginTop: '18px',
                      paddingTop: '18px',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    <div style={{ flex: 1 }}>
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
                        }}
                      >
                        {p.place}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
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
                        }}
                      >
                        {p.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '13px',
                        color: 'var(--or-700)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Voir le chantier →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: '56px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-lg)',
              padding: '40px',
              textAlign: 'center',
              boxShadow: 'var(--e1)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem,2.6vw,2rem)',
                color: 'var(--text-strong)',
                letterSpacing: '-.02em',
                margin: 0,
              }}
            >
              Votre projet ressemble à l'un d'eux ?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', margin: '14px auto 26px', maxWidth: '46ch' }}>
              Parlons-en. Étude gratuite, conseil d'artisan — jamais de démarchage.
            </p>
            <Button variant="accent" size="lg" onClick={() => navigate('contact')}>
              Étudier mon projet
            </Button>
          </div>
        </div>
      </section>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
