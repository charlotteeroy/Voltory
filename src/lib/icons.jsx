/**
 * Pictogrammes au trait (remplacent les emojis de la maquette).
 * Trait régulier ~1.8px, arrondi — dans l'esprit géométrique de la marque.
 */
function Svg({ children, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block' }}
    >
      {children}
    </svg>
  )
}

export const Icons = {
  zap: (
    <Svg>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8" />
    </Svg>
  ),
  sun: (
    <Svg>
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </Svg>
  ),
  plug: (
    <Svg>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8Z" />
    </Svg>
  ),
  key: (
    <Svg>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </Svg>
  ),
  home: (
    <Svg>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </Svg>
  ),
  trend: (
    <Svg>
      <path d="M22 17l-8.5-8.5-5 5L2 7" />
      <path d="M16 17h6v-6" />
    </Svg>
  ),
  building: (
    <Svg>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M2 21h20" />
      <path d="M9 7h1M9 11h1M9 15h1M13 7h1M13 11h1M13 15h1" />
    </Svg>
  ),
  pin: (
    <Svg size={17}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx={12} cy={10} r={3} />
    </Svg>
  ),
  phone: (
    <Svg size={17}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </Svg>
  ),
  mail: (
    <Svg size={17}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="m22 7-10 5L2 7" />
    </Svg>
  ),
  car: (
    <Svg>
      <path d="M3.2 15.2h17.6" />
      <path d="M5.4 15.2v-4.4l2-4.2h9.2l2 4.2v4.4" />
      <path d="M5.4 10.8h13.2" />
      <circle cx={8.2} cy={16.9} r={1.7} />
      <circle cx={15.8} cy={16.9} r={1.7} />
    </Svg>
  ),
  user: (
    <Svg>
      <circle cx={12} cy={8} r={3.6} />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </Svg>
  ),
  shield: (
    <Svg>
      <path d="M12 2.8 4.8 5.6v5.6c0 4.4 3 8.4 7.2 9.9 4.2-1.5 7.2-5.5 7.2-9.9V5.6Z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </Svg>
  ),
  arrow: (
    <Svg size={18}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  ),
  clock: (
    <Svg size={17}>
      <circle cx={12} cy={12} r={10} />
      <path d="M12 6v6l4 2" />
    </Svg>
  ),
}
