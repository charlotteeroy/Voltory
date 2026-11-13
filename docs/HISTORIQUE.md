# Historique du projet

Ce document retrace le chemin parcouru sur le site Voltory : les grandes étapes, les
décisions prises et pourquoi. Pour ce qu'il reste à faire, voir [A-FAIRE.md](A-FAIRE.md) ;
pour le fonctionnement technique, voir [FONCTIONNEMENT.md](FONCTIONNEMENT.md).

Depuis novembre 2026, chaque évolution passe par une pull request (PR) sur GitHub, relue
par un agent de revue indépendant, puis fusionnée quand le build Cloudflare « Workers
Builds: voltory » est vert.

---

## Juillet 2026 — Première version

- **Maquette** : point de départ = export Claude Design (`project/Voltory.dc.html`) et le
  design system Voltory (duo pétrole / or, Poppins, coins généreux, ombres douces).
- **Site React + Vite** recréé à partir de la maquette, déployé sur **Cloudflare Workers**
  (fichiers statiques de `dist/`).
- Page « Prestations » avec chantiers réels et pop-up photos, vraies coordonnées,
  menu hamburger mobile, simulateur solaire.

## Août 2026 — Piste non retenue

- **PR #1** (accueil retravaillé d'après le brief du gérant) : fermée sans fusion. Elle
  contient une ébauche de page « Mentions légales » à reprendre (voir [A-FAIRE.md](A-FAIRE.md)).

## Novembre 2026 — Restructuration d'après les retours de Félicien

Lors d'un appel début novembre, Félicien (gérant) a fixé les priorités :

- l'**électricité générale** est l'activité principale, les **bornes** la deuxième (forte
  demande), le **solaire** vient ensuite — l'ancien site parlait trop de solaire ;
- une **page par métier** plutôt qu'une page « Prestations » ;
- un **accueil court** qui oriente chaque visiteur vers son besoin ;
- le **simulateur** uniquement sur la page Photovoltaïque ;
- des **réalisations en avant / après** ;
- un **formulaire de contact qui envoie vraiment** les demandes à Félicien.

### PR #4 à #8 — Pages métiers (6–9 novembre)

Préparées à partir du 6 novembre (d'abord en une seule PR, #2, fermée), puis découpées en
cinq PR empilées, fusionnées le 9 novembre.


| PR | Contenu |
|---|---|
| #4 | Pages Électricité, Bornes de recharge, Photovoltaïque ; navigation à 3 métiers + L'entreprise |
| #5 | Contenu détaillé tiré des devis de Félicien (tableau électrique, centrale solaire, entretien VOLTORY+, déplacement offert sous 15 km, paiement échelonné). Les prix ne sont volontairement pas affichés. |
| #6 | Allègement : moins de texte, police plus légère |
| #7 | Photos de Félicien : curseur avant / après, équipe, logos de qualification, nouvelles réalisations |
| #8 | Photovoltaïque : frise « de l'étude à l'entretien » |

### PR #9 à #11 — Qualité (9 novembre)

- **#9** : vraie page 404 (une page HTML par adresse générée au build, statut 404 réel),
  corrections de la revue (curseur tactile, carte, engagements).
- **#10** : images compressées, 60 Mo → 31 Mo.
- **#11** : le curseur avant / après ne saute plus au début d'un défilement tactile.

### PR #3 — Formulaire de contact (6–12 novembre)

- Envoi par **Web3Forms** (gratuit, sans serveur) vers l'adresse de Félicien.
- Nouveau design en **3 étapes** : choix du projet par **tuiles photo** (fondu pétrole en
  bas de l'image), coordonnées, puis « Quels sont vos besoins ? » (facultatif).
- Choix éditoriaux : pas de question « Quand vous rappeler ? », **pas d'engagement « sous
  48 h »** (remplacé par « Nous revenons vers vous au plus vite »).
- Testé de bout en bout avec une clé de test (e-mail bien reçu).
- **Fusionnée le 12 novembre sans la clé de production** : voir [A-FAIRE.md](A-FAIRE.md).
  En attendant, le formulaire affiche un message d'erreur avec le téléphone et l'e-mail de
  Félicien (avant cette PR, le formulaire affichait « Merci » sans rien envoyer).

### PR #12 à #15 — Accueil plus rapide, carte réaliste (12 novembre)

- **#12** : titre de la section avant / après : « Découvrez les avant-après de nos réalisations ».
- **#13** : accueil plus rapide (4,7 Mo → 3,4 Mo au chargement) :
  - le diaporama du header ne charge que la 1re photo, préchargée en priorité ; chaque
    photo suivante est téléchargée pendant l'affichage de la précédente, et le diaporama
    n'avance que lorsqu'elle est prête ;
  - photos du header en **WebP** (1,55 Mo → 0,82 Mo), logos Voltory allégés ;
  - les photos des blocs « métiers » ne se chargent qu'à l'approche.
- **#14** : la carte affiche **un point par chantier** autour de chaque ville, au lieu d'un
  seul point au centre. Les positions sont **fictives** (aucune adresse client) et générées
  hors de l'eau (Loire, étangs) par `scripts/points-carte.py`.
- **#15** : la carte (Leaflet) n'est téléchargée qu'à l'approche de la section ; sur
  mobile, un doigt fait défiler la page (on zoome en pinçant ou avec les boutons + / −) ;
  points espacés d'au moins 60 m.

### PR #16 à #21 — Épuration des pages (12 novembre)

| PR | Changement |
|---|---|
| #16 | Accueil : un seul bouton dans le header (« Parler de mon projet ») |
| #17 | Photovoltaïque : section « Les options » (routeur, batterie, borne) retirée — peu d'information utile |
| #18 | Accueil : logos « Qualifiés & assurés » plus petits (34 → 24 px) ; tiennent sur une ligne en mobile |
| #19 | Accueil : titre du header plus resserré (interligne 0,98) et intro compactée |
| #20 | Photovoltaïque : bouton « Estimer mes économies » retiré du header (le simulateur est juste dessous) ; « Demander une étude » devient le bouton principal |
| #21 | Bornes : bandeau « Votre tableau électrique est ancien ? » retiré ; fonds des sections réajustés, cartes de la méthode contrastées sur fond gris |

### PR #22 — Documentation (13 novembre)

Ce dossier `docs/` : historique, reste à faire, fonctionnement technique.

**État au 13 novembre 2026** : aucune PR ouverte, tout est fusionné et déployé.
