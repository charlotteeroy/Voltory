import { useEffect, useRef, useState } from 'react'
import { WRAP } from '../lib/layout.js'
import { CITY_DATA } from '../lib/data.js'
import { MAP_POINTS } from '../lib/mapPoints.js'

const OR = '#FDBE03'
const PETROLE = '#005F6F'
const PETROLE_DARK = '#073A43'

/* Un point par chantier : positions fictives autour de chaque ville, hors de l'eau
   (générées par scripts/points-carte.py — aucune adresse client). */
const POINTS = MAP_POINTS

/** Taille des points selon le zoom : discrets en vue d'ensemble, lisibles de près. */
const radiusFor = (zoom, isActive) => {
  const base = zoom >= 13 ? 6 : zoom >= 11 ? 4.5 : 3
  return isActive ? base + 1 : base
}

/** Carte interactive de la zone d'intervention (Leaflet / OpenStreetMap). */
export default function ZoneMap({ onContact }) {
  const [active, setActive] = useState('Cholet')
  const mapNode = useRef(null)
  const mapRef = useRef(null)
  const markersRef = useRef({}) // nom de ville → liste de points
  const activeRef = useRef('Cholet')
  const leafletRef = useRef(null) // module Leaflet, chargé à l'approche de la carte

  const activeCity = CITY_DATA.find((c) => c.name === active) || CITY_DATA[0]

  const syncMarkers = (name) => {
    const map = mapRef.current
    if (!map) return
    const zoom = map.getZoom()
    Object.entries(markersRef.current).forEach(([n, dots]) => {
      const isActive = n === name
      dots.forEach((m) => {
        m.setStyle({
          radius: radiusFor(zoom, isActive),
          fillColor: isActive ? OR : PETROLE,
          color: isActive ? PETROLE_DARK : '#ffffff',
          weight: isActive ? 1.5 : 1,
          fillOpacity: isActive ? 1 : 0.85,
        })
        if (isActive) m.bringToFront()
      })
    })
  }

  const selectCity = (name) => {
    setActive(name)
    activeRef.current = name
    const map = mapRef.current
    const L = leafletRef.current
    const pts = POINTS[name] || []
    if (map && L && pts.length) {
      map.flyToBounds(L.latLngBounds(pts), { padding: [40, 40], maxZoom: 13, duration: 0.8 })
    } else if (map) {
      // Ville ajoutée à CITY_DATA sans relancer scripts/points-carte.py : on vise son centre.
      const c = CITY_DATA.find((x) => x.name === name)
      if (c) map.flyTo([c.lat, c.lng], 12, { duration: 0.8 })
    }
    syncMarkers(name)
  }

  /* Leaflet (~150 Ko) et les tuiles OpenStreetMap ne sont chargés qu'à l'approche
     de la carte, en bas de page : ils ne ralentissent plus l'ouverture de l'accueil. */
  useEffect(() => {
    const node = mapNode.current
    if (!node) return
    let cancelled = false
    let cleanupMap = null

    const init = (L) => {
      if (cancelled || mapRef.current) return
      leafletRef.current = L
      const map = L.map(node, {
        scrollWheelZoom: false,
        // Sur téléphone, un doigt fait défiler la page (pas la carte) ; on zoome
        // en pinçant, avec les boutons + / −, ou en touchant une ville.
        dragging: !L.Browser.mobile,
        zoomControl: true,
        // ~300 points : rendu canvas (plus léger que 300 éléments SVG), avec une
        // marge de 6 px autour de chaque point pour le toucher plus facilement au doigt.
        renderer: L.canvas({ tolerance: 6 }),
      }).fitBounds(L.latLngBounds(Object.values(POINTS).flat()), { padding: [24, 24] })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
      }).addTo(map)
      mapRef.current = map
      markersRef.current = {}
      CITY_DATA.forEach((c) => {
        markersRef.current[c.name] = (POINTS[c.name] || []).map((ll) => {
          const m = L.circleMarker(ll, { radius: 3, fillColor: PETROLE, color: '#ffffff', weight: 1, fillOpacity: 0.85 })
          m.bindTooltip(`Chantier · ${c.name}`, { direction: 'top', offset: [0, -6] })
          m.on('click', () => selectCity(c.name))
          return m.addTo(map)
        })
      })
      map.on('zoomend', () => syncMarkers(activeRef.current))
      syncMarkers(activeRef.current)
      const resizeTimer = setTimeout(() => map.invalidateSize(), 300)
      cleanupMap = () => {
        clearTimeout(resizeTimer)
        map.remove()
        mapRef.current = null
        markersRef.current = {}
      }
    }

    const load = () =>
      import('leaflet')
        .then((mod) => init(mod.default || mod))
        .catch((err) => console.error('Carte indisponible :', err))

    let io = null
    if (typeof IntersectionObserver === 'undefined') load()
    else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect()
            load()
          }
        },
        { rootMargin: '600px 0px' }
      )
      io.observe(node)
    }

    return () => {
      cancelled = true
      io?.disconnect()
      cleanupMap?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chipStyle = (isActive) => ({
    fontFamily: 'var(--font-display)',
    fontSize: '12.5px',
    fontWeight: 600,
    padding: '7px 13px',
    borderRadius: 'var(--r-pill)',
    cursor: 'pointer',
    border: '1px solid ' + (isActive ? 'var(--or-500)' : 'var(--border-subtle)'),
    background: isActive ? 'var(--or-500)' : 'var(--surface-card)',
    color: isActive ? 'var(--petrole-900)' : 'var(--text-body)',
    transition: 'all var(--dur-fast) var(--ease-out)',
  })

  return (
    <section style={{ background: 'var(--surface-page)', padding: '96px 0' }}>
      <div style={WRAP}>
        <div style={{ maxWidth: '52ch', marginBottom: '40px' }}>
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
            Notre zone d'intervention
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
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.9rem,3.4vw,2.6rem)',
              letterSpacing: '-.02em',
              lineHeight: 1.06,
              margin: 0,
            }}
          >
            De Cholet au cœur
            <br />
            du Maine-et-Loire &amp; de la Vendée
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text-body)', margin: '14px 0 0' }}>
            Cliquez sur une ville pour voir notre activité sur place.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'stretch' }}>
          <div
            ref={mapNode}
            style={{
              flex: '2 1 420px',
              position: 'relative',
              minHeight: '480px',
              borderRadius: 'var(--r-lg)',
              overflow: 'hidden',
              background: 'var(--petrole-800)',
              boxShadow: 'var(--e2)',
              zIndex: 1,
            }}
          />
          <div
            style={{
              flex: '1 1 300px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--r-lg)',
              padding: '30px',
              boxShadow: 'var(--e1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--text-accent)',
              }}
            >
              {activeCity.dept}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '28px',
                color: 'var(--text-strong)',
                letterSpacing: '-.02em',
                marginTop: '6px',
              }}
            >
              {activeCity.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '18px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(2.6rem,5vw,3.6rem)',
                  color: 'var(--or-500)',
                  lineHeight: 0.9,
                  letterSpacing: '-.02em',
                }}
              >
                {activeCity.projects}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: 'var(--text-body)',
                  lineHeight: 1.25,
                }}
              >
                projets réalisés
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, margin: '16px 0 0' }}>
              {activeCity.blurb}
            </p>
            <hr
              style={{
                width: '100%',
                height: '1px',
                background: 'var(--border-subtle)',
                border: 'none',
                margin: '22px 0',
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '12px',
              }}
            >
              Nos secteurs d'intervention
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CITY_DATA.map((c) => (
                <button
                  key={c.name}
                  onClick={() => selectCity(c.name)}
                  style={chipStyle(c.name === active)}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <button
                onClick={onContact}
                style={{
                  width: '100%',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '13px 20px',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--petrole-600)',
                  color: 'var(--blanc)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background var(--dur-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--petrole-700)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--petrole-600)')}
              >
                Vérifier mon secteur →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
