/* @ds-bundle: {"format":3,"namespace":"VoltoryDesignSystem_1ee063","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"StepCard","sourcePath":"components/core/StepCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3009ef99ee1e","components/core/Button.jsx":"acba02e42e9a","components/core/Card.jsx":"c96d413a5e80","components/core/Eyebrow.jsx":"c7cd4dbb135f","components/core/Input.jsx":"b5f2c54dcd10","components/core/StatCard.jsx":"0170311506c1","components/core/StepCard.jsx":"1f90d3464965","ui_kits/site-vitrine/Footer.jsx":"c0fe6e1dd5d4","ui_kits/site-vitrine/Header.jsx":"f159530625de","ui_kits/site-vitrine/Hero.jsx":"b5612f4d889e","ui_kits/site-vitrine/Sections.jsx":"75c00c1d88ac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VoltoryDesignSystem_1ee063 = window.VoltoryDesignSystem_1ee063 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — Badge
 * Pastille pilule pour certifications, labels, ancrage local.
 */
function Badge({
  children,
  variant = 'petrole',
  icon = null,
  ...rest
}) {
  const variants = {
    eco: {
      background: 'var(--eco-bg)',
      color: 'var(--eco)'
    },
    or: {
      background: 'var(--or-100)',
      color: 'var(--or-700)'
    },
    petrole: {
      background: 'var(--petrole-100)',
      color: 'var(--petrole-700)'
    },
    data: {
      background: 'var(--data-bg)',
      color: 'var(--data)'
    },
    alerte: {
      background: 'var(--alerte-bg)',
      color: 'var(--alerte)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-display)',
      fontSize: '12.5px',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '.02em',
      padding: '7px 15px',
      borderRadius: 'var(--r-pill)',
      ...variants[variant]
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — Button
 * Pétrole (primaire), Or solaire (accent / temps fort), Ghost (secondaire).
 * Forme pilule, légère élévation au survol.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  full = false,
  disabled = false,
  as = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '14px'
    },
    md: {
      padding: '13px 26px',
      fontSize: '15px'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '17px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--blanc)',
      boxShadow: 'var(--e2)',
      border: '2px solid transparent'
    },
    accent: {
      background: 'var(--action-accent)',
      color: 'var(--petrole-900)',
      boxShadow: 'var(--e2)',
      border: '2px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--action-primary)',
      border: '2px solid var(--petrole-200)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      borderRadius: 'var(--r-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: full ? '100%' : 'auto',
      textDecoration: 'none',
      lineHeight: 1,
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(-2px)';
      if (variant === 'primary') e.currentTarget.style.background = 'var(--action-primary-hover)';
      if (variant === 'accent') e.currentTarget.style.background = 'var(--action-accent-hover)';
      if (variant === 'ghost') {
        e.currentTarget.style.borderColor = 'var(--action-primary)';
        e.currentTarget.style.background = 'var(--petrole-50)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.background = variants[variant].background;
      if (variant === 'ghost') e.currentTarget.style.borderColor = 'var(--petrole-200)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — Card
 * Carte bénéfice / fonctionnalité : icône en pastille or, titre, texte.
 * Fond blanc, bordure subtile, ombre douce.
 */
function Card({
  icon = null,
  title,
  children,
  eyebrow = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-md)',
      padding: '26px',
      boxShadow: 'var(--e1)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--e2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--e1)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46px',
      height: '46px',
      borderRadius: '12px',
      background: 'var(--or-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '23px',
      marginBottom: '16px'
    }
  }, icon), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '11px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: '8px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      margin: '0 0 8px',
      letterSpacing: 'var(--ls-normal)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14.5px',
      lineHeight: '1.55',
      color: 'var(--text-body)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — Eyebrow
 * Surtitre majuscule avec trait doré. Annonce chaque section.
 * onDark = true pour fond pétrole.
 */
function Eyebrow({
  children,
  onDark = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '12px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--or-400)' : 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '26px',
      height: '3px',
      background: 'var(--or-500)',
      borderRadius: '2px',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — Input
 * Champ de saisie pour formulaires (contact, estimation).
 * Label optionnel, focus annelé or.
 */
function Input({
  label,
  id,
  hint = null,
  type = 'text',
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-strong)',
      padding: '12px 16px',
      borderRadius: 'var(--r-sm)',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface-card)',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--petrole-400)';
      e.currentTarget.style.boxShadow = '0 0 0 3px var(--or-200)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-strong)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12.5px',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — StatCard
 * Chiffre clé : grand numéro doré sur fond pétrole.
 * value = nombre, unit = suffixe (ans, %, kWc…), label = description.
 */
function StatCard({
  value,
  unit = null,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--r-md)',
      padding: '24px',
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: '160px',
      boxShadow: 'var(--e2)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '40px',
      fontWeight: 'var(--fw-black)',
      color: 'var(--or-500)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-snug)'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '17px',
      color: 'var(--blanc)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, " ", unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-on-dark-soft)',
      marginTop: '8px'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StepCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Voltory — StepCard
 * Étape de méthode numérotée : grand numéro doré, titre, texte.
 * Reprend l'élément signature (numéro doré) à petite échelle.
 */
function StepCard({
  number,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-md)',
      padding: '24px',
      boxShadow: 'var(--e1)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: '34px',
      color: 'var(--or-500)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-tight)'
    }
  }, number), /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: '16px',
      color: 'var(--text-strong)',
      margin: '10px 0 7px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13.5px',
      lineHeight: '1.5',
      color: 'var(--text-body)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StepCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Footer.jsx
try { (() => {
const VF = window.VoltoryDesignSystem_1ee063;
function FinalCTA() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section band-petrole"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-spot",
    style: {
      top: '-160px',
      right: '8%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      gap: '52px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(VF.Eyebrow, {
    onDark: true
  }, "Sans engagement \xB7 r\xE9ponse rapide"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      fontWeight: 800,
      color: 'var(--text-on-dark)',
      margin: '14px 0 0'
    }
  }, "Parlons de", /*#__PURE__*/React.createElement("br", null), "votre projet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-on-dark-soft)',
      marginTop: '18px',
      maxWidth: '42ch'
    }
  }, "Un \xE9change clair pour comprendre votre lieu et vos besoins \u2014 puis une \xE9tude chiffr\xE9e, sans engagement. Un seul interlocuteur, d\xE8s le d\xE9part."), /*#__PURE__*/React.createElement("ul", {
    className: "checklist",
    style: {
      marginTop: '26px'
    }
  }, ['Étude personnalisée et chiffrée', 'Conseil d’artisan, jamais de démarchage', 'Un interlocuteur unique : Félicien'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk",
    style: {
      background: 'var(--or-500)',
      color: 'var(--petrole-900)'
    }
  }, "\u2713"), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--r-lg)',
      padding: '32px',
      boxShadow: 'var(--e3)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '40px'
    }
  }, "\u2600\uFE0F"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '22px',
      fontWeight: 800,
      color: 'var(--text-strong)',
      margin: '12px 0 6px'
    }
  }, "Merci\xA0!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: '15px'
    }
  }, "F\xE9licien vous recontacte sous 48\xA0h pour votre \xE9tude solaire.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '20px',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Demander mon \xE9tude"), /*#__PURE__*/React.createElement(VF.Input, {
    label: "Nom complet",
    placeholder: "Jean Dupont",
    required: true
  }), /*#__PURE__*/React.createElement(VF.Input, {
    label: "Email",
    type: "email",
    placeholder: "jean@exemple.fr",
    required: true
  }), /*#__PURE__*/React.createElement(VF.Input, {
    label: "Votre projet",
    placeholder: "R\xE9novation, solaire, patrimoine\u2026",
    hint: "Quelques mots sur votre lieu et vos besoins."
  }), /*#__PURE__*/React.createElement(VF.Button, {
    variant: "accent",
    size: "lg",
    full: true,
    type: "submit"
  }, "Envoyer ma demande"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '12.5px',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Sans engagement. Vos donn\xE9es ne sont jamais partag\xE9es."))))));
}
function Footer() {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  const link = {
    fontSize: '14px',
    color: 'var(--text-on-dark-soft)',
    textDecoration: 'none'
  };
  const head = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '13px',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--blanc)',
    marginBottom: '4px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "band-deep",
    style: {
      paddingTop: '56px',
      paddingBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '32px'
    },
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/voltory-logo-white.png",
    alt: "Voltory",
    style: {
      height: '32px',
      marginBottom: '16px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '14px',
      color: 'var(--text-on-dark-soft)',
      maxWidth: '30ch'
    }
  }, "\xC9lectricit\xE9 & solaire, en famille depuis 2007. Cholet, Maine-et-Loire & Vend\xE9e.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Solutions"), /*#__PURE__*/React.createElement("a", {
    href: "#solaire",
    style: link
  }, "Photovolta\xEFque"), /*#__PURE__*/React.createElement("a", {
    href: "#solaire",
    style: link
  }, "Autoconsommation"), /*#__PURE__*/React.createElement("a", {
    href: "#solaire",
    style: link
  }, "Bornes de recharge"), /*#__PURE__*/React.createElement("a", {
    href: "#solaire",
    style: link
  }, "Maintenance")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "L'entreprise"), /*#__PURE__*/React.createElement("a", {
    href: "#histoire",
    style: link
  }, "Notre histoire"), /*#__PURE__*/React.createElement("a", {
    href: "#preuves",
    style: link
  }, "Nos r\xE9alisations"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: link
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Agence"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "\uD83D\uDCCD Cholet (49)"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "RGE QualiPV"), /*#__PURE__*/React.createElement("span", {
    style: link
  }, "SARL Voltory \xB7 depuis 2007"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      marginTop: '40px',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-on-dark-soft)'
    }
  }, "\xA9 2026 Voltory \u2014 Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-on-dark-soft)'
    }
  }, "Mentions l\xE9gales \xB7 Politique de confidentialit\xE9"))));
}
Object.assign(window, {
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Header.jsx
try { (() => {
const {
  Button: VBtn,
  Badge: VBadge
} = window.VoltoryDesignSystem_1ee063;
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('[data-scroll-root]') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 24);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const navLink = {
    fontFamily: 'var(--font-display)',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--text-on-dark)',
    textDecoration: 'none',
    opacity: .88,
    transition: 'opacity var(--dur-fast)'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--or-500)',
      color: 'var(--petrole-900)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '13.5px',
      textAlign: 'center',
      padding: '9px 16px',
      letterSpacing: '.01em'
    }
  }, "\u26A1 Prise renforc\xE9e pour v\xE9hicule \xE9lectrique install\xE9e d\xE8s 349\xA0\u20AC TTC"), /*#__PURE__*/React.createElement("nav", {
    style: {
      background: scrolled ? 'rgba(2,81,95,.92)' : 'var(--petrole-600)',
      backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out)',
      boxShadow: scrolled ? 'var(--e2)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '76px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/voltory-logo-white.png",
    alt: "Voltory",
    style: {
      height: '34px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#savoir-faire",
    style: navLink
  }, "Savoir-faire"), /*#__PURE__*/React.createElement("a", {
    href: "#methode",
    style: navLink
  }, "Notre m\xE9thode"), /*#__PURE__*/React.createElement("a", {
    href: "#preuves",
    style: navLink
  }, "Preuves"), /*#__PURE__*/React.createElement("a", {
    href: "#histoire",
    style: navLink
  }, "L'entreprise")), /*#__PURE__*/React.createElement(VBtn, {
    variant: "accent",
    size: "sm",
    as: "a",
    href: "#contact"
  }, "Demander une \xE9tude"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Hero.jsx
try { (() => {
const {
  Button: HBtn,
  Badge: HBadge
} = window.VoltoryDesignSystem_1ee063;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "band-petrole",
    style: {
      paddingTop: '40px',
      paddingBottom: '0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-spot",
    style: {
      top: '-200px',
      right: '-120px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '60rem',
      paddingTop: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker kicker--dark"
  }, "\xC9lectricien \xE0 Cholet \xB7 entreprise familiale depuis 2007"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '20px 0 26px'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl",
    style: {
      color: 'var(--text-on-dark)'
    }
  }, "Le geste juste,", /*#__PURE__*/React.createElement("br", null), "du foyer au ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--or-500)'
    }
  }, "patrimoine d'exception"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lead-lg",
    style: {
      color: 'var(--text-on-dark-soft)',
      marginTop: '24px',
      maxWidth: '54ch'
    }
  }, "\xC9lectricit\xE9, solaire et mobilit\xE9 men\xE9s avec une exigence d'artisan \u2014 de la r\xE9novation courante au bien de caract\xE8re. Un interlocuteur unique, du premier rendez-vous \xE0 la r\xE9ception du chantier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      flexWrap: 'wrap',
      marginTop: '34px'
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "accent",
    size: "lg",
    as: "a",
    href: "#contact"
  }, "Demander une \xE9tude"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#savoir-faire",
    style: {
      color: 'var(--text-on-dark)',
      borderColor: 'var(--border-on-dark)'
    }
  }, "D\xE9couvrir notre savoir-faire")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    variant: "eco",
    icon: /*#__PURE__*/React.createElement("span", null, "\u2713")
  }, "RGE QualiPV"), /*#__PURE__*/React.createElement(HBadge, {
    variant: "or",
    icon: /*#__PURE__*/React.createElement("span", null, "\u2605")
  }, "Partenaire architectes & ma\xEEtres d'\u0153uvre"), /*#__PURE__*/React.createElement(HBadge, {
    variant: "petrole",
    icon: /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD")
  }, "Maine-et-Loire & Vend\xE9e"))), /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      marginTop: '48px',
      marginBottom: '-72px',
      minHeight: '440px',
      borderRadius: 'var(--r-xl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "\uD83D\uDCF7 \xC9clairage architectural \u2014 h\xF4tel particulier r\xE9nov\xE9 par Voltory"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Sections.jsx
