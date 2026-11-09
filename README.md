# Voltory — site vitrine

Site vitrine de **Voltory**, entreprise familiale d'électricité, de photovoltaïque et de
bornes de recharge à Cholet (Maine-et-Loire & Vendée). De père en fils depuis 2007.

Implémenté en **React + Vite** à partir de la maquette exportée depuis Claude Design
(`project/Voltory.dc.html`), fidèle au design system Voltory (duo pétrole/or, Poppins,
numéro doré signature, coins généreux, ombres douces).

## Stack

- **React 18** + **Vite 5**
- **Leaflet** pour la carte interactive de la zone d'intervention (OpenStreetMap)
- Styles inline pilotés par les **tokens CSS** du design system (`src/styles/tokens/`)

## Démarrer

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production → dist/
npm run preview  # prévisualise le build
```

## Structure

```
index.html                 Point d'entrée HTML
src/
  main.jsx                 Bootstrap React
  App.jsx                  Routage : une adresse par page (history API, sans dépendance)
  styles/
    index.css              Styles globaux + keyframes ; importe les tokens et Leaflet
    tokens/                Tokens du design system (couleurs, typo, espacement, fonts)
  components/
    ds/                    Composants du design system (Button, Badge, Card, StatCard,
                           StepCard, Input) recréés en React
    Nav.jsx / Footer.jsx   Chrome du site (vrais liens <a href>)
    HeroCarousel.jsx       Header plein-cadre, carrousel en fondu + qualifications
    Simulator.jsx          Simulateur d'économies solaires (page Photovoltaïque)
    Metiers.jsx            Trois métiers en grands blocs, chacun mène à sa page
    ServiceHero.jsx        En-tête des pages métier
    ServiceBlocks.jsx      Listes à coches, grilles de cartes
    SectionHead.jsx        Surtitre + titre + chapeau de section
    Method.jsx             Méthode en 4 étapes + engagements (sur chaque page métier)
    Projects.jsx           Cartes chantier, pop-up photos, « dernières réalisations »
    StatsBand.jsx          Chiffres clés — odomètre déclenché au scroll
    Reviews.jsx            Avis Google (carrousel horizontal)
    ZoneMap.jsx            Carte Leaflet interactive de la zone d'intervention
    CtaBand.jsx            Bandeau CTA final
  pages/
    Home.jsx               /  Accueil (hero → métiers → chiffres → avis → carte → CTA)
    Electricite.jsx        /electricite
    Bornes.jsx             /bornes-de-recharge
    Photovoltaique.jsx     /photovoltaique  (simulateur, entretien)
    Entreprise.jsx         /entreprise  Histoire, agence, « pour qui », engagements
    Contact.jsx            /contact  Formulaire d'étude + coordonnées agence
  lib/
    data.js                Contenu réel (métiers, qualifications, réalisations, villes, avis…)
    routes.js              Clés de page ↔ adresses et titres d'onglet
    icons.jsx              Pictogrammes au trait
    layout.js              Conteneur unifié et helpers de mise en page

public/assets/             Photos (hero, réalisations, agence, logos)
project/                   Bundle de handoff original (maquette + design system)
```

## Notes

- **Navigation** : une page par métier (Électricité · Bornes de recharge · Photovoltaïque,
  dans l'ordre de priorité de l'activité) + L'entreprise. Chaque page a sa propre adresse ;
  Cloudflare renvoie `index.html` pour toutes les routes (`not_found_handling`).
- **Réalisations** : chaque chantier de `PROJECTS` est rattaché à une page métier
  (`CAT_TO_METIER`) ; les plus récents s'affichent en premier.
- **Carte** : les tuiles OpenStreetMap nécessitent un accès réseau sortant.
- **Contenus issus des devis** : détail du tableau électrique et de la centrale solaire,
  options (routeur, batterie), entretien VOLTORY+, déplacement offert sous 15 km, paiement
  échelonné (`Method.jsx`). Les prix des devis ne sont volontairement pas affichés.
- **Photos** : issues du dossier « Photos Site web » de Félicien, compressées (≤ 1600 px)
  dans `public/assets/chantiers/<chantier>/`, `equipe/`, `logos/`, `materiel/`. Les
  avant / après (`BEFORE_AFTER` dans `data.js`) utilisent des paires cadrées à l'identique.
- **Placeholders** : prénoms et rôles des deux autres membres de l'équipe
  (`TEAM` dans `Entreprise.jsx`) ; localisation « Meurthe-et-Moselle » de la centrale au
  sol (dossier 54-GUR) à confirmer ; la distance incluse pour la pose d'une borne (3 m)
  est à confirmer. Les dates et localisations des
  réalisations (`src/lib/data.js`) sont déduites des dossiers photos — à faire valider.
  Les prénoms des avis Google sont indicatifs.
