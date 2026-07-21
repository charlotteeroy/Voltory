/**
 * Contenu réel Voltory — issu des maquettes et du document de marque.
 * Centralisé ici pour être partagé entre les pages.
 */
import { Icons } from './icons.jsx'

/* Photos du carrousel hero (réalisations qui défilent en fond). */
export const HERO_IMGS = [
  'assets/hero/01-salon.jpg',
  'assets/hero/02-sdb-verte.jpg',
  'assets/hero/03-chambre-chateau.jpg',
  'assets/hero/04-terrasse.jpg',
  'assets/hero/05-cuisine.jpg',
  'assets/hero/06-sdb-marbre.jpg',
  'assets/hero/07-hall.jpg',
  'assets/hero/08-corniche.jpg',
]

/* Les trois métiers, mis en avant sur l'accueil (blocs larges + photos qui défilent). */
export const METIERS = [
  {
    eyebrow: 'Électricité générale',
    title: 'Rénovation & mise aux normes',
    text: "Du tableau électrique à l'appareillage de prestige : des installations sûres, soignées et conformes, en neuf comme en rénovation.",
    points: [
      "Audit de l’installation avant achat",
      'Rénovation complète & mise aux normes',
      "Éclairage d’ambiance et extérieur",
      'Domotique & réseaux RJ45',
    ],
    imgs: [
      'assets/hero/01-salon.jpg',
      'assets/real-hotel-hall.jpg',
      'assets/real-lustre-ferronnerie.jpg',
      'assets/hero/04-terrasse.jpg',
    ],
  },
  {
    eyebrow: 'Photovoltaïque',
    title: 'Solaire en autoconsommation',
    text: "Un solaire dimensionné sur votre consommation réelle, jamais vendu à la hâte — de l’étude de rentabilité au suivi de production.",
    points: [
      'Étude de rentabilité sur mesure',
      'Installation en surimposition soignée',
      'Démarches administratives gérées',
      'Suivi de production à distance',
    ],
    imgs: ['assets/real-solaire-toiture.webp', 'assets/agence-aerien.png'],
  },
  {
    eyebrow: 'Bornes de recharge',
    title: 'Recharge de véhicule électrique',
    text: 'Prises renforcées et bornes adaptées à votre installation, avec étude de puissance et pilotage intelligent de la recharge.',
    points: [
      'Prises renforcées dès 349 € TTC',
      'Bornes de 7 à 11 kW',
      'Étude de puissance disponible',
      'Couplage avec le solaire',
    ],
    imgs: ['assets/real-borne-felicien.jpg', 'assets/agence-aerien.png'],
  },
]

/* Récapitulatif des prestations (cartes DS, accueil + page prestations). */
export const SERVICES = [
  {
    icon: Icons.zap,
    eyebrow: 'Électricité générale',
    title: 'Rénovation & mise aux normes',
    text: "Audit avant achat, tableaux et circuits, éclairage d'ambiance et extérieur, domotique et réseaux RJ45.",
  },
  {
    icon: Icons.sun,
    eyebrow: 'Photovoltaïque',
    title: 'Solaire en autoconsommation',
    text: 'Étude de rentabilité sur mesure, installation, démarches administratives et suivi de production.',
  },
  {
    icon: Icons.plug,
    eyebrow: 'Bornes de recharge',
    title: 'Recharge de véhicule',
    text: 'Prises renforcées et bornes de 7 à 11 kW, étude de puissance, couplage solaire et pilotage intelligent.',
  },
]

