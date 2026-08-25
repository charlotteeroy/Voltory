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
    text: "Prises renforcées et bornes jusqu'à 22 kW, adaptées à votre installation, avec étude de puissance et pilotage intelligent de la recharge.",
    points: [
      'Prises renforcées dès 349 € TTC',
      "Bornes jusqu'à 22 kW",
      'Délestage et programmation de la recharge',
      'Couplage avec le solaire',
    ],
    imgs: ['assets/real-borne-felicien.jpg', 'assets/agence-aerien.png'],
  },
]

/* Récapitulatif des prestations (cartes DS, accueil + page prestations). */
export const SERVICES = [
  {
    key: 'electricite',
    icon: Icons.zap,
    eyebrow: 'Électricité',
    title: 'Tableau, circuits, mise aux normes',
    text: "Tableau électrique, création de circuits, protection des personnes et mise aux normes — en neuf comme en rénovation.",
    cta: 'Découvrir nos prestations',
    target: 'realisations',
    filter: 'renovation',
  },
  {
    key: 'photovoltaique',
    icon: Icons.sun,
    eyebrow: 'Photovoltaïque',
    title: 'Solaire en autoconsommation',
    text: 'Panneaux solaires en autoconsommation, pilotage du surplus solaire et stockage, dimensionnés sur votre consommation réelle.',
    cta: 'Calculer mes économies',
    target: 'simulateur',
    filter: 'solaire',
  },
  {
    key: 'borne',
    icon: Icons.car,
    eyebrow: 'Bornes de recharge',
    title: 'Recharge de véhicule électrique',
    text: "Borne jusqu'à 22 kW, prise renforcée, délestage et programmation — installées par un électricien qualifié.",
    cta: 'Choisir ma solution de recharge',
    target: 'contact',
    filter: 'borne',
  },
]

/* Réalisations filtrables par métier.
   Chaque entrée est un chantier : `photos` alimente le pop-up de la galerie.
   NB : les dates et localisations sont déduites des dossiers photos — à faire
   valider par Félicien avant mise en ligne. */
const chantier = (slug, count) =>
  Array.from({ length: count }, (_, i) => `assets/chantiers/${slug}/${String(i + 1).padStart(2, '0')}.jpg`)

const PROJECT_DEFS = [
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — grande chambre',
    place: 'Maine-et-Loire',
    date: '2025',
    blurb:
      "Réfection électrique complète d'une chambre de château : appliques laiton sur boiseries laquées, circuits repris sans abîmer les décors.",
    photos: chantier('chateau-grande-chambre', 13),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — petite chambre',
    place: 'Maine-et-Loire',
    date: '2025',
    blurb:
      "Mise aux normes et éclairage d'une chambre d'époque : appliques, lampes de chevet et appareillage discret dans les soubassements.",
    photos: chantier('chateau-petite-chambre', 14),
  },
  {
    cat: 'patrimoine',
    catLabel: 'Patrimoine',
    title: 'Château — salle de bain',
    place: 'Maine-et-Loire',
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
    photos: ['assets/real-renovation-carrelage.jpg'],
  },
  {
    cat: 'eclairage',
    catLabel: 'Éclairage',
    title: 'Éclairage extérieur — terrasse & jardin',
    place: 'Vendée',
    date: '2025',
    blurb:
      "Scénographie lumineuse d'une terrasse : balisage, éclairage de massif et façade en blanc chaud.",
    photos: ['assets/real-eclairage-terrasse.png'],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Autoconsommation — toiture tuiles',
    place: 'Maine-et-Loire',
    date: '2025',
    blurb: "Panneaux full black plein sud, micro-onduleurs et pilotage fin de l'autoconsommation.",
    photos: ['assets/real-solaire-toiture.webp'],
  },
  {
    cat: 'solaire',
    catLabel: 'Solaire',
    title: 'Toiture tertiaire — bâtiment professionnel',
    place: 'Maine-et-Loire',
    date: '2024',
    blurb:
      "Centrale en toiture de bâtiment d'activité, dimensionnée sur la consommation de l'entreprise.",
    photos: ['assets/agence-aerien.png'],
  },
  {
    cat: 'borne',
    catLabel: 'Borne de recharge',
    title: 'Borne de recharge — véhicule électrique',
    place: 'Maine-et-Loire',
    date: '2024',
    blurb: "Borne 7,4 kW couplée à l'installation, étude de puissance et pilotage de la recharge.",
    photos: ['assets/real-borne-felicien.jpg'],
  },
]

/* Zone géographique — déduite du lieu, pour distinguer les chantiers du Grand Ouest
   (activité actuelle depuis Cholet) des références antérieures en Île-de-France. */
const OUEST = ['Maine-et-Loire', 'Vendée', 'Loire-Atlantique']

export const PROJECTS = PROJECT_DEFS.map((p) => ({
  ...p,
  img: p.photos[(p.cover ?? 1) - 1],
  zone: OUEST.includes(p.place) ? 'ouest' : p.place.startsWith('Paris') ? 'idf' : 'autre',
}))

