import { useRef, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { PROJECT_TYPES, CONTACT_ROWS } from '../lib/data.js'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  sendContactRequest,
  validateContact,
} from '../lib/contact.js'
import Button from '../components/ds/Button.jsx'
import Badge from '../components/ds/Badge.jsx'

const EMPTY = { name: '', email: '', phone: '', message: '' }

const ptBase = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '13px',
  padding: '8px 15px',
  borderRadius: 'var(--r-pill)',
  cursor: 'pointer',
  transition: 'all var(--dur-fast)',
}

const labelStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '13px',
  fontWeight: 600,
  color: 'var(--text-strong)',
}

/** Champ contrôlé avec message d'erreur associé au champ pour les lecteurs d'écran. */
function Field({ id, label, error, hint, children, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0, ...style }}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {children}
      {error ? (
        <span
          id={`${id}-error`}
          role="alert"
          style={{ fontSize: '12.5px', color: 'var(--alerte)', fontWeight: 500 }}
        >
          {error}
        </span>
      ) : hint ? (
        <span id={`${id}-hint`} style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
          {hint}
        </span>
      ) : null}
    </div>
  )
}

function controlStyle(invalid) {
  return {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text-strong)',
    padding: '12px 16px',
    borderRadius: 'var(--r-sm)',
    border: `1.5px solid ${invalid ? 'var(--alerte)' : 'var(--border-strong)'}`,
    background: 'var(--surface-card)',
    outline: 'none',
    width: '100%',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
  }
}

function focusRing(e, invalid) {
  e.currentTarget.style.borderColor = invalid ? 'var(--alerte)' : 'var(--petrole-400)'
  e.currentTarget.style.boxShadow = `0 0 0 3px ${invalid ? 'var(--alerte-bg)' : 'var(--or-200)'}`
}

function blurRing(e, invalid) {
  e.currentTarget.style.borderColor = invalid ? 'var(--alerte)' : 'var(--border-strong)'
  e.currentTarget.style.boxShadow = 'none'
}

