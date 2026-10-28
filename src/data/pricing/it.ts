import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.
//
// Ogni importo di `price` e `period` lo controlla
// `fluera_engine/tool/public_truth_gate.dart` contro le costanti di
// `FlueraPricing`, per `id`: un prezzo si cambia nel codice, poi qui.
// Niente crediti e niente Ghost Map: Mentore si mostra in percentuale del mese.
// La sincronizzazione fra i dispositivi arriva con il lavoro del cross-piattaforma:
// si scrive «quando si attiva», mai con una data.
// ─────────────────────────────────────────────────────────────────────────

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "per sempre",
      tagline:
        "Il canvas completo, il ripasso e i corsi. Senza abbonamento e senza scadenza.",
      features: [
        "Canvas infinito e scrittura a mano",
        "Ripasso, corsi, tutti i pennelli, export e time travel",
        "Mentore da provare nel primo mese",
        "500 MB uguali su tutti i tuoi dispositivi, senza audio, quando la sincronizzazione si attiva",
        "Funziona anche offline: i tuoi canvas restano sul dispositivo",
      ],
      cta: { label: "Inizia gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Ovunque",
      price: "€29,99",
      period: "all’anno · solo annuale · 60 GB a €44,99 / anno",
      tagline:
        "Tutto su telefono, tablet e computer, senza pensare allo spazio. Si attiva con un aggiornamento dell’app.",
      features: [
        "20 GB invece dei 500 MB del gratis",
        "Le lezioni registrate, con la voce, su ogni dispositivo",
        "Condividi un canvas e scrivete insieme",
        "Se smetti, 6 mesi per scaricare tutto. L’inchiostro resta per sempre.",
        "Nessuna funzione di studio in più: sono già tutte nel gratis",
      ],
      cta: { label: "Scegli Ovunque", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentore",
      price: "€9,99",
      period: "al mese · €84,99 / anno (risparmi €34,89)",
      tagline:
        "Un tutor che ha letto i tuoi appunti, con una quota del mese sempre visibile in percentuale.",
      features: [
        "Ti fa domande su quello che hai scritto",
        "Ti fa l’esame orale e ti dice cosa manca",
        "Dà un titolo a ogni concetto che scrivi",
        "Trasforma le formule scritte a mano in formule modificabili",
        "E puoi fare domande ai tuoi appunti, in chat",
        "Una quota al mese, sempre visibile in percentuale",
        "I primi 14 giorni sono gratis",
      ],
      cta: { label: "Prova Mentore", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Ovunque + Mentore",
      price: "€99,99",
      period: "all’anno · risparmi €14,99 rispetto ai due separati · con 60 GB €119,99 / anno",
      tagline:
        "Tutto Fluera, su ogni dispositivo, con il tutor. Il piano consigliato.",
      features: [
        "Tutto Ovunque: 20 GB e le lezioni con la voce",
        "Tutto Mentore: domande, esame, titoli e formule",
        "Una quota al mese, sempre visibile in percentuale",
        "Solo annuale",
      ],
      cta: { label: "Scegli Ovunque + Mentore", href: "/beta" },
      highlighted: true,
      badge: "Consigliato",
    },
  ],
  faq: [
    {
      q: "Come vedo quanto Mentore mi resta?",
      a: "Nell’app, sempre. Un contatore ti dice in percentuale quanto ti resta della quota di Mentore del mese, quando si ricarica (il 1° del mese) e, al tuo ritmo, fino a quando ti basta. Niente limiti nascosti e niente crediti da convertire a mente: quello che vedi è quello che hai.",
    },
    {
      q: "E se Mentore del mese finisce?",
      a: "Il ripasso, i corsi e i tuoi appunti funzionano sempre, anche senza Mentore. Mentore torna il 1° del mese; se ti serve prima, dall’app puoi accendere la riserva d’esame o aggiungerne un po’.",
    },
    {
      q: "Compro una volta: vale su tutti i miei dispositivi?",
      a: "Sì. Ti abboni dall’app Fluera sul telefono o sul tablet, tramite App Store o Google Play, e paghi con i metodi salvati nel tuo account dello store. Il piano vale poi su tutti i dispositivi in cui accedi con lo stesso account, computer compresi.",
    },
    {
      q: "Ovunque funziona già fra i dispositivi?",
      a: "Non ancora. La sincronizzazione fra telefono, tablet e computer è in costruzione e si attiva con un aggiornamento dell’app. Fino ad allora i tuoi canvas restano sul dispositivo, dove funzionano anche offline.",
    },
    {
      q: "C’è una prova gratuita?",
      a: "Sì: 14 giorni gratis, solo su Mentore. Puoi disdire dallo store quando vuoi, prima della fine della prova. Fluera gratis non scade e non chiede nessun pagamento.",
    },
    {
      q: "Cosa succede ai miei canvas se disdico?",
      a: "Restano tuoi, sul dispositivo: canvas, ripasso, corsi, pennelli ed export continuano a funzionare gratis. Se avevi Ovunque, hai 6 mesi per scaricare tutto, e l’inchiostro resta per sempre. Niente viene cancellato senza una tua azione.",
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
