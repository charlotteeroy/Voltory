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
  App.jsx                  Navigation par onglets (accueil / prestations / entreprise / contact)
  styles/
    index.css              Styles globaux + keyframes ; importe les tokens et Leaflet
    tokens/                Tokens du design system (couleurs, typo, espacement, fonts)
  components/
    ds/                    Composants du design system (Button, Badge, Card, StatCard,
                           StepCard, Input) recréés en React
    Nav.jsx / Footer.jsx   Chrome du site
    HeroCarousel.jsx       Header plein-cadre, carrousel des réalisations en fondu
    Simulator.jsx          Simulateur d'économies solaires
    Metiers.jsx            Trois métiers en grands blocs, photos qui défilent
    StatsBand.jsx          Chiffres clés — odomètre déclenché au scroll
    Reviews.jsx            Avis Google (carrousel horizontal)
    ZoneMap.jsx            Carte Leaflet interactive de la zone d'intervention
    CtaBand.jsx            Bandeau CTA final
  pages/
    Home.jsx               Accueil (hero → simulateur → métiers → chiffres → avis → carte → CTA)
    Realisations.jsx       Prestations + galerie de réalisations filtrable par métier
    Entreprise.jsx         Histoire, méthode, « pour qui », engagements (marquee)
    Contact.jsx            Formulaire d'étude + coordonnées agence
  lib/
    data.js                Contenu réel (métiers, réalisations, villes, avis, engagements…)
    icons.jsx              Pictogrammes au trait
    layout.js              Conteneur unifié et helpers de mise en page

public/assets/             Photos (hero, réalisations, agence, logos)
project/                   Bundle de handoff original (maquette + design system)
```

## Notes

- **Navigation** : le site est une SPA à onglets ; le logo Voltory ramène à l'accueil,
  les onglets « Prestations » et « L'entreprise » et le bouton « Demander une étude »
  sont à droite de la barre.
- **Carte** : les tuiles OpenStreetMap nécessitent un accès réseau sortant.
- **Placeholders** : le téléphone (`02 41 00 00 00`), l'email et le SIRET restent des
  valeurs à remplacer par les vraies coordonnées. Les intitulés/chiffres des réalisations
  sont des exemples cohérents. Les prénoms des avis Google sont indicatifs.
