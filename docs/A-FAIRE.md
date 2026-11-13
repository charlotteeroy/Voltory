# Ce qu'il reste à faire

État au 13 novembre 2026. Objectif : site prêt fin 2026, utilisé par Félicien dès
janvier 2027.

## 🔴 Bloquant avant la mise en service

- [ ] **Clé Web3Forms de production.** Félicien crée sa clé sur web3forms.com avec son
  adresse professionnelle, puis :
  1. la renseigner dans `.env` (`VITE_WEB3FORMS_KEY=…`) ou en variable de build Cloudflare ;
  2. **rebuilder et redéployer** — la clé est intégrée au moment du build ;
  3. envoyer une demande de test depuis le site en ligne.

  Tant que la clé est vide, le formulaire affiche une erreur avec le téléphone et l'e-mail.
- [ ] **Page « Mentions légales »** (obligatoire). Une ébauche existe sur l'ancienne
  branche `ui/homepage-brief-gerant` (`MentionsLegales.jsx`), à reprendre.
- [ ] **Adresse de production** : récupérer l'URL `workers.dev` dans le tableau de bord
  Cloudflare, puis brancher le domaine `voltory.fr` (qui pointe encore sur l'ancien
  WordPress).

## 🟠 À faire valider par Félicien

- [ ] **Nombre de chantiers par ville** (`CITY_DATA[].projects` dans `src/lib/data.js`).
  Si les chiffres changent, relancer `python3 scripts/points-carte.py`.
- [ ] **Équipe** : prénoms et rôles des deux autres membres (`TEAM` dans
  `src/pages/Entreprise.jsx`) et portraits en haute définition (actuels ≈ 160 px).
- [ ] **Réalisations** : dates et lieux des chantiers (déduits des dossiers photos), et
  localisation de la centrale au sol (dossier « 54-GUR »).
- [ ] **Bornes** : distance incluse dans la pose standard (3 m affichés, 5 m évoqués).
- [ ] **Électricité** : durée « ≈ 2 jours » pour un tableau.
- [ ] **Téléphone** à afficher (mobile 06 19 19 73 52 ou fixe de l'agence).
- [ ] **Prix** : les afficher ou non (pour l'instant, aucun prix publié).
- [ ] **Avis Google** : les prénoms affichés sont indicatifs, à remplacer par les vrais avis.
- [ ] **Mentions du pied de page** : vérifier SIRET / RCS / assurance.

## 🟡 Améliorations proposées (non lancées)

- [ ] Accueil : garder « votre maison » sur une seule ligne dans le titre (desktop).
- [ ] Électricité : le bouton « Estimer mes économies → » du bandeau « Déjà client ? »
  devrait descendre directement jusqu'au simulateur (`#simulateur`).
- [ ] Bornes : remettre un lien discret vers la page Électricité (le bandeau retiré en #21
  était le seul), par ex. près de la note « implantation plus éloignée du tableau ».
- [ ] Formulaire : délai maximal d'envoi (15 s), message d'erreur adapté quand la clé
  manque, contour de focus distinct de l'état sélectionné des tuiles.
- [ ] Carte : points encore serrés au zoom maximal (espacement ≈ 180 m nécessaire) ;
  recalcul de la taille de la carte quand sa hauteur change ; quelques points d'Angers sur
  l'île Saint-Aubin (zone inondable).
- [ ] Accueil : plus d'indication visuelle « faites glisser » sur le curseur avant / après ;
  le surtitre « Avant / après » répète le titre.
- [ ] Images : `histoire-pere-fils.png` encore en PNG (à convertir en WebP) ;
  `project/Voltory.dc.html` référence des images supprimées.
- [ ] Contenu retiré en #17 (routeur solaire, batterie) : pourrait revenir dans une FAQ.
- [ ] Vidéo de présentation de l'entreprise (souhait de Félicien, plus tard).