try { (() => {
const V = window.VoltoryDesignSystem_1ee063;

/* ---- Références premium (clears hero photo overlap) ---- */
function ReferencesStrip() {
  const names = ['LVMH', 'Louis Vuitton', 'Château de Thubeuf', 'Financière Saint James', 'Camif Habitat', 'Groupe Balas'];
  return /*#__PURE__*/React.createElement("section", {
    className: "band-soft",
    style: {
      padding: '108px 0 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker",
    style: {
      color: 'var(--text-muted)'
    }
  }, "Ils confient leurs lieux \xE0 Voltory"), /*#__PURE__*/React.createElement("div", {
    className: "ref-row",
    style: {
      justifyContent: 'center',
      marginTop: '22px',
      gap: '8px',
      rowGap: '14px'
    }
  }, names.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      color: 'var(--brume)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--petrole-700)',
      fontWeight: 600,
      fontFamily: 'var(--font-display)',
      fontSize: '15px'
    }
  }, n))))));
}

/* ---- Savoir-faire : trois métiers ---- */
const METIERS = [{
  num: '01',
  icon: '⚡',
  title: 'Électricité',
  media: 'photo',
  lede: 'Du tableau à l\u2019appareillage de prestige.',
  desc: 'Rénovation, mise aux normes, neuf et patrimoine. Des installations sûres et soignées, un éclairage pensé avec l\u2019architecte, un appareillage choisi pour le lieu.',
  tags: ['Rénovation & mise aux normes', 'Éclairage architectural', 'Appareillage haut de gamme', 'Extérieur & domotique'],
  tag: '📷 Pose d\u2019un appareillage laiton — bien de caractère'
}, {
  num: '02',
  icon: '☀️',
  title: 'Photovoltaïque',
  media: 'photo',
  rev: true,
  lede: 'Un solaire dimensionné, jamais vendu à la hâte.',
  desc: 'Étude de production réelle, micro-onduleurs, pilotage de l\u2019autoconsommation. Des économies mesurées et chiffrées, et une installation entretenue dans le temps.',
  tags: ['Étude de production', 'Micro-onduleurs', 'Pilotage énergétique', 'Entretien & maintenance'],
  tag: '📷 Calepinage de toiture — secteur choletais'
}, {
  num: '03',
  icon: '🔌',
  title: 'Bornes de recharge',
  media: 'photo',
  lede: 'La mobilité, couplée à votre énergie.',
  desc: 'De la prise renforcée à la borne IRVE 22 kW, couplée à votre production solaire pour recharger au meilleur coût, en toute sécurité.',
  tags: ['Prise renforcée dès 349 €', 'Bornes IRVE 7–22 kW', 'Couplage autoconsommation'],
  tag: '📷 Borne IRVE installée — recharge à domicile'
}];
function Metiers() {
  return /*#__PURE__*/React.createElement("section", {
    id: "savoir-faire",
    className: "section band-soft",
    style: {
      paddingTop: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Notre savoir-faire"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '16px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "display-xl",
    style: {
      fontSize: 'clamp(2rem,3.6vw,2.9rem)'
    }
  }, "Trois m\xE9tiers,", /*#__PURE__*/React.createElement("br", null), "une m\xEAme exigence"), /*#__PURE__*/React.createElement("p", {
    className: "lead-lg",
    style: {
      marginTop: '18px'
    }
  }, "Voltory n\\u2019est pas un poseur de panneaux : c\\u2019est un partenaire technique. Chaque chantier est men\xE9 par la m\xEAme main, du relev\xE9 \xE0 la mise en service.")), METIERS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.num,
    className: 'metier' + (m.rev ? ' metier--rev' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, m.num), /*#__PURE__*/React.createElement("h3", null, m.icon, " ", m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '18px',
      color: 'var(--text-strong)',
      margin: '0 0 10px'
    }
  }, m.lede), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '46ch'
    }
  }, m.desc), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, m.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, m.tag)))))));
}

