# Ce qu'il reste à faire

État au 17 novembre 2026. Objectif : site prêt fin 2026, utilisé par Félicien dès
janvier 2027.

## 🔴 Bloquant avant la mise en service

- [x] **Clé Web3Forms de production** : clé de Félicien dans `.env` (#34).
  - [ ] Après le déploiement, envoyer une demande de test depuis le site en ligne (vrai
    navigateur) et vérifier que Félicien la reçoit.
- [ ] **Page « Mentions légales »** (obligatoire). Une ébauche existe sur l'ancienne
  branche `ui/homepage-brief-gerant` (`MentionsLegales.jsx`), à reprendre.
- [ ] **Adresse de production** : récupérer l'URL `workers.dev` dans le tableau de bord
  Cloudflare, puis brancher le domaine `voltory.fr` (qui pointe encore sur l'ancien
  WordPress).

## 🟠 À faire valider par Félicien

- [ ] **Nombre de chantiers par ville** (`CITY_DATA[].projects` dans `src/lib/data.js`).
  Si les chiffres changent, relancer `python3 scripts/points-carte.py`.
- [x] **Équipe** : 4 membres avec noms, rôles et portraits HD (13/11/2026).
- [ ] **Portrait d'Olivier** : l'ancien détourage est conservé (la nouvelle photo a un
  regard qui part de côté) ; en refaire un, sur le même mur clair que les autres.
- [ ] **Réalisations** : dates et lieux des chantiers (déduits des dossiers photos), et
  localisation de la centrale au sol (dossier « 54-GUR »).
- [x] **Bornes** : distance incluse dans la pose standard : 5 m (#37).
- [ ] **Bornes** : « dès 419 € TTC » ou prix ferme « 419 € TTC » ?
- [ ] **Électricité** : classement des réalisations dans les étiquettes Audit / Tableau /
  Cuisine / Salle de bain / Extension / Création (détail dans la PR #36).
- [ ] **Photovoltaïque** : capture de la vraie application de suivi (pour remplacer
  l'écran stylisé) ; « Toiture tuiles — full black » et « Autoconsommation — toiture
  tuiles » montrent peut-être la même toiture.
- [ ] **Photos** : plus de photos de chantier en bonne définition (bornes, solaire et
  Félicien au travail sont en 573 px), pour le header et les cartes.
- [ ] **Électricité** : durée « ≈ 2 jours » pour un tableau.
- [ ] **Téléphone** à afficher (mobile 06 19 19 73 52 ou fixe de l'agence).
- [ ] **Prix** : seule la prise renforcée affiche un prix (419 €) ; en afficher d'autres ?
- [ ] **Avis Google** : les prénoms affichés sont indicatifs, à remplacer par les vrais avis.
- [ ] **Mentions du pied de page** : vérifier SIRET / RCS / assurance.

## 🟡 Améliorations proposées (non lancées)

- [ ] Électricité : le bouton « Estimer mes économies → » du bandeau « Déjà client ? »
  devrait descendre directement jusqu'au simulateur (`#simulateur`).
- [ ] Bornes : remettre un lien discret vers la page Électricité (le bandeau retiré en #21
  était le seul), par ex. près de la note « implantation plus éloignée du tableau ».
- [ ] Formulaire : délai maximal d'envoi (15 s), message d'erreur adapté quand la clé
  manque, contour de focus distinct de l'état sélectionné des tuiles.
- [ ] Carte : points encore serrés au zoom maximal (espacement ≈ 180 m nécessaire) ;
  recalcul de la taille de la carte quand sa hauteur change ; quelques points d'Angers sur
  l'île Saint-Aubin (zone inondable).
- [ ] Électricité : photo du header (`01-salon.webp`, un salon) à remplacer par une photo
  de chantier, comme sur l'accueil.
- [ ] Accueil : plus d'indication visuelle « faites glisser » sur le curseur avant / après ;
  le surtitre « Avant / après » répète le titre.
- [ ] Images : `histoire-pere-fils.png` encore en PNG (à convertir en WebP) ;
  `project/Voltory.dc.html` référence des images supprimées.
- [ ] Contenu retiré en #17 (routeur solaire, batterie) : pourrait revenir dans une FAQ.
- [ ] Vidéo de présentation de l'entreprise (souhait de Félicien, plus tard).
