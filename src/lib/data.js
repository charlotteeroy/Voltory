/**
 * Contenu réel Voltory — issu des maquettes et du document de marque.
 * Centralisé ici pour être partagé entre les pages.
 */
import { Icons } from './icons.jsx'

/* Photos du carrousel hero (réalisations qui défilent en fond). */
export const HERO_IMGS = [
  '/assets/hero/01-salon.webp',
  '/assets/hero/02-sdb-verte.webp',
  '/assets/hero/03-chambre-chateau.webp',
  '/assets/hero/04-terrasse.webp',
  '/assets/hero/05-cuisine.webp',
  '/assets/hero/06-sdb-marbre.webp',
  '/assets/hero/07-hall.webp',
  '/assets/hero/08-corniche.webp',
]

/* Les trois métiers, mis en avant sur l'accueil (blocs larges + photos qui défilent).
   Ordre = priorité d'activité : l'électricité est le cœur de métier, les bornes
   la demande en forte croissance, le solaire vient ensuite. */
export const METIERS = [
  {
    key: 'electricite',
    cta: "Découvrir l'électricité générale",
    eyebrow: 'Électricité générale',
    title: 'Rénovation & mise aux normes',
    points: ['Tableau électrique', 'Rénovation', 'Éclairage', 'Audit avant achat', 'Domotique'],
    imgs: [
      '/assets/hero/01-salon.webp',
      '/assets/real-hotel-hall.jpg',
      '/assets/real-lustre-ferronnerie.jpg',
      '/assets/hero/04-terrasse.webp',
    ],
  },
  {
    key: 'bornes',
    cta: 'Découvrir nos bornes de recharge',
    eyebrow: 'Bornes de recharge',
    title: 'Rechargez à la maison',
    points: ['Prise renforcée dès 349 €', 'Borne 7 à 11 kW', 'Posée en une journée', 'Prix standard'],
    imgs: [
      '/assets/chantiers/fav-borne/01.jpg',
      '/assets/real-borne-felicien.jpg',
      '/assets/chantiers/hbon-borne/01.jpg',
    ],
  },
  {
    key: 'photovoltaique',
    cta: 'Découvrir le photovoltaïque',
    eyebrow: 'Photovoltaïque',
    title: 'Produisez votre électricité',
    points: ['Étude de rentabilité', 'Démarches gérées', 'Évolutive', '1er entretien offert'],
    imgs: ['/assets/real-solaire-toiture.webp', '/assets/agence-aerien.jpg'],
  },
]

/* Qualifications affichées dans le header de l'accueil.
   `logo` : chemin du logo officiel une fois fourni par Félicien (sinon badge texte). */
export const CERTIFICATIONS = [
  { label: 'RGE QualiPV', detail: 'Photovoltaïque', logo: '/assets/logos/qualipv-white.png' },
  { label: 'Recharge+ élec', detail: 'Bornes de recharge', logo: '/assets/logos/recharge-plus-elec-white.png' },
  { label: 'Garantie décennale APRIL', detail: 'Tous nos travaux', logo: '/assets/logos/april-white.png' },
]

/* Réalisations filtrables par métier.
   Chaque entrée est un chantier : `photos` alimente le pop-up de la galerie.
   NB : les dates et localisations sont déduites des dossiers photos — à faire
   valider par Félicien avant mise en ligne. */
const chantier = (slug, count) =>
  Array.from({ length: count }, (_, i) => `/assets/chantiers/${slug}/${String(i + 1).padStart(2, '0')}.jpg`)

/* Catégorie de chantier → page métier où il apparaît. */
const CAT_TO_METIER = {
  patrimoine: 'electricite',
  renovation: 'electricite',
  eclairage: 'electricite',
  solaire: 'photovoltaique',
  borne: 'bornes',
}