/* ---- Savoir-faire patrimonial (bande profonde, haut de gamme) ---- */
function Patrimoine() {
  const points = ['Appareillage & éclairage sur-mesure', 'Coordination fluide avec architectes & MOE', 'Discrétion et propreté de chantier', 'Dossier d\u2019ouvrage complet à la réception'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section band-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-spot",
    style: {
      top: '-200px',
      left: '-120px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      gap: '56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      minHeight: '440px',
      borderRadius: 'var(--r-xl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "\uD83D\uDCF7 Ch\xE2teau restaur\xE9 \u2014 r\xE9seau \xE9lectrique repens\xE9")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker kicker--dark"
  }, "Exigence patrimoniale"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '16px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(1.9rem,3.2vw,2.6rem)',
      color: 'var(--text-on-dark)',
      letterSpacing: '-.02em',
      lineHeight: 1.08
    }
  }, "\xC0 la hauteur des", /*#__PURE__*/React.createElement("br", null), "lieux d'exception"), /*#__PURE__*/React.createElement("p", {
    className: "lead-lg",
    style: {
      color: 'var(--text-on-dark-soft)',
      marginTop: '18px',
      maxWidth: '44ch'
    }
  }, "Ch\xE2teaux, h\xF4tels particuliers, biens de caract\xE8re : un appareillage et un \xE9clairage choisis avec soin, une coordination avec les corps d'\xE9tat, et toujours un seul interlocuteur \u2014 du relev\xE9 \xE0 la r\xE9ception."), /*#__PURE__*/React.createElement("ul", {
    className: "checklist",
    style: {
      marginTop: '26px'
    }
  }, points.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      color: 'var(--text-on-dark)',
      fontSize: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk",
    style: {
      background: 'var(--or-500)',
      color: 'var(--petrole-900)'
    }
  }, "\u2713"), t)))))));
}

