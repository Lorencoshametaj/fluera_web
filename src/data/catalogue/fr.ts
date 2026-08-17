import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catalogue — Des templates d'étude qui s'installent dans ta mémoire",
    "description": "Une page manuscrite, la structure de concepts qui la porte, et un planning de révision à toi. Classement : la rétention mesurée, pas les téléchargements.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Le catalogue Fluera",
    "description": "Un catalogue de pages d'étude manuscrites qui s'installent sous forme de plannings de répétition espacée, classées sur la rétention mesurée plutôt que sur les téléchargements.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "fr"
  },
  "hero": {
    "kicker": "Catalogue",
    "title": "Quelqu'un a déjà décortiqué ce chapitre.<br />Installe-le, et c'est toi qu'on interroge.",
    "description": "Un template d'étude Fluera n'est ni un PDF ni un paquet de fiches. C'est une page écrite à la main, la structure de concepts qui la porte, et la recette du planning de révision qui devrait être le tien. L'installer plante ce planning dans un canvas à toi.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Demander un accès anticipé →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Comment fonctionne le planning de révision"
      }
    ]
  },
  "unit": {
    "kicker": "L'unité",
    "title": "Trois choses voyagent. L'auteur reste à quai.",
    "sub": "Toutes les autres boutiques te livrent un document et te souhaitent bonne chance. Un template d'étude emporte la page, la structure qui rend cette page enseignable, et les consignes pour la planifier — sans la part qui appartient à celui qui l'a écrite. C'est voulu.",
    "items": [
      {
        "title": "Une feuille, pas un cahier",
        "body": "Une région que l'auteur a cadrée sur son propre canvas. À l'intérieur : les tracés, les formes, le texte saisi, les images. À l'extérieur : rien ne part. Aucun PDF source n'est inclus."
      },
      {
        "title": "L'ossature sous l'encre",
        "body": "Les concepts, la matière dont chacun relève, et la façon dont ils dépendent les uns des autres. C'est cette structure qui rend une page enseignable, et pas seulement lisible."
      },
      {
        "title": "Une recette de cartes neuves",
        "body": "Pas la mémoire de l'auteur : de quoi fabriquer la tienne. La rétention visée, le type de contenu, et la date de la première révision. Ton planning s'en déduit à l'installation."
      }
    ]
  },
  "install": {
    "kicker": "L'installation",
    "title": "Un fichier, ça se range.<br />Un planning revient te chercher.",
    "paragraphs": [
      "Télécharger de quoi réviser n'a jamais été le problème. Le problème, c'est de revenir dessus le jour où tu allais l'oublier, et aucun dossier n'a jamais su faire ça.",
      "Installer un template ne dépose donc pas un document quelque part : ça plante des cartes, datées. Tu hérites des concepts de l'auteur et des liens entre eux — jamais de son historique de révision, jamais de sa confiance, jamais de ce qu'il en savait lui-même. Le format ne sait pas les transporter."
    ],
    "steps": [
      {
        "step": "01",
        "title": "La page arrive en encre",
        "body": "La feuille se reconstitue dans un canvas à toi. C'est de l'écriture manuscrite sur du vrai papier, pas un PDF aplati : tu peux écrire par-dessus, la prolonger, la découper."
      },
      {
        "step": "02",
        "title": "Chaque concept devient une carte",
        "body": "Pour chaque concept nommé, une carte de répétition espacée toute neuve, sans le moindre historique derrière elle : zéro répétition, et une difficulté de départ au milieu de l'échelle de Fluera. La première révision tombe le lendemain."
      },
      {
        "step": "03",
        "title": "À partir de là, le planning est le tien",
        "body": "Il est stocké sur ton disque et alimente ton badge d'échéances comme ton récapitulatif quotidien, au même titre que tout ce que tu as écrit toi-même. Réinstaller le même template ne remet pas à zéro un historique que tu as déjà construit."
      }
    ]
  },
  "ranking": {
    "kicker": "Le classement",
    "title": "Classé sur ce qui est resté.<br />Pas sur ce qui a circulé.",
    "sub": "Un compteur de téléchargements mesure une décision prise avant que quiconque ait appris quoi que ce soit. C'est aussi, dans toutes les boutiques, le chiffre le plus facile à gonfler. Fluera peut faire mieux : l'app modélise déjà, pour chaque apprenant, la tenue de chaque concept.",
    "items": [
      {
        "label": "Mesuré sur ton appareil",
        "body": "Quand tu rouvres le canvas d'un template au jour 1, au jour 7, au jour 30 ou plus tard, Fluera regarde ce que son modèle de répétition espacée estime de ces concepts-là : à quel point ils tiennent chez toi. Il en tire un seul nombre."
      },
      {
        "label": "Un nombre, et rien de plus",
        "body": "Ce nombre est tout ce qui part. Aucun titre de concept, aucun contenu de carte, aucun historique de révision, aucune identité. Il n'est envoyé que si tu es connecté et que tu as accepté les statistiques d'usage — et jamais si le template est le tien."
      },
      {
        "label": "Muet en deçà de cinq apprenants",
        "body": "Tant qu'au moins cinq apprenants différents n'ont pas remonté le leur, un template n'affiche aucun chiffre public. Sous ce seuil, le tri revient au nombre d'installations et la carte se tait."
      },
      {
        "label": "Le téléchargement ne fait pas le classement",
        "body": "La grille sous « Tous les templates » est classée par défaut sur ce signal mesuré, pas sur la popularité. Un template qui se diffuse vite ne s'achète pas une place en tête."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Ce que ce n'est pas.</strong> C'est ce qu'un modèle estime de la tenue des concepts d'un template chez les apprenants qui sont revenus les travailler. Pas un résultat d'examen, pas un groupe témoin, et rien du tout sur ceux qui ont installé un template sans jamais le rouvrir. Nous préférons décrire le signal tel qu'il est plutôt que de l'habiller."
  },
  "discovery": {
    "kicker": "En trouver un",
    "title": "Trois façons de réduire le champ,<br />et une que ton appareil est seul à savoir faire.",
    "sub": "Un catalogue de matière d'étude échoue toujours de la même façon : tout parle de ta matière et presque rien ne parle de ton cours. D'où des filtres calqués sur la façon dont les étudiants cherchent vraiment.",
    "paragraphs": [
      "Tu peux filtrer par <strong class=\"text-paper-100\">matière</strong>, par <strong class=\"text-paper-100\">cours ou examen</strong> — en texte libre, si bien que <em>Maturità</em> ou <em>MCAT</em> valent autant qu'<em>Analyse I</em> — et par <strong class=\"text-paper-100\">langue</strong>. Chaque filtre affiche son compteur en direct, chacun réinterroge les autres dès que tu choisis, et un filtre qui ne mène à rien ne s'affiche pas. On ne te propose jamais un chemin qui finit sur une page vide.",
      "Le catalogue s'ouvre dans la langue de ton app : un mur de documents que tu ne peux pas lire n'est pas un catalogue. C'est une préférence, pas une barrière — un bouton l'ouvre à toutes les langues.",
      "La recherche est en texte intégral et ne se formalise pas des accents. Elle met aussi le classement de côté et trie par pertinence : quand tu as tapé ce que tu cherches, ce que les autres ont retenu n'est plus la question."
    ],
    "marksHeading": "Ce que disent les marques sur une carte",
    "marks": [
      {
        "mark": "Officiel",
        "body": "Posé par le catalogue, jamais par ce qu'un auteur tape dans un formulaire. Aucun nom affiché ne permet de se le donner."
      },
      {
        "mark": "Nouveau",
        "body": "Strictement mérité : aucune installation, aucune note, publié depuis moins d'une semaine. Il s'éteint tout seul ; personne ne le retire à la main."
      },
      {
        "mark": "Matière",
        "body": "La discipline sous laquelle le template a été rangé : de quoi distinguer d'un coup d'œil une page de chimie d'une page qui côtoie la chimie."
      },
      {
        "mark": "Note",
        "body": "Affichée seulement quand un template a été noté, et uniquement par des gens qui l'ont vraiment installé. Sans note, la carte se tait plutôt que d'afficher un zéro."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Et une rangée que personne d'autre ne pourrait construire.</strong> Fluera sait déjà sur quels concepts tu travailles : c'est toi qui les as écrits. Il peut donc classer les templates selon ce qu'ils recoupent de ce que tu as en ce moment sur ton canvas — et ce calcul se fait sur ton appareil. Ce qui quitte l'appareil, c'est la matière que tu étudies le plus et les identifiants des templates déjà récupérés. Ton ensemble de concepts, lui, ne bouge pas."
  },
  "privacy": {
    "kicker": "Ce qui part, ce qui reste",
    "title": "Publier une page, ce n'est pas publier où tu en es.",
    "sub": "Partager de la matière d'étude, c'est partager quelque chose que tu as fabriqué pendant que tu l'apprenais encore. La frontière entre les deux est tracée dans le code, pas dans un paragraphe de politique de confidentialité.",
    "items": [
      {
        "title": "Ton modèle d'apprenant n'entre pas dans le fichier",
        "body": "Par nature, le composant qui fabrique l'ossature publique d'un template ne lit ni ton historique de révision, ni ta confiance, ni le nombre de fois où tu as travaillé une notion, ni la façon dont tu la retenais, ni les embeddings qui vont avec. Un auteur qui maîtrise et un auteur qui peine publient la même page : l'ossature sort identique, octet pour octet."
      },
      {
        "title": "Un test monte la garde, dans la CI",
        "body": "Cette garantie est verrouillée par un test qui parcourt la sortie sérialisée et échoue dès qu'il y croise l'un des vingt-six noms de champs du modèle d'apprenant ou du comportement, où qu'il se trouve. Il s'exécute dans une étape de CI nommée et obligatoire, qui échoue aussi si le fichier de test disparaît."
      },
      {
        "title": "L'encre, c'est la limite honnête",
        "body": "Ce qu'aucun nettoyage n'atteint, c'est l'écriture elle-même — et l'ossature emporte bien un court extrait tronqué du texte reconnu : jamais la transcription entière, mais rien n'y est caviardé pour autant. D'où l'écran de publication, qui te montre l'image exacte qui deviendrait publique, au-dessus d'une case de consentement, avant le moindre envoi."
      },
      {
        "title": "Ton nom ne signe jamais la page",
        "body": "Les lectures publiques ne renvoient aucun identifiant de compte. Un créateur est désigné par un code dérivé à sens unique de cet identifiant — salé, haché, tronqué. Un pseudonyme stable, pas ton identité."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Lire l'architecture de sécurité →"
    }
  },
  "creators": {
    "kicker": "Pour les créateurs",
    "title": "La meilleure explication d'une idée difficile<br />tient presque toujours sur une seule page.",
    "paragraphs": [
      "La publication commence sur ton canvas. Tu cadres la région qui mérite d'être partagée, Fluera en fait un template, et un écran te demande s'il doit devenir un fichier ou une annonce. Seul ce que tu cadres part ; le reste du canvas ne bouge pas.",
      "Avant le moindre envoi, tu vois l'image exacte qui deviendrait publique, et tu la valides. L'annonce est vérifiée avant qu'un seul octet ne soit stocké, et le transfert passe par des URL signées à usage unique ; s'il échoue, l'annonce est défaite au lieu de rester à moitié faite.",
      "Tous les templates sont gratuits. Pas de caisse dans Fluera, pas de champ prix dans l'API de publication, pas de registre de versements : la colonne prix du catalogue est tenue à zéro par une contrainte de base de données, pas par une promesse."
    ],
    "heading": "Ce que publier t'apporte",
    "benefits": [
      "Un pseudonyme de créateur qui n'est ni ton compte ni ton e-mail",
      "Un profil facultatif — nom affiché, bio, avatar — l'avatar restant masqué tant qu'il n'est pas passé au filtre",
      "Des abonnés, et une étagère qui leur présente ton dernier template",
      "Le versionnage : une correction se publie en remplacement, pas en doublon",
      "Un motif chaque fois qu'une décision te donne tort, et un recours qui peut la défaire"
    ],
    "note": "Publier demande un compte connecté et une confirmation d'âge. Parcourir et installer ne demandent ni l'un ni l'autre."
  },
  "safety": {
    "kicker": "Modération et confiance",
    "title": "Héberger l'écriture des autres,<br />c'est en répondre.",
    "sub": "N'importe qui peut ouvrir un catalogue. Le travail commence quand quelque chose dérape — et il consiste surtout à empêcher que le groupe le plus bruyant de la salle soit celui qui tranche.",
    "items": [
      {
        "label": "Envoyer ne met rien en ligne",
        "body": "Un nouveau template est enregistré en attente d'examen. Tant qu'il n'est pas passé au filtre, il est absent de la navigation, de la recherche et du catalogue, et son lien de partage ne mène nulle part."
      },
      {
        "label": "Le filtre lit le vrai fichier",
        "body": "Il extrait les images intégrées au template lui-même plutôt que de se fier à la vignette fournie, retient le pire verdict, et tourne dans des régions européennes. Il peut faire avancer un template ou le faire remonter à un humain ; il ne peut jamais contredire un modérateur."
      },
      {
        "label": "Les signalements parlent à des humains",
        "body": "Un signalement entre dans une file tenue par des personnes — un seul par signaleur, et jamais sur ses propres annonces. Un groupe coordonné peut attirer l'attention. Il ne peut pas faire tomber une annonce."
      },
      {
        "label": "Retirer, c'est effacer les octets",
        "body": "Quand une annonce est retirée, les objets publiés sont purgés du CDN, pas seulement déréférencés — une fois les preuves mises de côté dans un bucket privé réservé aux administrateurs."
      },
      {
        "label": "Une décision s'explique",
        "body": "Le créateur apprend ce qui est arrivé à son template et si la décision était automatisée ; il peut déposer un recours. Un recours qui aboutit rétablit l'annonce."
      },
      {
        "label": "Les notes se méritent",
        "body": "Impossible de noter un template que tu n'as pas installé, impossible de noter le tien, impossible de noter anonymement. Les moyennes sont recalculées depuis le début, jamais incrémentées."
      }
    ]
  },
  "status": {
    "kicker": "Disponibilité",
    "title": "Le catalogue est déjà dans l'app.<br />Il en est à sa première page.",
    "paragraphs": [
      "Parcourir, prévisualiser et installer sont intégrés à Fluera, dans les seize langues que l'app parle. La publication est ouverte elle aussi, aux adultes connectés, et nous l'élargissons lentement à dessein : héberger le travail des autres, c'est une responsabilité qu'on prend correctement ou pas du tout.",
      "Le catalogue est donc petit, et cette page n'affiche aucun nombre de templates, aucun nombre d'installations, aucun nombre de créateurs. Ces chiffres diront quelque chose plus tard. Aujourd'hui, ils ne seraient que du décor."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Demander un accès anticipé →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Télécharger Fluera"
      }
    ]
  }
};

export default data;

