import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Katalog — Lernvorlagen, die du in dein Gedächtnis installierst",
    "description": "Handgeschriebene Seite, Konzeptstruktur darunter. Installieren legt deinen Wiederholungsplan an. Sortiert nach dem, was hängen bleibt, nicht nach Downloads.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Der Fluera-Katalog",
    "description": "Ein Katalog handgeschriebener Lernvorlagen, die sich als Plan für verteilte Wiederholung installieren lassen — sortiert nach gemessener Retention statt nach Downloads.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "de"
  },
  "hero": {
    "kicker": "Katalog",
    "title": "Dieses Kapitel hat schon jemand durchgearbeitet.<br />Installiere es und lass dich abfragen.",
    "description": "Eine Fluera-Lernvorlage ist kein PDF und kein Karteikartenstapel. Sie ist eine handgeschriebene Seite, die Konzeptstruktur darunter und das Rezept für den Wiederholungsplan, der dazugehört. Installierst du eine, legt Fluera diesen Plan in einem Canvas an, das dir gehört.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Zugang anfragen →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Wie verteilte Wiederholung funktioniert"
      }
    ]
  },
  "unit": {
    "kicker": "Die Einheit",
    "title": "Drei Dinge reisen mit. Der Kopf dahinter bleibt zu Hause.",
    "sub": "Jeder andere Store liefert dir ein Dokument und wünscht dir viel Glück. Eine Lernvorlage trägt die Seite, die Struktur, die diese Seite lehrbar macht, und die Anweisung, wann sie wiederkommen soll — bewusst ohne das, was der Person gehört, die sie gemacht hat.",
    "items": [
      {
        "title": "Ein eingerahmtes Arbeitsblatt",
        "body": "Kein ganzes Heft, sondern ein Bereich, den jemand auf dem eigenen Canvas eingerahmt hat. Die Striche, Formen, getippten Texte und Bilder innerhalb dieses Rahmens — und nichts, was außerhalb liegt. Ein Quell-PDF reist nie mit."
      },
      {
        "title": "Ein Konzeptgerüst",
        "body": "Die Struktur unter der Tinte: welche Konzepte es gibt, zu welchem Thema jedes einzelne gehört und wie sie voneinander abhängen. Erst sie macht eine Vorlage lehrbar und nicht bloß lesbar."
      },
      {
        "title": "Ein Rezept für neue Karten",
        "body": "Nicht das Gedächtnis eines anderen Menschen — ein Rezept für dein eigenes. Die gewünschte Retention, die Art des Stoffs und wann die erste Wiederholung anstehen soll. Bei der Installation entsteht daraus dein Plan."
      }
    ]
  },
  "install": {
    "kicker": "Installieren",
    "title": "Eine Datei liegt herum.<br />Ein Wiederholungsplan meldet sich.",
    "paragraphs": [
      "Lernmaterial herunterzuladen war noch nie das Schwierige. Schwierig ist, genau an dem Tag zurückzukommen, an dem du es vergessen hättest. Kein Ordner hat das je gelöst.",
      "Deshalb legt eine Installation kein Dokument irgendwo ab. Sie legt Karten an, mit Datum. Du übernimmst fremde Konzepte und die Struktur dazwischen — nie die Wiederholungshistorie dahinter, nie, wie sicher sich jemand war, nie, wie gut jemand den Stoff selbst konnte. So etwas kann das Vorlagenformat gar nicht tragen."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Die Seite kommt als Tinte an",
        "body": "Fluera baut das Arbeitsblatt in einem Canvas wieder auf, das dir gehört. Echte Handschrift auf echtem Papier, kein gerendertes PDF — du kannst darauf schreiben, es erweitern und zerschneiden."
      },
      {
        "step": "02",
        "title": "Jedes Konzept wird zu einer Karte",
        "body": "Pro benanntem Konzept eine brandneue Karte für verteilte Wiederholung, ohne jede Historie dahinter: null Wiederholungen, eine Startschwierigkeit in der Mitte von Flueras Skala. Die erste Wiederholung steht einen Tag später an."
      },
      {
        "step": "03",
        "title": "Von da an gehört der Plan dir",
        "body": "Er wird lokal gespeichert und steuert dein Fälligkeits-Badge und deine Tagesübersicht wie alles andere, was du selbst geschrieben hast. Installierst du dieselbe Vorlage noch einmal, setzt das eine bereits aufgebaute Historie nicht zurück."
      }
    ]
  },
  "ranking": {
    "kicker": "Das Ranking",
    "title": "Sortiert nach dem, was hängen bleibt.<br />Nicht nach dem, was sich herumspricht.",
    "sub": "Eine Download-Zahl misst eine Entscheidung, die fiel, bevor irgendjemand etwas gelernt hatte. Sie ist außerdem die Zahl, die sich in jedem Store am leichtesten aufblähen lässt. Fluera kann nach etwas Besserem sortieren, weil die App ohnehin modelliert, wie gut jedes Konzept bei jedem Menschen gerade sitzt.",
    "items": [
      {
        "label": "Auf dem Gerät gemessen",
        "body": "Öffnest du das Canvas einer Vorlage an Tag 1, 7 und 30 oder später wieder, liest Fluera aus dem Modell für verteilte Wiederholung ab, wie gut genau diese Konzepte bei dir sitzen, und verdichtet das zu einer einzigen Zahl."
      },
      {
        "label": "Eine Zahl, sonst nichts",
        "body": "Mehr als diese Zahl geht nicht raus. Keine Konzepttitel, keine Karteninhalte, keine Wiederholungshistorie, keine Identität. Sie wird nur übermittelt, wenn du angemeldet bist und der Analyse zugestimmt hast — und nie bei einer Vorlage, die du selbst veröffentlicht hast."
      },
      {
        "label": "Unter fünf Lernenden bleibt es still",
        "body": "Eine Vorlage bekommt überhaupt erst dann eine öffentliche Zahl, wenn mindestens fünf verschiedene Lernende je eine beigesteuert haben. Darunter sortiert Fluera nach Installationen, und die Kachel sagt schlicht nichts."
      },
      {
        "label": "Downloads sind nicht das Ranking",
        "body": "Das Raster unter „Alle Vorlagen“ ist standardmäßig nach diesem gemessenen Signal sortiert, nicht nach Beliebtheit. Was sich schnell verbreitet, landet damit noch lange nicht oben."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Was das nicht ist.</strong> Ein Modell schätzt, wie gut die Konzepte einer Vorlage bei denen sitzen, die zum Lernen zurückgekommen sind — es ist kein Prüfungsergebnis, keine Kontrollgruppe und keine Aussage über jemanden, der eine Vorlage installiert und nie wieder geöffnet hat. Wir beschreiben das Signal lieber genau, statt es schöner zu machen, als es ist."
  },
  "discovery": {
    "kicker": "Eine finden",
    "title": "Drei Wege, den Katalog einzugrenzen.<br />Und einen, den nur dein Gerät gehen kann.",
    "sub": "Ein Katalog voller Lernmaterial scheitert auf eine ganz bestimmte Weise: Alles handelt irgendwie von deinem Fach, fast nichts von deinem Kurs. Deshalb filtert Fluera in den Kategorien, in denen Studierende tatsächlich denken.",
    "paragraphs": [
      "Du kannst nach <strong class=\"text-paper-100\">Fach</strong> filtern, nach <strong class=\"text-paper-100\">Kurs oder Prüfung</strong> — freier Text, also gilt <em>Maturità</em> genauso wie <em>MCAT</em> oder <em>Analysis I</em> — und nach <strong class=\"text-paper-100\">Sprache</strong>. Jeder Filter trägt eine aktuelle Zahl, jeder fragt die anderen neu ab, sobald du etwas auswählst, und ein Filter, hinter dem nichts steckt, erscheint gar nicht erst. Fluera bietet dir nie eine Auswahl an, die ins Leere führt.",
      "Der Katalog öffnet sich in der Sprache, auf die deine App eingestellt ist, denn eine Wand aus Material, das du nicht lesen kannst, ist kein Katalog. Das ist eine Voreinstellung, kein Zaun: Ein Fingertipp öffnet ihn für alle Sprachen.",
      "Die Suche geht über den Volltext und nimmt es mit Akzenten nicht so genau. Sie ignoriert dabei das Ranking und sortiert nach Relevanz — wer schon getippt hat, was er sucht, fragt nicht mehr danach, was andere behalten haben."
    ],
    "marksHeading": "Was die Markierungen auf einer Kachel bedeuten",
    "marks": [
      {
        "mark": "Official",
        "body": "Vergibt der Katalog, nie irgendetwas, das sich in ein Formular tippen lässt. Über einen Anzeigenamen kommt niemand daran."
      },
      {
        "mark": "New",
        "body": "Muss man sich verdienen: keine Installationen, keine Bewertungen, veröffentlicht in der letzten Woche. Sie läuft von selbst ab, statt abgeschaltet zu werden."
      },
      {
        "mark": "Subject",
        "body": "Das Fach, unter dem die Vorlage einsortiert wurde — damit du auf einen Blick siehst, ob eine Seite wirklich Chemie ist oder nur in der Nähe davon liegt."
      },
      {
        "mark": "Rating",
        "body": "Erscheint erst, wenn eine Vorlage tatsächlich bewertet wurde, und zwar von Menschen, die sie auch installiert haben. Eine unbewertete Vorlage sagt nichts, statt bei null anzufangen."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Und eine Reihe, die sonst niemand bauen könnte.</strong> Fluera weiß längst, an welchen Konzepten du arbeitest — du hast sie schließlich selbst geschrieben. Deshalb kann Fluera Vorlagen danach sortieren, wie stark sie sich mit dem überschneiden, was gerade auf deinem Canvas liegt. Diese Rechnung läuft auf deinem Gerät. Dein Telefon verlassen nur das Fach, das du am meisten lernst, und die Kennungen der Vorlagen, die es ohnehin schon geladen hatte. Deine Konzepte bleiben da, wo du sie geschrieben hast."
  },
  "privacy": {
    "kicker": "Was mitreist, was nicht",
    "title": "Wer eine Seite veröffentlicht,<br />veröffentlicht nicht den eigenen Lernstand.",
    "sub": "Lernmaterial zu teilen heißt, etwas herzugeben, das du gemacht hast, während du den Stoff noch nicht konntest. Die Grenze dazwischen zieht Code, kein Absatz in einer Richtlinie.",
    "items": [
      {
        "title": "Dein Lernermodell steckt nicht in der Datei",
        "body": "Die Komponente, die das öffentliche Gerüst einer Vorlage baut, kommt schon vom Aufbau her nicht an deine Wiederholungshistorie heran, nicht daran, wie sicher du dir warst, wie oft du etwas durchgegangen bist oder wie gut es gerade sitzt, und auch nicht an die Embeddings dahinter. Ob jemand den Stoff souverän beherrscht oder sich damit quält: Aus derselben Seite entsteht ein byteidentisches Gerüst."
      },
      {
        "title": "In der CI hält ein Test diese Grenze",
        "body": "Diese Zusage nagelt ein Test fest: Er geht die serialisierte Ausgabe durch und schlägt fehl, sobald irgendwo darin einer von sechsundzwanzig Feldnamen aus dem Lernermodell oder aus deinem Verhalten auftaucht. Er läuft als benanntes, nicht abschaltbares CI-Gate — das auch dann rot wird, wenn jemand die Testdatei löscht."
      },
      {
        "title": "Bei der Tinte hört das Saubermachen auf",
        "body": "Kein Filter erreicht die Handschrift selbst. Und das Gerüst trägt tatsächlich einen kurzen, abgeschnittenen Auszug des erkannten Textes — nie das ganze Transkript, aber auch nichts Geschwärztes. Deshalb zeigt dir der Veröffentlichungsdialog vorher genau das Bild, das öffentlich würde. Darunter steht eine Checkbox, die du setzen musst, bevor irgendetwas hochgeht."
      },
      {
        "title": "Dein Name ist nie die Kennung",
        "body": "Öffentliche Abfragen geben keine Konto-ID zurück. Wer veröffentlicht, erscheint unter einem Code, der per Einwegfunktion aus dem Konto abgeleitet wird — gesalzen, gehasht, gekürzt. Ein stabiles Pseudonym, nicht deine Identität."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Sicherheitsarchitektur lesen →"
    }
  },
  "creators": {
    "kicker": "Für Creator",
    "title": "Die beste Erklärung einer schwierigen Idee<br />passt meistens auf eine Seite.",
    "paragraphs": [
      "Veröffentlichen beginnt auf deinem eigenen Canvas. Du rahmst den Bereich ein, der es wert ist, geteilt zu werden. Fluera macht eine Vorlage daraus, und ein Dialog fragt, ob sie eine Datei oder ein Eintrag werden soll. Was im Rahmen liegt, reist mit. Der Rest des Canvas bleibt, wo er ist.",
      "Bevor irgendetwas hochgeht, siehst du genau das Bild, das öffentlich würde, und bestätigst es. Der Eintrag wird validiert, bevor ein einziges Byte gespeichert wird, und der Upload läuft über einmalig gültige signierte URLs. Schlägt er fehl, wird der Eintrag wieder verworfen, statt halb fertig liegen zu bleiben.",
      "Jede Vorlage ist kostenlos. Fluera hat keinen Checkout, die Publishing-API kein Preisfeld, und ein Auszahlungsbuch gibt es nicht — die Preisspalte des Katalogs hält ein Datenbank-Constraint auf null, keine Richtlinie."
    ],
    "heading": "Was dir das Veröffentlichen bringt",
    "benefits": [
      "Eine pseudonyme Creator-Kennung — nie dein Konto, nie deine E-Mail",
      "Ein optionales Profil aus Anzeigename, Bio und Avatar, wobei der Avatar erst nach der Prüfung sichtbar wird",
      "Follower und ein Regal, das ihnen deine neueste Vorlage bringt",
      "Versionierung: eine Korrektur ersetzt die Vorlage, statt sie zu verdoppeln",
      "Eine Begründung, wenn eine Entscheidung gegen dich ausfällt, und ein Einspruch, der sie aufheben kann"
    ],
    "note": "Veröffentlichen setzt ein angemeldetes Konto und eine Altersbestätigung voraus. Stöbern und Installieren brauchen nichts davon."
  },
  "safety": {
    "kicker": "Moderation und Vertrauen",
    "title": "Ein Katalog voller fremder Handschriften<br />muss Rede und Antwort stehen.",
    "sub": "Einen Katalog aufmachen kann jeder. Die Arbeit fängt an, wenn etwas schiefgeht — und sie besteht darin, dass am Ende nicht die lauteste Gruppe im Raum entscheidet.",
    "items": [
      {
        "label": "Einreichen ist noch kein Eintrag",
        "body": "Eine neue Vorlage wird mit dem Status „Prüfung ausstehend“ angelegt. Bis sie geprüft ist, taucht sie weder beim Stöbern noch in der Suche noch im Katalog auf, und ihr Teilen-Link führt ins Leere."
      },
      {
        "label": "Die Prüfung liest die echte Datei",
        "body": "Der Klassifikator holt sich die Bilder aus der Vorlage selbst, statt dem Thumbnail zu glauben, das jemand hochgeladen hat. Über alle Bilder hinweg zählt das schlechteste Urteil, und er läuft in EU-Regionen. Er darf einen Eintrag weiterreichen oder eskalieren. Eine Entscheidung der Moderation aufheben darf er nie."
      },
      {
        "label": "Meldungen gehen an Menschen, nicht an Roboter",
        "body": "Eine Meldung ist ein Signal in eine Warteschlange, die Menschen abarbeiten — eine pro meldender Person, Selbstmeldungen werden abgelehnt. Eine koordinierte Gruppe kann Aufmerksamkeit erzeugen. Einen Eintrag entfernen kann sie nicht."
      },
      {
        "label": "Entfernen entfernt die Bytes",
        "body": "Wird ein Eintrag entfernt, verschwinden die veröffentlichten Objekte aus dem CDN, statt nur ausgeblendet zu werden — vorher wandern die Beweise in einen privaten Bucket, an den nur Admins kommen."
      },
      {
        "label": "Jede Entscheidung wird begründet",
        "body": "Wer veröffentlicht hat, erfährt, was mit der eigenen Vorlage passiert ist und ob eine Maschine entschieden hat. Einspruch ist möglich, und ein erfolgreicher Einspruch stellt den Eintrag wieder her."
      },
      {
        "label": "Bewerten muss man sich verdienen",
        "body": "Du kannst nichts bewerten, was du nie installiert hast, nichts Eigenes und nichts anonym. Die Durchschnitte werden von Grund auf neu berechnet, nicht hochgezählt."
      }
    ]
  },
  "status": {
    "kicker": "Verfügbarkeit",
    "title": "Der Katalog steckt in der App.<br />Er fängt gerade erst an.",
    "paragraphs": [
      "Stöbern, Vorschau und Installieren sind in Fluera eingebaut und in allen sechzehn Sprachen lokalisiert, die die App spricht. Veröffentlichen läuft ebenfalls, für angemeldete Erwachsene, und wir öffnen es absichtlich langsam: Die Arbeit anderer Menschen zu hosten ist eine Verantwortung, die man richtig übernimmt oder gar nicht.",
      "Deshalb ist der Katalog klein, und deshalb steht auf dieser Seite keine Zahl — nicht, wie viele Vorlagen es gibt, nicht, wie oft installiert wurde, nicht, wie viele Menschen veröffentlichen. Später werden diese Zahlen etwas bedeuten. Heute wären sie Dekoration."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Zugang anfragen →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Fluera herunterladen"
      }
    ]
  }
};

export default data;

