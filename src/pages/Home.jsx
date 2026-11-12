import HeroCarousel from '../components/HeroCarousel.jsx'
import Metiers from '../components/Metiers.jsx'
import BeforeAfterSection from '../components/BeforeAfterSection.jsx'
import StatsBand from '../components/StatsBand.jsx'
import Reviews from '../components/Reviews.jsx'
import ZoneMap from '../components/ZoneMap.jsx'
import CtaBand from '../components/CtaBand.jsx'

/* Accueil volontairement court : il oriente chaque visiteur vers son métier.
   Le simulateur solaire vit sur la page Photovoltaïque. */
export default function Home({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <HeroCarousel onContact={() => navigate('contact')} />
      <Metiers onOpen={navigate} />
      <BeforeAfterSection />
      <StatsBand />
      <Reviews />
      <ZoneMap onContact={() => navigate('contact')} />
      <CtaBand onContact={() => navigate('contact')} />
    </div>
  )
}
