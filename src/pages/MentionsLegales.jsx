import { WRAP } from '../lib/layout.js'
import { LEGAL } from '../lib/data.js'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../lib/contact.js'

const h2 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.15rem',
  letterSpacing: '-.01em',
  color: 'var(--text-strong)',
  margin: '0 0 12px',
}

const p = { fontSize: '15px', lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 12px', maxWidth: '68ch' }

const dt = {
  fontFamily: 'var(--font-display)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
}

function Row({ label, children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 20px',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ ...dt, flex: '0 0 190px', paddingTop: '3px' }}>{label}</div>
      <div style={{ flex: '1 1 240px', fontSize: '15px', color: 'var(--text-strong)', lineHeight: 1.5 }}>
        {children}
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginTop: '44px' }}>
      <h2 style={h2}>{title}</h2>
      {children}
    </section>
  )
}

export default function MentionsLegales({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <section style={{ background: 'var(--surface-page)', padding: '72px 0 96px' }}>
        <div style={{ ...WRAP, maxWidth: '900px' }}>
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
            Informations légales
          </span>
          <hr style={{ width: '48px', height: '2px', background: 'var(--or-500)', border: 'none', margin: '16px 0 20px' }} />
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem,4vw,2.6rem)',
              letterSpacing: '-.03em',
              lineHeight: 1.06,
              margin: 0,
            }}
          >
            Mentions légales
          </h1>

          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-lg)',
              padding: 'clamp(24px,4vw,36px)',
              boxShadow: 'var(--e1)',
              marginTop: '36px',
            }}
          >
            <Section title="Éditeur du site">
              <div style={{ marginTop: '8px' }}>
                <Row label="Raison sociale">{LEGAL.raisonSociale}</Row>
                <Row label="Forme juridique">{LEGAL.formeJuridique}</Row>
                <Row label="Siège social">{LEGAL.adresse}</Row>
                <Row label="SIREN">{LEGAL.siren}</Row>
                <Row label="SIRET (siège)">{LEGAL.siret}</Row>
                <Row label="TVA intracommunautaire">{LEGAL.tva}</Row>
                <Row label="Immatriculation">{LEGAL.rcs}</Row>
                <Row label="Code APE">{LEGAL.ape}</Row>
                <Row label="Gérants">{LEGAL.gerants}</Row>
                <Row label="Création">{LEGAL.creation}</Row>
                <Row label="Contact">
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--petrole-700)' }}>
                    {CONTACT_EMAIL}
                  </a>
                  {' · '}
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} style={{ color: 'var(--petrole-700)' }}>
                    {CONTACT_PHONE}
                  </a>
                </Row>
              </div>
            </Section>

            <Section title="Directeur de la publication">
              <p style={p}>Félicien Gury, en qualité de gérant.</p>
            </Section>

            <Section title="Hébergement">
              <p style={p}>{LEGAL.hebergeur}</p>
            </Section>

            <Section title="Assurance">
              <p style={p}>
                Voltory est couverte par une assurance de responsabilité civile décennale pour
                l'ensemble de ses travaux d'installation électrique.
              </p>
            </Section>

            <Section title="Données personnelles">
              <p style={p}>
                Les informations transmises via le formulaire de contact (nom, adresse électronique,
                numéro de téléphone et description du projet) sont utilisées uniquement pour
                répondre à votre demande et établir, le cas échéant, une étude chiffrée. Elles ne
                sont ni cédées ni revendues à des tiers.
              </p>
              <p style={p}>
                Conformément au Règlement général sur la protection des données, vous disposez d'un
                droit d'accès, de rectification, d'effacement et d'opposition sur les données vous
                concernant. Pour l'exercer, écrivez à{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--petrole-700)', fontWeight: 600 }}>
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <p style={p}>
                Ce site ne dépose aucun cookie de mesure d'audience ni de publicité. La carte de la
                zone d'intervention charge ses fonds de plan auprès d'OpenStreetMap, qui peut
                enregistrer l'adresse IP à cette occasion.
              </p>
            </Section>

            <Section title="Propriété intellectuelle">
              <p style={p}>
                L'ensemble des contenus de ce site — textes, photographies de chantiers, logotype et
                éléments graphiques — est la propriété de Voltory, sauf mention contraire. Toute
                reproduction sans autorisation préalable est interdite.
              </p>
            </Section>
          </div>

          <button
            onClick={() => navigate('home')}
            style={{
              marginTop: '32px',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '14.5px',
              color: 'var(--petrole-700)',
            }}
          >
            ← Retour à l'accueil
          </button>
        </div>
      </section>
    </div>
  )
}