/* ---- Preuve technique : production solaire réelle ---- */
function ConcreteExample() {
  return /*#__PURE__*/React.createElement("section", {
    id: "preuves",
    className: "section band-petrole"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-spot",
    style: {
      bottom: '-220px',
      right: '-140px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker kicker--dark"
  }, "Une preuve, pas une promesse"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '16px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.9rem,3.2vw,2.6rem)',
      fontWeight: 800,
      color: 'var(--text-on-dark)',
      letterSpacing: '-.02em',
      lineHeight: 1.08
    }
  }, "6 panneaux de 500\xA0W,", /*#__PURE__*/React.createElement("br", null), "orientation sud"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '14px',
      margin: '26px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-numeral)',
      color: 'var(--or-500)',
      lineHeight: .85,
      letterSpacing: 'var(--ls-tight)'
    }
  }, "\u2248 3200"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '20px',
      color: 'var(--text-on-dark)'
    }
  }, "kWh / an produits")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-soft)',
      fontSize: '15px',
      maxWidth: '44ch',
      marginTop: '10px'
    }
  }, "Mesur\xE9 sur une installation r\xE9elle, secteur choletais. Chaque projet est dimensionn\xE9 sur votre consommation.")), /*#__PURE__*/React.createElement("ul", {
    className: "checklist",
    style: {
      gap: '16px'
    }
  }, ['Jusqu\u2019à 60 % d\u2019électricité produite sur place', 'Plusieurs centaines d\u2019euros économisés chaque année', 'Valorisation de votre habitation', 'Revenus complémentaires grâce à la revente du surplus'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      color: 'var(--text-on-dark)',
      fontSize: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mk",
    style: {
      background: 'var(--or-500)',
      color: 'var(--petrole-900)'
    }
  }, "\u26A1"), t)), /*#__PURE__*/React.createElement("li", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(V.Button, {
    variant: "accent",
    as: "a",
    href: "#contact"
  }, "Obtenir mon \xE9tude gratuite"))))));
}

