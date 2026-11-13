# Fonctionnement technique

Notes pratiques pour reprendre le projet. Vue d'ensemble et structure : [README](../README.md).

## Déploiement

- Hébergement : **Cloudflare Workers** (fichiers statiques, `wrangler.jsonc`).
- Chaque fusion sur `main` déclenche un build Cloudflare (« Workers Builds: voltory ») qui
  publie `dist/`.
- `vite.config.js` (plugin `pagesPerRoute`) génère **une page HTML par adresse** avec son
  titre, plus `404.html`. Les adresses inconnues renvoient un vrai statut 404.
- Le préchargement de la 1re photo du header (`index.html`, entre les commentaires
  `accueil:preload`) n'est conservé que sur l'accueil.

## Formulaire de contact (Web3Forms)

- Code : `src/lib/sendContact.js` (envoi) et `src/pages/Contact.jsx` (formulaire en 3 étapes).
- La clé `VITE_WEB3FORMS_KEY` détermine l'adresse qui reçoit les demandes :
  - `.env` → clé de production (versionnée ; une clé Web3Forms est publique par conception) ;
  - `.env.local` → clé de test, prioritaire en local, **jamais versionnée** (`*.local`).
- La clé est intégrée **au build** : après l'avoir changée, il faut rebuilder et redéployer.
- Web3Forms refuse les envois depuis un serveur (offre gratuite) et depuis un navigateur
  headless : tester l'envoi depuis un vrai navigateur.
- Anti-spam : champ caché `botcheck`.
- Une page métier peut pré-sélectionner le type de projet en ouvrant le formulaire.

## Carte de la zone d'intervention

- Composant : `src/components/ZoneMap.jsx` (Leaflet 1.9, rendu canvas).
- Leaflet est **chargé à la demande** (`import('leaflet')`) quand la section approche de
  l'écran : aucune tuile OpenStreetMap n'est téléchargée avant.
- Villes, centre, rayon (`spread`, en km) et nombre de chantiers : `CITY_DATA` dans
  `src/lib/data.js`.
- Les points sont **fictifs** (aucune adresse client) et pré-calculés dans
  `src/lib/mapPoints.js` par `scripts/points-carte.py` :
  - tirage déterministe, plus dense au centre de la ville ;
  - points dans l'eau rejetés (couleur de l'eau sur les tuiles OSM) ;
  - au moins 60 m entre deux points.

  Après toute modification de `CITY_DATA` :

  ```bash
  python3 scripts/points-carte.py   # régénère src/lib/mapPoints.js
  ```

## Performances de l'accueil

- Diaporama du header (`HeroCarousel.jsx`) : chargement progressif, une photo à la fois ;
  le diaporama n'avance que lorsque la photo suivante est prête.
- Photos du header en WebP (`public/assets/hero/`).
- Photos des blocs métiers (`Metiers.jsx`) chargées après l'événement `load` et à
  l'approche de la section.

## Méthode de travail

1. Une branche et une PR par demande, avec une description en français.
2. Build local (`npm run build`) et vérification visuelle desktop + mobile (390 px).
3. Relecture par un agent indépendant, qui peut pousser des corrections sur la branche.
4. Fusion quand la relecture est validée et le build Cloudflare vert.

Aperçu local combiné : `npm run dev` (ou `npx vite preview` après un build).
