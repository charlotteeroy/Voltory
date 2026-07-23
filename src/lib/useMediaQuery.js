import { useEffect, useState } from 'react'

/** Suit une media query CSS (ex : '(max-width: 719px)') et se met à jour au resize. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const sync = () => setMatches(mql.matches)
    mql.addEventListener('change', sync)
    /* Fallback : certains environnements ne déclenchent pas 'change' au resize. */
    window.addEventListener('resize', sync)
    sync()
    return () => {
      mql.removeEventListener('change', sync)
      window.removeEventListener('resize', sync)
    }
  }, [query])

  return matches
}
