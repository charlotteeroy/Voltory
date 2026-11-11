import { useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { CONTACT_ROWS } from '../lib/data.js'
import { Icons } from '../lib/icons.jsx'
import Button from '../components/ds/Button.jsx'
import { sendContact } from '../lib/sendContact.js'

/* Types de projet : tuile illustrée + aide à la rédaction adaptée. */
const PROJECTS = [
  {
    label: 'Électricité',
    img: '/assets/contact/electricite.jpg',
    icon: Icons.zap,
    hint: 'Tableau, prises, éclairage, rénovation complète…',
  },
  {
    label: 'Borne de recharge',
    img: '/assets/contact/borne.jpg',
    icon: Icons.plug,
    hint: 'Votre véhicule, la distance entre le tableau et la place de parking…',
  },
  {
    label: 'Photovoltaïque',
    img: '/assets/contact/photovoltaique.jpg',
    icon: Icons.sun,
    hint: 'Type de toiture, montant de votre facture d’électricité…',
  },
  {
    label: 'Rénovation',
    img: '/assets/contact/renovation.jpg',
    icon: Icons.home,
    hint: 'Pièces concernées, travaux prévus, calendrier…',
  },
]

/* Page d'où vient le visiteur → type de projet présélectionné. */
const FROM_PAGE = {
  electricite: 'Électricité',
  bornes: 'Borne de recharge',
  photovoltaique: 'Photovoltaïque',
}

const PHONE = CONTACT_ROWS.find((r) => r.label === 'Téléphone')?.value || '06 19 19 73 52'
const PHONE_HREF = 'tel:+33' + PHONE.replace(/\s/g, '').slice(1)
const MAIL = CONTACT_ROWS.find((r) => r.label === 'Email')?.value || 'felicien.gury@voltory.fr'

const display = { fontFamily: 'var(--font-display)' }

/** Étape numérotée du formulaire. */
function Step({ n, title, optional, children }) {
  return (
    <fieldset style={{ border: 'none', margin: 0, padding: 0, minWidth: 0 }}>
      <legend style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: 0, marginBottom: '14px' }}>
        <span
          aria-hidden="true"
          style={{
            ...display,
            width: '26px',
            height: '26px',
            borderRadius: 'var(--r-pill)',
            background: 'var(--petrole-600)',
            color: 'var(--blanc)',
            fontSize: '13px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {n}
        </span>
        <span style={{ ...display, fontSize: '16px', fontWeight: 600, color: 'var(--text-strong)' }}>{title}</span>
        {optional && <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>facultatif</span>}
      </legend>
      {children}
    </fieldset>
  )
}

const fieldBase = {
  fontFamily: 'var(--font-body)',
  fontSize: '15px',
  color: 'var(--text-strong)',
  borderRadius: 'var(--r-md)',
  border: '1.5px solid transparent',
  background: 'var(--surface-page)',
  outline: 'none',
  width: '100%',
  transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast), background var(--dur-fast)',
}
const focusOn = (e) => {
  e.currentTarget.style.background = 'var(--surface-card)'
  e.currentTarget.style.borderColor = 'var(--petrole-400)'
  e.currentTarget.style.boxShadow = '0 0 0 3px var(--or-200)'
}
const focusOff = (e) => {
  e.currentTarget.style.background = 'var(--surface-page)'
  e.currentTarget.style.borderColor = 'transparent'
  e.currentTarget.style.boxShadow = 'none'
}

