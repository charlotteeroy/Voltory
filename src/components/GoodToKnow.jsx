import { WRAP } from '../lib/layout.js'
import { Icons } from '../lib/icons.jsx'
import SectionHead from './SectionHead.jsx'
import { FeatureGrid } from './ServiceBlocks.jsx'

/* Conditions communes à toutes les interventions (reprises des devis Voltory). */
const ITEMS = [
  {
    icon: Icons.car,
    title: 'Déplacement offert sous 15 km',
    text: "Nous passons nos véhicules à l'électrique : nos frais baissent, vous en profitez. Déplacement offert dans un rayon de 15 km autour de l'agence de Cholet, puis 8 € HT par tranche de 5 km.",
  },
  {
    icon: Icons.layers,
    title: 'Un chantier rendu propre',
    text: 'Zones de travail remises en état et vérifiées, déchets triés puis évacués vers les filières agréées.',
  },
  {
    icon: Icons.doc,
    title: 'Un paiement échelonné',
    text: "Un acompte à la signature, des situations selon l'avancement, le solde à la réception des travaux. Chèque, espèces ou virement.",
  },
  {
    icon: Icons.shield,
    title: 'La fidélité récompensée',
    text: "Déjà client ? Vous bénéficiez d'une remise sur vos futurs travaux d'évolution ou d'amélioration de votre installation.",
  },
]

/** « Bon à savoir » : déplacement, chantier, paiement, fidélité — sur chaque page métier. */
export default function GoodToKnow({ background = 'var(--surface-card)' }) {
  return (
    <section style={{ background, padding: '96px 0' }}>
      <div style={WRAP}>
        <SectionHead eyebrow="Bon à savoir" title="Ce qui accompagne chaque intervention" />
        <FeatureGrid items={ITEMS} min="240px" />
      </div>
    </section>
  )
}
