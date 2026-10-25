import type { PricingData } from "../types";

// ─────────────────────────────────────────────────────────────────────────
// Listino del 22/10/2026, approvato da Lorenco: Free, Cloud, IA, Cloud + IA.
//
// Ogni importo di `price` e `period` lo controlla
// `fluera_engine/tool/public_truth_gate.dart` contro le costanti di
// `FlueraPricing`, per `id`: un prezzo si cambia nel codice, poi qui.
// Niente crediti e niente Ghost Map: l'IA si mostra in percentuale del mese.
// Il Cloud fra i dispositivi arriva con il lavoro del cross-piattaforma:
// si scrive «quando si attiva», mai con una data.
// ─────────────────────────────────────────────────────────────────────────

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "per sempre",
      tagline:
        "Il canvas completo, il ripasso e i corsi. Senza abbonamento e senza scadenza.",
      features: [
        "Canvas infinito e scrittura a mano",
        "Ripasso, corsi, tutti i pennelli, export e time travel",
        "Un assaggio di IA nel primo mese dall’iscrizione",
        "500 MB di cloud su tutti i tuoi dispositivi, senza audio, quando il Cloud si attiva",
        "Funziona anche offline: i tuoi canvas restano sul dispositivo",
      ],
      cta: { label: "Inizia gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "all’anno · solo annuale · Cloud 60 a €44,99 / anno",
      tagline:
        "Lo spazio per i tuoi canvas e le lezioni registrate. Si attiva con un aggiornamento dell’app.",
      features: [
        "20 GB sui tuoi dispositivi: telefono, tablet e computer",
        "Le lezioni registrate si ascoltano ovunque",
        "I tuoi canvas al sicuro, anche se cambi telefono",
        "Cloud 60: 60 GB per chi registra molte lezioni",
      ],
      cta: { label: "Scegli Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "IA",
      price: "€9,99",
      period: "al mese · €84,99 / anno (risparmi €34,89)",
      tagline:
        "Un’IA che legge quello che scrivi, con un contatore sempre visibile.",
      features: [
        "L’IA legge i tuoi appunti e dà un nome a ogni concetto",
        "Tutor, esami, chat, formule e trascrizione",
        "Vedi sempre quanta IA ti resta nel mese, in percentuale",
        "Riserva d’esame per i mesi più pesanti",
        "14 giorni gratis per provarla",
      ],
      cta: { label: "Prova l’IA", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + IA",
      price: "€99,99",
      period: "all’anno · risparmi €4,99 rispetto ai due separati · con Cloud 60 €119,99 / anno",
      tagline: "Tutto il Cloud e tutta l’IA, in un abbonamento solo.",
      features: [
        "Tutto il Cloud e tutta l’IA",
        "20 GB, oppure 60 GB con Cloud 60 + IA",
        "Vedi sempre quanta IA ti resta nel mese, in percentuale",
        "Solo annuale",
      ],
      cta: { label: "Scegli Cloud + IA", href: "/beta" },
      highlighted: true,
      badge: "Consigliato",
    },
  ],
  faq: [
    {
      q: "Come vedo quanta IA mi resta?",
      a: "Nell’app, sempre. Un contatore ti dice in percentuale quanta IA del mese ti resta, quando si ricarica (il 1° del mese) e, al tuo ritmo, fino a quando ti basta. Niente limiti nascosti e niente crediti da convertire a mente: quello che vedi è quello che hai.",
    },
    {
      q: "E se l’IA del mese finisce?",
      a: "Il ripasso, i corsi e i tuoi appunti funzionano sempre, anche senza IA. L’IA torna il 1° del mese; se ti serve prima, dall’app puoi accendere la riserva d’esame o aggiungerne un po’.",
    },
    {
      q: "Compro una volta: vale su tutti i miei dispositivi?",
      a: "Sì. Ti abboni dall’app Fluera sul telefono o sul tablet, tramite App Store o Google Play, e paghi con i metodi salvati nel tuo account dello store. Il piano vale poi su tutti i dispositivi in cui accedi con lo stesso account, computer compresi.",
    },
    {
      q: "Il Cloud funziona già fra i dispositivi?",
      a: "Non ancora. Il Cloud fra telefono, tablet e computer è in costruzione e si attiva con un aggiornamento dell’app. Fino ad allora i tuoi canvas restano sul dispositivo, dove funzionano anche offline.",
    },
    {
      q: "C’è una prova gratuita?",
      a: "Sì: 14 giorni gratis, solo sull’IA. Puoi disdire dallo store quando vuoi, prima della fine della prova. Il Free non scade e non chiede nessun pagamento.",
    },
    {
      q: "Cosa succede ai miei canvas se disdico?",
      a: "Restano tuoi, sul dispositivo: canvas, ripasso, corsi, pennelli ed export continuano a funzionare con il Free. Le funzioni del piano si fermano finché non lo riattivi. Niente viene cancellato senza una tua azione.",
    },
    {
      q: "C'è una politica di rimborso?",
      a: "I termini di rimborso e recesso dipendono dallo store e dal canale di acquisto. La policy applicabile viene mostrata prima della conferma; per assistenza scrivi a support@fluera.dev dall'indirizzo con cui ti sei iscritto.",
    },
    {
      q: "Piani Team o Education?",
      a: "In arrivo come fase 2 (workspace condivisi, dashboard admin, SSO). Se sei interessato scrivi a support@fluera.dev: stiamo costruendo la roadmap con i primi clienti.",
    },
  ],
};

export default data;