export const PROJECTS = [
  /* ——— Chantiers 2025-2026 (dossiers « Photos Site web ») ——— */
  {
    cat: 'renovation',
    catLabel: 'Tableau électrique',
    title: 'Tableau électrique neuf & GTL',
    place: 'Manche',
    date: '2026',
    blurb: "Remplacement d'un tableau vieillissant : tableau et gaine technique neufs, circuits repérés et protégés.",
    photos: chantier('big-tableau', 2),
  },
  {
    cat: 'renovation',
    catLabel: 'Tableau électrique',
    title: 'Mise en sécurité & GTL',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: "Création d'une gaine technique logement et reprise de l'installation existante.",
    photos: chantier('pas-tableau', 2),
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Chambre — appliques & papier peint',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: 'Rénovation d’une chambre : appliques murales, prises repositionnées, finitions soignées.',
    photos: chantier('dro-chambre', 5),
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Rénovation complète — maison',
    place: 'Vendée',
    date: '2026',
    blurb: 'Reprise complète de l’électricité, appareillage laiton et éclairage.',
    photos: chantier('bou-renovation', 5),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Haut de gamme',
    title: 'Appartement contemporain — salle de bain & salon',
    place: 'Paris',
    date: '2026',
    blurb: 'Éclairage intégré, salle de bain sur mesure, appareillage discret.',
    photos: chantier('ric-appartement', 11),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Haut de gamme',
    title: 'Cuisine — plaque de cuisson invisible',
    place: 'Paris',
    date: '2026',
    blurb: 'Raccordement d’une plaque à induction invisible sous plan de travail.',
    photos: chantier('ric-cuisine', 6),
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    title: 'Éclairage de façade',
    place: 'Paris',
    date: '2026',
    blurb: 'Pose d’appliques extérieures en laiton sur façade en pierre.',
    photos: chantier('ric-facade', 3),
    cover: 3,
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    title: 'Hôtel particulier — jardin & salons',
    place: 'Paris',
    date: '2025',
    blurb: 'Mise en lumière du jardin, de la cour et des salons de réception.',
    photos: chantier('isr-hotel', 7),
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    title: 'Borne Schneider en garage',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: 'Borne murale, protection dédiée au tableau et câblage sous tube.',
    photos: chantier('fav-borne', 2),
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    title: 'Borne sur mur en pierre',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: 'Borne posée sur un mur ancien, au plus près de la place de stationnement.',
    photos: chantier('hbon-borne', 1),
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    title: 'Borne & protections au tableau',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: 'Borne Schneider et protections dédiées ajoutées au tableau existant.',
    photos: chantier('bon-borne', 3),
  },
  {
    cat: 'borne',
    catLabel: 'Prise renforcée',
    title: 'Prise renforcée en garage',
    place: 'Maine-et-Loire',
    date: '2026',
    blurb: 'Prise renforcée dédiée à la recharge nocturne.',
    photos: chantier('pas-prise', 1),
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Centrale au sol — structures lestées',
    place: 'Meurthe-et-Moselle',
    date: '2026',
    blurb: 'Panneaux posés au sol sur bacs lestés, sans fixation dans le terrain.',
    photos: chantier('gur-sol', 4),
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Toiture tuiles — panneaux full black',
    place: 'Seine-et-Marne',
    date: '2026',
    blurb: 'Centrale en surimposition sur toiture tuiles.',
    photos: chantier('sto-toiture', 2),
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Toiture bac acier',
    place: 'Seine-et-Marne',
    date: '2026',
    blurb: 'Panneaux posés sur une toiture en bac acier.',
    photos: chantier('boo-toiture', 2),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — grande chambre',
    place: 'Orne',
    date: '2025',
    blurb:
      "Réfection électrique complète d'une chambre de château : appliques laiton sur boiseries laquées, circuits repris sans abîmer les décors.",
    photos: [
      ...chantier('chateau-grande-chambre', 13),
      '/assets/chantiers/bea-avant/03.jpg',
      '/assets/chantiers/bea-avant/01.jpg',
    ],
    cover: 2,
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — petite chambre',
    place: 'Orne',
    date: '2025',
    blurb:
      "Mise aux normes et éclairage d'une chambre d'époque : appliques, lampes de chevet et appareillage discret dans les soubassements.",
    photos: chantier('chateau-petite-chambre', 14),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — salle de bain',
    place: 'Orne',
    date: '2025',
    blurb:
      "Création d'une salle de bain sous combles : sèche-serviettes, éclairage de douche et alimentation dissimulée dans le travertin.",
    photos: chantier('chateau-sdb', 6),
    cover: 5,
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: "Appartement haussmannien — rue Jouffroy-d'Abbans",
    place: 'Paris 17e',
    date: '2024',
    blurb:
      "Rénovation électrique complète d'un appartement de réception : éclairage des salons, moulures préservées, appareillage affleurant.",
    photos: chantier('jouffroy-dabbans', 3),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Salle de bain en marbre — rue Vanneau',
    place: 'Paris 7e',
    date: '2023',
    blurb:
      "Salle de bain en marbre de Carrare : éclairage intégré aux verrières, miroirs rétroéclairés et circuits dédiés.",
    photos: chantier('varenne-vanneau', 4),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Appartement de maître — 38 rue de Varenne',
    place: 'Paris 7e',
    date: '2023',
    blurb:
      "Rénovation totale d'un appartement de maître : distribution refaite, éclairage des enfilades et des parquets en point de Hongrie.",
    photos: chantier('varenne-38', 6),
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Demeure de village — la Madeleine',
    place: 'Normandie',
    date: '2025',
    blurb:
      "Reprise complète d'une demeure de village et de ses dépendances : diagnostic, dépose de l'existant et réseau neuf du tableau aux extérieurs.",
    photos: chantier('madeleine', 13),
    cover: 9,
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Parties communes — rue du Dragon',
    place: 'Paris 6e',
    date: '2024',
    blurb:
      "Rénovation des parties communes d'un immeuble ancien : hall, interphonie, boîtes aux lettres et éclairage des circulations.",
    photos: chantier('dragon', 2),
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Cuisine contemporaine — rue Guénégaud',
    place: 'Paris 6e',
    date: '2024',
    blurb:
      "Cuisine ouverte dans un immeuble ancien : spots encastrés, plan de travail éclairé et circuits spécialisés pour l'électroménager.",
    photos: chantier('guenegaud', 3),
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    title: 'Corniches lumineuses — rue Lota',
    place: 'Paris 16e',
    date: '2023',
    blurb:
      'Mise en lumière indirecte : rubans LED dissimulés dans les corniches et gorges lumineuses gradables pièce par pièce.',
    photos: chantier('lota', 8),
    cover: 2,
  },
  {
    cat: 'renovation',
    catLabel: 'Rénovation',
    title: 'Rénovation complète — pièce de vie',
    place: 'Vendée',
    date: '2025',
    blurb:
      'Reprise des circuits et alimentation des nouveaux points, en coordination avec le carreleur.',
    photos: ['/assets/real-renovation-carrelage.jpg'],
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    title: 'Éclairage extérieur — terrasse & jardin',
    place: 'Vendée',
    date: '2025',
    blurb:
      "Scénographie lumineuse d'une terrasse : balisage, éclairage de massif et façade en blanc chaud.",
    photos: ['/assets/real-eclairage-terrasse.jpg'],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Autoconsommation — toiture tuiles',
    place: 'Maine-et-Loire',
    date: '2025',
    blurb: "Panneaux full black plein sud, micro-onduleurs et pilotage fin de l'autoconsommation.",
    photos: ['/assets/real-solaire-toiture.webp'],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Toiture tertiaire — bâtiment professionnel',
    place: 'Maine-et-Loire',
    date: '2024',
    blurb:
      "Centrale en toiture de bâtiment d'activité, dimensionnée sur la consommation de l'entreprise.",
    photos: ['/assets/agence-aerien.jpg'],
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    title: 'Borne de recharge — véhicule électrique',
    place: 'Maine-et-Loire',
    date: '2024',
    blurb: "Borne 7,4 kW couplée à l'installation, étude de puissance et pilotage de la recharge.",
    photos: ['/assets/real-borne-felicien.jpg'],
  },
]
  /* `id` : identifiant stable (position dans cette liste), indépendant du titre. */
  .map((p, i) => ({ ...p, id: `projet-${i + 1}`, metier: CAT_TO_METIER[p.cat], img: p.photos[(p.cover ?? 1) - 1] }))
  /* Plus récents d'abord : chaque page métier affiche ses dernières réalisations. */
  .sort((a, b) => Number(b.date) - Number(a.date))

