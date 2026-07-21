# Voltory — Design System

Base visuelle de la marque **Voltory**, électricien & installateur solaire familial basé à Cholet (49). Ce dépôt rassemble couleurs, typographie, fondations, composants réutilisables et une recréation moderne de la page d'accueil — pour construire des interfaces et supports fidèles à l'identité Voltory.

---

## Contexte entreprise

**Voltory** — entreprise familiale d'électriciens depuis 2007, à taille humaine, basée à **Cholet** et active en **Maine-et-Loire** et **Vendée**. « De père en fils ». Interlocuteur de référence : **Félicien Gury**.

Deux lectures de la marque cohabitent :
- **Le site actuel (voltory.fr)** est très orienté **photovoltaïque résidentiel** (autoconsommation, recharge VE, « Vendredi solaire » gratuit, RGE QualiPV, ~250 projets, 19 ans). Ton local, concret, rassurant.
- **Le positionnement à pousser** (cf. doc de marque fournie) élargit vers le **partenaire technique exigeant** — du particulier au **patrimoine de prestige** (châteaux, hôtels particuliers, références type LVMH / Louis Vuitton), partenaire des architectes & maîtres d'œuvre, sur les 3 métiers : **électricité · photovoltaïque · bornes de recharge (IRVE)**.

Le design system tient les deux : foundations premium + ton solaire accessible. L'objectif de la première itération est une **page d'accueil retravaillée — moderne, attractive et claire** (voir `ui_kits/site-vitrine/`).

### Sources fournies
- `uploads/voltory-design-system.html` — document de marque détaillé (couleurs extraites du logo HD, typo, voix, composants). **Source de vérité** pour les tokens.
- `uploads/Screenshot 2026-06-15 at 11.00.37 AM.png` — logo HD (wordmark blanc + soleil or sur fond pétrole). Logos dérivés dans `assets/`.
- `uploads/VOLTORY.pdf` — **mentionné mais absent du projet** (non importé). À ré-uploader si besoin de la plaquette d'origine.
- Site live : https://voltory.fr — source du contenu et de la copie réelle.

---

## CONTENT FUNDAMENTALS — comment Voltory écrit

