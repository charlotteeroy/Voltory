import { useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { PROJECT_TYPES, CONTACT_ROWS } from '../lib/data.js'
import Button from '../components/ds/Button.jsx'
import Input from '../components/ds/Input.jsx'
import Badge from '../components/ds/Badge.jsx'

const ptBase = {
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '13px',
  padding: '8px 15px',
  borderRadius: 'var(--r-pill)',
  cursor: 'pointer',
  transition: 'all var(--dur-fast)',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [projType, setProjType] = useState('Photovoltaïque')

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
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--text-body)', margin: '18px 0 0' }}>
              Un échange clair pour comprendre votre lieu et vos besoins — puis une étude chiffrée,
              gratuite. Un seul interlocuteur : Félicien.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
            {/* Form */}
            <div
              style={{
                flex: '1.3 1 380px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-lg)',
                padding: '36px',
                boxShadow: 'var(--e2)',
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '36px 8px',
                    animation: 'vRise .35s var(--ease-out) both',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '24px',
                      color: 'var(--text-strong)',
                      margin: '14px 0 8px',
                    }}
                  >
                    Merci&nbsp;!
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.55, maxWidth: '36ch', margin: '0 auto' }}>
                    Félicien vous recontacte sous 48&nbsp;h pour votre étude. À très vite.
                  </p>
                  <div style={{ marginTop: '26px', display: 'flex', justifyContent: 'center' }}>
                    <Button variant="ghost" onClick={() => setSubmitted(false)}>
                      Envoyer une autre demande
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '20px',
                      color: 'var(--text-strong)',
                      margin: 0,
                    }}
                  >
                    Demander mon étude gratuite
                  </h3>
                  <Input label="Nom complet" placeholder="Jean Dupont" required />
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="jean@exemple.fr"
                      required
                      style={{ flex: '1 1 160px' }}
                    />
                    <Input label="Téléphone" type="tel" placeholder="06 12 34 56 78" style={{ flex: '1 1 160px' }} />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-strong)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Type de projet
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {PROJECT_TYPES.map((t) => {
                        const active = t === projType
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setProjType(t)}
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
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                      htmlFor="msg"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-strong)',
                      }}
                    >
                      Votre projet
                    </label>
                    <textarea
                      id="msg"
                      rows={4}
                      placeholder="Quelques mots sur votre lieu et vos besoins…"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        color: 'var(--text-strong)',
                        padding: '12px 16px',
                        borderRadius: 'var(--r-sm)',
                        border: '1.5px solid var(--border-strong)',
                        background: 'var(--surface-card)',
                        outline: 'none',
                        width: '100%',
                        resize: 'vertical',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--petrole-400)'
                        e.currentTarget.style.boxShadow = '0 0 0 3px var(--or-200)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-strong)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <Button variant="accent" size="lg" full type="submit">
                    Envoyer ma demande
                  </Button>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
                    Conseil d'artisan, jamais de démarchage. Vos données restent confidentielles.
                  </p>
                </form>
              )}
            </div>
            {/* Info */}
            <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                      <div>
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
