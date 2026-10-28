import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "für immer",
      tagline:
        "Der ganze Canvas, Wiederholung und Kurse. Ohne Abo und ohne Ablaufdatum.",
      features: [
        "Unendlicher Canvas und Handschrift",
        "Wiederholung, Kurse, alle Pinsel, Export und Time Travel",
        "Mentor im ersten Monat zum Ausprobieren",
        "500 MB auf allen deinen Geräten gleich, ohne Audio, sobald die Synchronisierung startet",
        "Funktioniert auch offline: deine Canvas bleiben auf dem Gerät",
      ],
      cta: { label: "Kostenlos starten", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Überall",
      price: "€29,99",
      period: "pro Jahr · nur jährlich · 60 GB für €44,99 / Jahr",
      tagline:
        "Alles auf Handy, Tablet und Computer, ohne an Speicherplatz zu denken. Startet mit einem App-Update.",
      features: [
        "20 GB statt der 500 MB der Gratisversion",
        "Aufgenommene Vorlesungen mit Ton auf jedem Gerät",
        "Teile ein Canvas und schreibt gemeinsam darin",
        "Wenn du kündigst: 6 Monate, um alles herunterzuladen. Die Tinte bleibt für immer.",
        "Keine zusätzlichen Lernfunktionen: Die sind alle schon kostenlos",
      ],
      cta: { label: "Überall wählen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "pro Monat · €84,99 / Jahr (sparst €34,89)",
      tagline:
        "Ein Tutor, der deine Notizen gelesen hat, mit einem Monatskontingent, das du immer in Prozent siehst.",
      features: [
        "Stellt dir Fragen zu dem, was du geschrieben hast",
        "Prüft dich mündlich und zeigt dir, was noch fehlt",
        "Gibt jedem Begriff, den du schreibst, einen Titel",
        "Macht handgeschriebene Formeln bearbeitbar",
        "Und du kannst deinen Notizen im Chat Fragen stellen",
        "Ein Kontingent pro Monat, immer in Prozent sichtbar",
        "Die ersten 14 Tage sind kostenlos",
      ],
      cta: { label: "Mentor testen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Überall + Mentor",
      price: "€99,99",
      period: "pro Jahr · du sparst €14,99 gegenüber beiden einzeln · mit 60 GB €119,99 / Jahr",
      tagline:
        "Ganz Fluera, auf jedem Gerät, mit dem Tutor. Der empfohlene Plan.",
      features: [
        "Alles von Überall: 20 GB und Vorlesungen mit Ton",
        "Alles von Mentor: Fragen, Prüfung, Titel und Formeln",
        "Ein Kontingent pro Monat, immer in Prozent sichtbar",
        "Nur jährlich",
      ],
      cta: { label: "Überall + Mentor wählen", href: "/beta" },
      highlighted: true,
      badge: "Empfohlen",
    },
  ],
  faq: [
    {
      q: "Wie sehe ich, wie viel Mentor mir bleibt?",
      a: "In der App, immer. Ein Zähler zeigt dir in Prozent, wie viel vom Mentor-Kontingent des Monats übrig ist, wann es aufgefüllt wird (am 1. des Monats) und wie lange es bei deinem Tempo reicht. Keine versteckten Limits und keine Credits zum Umrechnen: Was du siehst, ist das, was du hast.",
    },
    {
      q: "Und wenn Mentor für den Monat aufgebraucht ist?",
      a: "Wiederholung, Kurse und deine Notizen funktionieren immer, auch ohne Mentor. Mentor kommt am 1. des Monats zurück; wenn du ihn früher brauchst, kannst du in der App die Prüfungsreserve einschalten oder etwas dazukaufen.",
    },
    {
      q: "Einmal kaufen: gilt das auf allen meinen Geräten?",
      a: "Ja. Du schließt dein Abo in der Fluera-App auf dem Smartphone oder Tablet ab, über den App Store oder Google Play, und zahlst mit den Zahlungsmethoden aus deinem Store-Konto. Dein Tarif gilt dann auf allen Geräten, auf denen du dich mit demselben Konto anmeldest, Computer eingeschlossen.",
    },
    {
      q: "Funktioniert Überall schon zwischen den Geräten?",
      a: "Noch nicht. Die Synchronisierung zwischen Handy, Tablet und Computer ist im Bau und startet mit einem App-Update. Bis dahin bleiben deine Canvas auf dem Gerät, wo sie auch offline funktionieren.",
    },
    {
      q: "Gibt es einen kostenlosen Test?",
      a: "Ja: 14 Tage kostenlos, nur für Mentor. Du kannst im Store jederzeit vor Ende des Tests kündigen. Das kostenlose Fluera läuft nie ab und verlangt keine Zahlung.",
    },
    {
      q: "Was passiert mit meinen Canvas, wenn ich kündige?",
      a: "Sie bleiben deine, auf deinem Gerät: Canvas, Wiederholung, Kurse, Pinsel und Export funktionieren kostenlos weiter. Wenn du Überall hattest, hast du 6 Monate, um alles herunterzuladen, und die Tinte bleibt für immer. Nichts wird ohne dein Zutun gelöscht.",
    },
    {
      q: "Gibt es eine Rückerstattungsregelung?",
      a: "Erstattungs- und Widerrufsbedingungen hängen vom Store und Kaufkanal ab. Die geltende Regelung wird vor der Bestätigung angezeigt; bei Fragen schreib von deiner registrierten Adresse an support@fluera.dev.",
    },
    {
      q: "Team- oder Education-Pläne?",
      a: "Kommen in Phase 2 (geteilte Workspaces, Admin-Dashboard, SSO). Interesse? E-Mail an support@fluera.dev — wir bauen die Roadmap mit unseren ersten Design-Partnern.",
    },
  ],
};

export default data;
