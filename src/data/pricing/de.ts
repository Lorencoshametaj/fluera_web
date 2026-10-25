import type { PricingData } from "../types";

// Listino del 22/10/2026 (Free, Cloud, IA, Cloud + IA). Allineato a it.ts.
// Gli importi di `price` e `period` li controlla
// fluera_engine/tool/public_truth_gate.dart contro FlueraPricing, per `id`.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "für immer",
      tagline:
        "Der ganze Canvas, Wiederholung und Kurse. Ohne Abo und ohne Ablaufdatum.",
      features: [
        "Unendlicher Canvas und Handschrift",
        "Wiederholung, Kurse, alle Pinsel, Export und Time Travel",
        "Eine Kostprobe KI im ersten Monat nach der Anmeldung",
        "500 MB Cloud auf allen deinen Geräten, ohne Audio, sobald die Cloud startet",
        "Funktioniert auch offline: deine Canvas bleiben auf dem Gerät",
      ],
      cta: { label: "Kostenlos starten", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "pro Jahr · nur jährlich · Cloud 60 für €44,99 / Jahr",
      tagline:
        "Platz für deine Canvas und aufgenommenen Vorlesungen. Sie startet mit einem App-Update.",
      features: [
        "20 GB auf deinen Geräten: Handy, Tablet und Computer",
        "Aufgenommene Vorlesungen hörst du überall",
        "Deine Canvas sind sicher, auch wenn du das Handy wechselst",
        "Cloud 60: 60 GB für alle, die viele Vorlesungen aufnehmen",
      ],
      cta: { label: "Cloud wählen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "KI",
      price: "€9,99",
      period: "pro Monat · €84,99 / Jahr (sparst €34,89)",
      tagline: "Eine KI, die liest, was du schreibst, mit einem Zähler, der immer sichtbar ist.",
      features: [
        "Die KI liest deine Notizen und benennt jedes Konzept",
        "Tutor, Prüfungen, Chat, Formeln und Transkription",
        "Du siehst immer, wie viel KI dir diesen Monat bleibt, in Prozent",
        "Prüfungsreserve für die vollsten Monate",
        "14 Tage kostenlos zum Ausprobieren",
      ],
      cta: { label: "KI testen", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + KI",
      price: "€99,99",
      period: "pro Jahr · du sparst €4,99 gegenüber beiden einzeln · mit Cloud 60 €119,99 / Jahr",
      tagline: "Die ganze Cloud und die ganze KI, in einem Abo.",
      features: [
        "Die ganze Cloud und die ganze KI",
        "20 GB, oder 60 GB mit Cloud 60 + KI",
        "Du siehst immer, wie viel KI dir diesen Monat bleibt, in Prozent",
        "Nur jährlich",
      ],
      cta: { label: "Cloud + KI wählen", href: "/beta" },
      highlighted: true,
      badge: "Empfohlen",
    },
  ],
  faq: [
    {
      q: "Wie sehe ich, wie viel KI mir bleibt?",
      a: "In der App, immer. Ein Zähler zeigt dir in Prozent, wie viel KI dir diesen Monat bleibt, wann sie sich wieder auffüllt (am 1. des Monats) und wie lange sie in deinem Tempo reicht. Keine versteckten Limits und keine Credits, die du im Kopf umrechnen musst: Was du siehst, ist das, was du hast.",
    },
    {
      q: "Und wenn die KI des Monats aufgebraucht ist?",
      a: "Wiederholung, Kurse und deine Notizen funktionieren immer, auch ohne KI. Die KI kommt am 1. des Monats zurück; wenn du sie früher brauchst, kannst du in der App die Prüfungsreserve einschalten oder etwas dazukaufen.",
    },
    {
      q: "Einmal kaufen: gilt das auf allen meinen Geräten?",
      a: "Ja. Du schließt dein Abo in der Fluera-App auf dem Smartphone oder Tablet ab, über den App Store oder Google Play, und zahlst mit den Zahlungsmethoden aus deinem Store-Konto. Dein Tarif gilt dann auf allen Geräten, auf denen du dich mit demselben Konto anmeldest, Computer eingeschlossen.",
    },
    {
      q: "Funktioniert die Cloud schon zwischen den Geräten?",
      a: "Noch nicht. Die Cloud zwischen Handy, Tablet und Computer ist im Bau und startet mit einem App-Update. Bis dahin bleiben deine Canvas auf dem Gerät, wo sie auch offline funktionieren.",
    },
    {
      q: "Gibt es eine kostenlose Testphase?",
      a: "Ja: 14 Tage kostenlos, nur für die KI. Du kannst jederzeit vor dem Ende der Testphase im Store kündigen. Free läuft nicht ab und verlangt keine Zahlung.",
    },
    {
      q: "Was passiert mit meinen Canvas, wenn ich kündige?",
      a: "Sie bleiben deine, auf dem Gerät: Canvas, Wiederholung, Kurse, Pinsel und Export funktionieren mit Free weiter. Die Funktionen des Tarifs pausieren, bis du ihn wieder aktivierst. Nichts wird ohne deine ausdrückliche Aktion gelöscht.",
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
