import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "per sempre",
      tagline: "Il canvas completo. Tre quaderni. Gratis per sempre.",
      features: [
        "Canvas infinito, 13 pennelli, motore di scrittura a mano completo",
        "3 quaderni, pagine illimitate",
        "Local-first — completamente offline",
        "Export in PNG e PDF",
        "Socratic mode base",
      ],
      cta: { label: "Inizia gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "al mese · €49/anno",
      tagline: "Tutto il canvas, sync 2 device, AI di base.",
      features: [
        "Tutti i pennelli + layer illimitati",
        "Sync su 2 device",
        "Export PDF e tutti i formati base",
        "Quota AI base (Atlas, Ghost Map base)",
        "Annuale a €49 (circa €4,08/mese)",
      ],
      cta: { label: "Inizia con Plus", href: "/beta" },
      highlighted: true,
      badge: "Consigliato",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "al mese · €99/anno",
      tagline: "Exam Session, Atlas, suite AI completa, time travel illimitato e sync illimitato.",
      features: [
        "Exam Session — esami simulati dal tuo canvas con feedback di ipercorrezione",
        "Atlas vista continente + Cross-Zone Bridges su tutti i quaderni",
        "Suite AI completa (Ghost Map, Socratic, Fog of War, scheduler FSRS)",
        "Quaderni illimitati",
        "Sync end-to-end cifrato multi-device",
        "Time Travel con replay audio-sincronizzato",
        "Tutti i formati di export (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Supporto email prioritario",
        "Annuale a €99 (circa €8,25/mese)",
      ],
      cta: { label: "Diventa Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "per seat / mese · €179/anno per seat · da 5 seat",
      tagline: "Canvas condivisi per studi, lab e team piccoli.",
      features: [
        "Tutto ciò che è incluso in Pro per ogni membro del team",
        "Workspace condiviso con team Atlas",
        "Permessi role-based e ACL",
        "Dashboard admin + audit log",
        "Fatturazione team (singola fattura, IVA gestita)",
        "Supporto prioritario, onboarding dedicato",
      ],
      cta: { label: "Parla con sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Perché c'è un pricing se siete in beta privata?",
      a: "Sono i prezzi della V1. Chi sottoscrive ora blocca la tariffa del proprio tier per tutta la durata dell'abbonamento — anche se il listino cambia in seguito.",
    },
    {
      q: "Come funziona la verifica studente?",
      a: "Ti registri con un'email .edu o accademica verificata. Se la tua università non usa .edu (comune in Europa), accettiamo tessera studente scansionata, tessera ISIC o una email una-tantum dalla segreteria della facoltà.",
    },
    {
      q: "Cosa succede ai miei quaderni se cancello Pro?",
      a: "I quaderni restano sul tuo dispositivo e nel tier Free. Mantieni i primi tre; gli altri diventano sola lettura finché non riattivi o li esporti. Niente viene mai cancellato senza un'azione esplicita da parte tua.",
    },
    {
      q: "C'è una politica di rimborso?",
      a: "Sì — 30 giorni, senza domande, su piani mensili e annuali. Scrivi a support@fluera.dev dall'indirizzo con cui ti sei iscritto.",
    },
    {
      q: "Posso fare self-hosting di Fluera?",
      a: "La parte local-first gira già completamente offline su tutte e sei le piattaforme. Il self-hosting del cloud sync è sulla roadmap Education (on-prem, SSO, audit log), non ancora disponibile oggi.",
    },
    {
      q: "Offrite sconti per ricercatori o no-profit?",
      a: "Sì. Laboratori di ricerca, programmi di dottorato e no-profit registrati possono richiederlo da /contact — di solito concediamo Pro al prezzo Student o gratis in cambio di feedback.",
    },
    {
      q: "Perché nessuna prova gratuita del Pro?",
      a: "Il tier Free non è marketing mutilato — è il canvas completo. Usalo finché vuoi. Il Pro apre AI e sync, che hanno costi cloud ricorrenti che non possiamo regalare.",
    },
    {
      q: "Quali metodi di pagamento accettate?",
      a: "Carte di credito/debito via Stripe (tutti i brand principali), SEPA per clienti EU, Apple Pay e Google Pay. I clienti Education possono pagare per bonifico o ordine di acquisto.",
    },
  ],
};

export default data;
