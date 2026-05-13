import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "Na zawsze",
      tagline: "Pełna kanwa. Trzy notatniki. Darmowe na zawsze.",
      features: [
        "Nieskończona kanwa, 13 pędzli, pełny silnik pisma odręcznego",
        "3 notatniki, nieograniczona liczba stron",
        "Local-first — całkowicie offline",
        "Eksport do PNG i PDF",
        "Podstawowy Socratic Mode",
      ],
      cta: { label: "Zacznij za darmo", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "miesięcznie · €49/rok",
      tagline: "Pełna kanwa, synchronizacja 2 urządzeń, podstawowe AI.",
      features: [
        "Wszystkie 13 pędzli + nieograniczone warstwy",
        "Synchronizacja end-to-end szyfrowana między 2 urządzeniami",
        "Eksport do PDF i wszystkich podstawowych formatów",
        "Podstawowy limit AI (Atlas, Ghost Map basic)",
        "Rocznie €49 (~€4,08/mies.)",
      ],
      cta: { label: "Zacznij z Plus", href: "/beta" },
      highlighted: true,
      badge: "Polecane",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "miesięcznie · €99/rok",
      tagline: "Exam Session, Atlas, pełny pakiet AI, nieograniczony time travel i synchronizacja.",
      features: [
        "Exam Session — symulowane egzaminy z Twojej kanwy z informacją zwrotną w trybie hiperkorekcji",
        "Widok kontynentu Atlas + Cross-Zone Bridges między wszystkimi notatnikami",
        "Pełny pakiet AI (Ghost Map, Socratic, Fog of War, harmonogram FSRS)",
        "Nieograniczona liczba notatników",
        "Synchronizacja end-to-end szyfrowana między wieloma urządzeniami",
        "Time Travel — odtwarzanie zsynchronizowane z dźwiękiem",
        "Wszystkie formaty eksportu (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Priorytetowe wsparcie e-mail",
        "Rocznie €99 (~€8,25/mies.)",
      ],
      cta: { label: "Przejdź na Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "za stanowisko / mies. · €179/rok za stanowisko · 5+ stanowisk",
      tagline: "Wspólne kanwy dla pracowni, laboratoriów i małych zespołów.",
      features: [
        "Wszystko z Pro dla każdego członka zespołu",
        "Wspólna przestrzeń pracy z zespołowym Atlasem",
        "Uprawnienia oparte na rolach i ACL",
        "Panel administratora + dziennik audytu",
        "Rozliczenia zespołowe (jedna faktura, obsługa VAT)",
        "Priorytetowe wsparcie, dedykowany onboarding",
      ],
      cta: { label: "Porozmawiaj ze sprzedażą", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Dlaczego publikujemy ceny podczas zamkniętej bety?",
      a: "To są ceny V1. Każdy, kto zarejestruje się teraz, zachowuje swoją stawkę dopóki subskrypcja jest aktywna — nawet jeśli ceny później się zmienią.",
    },
    {
      q: "Czy jest zniżka studencka?",
      a: "Tak. Zweryfikowani studenci otrzymują Plus lub Pro z 50% zniżki przez program pilotażowy edukacji. Zarejestruj się przez /contact z adresem .edu / .ac.uk lub kartą ISIC. Podczas bety weryfikujemy ręcznie.",
    },
    {
      q: "Co stanie się z moimi notatnikami, jeśli anuluję Plus lub Pro?",
      a: "Twoje notatniki pozostają na urządzeniu i wracasz do poziomu Free. Zachowujesz pierwsze trzy; reszta staje się tylko do odczytu, dopóki nie odnowisz subskrypcji lub nie wyeksportujesz. Nic nie jest usuwane bez Twojej wyraźnej zgody.",
    },
    {
      q: "Czy jest polityka zwrotów?",
      a: "Tak — 30 dni na planach miesięcznych i rocznych, bez pytań. Napisz na support@fluera.dev z adresu, którym się rejestrowałeś_aś.",
    },
    {
      q: "Czy mogę self-hostować Fluerę?",
      a: "Część local-first już działa całkowicie offline na wszystkich sześciu platformach. Self-hosting synchronizacji w chmurze jest na planie rozwoju Edukacji (on-premises, SSO, dziennik audytu) — nie dostępny w Fazie 1.",
    },
    {
      q: "Czy oferujecie zniżki dla badaczy i organizacji non-profit?",
      a: "Tak. Laboratoria badawcze, programy doktoranckie i zarejestrowane organizacje non-profit mogą się zgłosić przez /contact. Rozpatrujemy każdy przypadek indywidualnie i zwykle udzielamy Pro w cenie studenckiej lub bezpłatnie w zamian za uustrukturyzowaną informację zwrotną.",
    },
    {
      q: "Dlaczego nie ma darmowego okresu próbnego Plus lub Pro?",
      a: "Poziom Free nie jest marketingową wersją okrojoną — to pełna kanwa. Używaj go tak długo, jak potrzebujesz. Plus i Pro odblokowują synchronizację i AI, które wiążą się z bieżącymi kosztami chmury, których nie możemy oferować za darmo.",
    },
    {
      q: "Jakie metody płatności akceptujecie?",
      a: "Karty kredytowe/debetowe (wszystkie główne marki) przez Stripe, polecenie zapłaty SEPA dla klientów z UE oraz Apple Pay / Google Pay. Klienci edukacyjni mogą płacić przelewem bankowym lub na podstawie zamówienia zakupu.",
    },
  ],
};

export default data;
