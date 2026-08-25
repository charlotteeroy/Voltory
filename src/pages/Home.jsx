import HeroCarousel from '../components/HeroCarousel.jsx'
import Reviews from '../components/Reviews.jsx'
import ProjectStart from '../components/ProjectStart.jsx'
import Simulator from '../components/Simulator.jsx'
import FoundersBand from '../components/FoundersBand.jsx'
import StatsBand from '../components/StatsBand.jsx'
import SelfProof from '../components/SelfProof.jsx'
import LatestProjects from '../components/LatestProjects.jsx'
import Certifications from '../components/Certifications.jsx'
import ZoneMap from '../components/ZoneMap.jsx'
import CtaBand from '../components/CtaBand.jsx'

/**
 * Ordre de l'accueil arrêté avec le gérant :
 * preuve sociale tôt, puis l'offre et son outil de calcul, puis l'humain,
 * puis la preuve par le travail, la réassurance et l'appel à l'action.
 */
export default function Home({ navigate }) {
  return (
    <div style={{ animation: 'vRise .45s var(--ease-out) both' }}>
      <HeroCarousel onDiscover={() => navigate('realisations')} onContact={() => navigate('contact')} />
      <Reviews compact />
      <ProjectStart navigate={navigate} />
      <Simulator onStudy={() => navigate('contact')} />
      <FoundersBand navigate={navigate} />
      <StatsBand />
      <SelfProof />
      <LatestProjects navigate={navigate} />
      <Certifications />
      <ZoneMap onContact={() => navigate('contact')} />
      <CtaBand onContact={() => navigate('contact')} />
    </div>
  )
}