export default function Contact({ intent = null }) {
  const [values, setValues] = useState(EMPTY)
  const [projType, setProjType] = useState(() => {
    const wanted = { borne: 'Borne de recharge', solaire: 'Photovoltaïque' }[intent?.filter]
    return wanted && PROJECT_TYPES.includes(wanted) ? wanted : 'Photovoltaïque'
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | mailto | sent | error
  const [mailtoHref, setMailtoHref] = useState('')
  const formRef = useRef(null)

  const set = (key) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [key]: value }))
    /* On efface l'erreur dès que la personne corrige. */
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validateContact(values)
    setErrors(found)

    const firstError = Object.keys(found)[0]
    if (firstError) {
      const node = formRef.current?.querySelector(`#${firstError}`)
      node?.focus()
      return
    }

    const payload = { ...values, projectType: projType }
    setStatus('sending')
    try {
      const result = await sendContactRequest(payload)
      if (result.mode === 'mailto') {
        setMailtoHref(result.href)
        setStatus('mailto')
        /* Ouvre le logiciel de messagerie, pré-rempli. */
        window.location.href = result.href
      } else {
        setStatus('sent')
      }
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setStatus('idle')
    setMailtoHref('')
  }

  const describedBy = (key, hint) =>
    errors[key] ? `${key}-error` : hint ? `${key}-hint` : undefined

  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <section style={{ background: 'var(--surface-page)', padding: '72px 0 96px' }}>
        <div style={WRAP}>
          <div style={{ maxWidth: '56ch', marginBottom: '48px' }}>
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
              Sans engagement · réponse rapide
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
                fontSize: 'clamp(2.2rem,4.2vw,3rem)',
                letterSpacing: '-.03em',
                lineHeight: 1.04,
                margin: 0,
              }}
            >
              Parlons de votre projet
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'var(--text-body)',
                margin: '18px 0 0',
              }}
            >
              Un échange clair pour comprendre votre lieu et vos besoins — puis une étude chiffrée,
              gratuite. Un seul interlocuteur : Félicien.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
            {/* Formulaire */}
            <div
              style={{
                flex: '1.3 1 380px',
                minWidth: 0,
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-lg)',
                padding: 'clamp(24px,4vw,36px)',
                boxShadow: 'var(--e2)',
              }}
            >
              {status === 'mailto' || status === 'sent' ? (
                <div style={{ padding: '20px 0', animation: 'vRise .35s var(--ease-out) both' }}>
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '22px',
                      color: 'var(--text-strong)',
                      margin: '0 0 12px',
                    }}
                  >
                    {status === 'sent' ? 'Demande envoyée' : 'Votre message est prêt'}
                  </h2>

                  {status === 'sent' ? (
                    <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                      Félicien vous recontacte sous 48&nbsp;h pour votre étude. À très vite.
                    </p>
                  ) : (
                    <>
                      <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6 }}>
                        Votre logiciel de messagerie vient de s'ouvrir avec votre demande
                        pré-remplie. <strong style={{ color: 'var(--text-strong)' }}>Il reste à
                        l'envoyer</strong> pour qu'elle nous parvienne.
                      </p>
                      <div
                        style={{
                          background: 'var(--surface-sunken)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--r-md)',
                          padding: '18px 20px',
                          marginTop: '18px',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '.14em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginBottom: '10px',
                          }}
                        >
                          Rien ne s'est ouvert ?
                        </div>
                        <div style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-body)' }}>
                          Écrivez-nous à{' '}
                          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--petrole-700)', fontWeight: 600 }}>
                            {CONTACT_EMAIL}
                          </a>
                          <br />
                          ou appelez le{' '}
                          <a
                            href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                            style={{ color: 'var(--petrole-700)', fontWeight: 600 }}
                          >
                            {CONTACT_PHONE}
                          </a>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
                        <Button as="a" href={mailtoHref} variant="accent">
                          Rouvrir le message
                        </Button>
                        <Button variant="ghost" onClick={reset}>
                          Modifier ma demande
                        </Button>
                      </div>
                    </>
                  )}

                  {status === 'sent' && (
                    <div style={{ marginTop: '26px' }}>
                      <Button variant="ghost" onClick={reset}>
                        Envoyer une autre demande
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'var(--text-strong)',
                      margin: 0,
                    }}
                  >
                    Demander mon étude gratuite
                  </h2>

                  <Field id="name" label="Nom complet" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Jean Dupont"
                      value={values.name}
                      onChange={set('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={describedBy('name')}
                      style={controlStyle(!!errors.name)}
                      onFocus={(e) => focusRing(e, !!errors.name)}
                      onBlur={(e) => blurRing(e, !!errors.name)}
                    />
                  </Field>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Field id="email" label="Email" error={errors.email} style={{ flex: '1 1 170px' }}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jean@exemple.fr"
                        value={values.email}
                        onChange={set('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={describedBy('email')}
                        style={controlStyle(!!errors.email)}
                        onFocus={(e) => focusRing(e, !!errors.email)}
                        onBlur={(e) => blurRing(e, !!errors.email)}
                      />
                    </Field>

                    <Field
                      id="phone"
                      label="Téléphone"
                      error={errors.phone}
                      hint="Facultatif"
                      style={{ flex: '1 1 170px' }}
                    >
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="06 12 34 56 78"
                        value={values.phone}
                        onChange={set('phone')}
                        aria-invalid={!!errors.phone}
                        aria-describedby={describedBy('phone', 'Facultatif')}
                        style={controlStyle(!!errors.phone)}
                        onFocus={(e) => focusRing(e, !!errors.phone)}
                        onBlur={(e) => blurRing(e, !!errors.phone)}
                      />
                    </Field>
                  </div>

                  <fieldset style={{ border: 'none', padding: 0, margin: 0, minWidth: 0 }}>
                    <legend style={{ ...labelStyle, padding: 0, marginBottom: '8px' }}>
                      Type de projet
                    </legend>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {PROJECT_TYPES.map((t) => {
                        const active = t === projType
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setProjType(t)}
                            aria-pressed={active}
                            style={{
                              ...ptBase,
                              background: active ? 'var(--petrole-600)' : 'var(--surface-page)',
                              color: active ? 'var(--blanc)' : 'var(--petrole-700)',
                              border: active
                                ? '1.5px solid var(--petrole-600)'
                                : '1.5px solid var(--border-subtle)',
                            }}
                          >
                            {t}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <Field id="message" label="Votre projet" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Quelques mots sur votre lieu et vos besoins…"
                      value={values.message}
                      onChange={set('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={describedBy('message')}
                      style={{ ...controlStyle(!!errors.message), resize: 'vertical' }}
                      onFocus={(e) => focusRing(e, !!errors.message)}
                      onBlur={(e) => blurRing(e, !!errors.message)}
                    />
                  </Field>

                  {status === 'error' && (
                    <div
                      role="alert"
                      style={{
                        background: 'var(--alerte-bg)',
                        border: '1px solid var(--alerte)',
                        borderRadius: 'var(--r-sm)',
                        padding: '14px 16px',
                        fontSize: '14px',
                        lineHeight: 1.55,
                        color: 'var(--text-body)',
                      }}
                    >
                      L'envoi n'a pas abouti. Réessayez, ou écrivez-nous directement à{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--petrole-700)', fontWeight: 600 }}>
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </div>
                  )}

                  <Button variant="accent" size="lg" full type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </Button>

                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                    Conseil d'artisan, jamais de démarchage. Vos coordonnées servent uniquement à
                    répondre à cette demande.
                  </p>
                </form>
              )}
            </div>

            {/* Coordonnées */}
            <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{
                  background: 'var(--surface-brand)',
                  color: 'var(--text-on-dark)',
                  borderRadius: 'var(--r-lg)',
                  padding: '30px',
                  boxShadow: 'var(--e2)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px' }}>
                  Voltory — agence de Cholet
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '22px' }}>
                  {CONTACT_ROWS.map((row) => (
                    <div key={row.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: '36px',
                          height: '36px',
                          borderRadius: 'var(--r-pill)',
                          background: 'rgba(253,190,3,.16)',
                          color: 'var(--or-400)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {row.icon}
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '11px',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            letterSpacing: '.12em',
                            textTransform: 'uppercase',
                            color: 'var(--or-400)',
                          }}
                        >
                          {row.label}
                        </div>
                        <div style={{ fontSize: '15px', color: 'var(--text-on-dark)', marginTop: '3px', lineHeight: 1.4 }}>
                          {row.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--r-lg)',
                  padding: '24px',
                  boxShadow: 'var(--e1)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <Badge variant="eco" icon="✓">
                  RGE QualiPV
                </Badge>
                <Badge variant="petrole">Maine-et-Loire &amp; Vendée</Badge>
                <Badge variant="or">Depuis 2007</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