/* Comparaisons avant / après (photos de chantiers alignées). */
export const BEFORE_AFTER = {
  tableau: {
    title: 'Tableau électrique',
    before: '/assets/chantiers/big-tableau/02.jpg',
    after: '/assets/chantiers/big-tableau/01.jpg',
  },
  chateau: {
    title: 'Chambre de château',
    before: '/assets/chantiers/bea-avant/01.jpg',
    after: '/assets/chantiers/chateau-grande-chambre/02.jpg',
  },
  chambre: {
    title: 'Appliques murales',
    before: '/assets/chantiers/dro-chambre/04.jpg',
    after: '/assets/chantiers/dro-chambre/01.jpg',
  },
  toiture: {
    title: 'Toiture photovoltaïque',
    before: '/assets/chantiers/sto-toiture/02.jpg',
    after: '/assets/chantiers/sto-toiture/01.jpg',
  },
}

/* Chiffres clés animés (odomètre au scroll). */
export const STATS = [
  { prefix: '', num: '19', suffix: ' ans', label: "d'expérience, depuis 2007" },
  { prefix: '+', num: '250', suffix: '', label: 'chantiers réalisés' },
  { prefix: '≈ ', num: '3 200', suffix: '', label: 'kWh produits / an par installation' },
  { prefix: '', num: '60', suffix: ' %', label: "jusqu'à, d'électricité autoconsommée" },
]