/* Réalisations filtrables par métier. */
export const PROJECTS = [
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    img: 'assets/real-hotel-hall.jpg',
    title: 'Hôtel particulier — hall & escalier',
    place: 'Maine-et-Loire',
    year: '2025',
    blurb:
      "Éclairage d'accentuation du hall et de la cage d'escalier, appareillage discret intégré à la pierre.",
    stats: [
      { v: '180', l: 'points lumineux' },
      { v: '100 %', l: 'sur-mesure' },
      { v: '6 sem.', l: 'de pose' },
    ],
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    img: 'assets/real-lustre-ferronnerie.jpg',
    title: 'Lustre & ferronnerie dorée — demeure de caractère',
    place: 'Maine-et-Loire',
    year: '2024',
    blurb:
      "Remise en lumière d’un lustre d’époque et ligne discrète le long de la ferronnerie restaurée.",
    stats: [
      { v: 'IRC 95', l: 'qualité' },
      { v: '2700 K', l: 'blanc chaud' },
      { v: '100 %', l: 'gradable' },
    ],
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    img: 'assets/real-cuisine-marbre.jpg',
    title: 'Cuisine en marbre vert — appartement bourgeois',
    place: 'Loire-Atlantique',
    year: '2025',
    blurb:
      'Éclairage sur-mesure et appareillage laiton sur un intérieur classé, sans percer les moulures.',
    stats: [
      { v: 'Laiton', l: 'appareillage' },
      { v: '0', l: 'moulure percée' },
      { v: '3 sem.', l: 'de pose' },
    ],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    img: 'assets/real-solaire-toiture.webp',
    title: 'Autoconsommation — toiture tuiles',
    place: 'Maine-et-Loire',
    year: '2025',
    blurb: "Panneaux full black plein sud, micro-onduleurs et pilotage fin de l’autoconsommation.",
    stats: [
      { v: '3 200', l: 'kWh / an' },
      { v: '−58 %', l: 'sur la facture' },
      { v: '6,5 ans', l: 'de retour' },
    ],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    img: 'assets/agence-aerien.png',
    title: 'Toiture tertiaire — bâtiment professionnel',
    place: 'Maine-et-Loire',
    year: '2024',
    blurb:
      "Centrale en toiture de bâtiment d’activité, dimensionnée sur la consommation de l’entreprise.",
    stats: [
      { v: '36 kWc', l: 'installés' },
      { v: '≈ 40 000', l: 'kWh / an' },
      { v: 'Pro', l: 'tertiaire' },
    ],
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    img: 'assets/real-renovation-carrelage.jpg',
    title: 'Rénovation complète — pièce de vie',
    place: 'Vendée',
    year: '2025',
    blurb:
      'Reprise des circuits et alimentation des nouveaux points, en coordination avec le carreleur.',
    stats: [
      { v: 'NF C 15-100', l: 'conforme' },
      { v: '12', l: 'circuits repris' },
      { v: '5 jours', l: 'sur site' },
    ],
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    img: 'assets/real-eclairage-terrasse.png',
    title: 'Éclairage extérieur — terrasse & jardin',
    place: 'Vendée',
    year: '2025',
    blurb:
      "Scénographie lumineuse d’une terrasse : balisage, éclairage de massif et façade en blanc chaud.",
    stats: [
      { v: 'IP65', l: 'extérieur' },
      { v: '2700 K', l: 'blanc chaud' },
      { v: 'Pilotable', l: 'par zones' },
    ],
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    img: 'assets/real-borne-felicien.jpg',
    title: 'Borne de recharge — véhicule électrique',
    place: 'Maine-et-Loire',
    year: '2024',
    blurb: "Borne 7,4 kW couplée à l’installation, étude de puissance et pilotage de la recharge.",
    stats: [
      { v: '7,4 kW', l: 'de charge' },
      { v: 'Solaire', l: 'couplable' },
      { v: '1 jour', l: 'de pose' },
    ],
  },
]

export const FILTER_DEFS = [
  { key: 'all', label: 'Tous les projets' },
  { key: 'patrimoine', label: 'Patrimoine' },
  { key: 'solaire', label: 'Solaire' },
  { key: 'renovation', label: 'Rénovation' },
  { key: 'eclairage', label: 'Éclairage' },
  { key: 'borne', label: 'Bornes' },
]

/* Chiffres clés animés (odomètre au scroll). */
export const STATS = [
  { prefix: '', num: '19', suffix: ' ans', label: "d'expérience, depuis 2007" },
  { prefix: '+', num: '250', suffix: '', label: 'chantiers réalisés' },
  { prefix: '≈ ', num: '3 200', suffix: '', label: 'kWh produits / an par installation' },
  { prefix: '', num: '60', suffix: ' %', label: "jusqu'à, d'électricité autoconsommée" },
]

/* Villes de la zone d'intervention (carte Leaflet). */
export const CITY_DATA = [
  {
    name: 'Cholet',
    dept: 'Maine-et-Loire',
    projects: 120,
    lat: 47.058,
    lng: -0.878,
    hq: true,
    blurb: "Notre agence et notre cœur d’activité — interventions quotidiennes.",
  },
  {
    name: 'Angers',
    dept: 'Maine-et-Loire',
    projects: 48,
    lat: 47.478,
    lng: -0.563,
    blurb: 'Patrimoine et éclairage architectural dans le centre historique.',
  },
  {
    name: 'Saumur',
    dept: 'Maine-et-Loire',
    projects: 22,
    lat: 47.26,
    lng: -0.077,
    blurb: 'Mises en lumière de façades et biens de caractère.',
  },
  {
    name: 'Nantes',
    dept: 'Loire-Atlantique',
    projects: 18,
    lat: 47.218,
    lng: -1.553,
    blurb: 'Rénovations électriques en appartement occupé.',
  },
  {
    name: 'Beaupréau',
    dept: 'Maine-et-Loire',
    projects: 16,
    lat: 47.204,
    lng: -0.986,
    blurb: 'Rénovation et mise aux normes en milieu rural.',
  },
  {
    name: 'Mortagne-sur-Sèvre',
    dept: 'Vendée',
    projects: 14,
    lat: 46.992,
    lng: -0.947,
    blurb: 'Longères et bâtis anciens remis aux normes.',
  },
  {
    name: 'Les Herbiers',
    dept: 'Vendée',
    projects: 34,
    lat: 46.871,
    lng: -1.013,
    blurb: 'Solaire en autoconsommation et bornes de recharge.',
  },
  {
    name: 'La Roche-sur-Yon',
    dept: 'Vendée',
    projects: 26,
    lat: 46.67,
    lng: -1.426,
    blurb: 'Installations photovoltaïques résidentielles.',
  },
]