/* ---- Méthode ---- */
function Method() {
  const steps = [{
    n: '01',
    t: 'Visite du projet',
    d: 'Découverte du lieu, relevé des existants, prise de cotes et définition des besoins.'
  }, {
    n: '02',
    t: 'Étude technique',
    d: 'Dimensionnement des installations, plans d\u2019exécution et ajustements.'
  }, {
    n: '03',
    t: 'Réalisation',
    d: 'Planification, coordination avec les corps d\u2019état et exécution soignée.'
  }, {
    n: '04',
    t: 'Réception',
    d: 'Contrôles, essais, remise du dossier d\u2019ouvrage et prise en main.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "methode",
    className: "section band-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Notre fa\xE7on de travailler"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '16px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      letterSpacing: '-.02em'
    }
  }, "Un interlocuteur unique, \xE0 chaque \xE9tape")), /*#__PURE__*/React.createElement("div", {
    className: "grid-4"
  }, steps.map(s => /*#__PURE__*/React.createElement(V.StepCard, {
    key: s.n,
    number: s.n,
    title: s.t
  }, s.d)))));
}

/* ---- Bandeau chiffres ---- */
function StatsBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section--tight band-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(V.StatCard, {
    value: "19",
    unit: "ans",
    label: "de savoir-faire",
    style: {
      background: 'var(--petrole-700)'
    }
  }), /*#__PURE__*/React.createElement(V.StatCard, {
    value: "+250",
    label: "chantiers r\xE9alis\xE9s",
    style: {
      background: 'var(--petrole-700)'
    }
  }), /*#__PURE__*/React.createElement(V.StatCard, {
    value: "1",
    label: "interlocuteur, du d\xE9but \xE0 la fin",
    style: {
      background: 'var(--petrole-700)'
    }
  })));
}

