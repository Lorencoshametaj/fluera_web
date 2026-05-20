import type { PricingData } from "../types";

// ─────────────────────────────────────────────────────────────────────────
// 🇮🇹 PRICING — V1 split (decisione 2026-05-14)
//
// Allineato a: /home/lorenzo/.claude/plans/analizza-tutta-fluera-app-floating-pebble.md
// Memory: project_v1_tier_split_credits_system, project_pricing_strategy.
//
// 3 tier pubblici (Free / Plus / Pro). Team + Edu → phase 2, NON in V1
// listing pubblico. Crediti AI unificati, server-authoritative su Supabase.
//
// Pillar di posizionamento:
//   • Trasparenza-first: numeri crediti SEMPRE visibili, niente rate limit
//     nascosti come Notion AI / ChatGPT.
//   • Pro pillars: time travel scrubber + audio-ink sync + real-time collab
//     CRDT. Le 3 cose che giustificano l'upgrade Plus→Pro (mai "Plus + cap
//     alzato").
//   • Atlas + Chat AI sempre gratis (0 crediti) anche su Free, perché sono
//     l'UX core conversazionale del canvas.
// ─────────────────────────────────────────────────────────────────────────

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "per sempre",
      tagline:
        "Il canvas completo per provare il metodo. 100 crediti AI al mese, sempre visibili.",
      features: [
        "Canvas infinito, scrittura a mano, motore di rendering completo",
        "3 pennelli base (matita, penna stilografica, pennarello — altri in Plus)",
        "Export PNG",
        "100 crediti AI al mese — Atlas e Chat Fluera AI sempre gratis",
        "Socratic 3 sessioni/sett., Ghost Map 3 confronti/sett., 1 Exam/sett.",
        "Fog of War, FSRS spaced repetition",
        "Cross-Zone Bridges — vedi i collegamenti tra concetti che il sistema scopre",
        "📍 3 Checkpoint per canvas — salva un momento di studio e torna indietro quando vuoi",
        "Anteprima Time Travel + audio↔stroke sync su canvas demo (read-only)",
        "Local-first, completamente offline (1 dispositivo)",
      ],
      cta: { label: "Inizia gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "al mese · €49 / anno (risparmi €22 — 2 mesi gratis)",
      tagline:
        "Studio individuale completo: cloud sync, AI senza contatori a settimana, voce illimitata.",
      features: [
        "Cloud sync 5 GB su 2 dispositivi — i tuoi canvas anche su iPad e desktop",
        "Socratic, Ghost Map, Exam senza limiti di frequenza (no più 3/settimana)",
        "5× più crediti AI rispetto a Free (500 al mese — circa 60 Ghost Map o 18 sessioni Socratic complete)",
        "Voice recording illimitata",
        "Tutti i pennelli V1 (6 in tutto, altri in arrivo)",
        "Export completo (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — crea e modifica i tuoi collegamenti tra concetti",
        "📍 Checkpoint illimitati per canvas",
        "Trial 7 giorni gratis, annullabile in qualsiasi momento",
      ],
      cta: { label: "Prova Plus", href: "/beta" },
      highlighted: true,
      badge: "Consigliato",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "al mese · €99 / anno (risparmi €44 — 3,5 mesi gratis)",
      tagline:
        "Studio amplificato: Time Travel, audio↔stroke sync, collaborazione real-time, ricerca su tutti i canvas.",
      features: [
        "⏱️ Time Travel scrubber — riguardi il tuo studio in playback",
        "🎤 Audio ↔ stroke sync — tocchi un tratto e riascolti cosa dicevi in quel momento",
        "🤝 Collaborazione real-time sul canvas (CRDT) — inviti compagni con un link",
        "🔍 Background OCR proattivo — cerchi una formula scritta mesi fa, la trova in tutti i canvas",
        "Cloud sync 50 GB, dispositivi illimitati",
        "Supporto email prioritario",
        "2000 crediti AI al mese",
      ],
      cta: { label: "Diventa Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Come funzionano i crediti AI?",
      a: "Ogni operazione AI costa crediti fissi: Ghost Map 8, Socratic 4 per stage, Exam 12 per domanda, Chat 1 per messaggio. Atlas (azioni canvas) e Background OCR base sono gratis. Vedi sempre quanti crediti ti restano nell'header del canvas — niente rate limit nascosti, niente sorprese. Quelli che non usi non si accumulano: il piano si ricarica ogni 30 giorni, contati dalla tua data di iscrizione (non dal 1° del mese — paghi 30 giorni e ricevi 30 giorni).",
    },
    {
      q: "E se finisco i crediti prima del reset?",
      a: "Te lo diciamo prima — un avviso quando hai usato l'80% del periodo. Quando arrivi a zero, le funzioni AI smettono di funzionare con un messaggio chiaro (mai blocchi senza preavviso). Aspetti il prossimo ciclo di 30 giorni o passi al piano superiore.",
    },
    {
      q: "Perché Pro costa il doppio se i pillar sono solo 3?",
      a: "Pro non è 'Plus con più crediti' — è studio amplificato. Time Travel ti fa rivedere il tuo studio in playback con audio sincronizzato per ogni tratto: tocchi una formula e riascolti la spiegazione che ti davi. La collaborazione real-time CRDT ti fa lavorare in tempo reale con compagni di studio o colleghi sul tuo stesso canvas. Sono cose che Notability, GoodNotes e Notion AI non offrono — non a questo livello di integrazione.",
    },
    {
      q: "Cosa succede ai miei canvas se cancello Plus o Pro?",
      a: "Tutto resta sul tuo dispositivo (local-first) e i 3 pennelli base + export PNG continuano a funzionare nel tier Free. I canvas extra restano in sola lettura finché riattivi o esporti. Niente viene mai cancellato senza una tua azione esplicita.",
    },
    {
      q: "Perché niente prova gratuita del Pro?",
      a: "Plus ha 7 giorni di trial gratis. Pro no: la collaborazione real-time + Time Travel scrubber sono feature ricorrenti che hanno costi cloud non regalabili. Se vuoi testare il metodo, il Free è il canvas completo — usalo finché ti basta.",
    },
    {
      q: "Cos'è un Checkpoint?",
      a: "Un Checkpoint è un segnalibro del tuo canvas in un momento preciso — tipo \"salva con nome\". Lo crei quando vuoi (es. \"prima del compitino\", \"dopo aver finito il capitolo 3\") e ci torni quando vuoi: ripristina lo stato canvas a quel punto. È diverso da Time Travel: il Checkpoint è un punto fisso che hai scelto tu, Time Travel è lo scrubber continuo dell'intera storia. Free include 3 Checkpoint per canvas, Plus illimitati.",
    },
    {
      q: "Posso provare Time Travel + audio↔stroke sync prima di passare a Pro?",
      a: "Sì. Ogni utente Free trova un canvas demo precaricato in cui può aprire lo scrubber Time Travel e toccare i tratti per riascoltare l'audio sincronizzato — solo in lettura, sul demo. Per registrare i tuoi propri studi serve Pro.",
    },
    {
      q: "C'è una politica di rimborso?",
      a: "30 giorni, senza domande, sia su mensile che annuale. Scrivi a support@fluera.dev dall'indirizzo con cui ti sei iscritto.",
    },
    {
      q: "Come funziona la verifica studente?",
      a: "Email .edu o accademica verificata. Per università europee senza .edu accettiamo tessera studente scansionata, ISIC o email una-tantum dalla segreteria.",
    },
    {
      q: "Sconti per ricercatori o no-profit?",
      a: "Sì. Laboratori, programmi di dottorato e no-profit registrati possono richiederlo da /contact — di solito concediamo Pro al prezzo Plus o gratis in cambio di feedback.",
    },
    {
      q: "Quali metodi di pagamento accettate?",
      a: "Carte di credito/debito via Stripe, SEPA per clienti EU, Apple Pay e Google Pay. Per istituzioni Education paghiamo via bonifico o ordine d'acquisto.",
    },
    {
      q: "Piani Team o Education?",
      a: "In arrivo come fase 2 (workspace condivisi, dashboard admin, SSO). Se sei interessato scrivi a sales@fluera.dev: stiamo costruendo la roadmap con i primi clienti.",
    },
  ],
};

export default data;