/* Avis Google (textes repris des avis publiés ; prénoms indicatifs). */
export const REVIEWS = [
  {
    initial: 'M',
    name: 'Marie L.',
    meta: 'Rénovation électrique · Cholet',
    text: "Réhabilitation complète du réseau électrique suite à l'achat de notre maison. Félicien a été de très bon conseil, le travail est impeccable.",
  },
  {
    initial: 'J',
    name: 'Jérôme B.',
    meta: 'Photovoltaïque · Les Herbiers',
    text: 'Installation de panneaux solaires sur mon toit. Travail très bien fait, entreprise très professionnelle et de bons conseils.',
  },
  {
    initial: 'S',
    name: 'Sophie R.',
    meta: 'Électricité générale · Cholet',
    text: 'Électricien très professionnel, réactif et sympathique. Le travail est soigné et réalisé dans les délais. Je recommande vivement.',
  },
  {
    initial: 'A',
    name: 'André P.',
    meta: 'Photovoltaïque · Vendée',
    text: "Sur conseils de ma fille, j'ai fait appel à eux pour les panneaux solaires. L'équipe est très professionnelle, je suis très contente du résultat.",
  },
  {
    initial: 'C',
    name: 'Claire D.',
    meta: 'Rénovation · Maine-et-Loire',
    text: 'Merci pour la qualité du travail effectué, le professionnalisme et la bonne humeur de chacun sur mon chantier. Je recommande.',
  },
  {
    initial: 'T',
    name: 'Thomas G.',
    meta: 'Électricité · Cholet',
    text: 'Excellents conseils et travail très professionnel. Je recommande cette entreprise les yeux fermés !',
  },
]

/* Engagements (marquee vertical à deux colonnes). */
export const ENG_COL_A = [
  'Des conseils adaptés à chaque projet',
  'Une étude technique personnalisée',
  'La gestion des démarches administratives',
  'Des installations soignées, dans le respect des normes',
]
export const ENG_COL_B = [
  'Un chantier propre et respectueux des lieux',
  'Un suivi après la réalisation',
  'Une entreprise facilement joignable et disponible',
  'Un seul contact, du début à la fin',
]

/* Méthode en 4 temps. */
export const STEPS = [
  { n: '01', t: "L’écoute", d: 'On prend le temps de comprendre vos besoins, vos usages et vos projets futurs.' },
  { n: '02', t: "L’étude & le devis", d: 'Une étude technique personnalisée et un devis transparent, sans jargon.' },
  { n: '03', t: 'La réalisation', d: 'Une exécution soignée, normes respectées, chantier propre et démarches gérées.' },
  { n: '04', t: 'Le suivi', d: "Un accompagnement après l’intervention — une entreprise joignable et disponible." },
]

/* Profils clients (« Pour qui ? »). */
export const CLIENTS = [
  {
    icon: Icons.key,
    title: 'Nouveaux propriétaires',
    text: "Sécurisation, mise aux normes et rénovation de l'installation lors d'une acquisition.",
  },
  {
    icon: Icons.home,
    title: 'Rénovation & extension',
    text: "Adaptation de l’électricité pour une cuisine, une salle de bain, une extension ou une pergola.",
  },
  {
    icon: Icons.trend,
    title: 'Maîtriser ses dépenses',
    text: 'Réduction des factures grâce au photovoltaïque, complété au besoin par une borne de recharge.',
  },
  {
    icon: Icons.building,
    title: 'Professionnels',
    text: "Solaire et bornes adaptés à l’entreprise : valoriser le patrimoine et accompagner la mobilité électrique.",
  },
]

/* Types de projet (formulaire contact). */
export const PROJECT_TYPES = ['Électricité', 'Photovoltaïque', 'Borne de recharge', 'Rénovation']

/* Coordonnées agence. */
export const CONTACT_ROWS = [
  { icon: Icons.pin, label: 'Agence', value: 'Cholet (49) · ≈ 50 km autour' },
  { icon: Icons.phone, label: 'Téléphone', value: '02 41 00 00 00' },
  { icon: Icons.mail, label: 'Email', value: 'contact@voltory.fr' },
  { icon: Icons.clock, label: 'Horaires', value: 'Lun–Ven · 8h–18h' },
]