/* ---- Histoire familiale ---- */
function FamilyStory() {
  return /*#__PURE__*/React.createElement("section", {
    id: "histoire",
    className: "section band-soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo photo--light",
    style: {
      minHeight: '400px',
      borderRadius: 'var(--r-xl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, "\uD83D\uDCF7 F\xE9licien Gury \u2014 agence de Cholet")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kicker"
  }, "Une histoire de p\xE8re en fils"), /*#__PURE__*/React.createElement("hr", {
    className: "gold-rule",
    style: {
      margin: '16px 0 20px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-h1)',
      letterSpacing: '-.02em',
      lineHeight: 1.08
    }
  }, "Une entreprise familiale, proche de vous"), /*#__PURE__*/React.createElement("p", {
    className: "lead-lg",
    style: {
      marginTop: '18px'
    }
  }, "Voltory est n\xE9e en 2007 de la passion pour l'artisanat \xE9lectrique. Nous accompagnons chaque client avec la m\xEAme exigence : un travail soign\xE9, des conseils clairs, un suivi dans le temps."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      color: 'var(--text-body)',
      marginTop: '16px',
      lineHeight: 1.6
    }
  }, "Ici, pas d'interm\xE9diaire : un service local, des engagements tenus. \uD83D\uDCCD Nous vous accueillons directement \xE0 notre agence \xE0 Cholet."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(V.Button, {
    variant: "ghost",
    as: "a",
    href: "#contact"
  }, "Rencontrer F\xE9licien"))))));
}
Object.assign(window, {
  ReferencesStrip,
  Metiers,
  Patrimoine,
  ConcreteExample,
  Method,
  StatsBand,
  FamilyStory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StepCard = __ds_scope.StepCard;

})();