- **Langue : français**, vouvoiement systématique (« vous », « votre habitation »). Le « nous » Voltory est chaleureux et familial, jamais corporate.
- **Registre** : partenaire technique précis + artisan de proximité. Sérieux ET chaleureux. On explique, on ne survend pas.
- **Casse** : titres en casse de phrase (pas de Title Case anglo). Surtitres (eyebrows) en MAJUSCULES espacées. Wordmark « Voltory » toujours avec V majuscule unique.
- **Preuve par le concret** : chiffres réels et vérifiables (« ≈ 3200 kWh/an », « jusqu'à −60 % », « +250 projets », « depuis 2007 »), références nommées, ancrage géographique (Cholet, Maine-et-Loire, Vendée).
- **Emoji** : oui, avec parcimonie et toujours fonctionnels, repris de l'usage maison — ⚡ (énergie/CTA), ☀️ (solaire), 🔌/🚗 (recharge), 📍 (local), ✓/★ (labels). Jamais décoratifs à outrance.
- **CTA** : verbe d'action à la 1re personne du bénéficiaire — « Estimer mes économies », « Étudier mon projet solaire », « Obtenir mon étude gratuite ». Toujours « sans engagement ».
- **On évite** : le ton « démarchage solaire » agressif, les fausses urgences / offres « limitées », les promesses miracles, le jargon non expliqué, les visuels génériques de panneaux hors contexte.

Exemples réels : « Réduisez vos factures d'électricité jusqu'à −60 % grâce au solaire » · « Produisez, consommez ! » · « Un seul contact, du début à la fin. » · « Ici, pas d'intermédiaire. »

---

## VISUAL FOUNDATIONS

**Couleurs.** Duo franc et rare dans le secteur — c'est le socle de différenciation. **Bleu pétrole `#005F6F`** (primaire : fonds, titres, sérieux patrimonial) + **Or solaire `#FDBE03`** (accent : CTA, numéros, chaque temps fort) + **blanc** (respiration). Nuanciers complets 50→900 (pétrole) et 100→700 (or). Neutres **teintés pétrole** (de `--encre #0B2126` à `--coquille #F1F5F5`). Sémantique : éco vert `#2F9E6B`, data cyan `#1FA6C4`, alerte `#D9533B`. Voir `tokens/colors.css` + alias sémantiques (`--text-*`, `--surface-*`, `--action-*`).

**Typographie.** Display **Poppins** (600/700/800) — géométrique, arrondi, dans l'esprit du wordmark custom. Corps **Inter** (400/500/600) — neutre, lisible. Échelle fluide (`clamp`) de Display 58 à Légende 13. Interlettrage négatif sur les gros titres (`-0.03em`). Voir `tokens/typography.css`.

**Élément signature : le grand numéro doré.** Marqueur visuel propre à Voltory — un chiffre surdimensionné en or `#FDBE03`, Poppins 800, qui numérote piliers, étapes de méthode et chiffres clés. À conserver : c'est ce qui rend la marque immédiatement reconnaissable.

**Espacement.** Grille de 4 px (`--space-1` 4px → `--space-9` 96px). Sections aérées (96px de respiration verticale).

**Coins.** Rayons **généreux** pour un rendu chaleureux/premium : `--r-md` 16px (cartes), `--r-lg` 24px (grands blocs), `--r-pill` (boutons, badges). Jamais d'angles vifs sur les surfaces.

**Cartes.** Fond blanc, bordure 1px `--nuage`, rayon 16px, ombre douce `--e1`. Au survol : montée de −4px + passage à `--e2`. Variante bénéfice = pastille d'icône or 46px en haut.

**Ombres & élévation.** Toujours douces, teintées encre, jamais dures : `--e1` (cartes), `--e2` (boutons, blocs flottants), `--e3` (modales/formulaires). Halo doré `--glow-or` pour les temps forts.

**Fonds.** Deux registres : clair (`--coquille` / blanc) pour le contenu, et **bandeaux pétrole** pour les moments forts (hero, preuve, CTA final). Sur pétrole : **halo radial doré** discret (opacité ~18 %) + fine trame de points pour la texture. Pas de dégradés bleu-violet. Les photos (chantiers, toitures, équipe) sont centrales — placeholders cadrés en attendant les visuels réels.

**Mouvement.** Sobre. Transitions `--ease-out` (cubic-bezier .22,.61,.36,1), durées 0.15–0.45s. Survol bouton = `translateY(-2px)` + assombrissement/éclaircissement de la couleur. Survol carte = montée légère + ombre. Pas de bounce, pas d'animations décoratives en boucle.

**États.** Survol primaire → `--petrole-700` ; accent → `--or-400` ; ghost → contour pétrole + fond `--petrole-50`. Focus champ → bordure `--petrole-400` + anneau `--or-200`. Désactivé → opacité 0.5.

**Transparence & flou.** Utilisés pour la nav au scroll (`rgba` pétrole + `backdrop-filter: blur`) et les pastilles sur photo (verre dépoli). Avec mesure.

---

## ICONOGRAPHY

Voltory n'utilise **pas** de bibliothèque d'icônes vectorielles propriétaire dans ses supports actuels. L'iconographie repose sur :
- **Emoji système**, fonctionnels et parcimonieux — ⚡ ☀️ 🔌 🚗 📍 ✓ ★ 🤝 🗂️ 📈 — repris tels quels du site et de la plaquette. C'est l'approche maison ; la conserver pour la continuité.
- **Le grand numéro doré** comme « icône » de section (voir Élément signature).
- **Logos de certification** en images : RGE QualiPV, QualitEnR, Logo RGE (référencés sur le site live ; à récupérer en PNG haute définition auprès de Voltory pour les intégrer dans `assets/`).

Si un set vectoriel devient nécessaire (UI plus dense), substituer **Lucide** (CDN, trait régulier ~2px, arrondi) qui s'accorde au caractère géométrique-arrondi de la marque. **Substitution à valider avec le client** — non confirmée dans les sources.

Aucune icône SVG dessinée à la main dans ce système.

---

## Fichiers & index

**Fondations (CSS)**
- `styles.css` — point d'entrée global (liste d'`@import` uniquement). Les consommateurs lient ce seul fichier.
- `tokens/fonts.css` — webfonts Poppins + Inter (Google Fonts).
- `tokens/colors.css` — ancres, nuanciers, neutres, sémantique + alias.
- `tokens/typography.css` — familles, poids, échelle, interlignage/lettrage.
- `tokens/spacing.css` — espacement, rayons, élévation, mouvement, largeurs.

**Composants** (`components/core/` — React, namespace `window.VoltoryDesignSystem_1ee063`)
- `Button` — primaire (pétrole) / accent (or) / ghost · tailles sm·md·lg · icône · `as="a"`.
- `Badge` — eco · or · petrole · data · alerte.
- `Card` — carte bénéfice (icône or, eyebrow, titre, texte).
- `StatCard` — chiffre clé (grand numéro doré sur pétrole).
- `StepCard` — étape de méthode numérotée.
- `Input` — champ de formulaire (focus annelé or).
- `Eyebrow` — surtitre à trait doré.

**UI kit** (`ui_kits/site-vitrine/`) — page d'accueil retravaillée
- `index.html` — page complète (point de départ « Site vitrine »).
- `Header.jsx` · `Hero.jsx` · `Sections.jsx` · `Footer.jsx` · `kit.css`.

**Specimens** (`guidelines/*.card.html`) — cartes de l'onglet Design System (Colors · Type · Spacing · Brand).

**Assets** (`assets/`)
- `voltory-logo-petrol.png` — logo sur bloc pétrole (fonds clairs).
- `voltory-logo-white.png` — wordmark blanc + soleil or, fond transparent (fonds foncés).

**Méta**
- `SKILL.md` — emballage Agent Skill (compatible Claude Code).
- *(générés automatiquement, ne pas éditer : `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`)*

---

## Pour démarrer un nouveau support
1. Lier `styles.css`.
2. Composer avec les composants `window.VoltoryDesignSystem_1ee063` (ou copier les classes du kit).
3. Respecter : duo pétrole/or, numéro doré pour les temps forts, coins généreux, ombres douces, photos réelles, ton partenaire-chaleureux.