/* Sélection affichée sur l'accueil : uniquement le Grand Ouest, et un chantier par
   métier plutôt que les quatre plus récents — sans cette règle, trois châteaux
   consécutifs occupent la vitrine et un visiteur venu pour du solaire ne s'y
   reconnaît pas. Les chantiers franciliens, antérieurs à l'installation à Cholet,
   restent visibles sur la page Prestations. */
const HOME_CAT_ORDER = ['solaire', 'borne', 'renovation', 'patrimoine', 'eclairage']

export const HOME_PROJECTS = HOME_CAT_ORDER.map((cat) =>
  PROJECTS.filter((p) => p.zone === 'ouest' && p.cat === cat).sort(
    (a, b) => Number(b.date) - Number(a.date)
  )[0]
)
  .filter(Boolean)
  .slice(0, 4)

export const ZONE_DEFS = [
  { key: 'all', label: 'Toutes zones' },
  { key: 'ouest', label: 'Maine-et-Loire & Vendée' },
  { key: 'idf', label: 'Île-de-France' },
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
  { icon: Icons.phone, label: 'Téléphone', value: '06 19 19 73 52' },
  { icon: Icons.mail, label: 'Email', value: 'felicien.gury@voltory.fr' },
  { icon: Icons.clock, label: 'Horaires', value: 'Lun–Ven · 8h–18h' },
]

/* ============================================================
   Contenus issus du brief du gérant (Homepage – VOLTORY.pdf).
   Les affirmations sont les siennes ; seule la mise en avant
   et la formulation ont été retravaillées.
   ============================================================ */

/* « Notre façon de travailler » — page Entreprise.
   Le pilier « prix transparents » du brief est écarté tant qu'aucun tarif
   n'est publié : la promesse ne serait pas tenue par la page. */
export const WORK_PILLARS = [
  {
    icon: Icons.user,
    title: 'Un seul interlocuteur',
    text: "Félicien vous accompagne de la conception à la réalisation, pour un suivi simple et personnalisé.",
  },
  {
    icon: Icons.trend,
    title: 'Des installations évolutives',
    text: 'Nous concevons des installations pensées pour durer et pouvoir évoluer avec vos besoins.',
  },
  {
    icon: Icons.shield,
    title: 'Un suivi après la réalisation',
    text: "Une entreprise joignable et disponible une fois le chantier terminé — pas seulement pendant.",
  },
]

/* « Nous utilisons ce que nous installons » — accueil.
   L'argument le plus différenciant du brief. */
export const SELF_PROOF = {
  eyebrow: 'Notre conviction',
  title: 'Nous utilisons ce que nous installons',
  intro:
    'Nous ne nous contentons pas de vous conseiller des solutions : nous les utilisons au quotidien dans notre propre entreprise.',
  outro:
    "Parce que nous sommes nous-mêmes utilisateurs de ces solutions, nous savons ce qu'elles apportent au quotidien — et comment les rendre réellement utiles à nos clients.",
  items: [
    {
      icon: Icons.building,
      title: "Notre agence comme terrain d'expérimentation",
      text: 'Nous avons équipé nos bureaux avec une majorité des solutions électriques que nous proposons à nos clients.',
    },
    {
      icon: Icons.sun,
      title: 'Notre propre production solaire',
      text: "Notre agence de Cholet produit une partie de son électricité grâce à une installation photovoltaïque.",
    },
    {
      icon: Icons.car,
      title: 'Une mobilité qui évolue',
      text: 'Nous remplaçons progressivement nos véhicules thermiques par des véhicules électriques.',
    },
  ],
}

/* « Une équipe qualifiée et assurée » — bas de l'accueil.
   Chaque qualification est traduite en bénéfice client : un visiteur non initié
   ne sait pas ce que « RGE QualiPV » lui apporte. */
export const CERTIFICATIONS = [
  {
    name: 'RGE QualiPV',
    scope: 'Photovoltaïque',
    benefit: "Qualification reconnue par l'État, exigée pour accéder aux aides publiques sur une installation solaire.",
  },
  {
    name: 'Recharge+ élec',
    scope: 'Bornes de recharge',
    benefit: "Habilitation à installer les bornes de recharge, condition d'éligibilité aux aides sur ce type d'équipement.",
  },
  {
    name: 'Assurance décennale',
    scope: 'Tous nos chantiers',
    benefit: 'Nos installations sont couvertes dix ans après la réception du chantier.',
  },
]

/* Identité légale — source : base SIRENE / annuaire des entreprises (INSEE).
   Le capital social et le numéro de police décennale restent à confirmer par le gérant. */
export const LEGAL = {
  raisonSociale: 'Voltory',
  formeJuridique: 'SARL',
  siren: '498 685 692',
  siret: '498 685 692 00044',
  tva: 'FR92 498 685 692',
  ape: '43.21A — Travaux d’installation électrique dans tous locaux',
  rcs: 'RCS Angers 498 685 692',
  adresse: '41 avenue du Lac, 49300 Cholet',
  creation: '21 mars 2007',
  gerants: 'Olivier Gury et Félicien Gury',
  hebergeur: 'Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, États-Unis',
}
