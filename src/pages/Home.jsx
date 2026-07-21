import HeroCarousel from '../components/HeroCarousel.jsx'
import Simulator from '../components/Simulator.jsx'
import Metiers from '../components/Metiers.jsx'
import StatsBand from '../components/StatsBand.jsx'
import Reviews from '../components/Reviews.jsx'
import ZoneMap from '../components/ZoneMap.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Home({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <HeroCarousel onDiscover={() => navigate('realisations')} />
      <Simulator onStudy={() => navigate('contact')} />
      <Metiers onSeeMore={() => navigate('realisations')} />
      <StatsBand />
      <Reviews />
      <ZoneMap onContact={() => navigate('contact')} />
      <CtaBand onContact={() => navigate('contact')} />
    </div>
  )
}