/* Villes de la zone d'intervention (carte Leaflet).
   `projects` = nombre de points affichés autour de la ville, répartis dans un rayon
   de `spread` km. Positions fictives (aucune adresse client), générées hors de l'eau
   dans src/lib/mapPoints.js : relancer `python3 scripts/points-carte.py` si l'une de
   ces valeurs change. */
export const CITY_DATA = [
  {
    name: 'Cholet',
    spread: 3.2, // rayon (km) où sont répartis les points de chantier
    dept: 'Maine-et-Loire',
    projects: 120,
    lat: 47.058,
    lng: -0.878,
    hq: true,
    blurb: "Notre agence et notre cœur d’activité — interventions quotidiennes.",
  },
  {
    name: 'Angers',
    spread: 3.6, // rayon (km) où sont répartis les points de chantier
    dept: 'Maine-et-Loire',
    projects: 48,
    lat: 47.478,
    lng: -0.563,
    blurb: 'Patrimoine et éclairage architectural dans le centre historique.',
  },
  {
    name: 'Saumur',
    spread: 2.2, // rayon (km) où sont répartis les points de chantier
    dept: 'Maine-et-Loire',
    projects: 22,
    lat: 47.26,
    lng: -0.077,
    blurb: 'Mises en lumière de façades et biens de caractère.',
  },
  {
    name: 'Nantes',
    spread: 4.2, // rayon (km) où sont répartis les points de chantier
    dept: 'Loire-Atlantique',
    projects: 18,
    lat: 47.218,
    lng: -1.553,
    blurb: 'Rénovations électriques en appartement occupé.',
  },
  {
    name: 'Beaupréau',
    spread: 1.6, // rayon (km) où sont répartis les points de chantier
    dept: 'Maine-et-Loire',
    projects: 16,
    lat: 47.204,
    lng: -0.986,
    blurb: 'Rénovation et mise aux normes en milieu rural.',
  },
  {
    name: 'Mortagne-sur-Sèvre',
    spread: 1.5, // rayon (km) où sont répartis les points de chantier
    dept: 'Vendée',
    projects: 14,
    lat: 46.992,
    lng: -0.947,
    blurb: 'Longères et bâtis anciens remis aux normes.',
  },
  {
    name: 'Les Herbiers',
    spread: 2, // rayon (km) où sont répartis les points de chantier
    dept: 'Vendée',
    projects: 34,
    lat: 46.871,
    lng: -1.013,
    blurb: 'Solaire en autoconsommation et bornes de recharge.',
  },
  {
    name: 'La Roche-sur-Yon',
    spread: 2.8, // rayon (km) où sont répartis les points de chantier
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
  { n: '01', t: "L’écoute", d: 'Vos besoins et vos projets' },
  { n: '02', t: "L’étude & le devis", d: 'Détaillé, sans jargon' },
  { n: '03', t: 'La réalisation', d: 'Soignée et conforme' },
  { n: '04', t: 'Le suivi', d: 'Joignables après le chantier' },
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
export const PROJECT_TYPES = ['Électricité', 'Borne de recharge', 'Photovoltaïque', 'Rénovation']

/* Coordonnées agence. */
export const CONTACT_ROWS = [
  { icon: Icons.pin, label: 'Agence', value: '41 avenue du Lac, 49300 Cholet' },
  { icon: Icons.phone, label: 'Téléphone', value: '06 19 19 73 52' },
  { icon: Icons.mail, label: 'Email', value: 'felicien.gury@voltory.fr' },
  { icon: Icons.clock, label: 'Horaires', value: 'Lun–Ven · 8h–18h' },
]