/** Champ texte avec pictogramme intégré. */
function Field({ label, icon, name, type = 'text', required, ...rest }) {
  const id = `ct-${name}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
      <label htmlFor={id} style={{ ...display, fontSize: '13px', fontWeight: 600, color: 'var(--text-strong)' }}>
        {label}
        {!required && <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}> · facultatif</span>}
      </label>
      <div style={{ position: 'relative' }}>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--petrole-400)',
            pointerEvents: 'none',
          }}
        >
          {icon}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          onFocus={focusOn}
          onBlur={focusOff}
          style={{ ...fieldBase, padding: '13px 16px 13px 44px' }}
          {...rest}
        />
      </div>
    </div>
  )
}

/** Choix du type de projet : tuiles photo, bandeau givré pétrole, accent or. */
function ProjectTiles({ value, onChange }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(118px,1fr))', gap: '12px' }}>
      {PROJECTS.map((p) => {
        const on = p.label === value
        return (
          <button
            key={p.label}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(p.label)}
            className="v-tile"
            style={{
              position: 'relative',
              aspectRatio: '1',
              padding: 0,
              borderRadius: 'var(--r-md)',
              overflow: 'hidden',
              border: 'none',
              outline: on ? '2.5px solid var(--or-500)' : '2.5px solid transparent',
              outlineOffset: '2px',
              background: 'var(--petrole-800)',
              boxShadow: on ? 'var(--e2)' : 'var(--e1)',
              cursor: 'pointer',
              textAlign: 'left',
              color: 'var(--blanc)',
              transition: 'outline-color var(--dur-fast), box-shadow var(--dur-fast)',
            }}
          >
            <img
              src={p.img}
              alt=""
              loading="lazy"
              className="v-tile-img"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: on ? 'none' : 'saturate(.85)',
                transition: 'transform .5s var(--ease-out), filter var(--dur-fast)',
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(0deg, var(--petrole-600) 0%, rgba(0,95,111,.85) 22%, rgba(0,95,111,0) 62%)',
              }}
            />
            {on && (
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '26px',
                  height: '26px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--or-500)',
                  color: 'var(--petrole-900)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'vPop .3s var(--ease-out) both',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
            )}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '9px',
                left: '9px',
                width: '34px',
                height: '34px',
                borderRadius: 'var(--r-pill)',
                background: on ? 'var(--or-500)' : 'rgba(5,69,80,.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: on ? '1px solid var(--or-500)' : '1px solid rgba(255,255,255,.16)',
                color: on ? 'var(--petrole-900)' : 'var(--or-400)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--dur-fast)',
              }}
            >
              {p.icon}
            </span>
            <span
              lang="fr"
              style={{
                position: 'absolute',
                left: '12px',
                right: '10px',
                bottom: '11px',
                ...display,
                fontSize: '13.5px',
                fontWeight: 600,
                lineHeight: 1.2,
                hyphens: 'auto',
                textShadow: '0 1px 2px rgba(7,58,67,.4)',
              }}
            >
              {p.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/** Confirmation après envoi. */
function Sent({ recap, onAgain, navigate }) {
  return (
    <div style={{ textAlign: 'center', padding: '28px 4px 8px', animation: 'vRise .35s var(--ease-out) both' }}>
      <div
        aria-hidden="true"
        style={{
          width: '76px',
          height: '76px',
          margin: '0 auto',
          borderRadius: 'var(--r-pill)',
          background: 'var(--or-500)',
          color: 'var(--petrole-900)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 10px var(--or-100)',
          animation: 'vPop .5s var(--ease-out) both',
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </div>
      <h2 style={{ ...display, fontWeight: 600, fontSize: '26px', color: 'var(--text-strong)', margin: '26px 0 8px' }}>
        Demande envoyée&nbsp;!
      </h2>
      <p style={{ fontSize: '15.5px', color: 'var(--text-body)', lineHeight: 1.55, maxWidth: '38ch', margin: '0 auto' }}>
        Merci{recap.firstName ? ` ${recap.firstName}` : ''}. Félicien revient vers vous au plus vite.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
        {[recap.type, recap.city].filter(Boolean).map((t) => (
          <span
            key={t}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              padding: '7px 13px',
              borderRadius: 'var(--r-pill)',
              background: 'var(--petrole-50)',
              color: 'var(--petrole-700)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => navigate('home')}>
          Retour à l'accueil
        </Button>
        <Button variant="ghost" onClick={onAgain}>
          Nouvelle demande
        </Button>
      </div>
    </div>
  )
}

/** Colonne de droite : Félicien + coordonnées cliquables. */
function Aside() {
  const rows = [
    { icon: Icons.phone, label: 'Téléphone', value: PHONE, href: PHONE_HREF },
    { icon: Icons.mail, label: 'Email', value: MAIL, href: `mailto:${MAIL}` },
    ...CONTACT_ROWS.filter((r) => r.label !== 'Téléphone' && r.label !== 'Email'),
  ]
  return (
    <aside
      style={{
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        background: 'var(--surface-brand)',
        color: 'var(--text-on-dark)',
        boxShadow: 'var(--e2)',
      }}
    >
      <div style={{ position: 'relative', flex: '1 1 280px', minHeight: '280px' }}>
        <img
          src="/assets/equipe/felicien-agence.jpg"
          alt="Félicien Gury devant l'agence Voltory de Cholet"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '55% 30%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, var(--petrole-600) 0%, rgba(0,95,111,0) 55%)',
          }}
        />
        <div style={{ position: 'absolute', left: '26px', right: '26px', bottom: '18px' }}>
          <div style={{ ...display, fontSize: '20px', fontWeight: 600 }}>Félicien Gury</div>
          <div style={{ fontSize: '14px', color: 'var(--text-on-dark-soft)', marginTop: '2px' }}>
            Gérant · votre interlocuteur unique
          </div>
        </div>
      </div>
      <div style={{ padding: '8px 26px 26px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {rows.map((r, i) => {
          const Tag = r.href ? 'a' : 'div'
          return (
            <Tag
              key={r.label}
              {...(r.href ? { href: r.href } : {})}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 0',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-on-dark)' : 'none',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '38px',
                  height: '38px',
                  borderRadius: 'var(--r-pill)',
                  background: 'rgba(253,190,3,.16)',
                  color: 'var(--or-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {r.icon}
              </span>
              <span style={{ minWidth: 0 }}>
                <span
                  style={{
                    display: 'block',
                    ...display,
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--or-400)',
                  }}
                >
                  {r.label}
                </span>
                <span style={{ display: 'block', fontSize: '15px', marginTop: '2px', overflowWrap: 'anywhere' }}>{r.value}</span>
              </span>
            </Tag>
          )
        })}
      </div>
    </aside>
  )
}

export default function Contact({ navigate, from }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [projType, setProjType] = useState(FROM_PAGE[from] || '')
  const [recap, setRecap] = useState({})
  const hint = PROJECTS.find((p) => p.label === projType)?.hint || 'Votre lieu, vos besoins, vos questions…'

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    const f = new FormData(e.currentTarget)
    const data = {
      name: String(f.get('name') || '').trim(),
      email: f.get('email'),
      phone: f.get('phone'),
      city: String(f.get('city') || '').trim(),
      type: projType || 'Non précisé',
      message: f.get('message'),
      botcheck: f.get('botcheck'),
    }
    setStatus('sending')
    try {
      await sendContact(data)
      setRecap({ firstName: data.name.split(/\s+/)[0], type: data.type, city: data.city })
      setStatus('sent')
    } catch (err) {
      console.error('Envoi du formulaire impossible :', err)
      setStatus('error')
    }
  }

  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <section style={{ background: 'var(--surface-page)', padding: '64px 0 96px' }}>
        <div style={WRAP}>
          <div style={{ maxWidth: '56ch', marginBottom: '36px' }}>
            <span
              style={{
                ...display,
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: 'var(--text-accent)',
              }}
            >
              Étude gratuite · sans engagement
            </span>
            <h1
              style={{
                ...display,
                fontWeight: 600,
                fontSize: 'clamp(2.2rem,4.2vw,3rem)',
                letterSpacing: '-.03em',
                lineHeight: 1.04,
                margin: '14px 0 0',
              }}
            >
              Parlons de votre projet
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-body)', margin: '14px 0 0' }}>
              Trois questions, une minute. Nous revenons vers vous au plus vite.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'stretch' }}>
            <div
              style={{
                flex: '1.6 1 420px',
                minWidth: 0,
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-lg)',
                padding: 'clamp(22px,3.4vw,40px)',
                boxShadow: 'var(--e2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {status === 'sent' ? (
                <Sent recap={recap} navigate={navigate} onAgain={() => setStatus('idle')} />
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  {/* Piège à robots : invisible pour les visiteurs, rempli par les robots. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: 'none' }}
                  />

                  <Step n="1" title="Votre projet">
                    <ProjectTiles value={projType} onChange={setProjType} />
                  </Step>

                  <Step n="2" title="Vos coordonnées">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '14px' }}>
                      <Field label="Nom" name="name" icon={Icons.user} autoComplete="name" placeholder="Jean Dupont" required />
                      <Field label="Téléphone" name="phone" type="tel" icon={Icons.phone} autoComplete="tel" placeholder="06 12 34 56 78" required />
                      <Field label="Email" name="email" type="email" icon={Icons.mail} autoComplete="email" placeholder="jean@exemple.fr" required />
                      <Field label="Commune" name="city" icon={Icons.pin} autoComplete="address-level2" placeholder="Cholet" />
                    </div>
                  </Step>

                  <Step n="3" title="Quelques mots" optional>
                    <textarea
                      name="message"
                      aria-label="Votre message"
                      rows={4}
                      placeholder={hint}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      style={{ ...fieldBase, padding: '13px 16px', resize: 'vertical', minHeight: '112px' }}
                    />
                  </Step>

                  {status === 'error' && (
                    <p
                      role="alert"
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        color: 'var(--text-strong)',
                        background: 'var(--or-100)',
                        border: '1px solid var(--or-500)',
                        borderRadius: 'var(--r-sm)',
                        padding: '12px 14px',
                        margin: 0,
                      }}
                    >
                      L'envoi n'a pas abouti. Réessayez dans un instant, ou contactez Félicien directement au{' '}
                      <a href={PHONE_HREF}>{PHONE}</a> ou à <a href={`mailto:${MAIL}`}>{MAIL}</a>.
                    </p>
                  )}

                  <div>
                    <Button variant="accent" size="lg" full type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                    </Button>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '6px 18px',
                        marginTop: '14px',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {['Gratuit', 'Sans engagement', 'Jamais de démarchage'].map((t) => (
                        <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <span aria-hidden="true" style={{ color: 'var(--eco)', fontWeight: 700 }}>
                            ✓
                          </span>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </form>
              )}
            </div>
            <Aside />
          </div>
        </div>
      </section>
    </div>
  )
}
