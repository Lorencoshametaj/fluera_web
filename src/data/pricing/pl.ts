// 🇵🇱 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "na zawsze",
      tagline:
        "Pełny canvas, aby wypróbować metodę. 100 kredytów AI miesięcznie, zawsze widoczne.",
      features: [
        "Nieskończony canvas, wprowadzanie odręczne, pełny silnik renderowania",
        "3 podstawowe pędzle (ołówek, pióro wieczne, marker — więcej w Plus)",
        "Eksport PNG",
        "100 kredytów AI miesięcznie — Atlas i Chat Fluera AI zawsze gratis",
        "Socratic 3 sesje/tyg., Ghost Map 3 porównania/tyg., 1 Exam/tyg.",
        "Fog of War, FSRS (powtórki interwałowe)",
        "Cross-Zone Bridges — zobacz połączenia między koncepcjami, które system odkrywa",
        "📍 3 Checkpointy na canvas — zapisz moment nauki i wróć do niego, kiedy chcesz",
        "Podgląd Time Travel + sync audio↔kreska na canvasie demo (tylko do odczytu)",
        "Local-first, w pełni offline (1 urządzenie)",
      ],
      cta: { label: "Zacznij gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "miesięcznie · €49 / rok (oszczędź €22 — 2 miesiące gratis)",
      tagline:
        "Pełna nauka indywidualna: cloud sync, AI bez tygodniowych limitów, nieograniczone nagrywanie głosu.",
      features: [
        "Cloud sync 5 GB na 2 urządzeniach — twoje canvasy także na iPadzie i komputerze",
        "Socratic, Ghost Map, Exam bez limitów częstotliwości (już nie 3/tydzień)",
        "5× więcej kredytów AI niż Free (500 miesięcznie — około 60 Ghost Map lub 18 pełnych sesji Socratic)",
        "Nieograniczone nagrywanie głosu",
        "Wszystkie pędzle V1 (6 łącznie, kolejne w drodze)",
        "Pełny eksport (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — twórz i edytuj własne połączenia między koncepcjami",
        "📍 Nielimitowane checkpointy na canvas",
        "7 dni gratis na próbę, można anulować w dowolnej chwili",
      ],
      cta: { label: "Wypróbuj Plus", href: "/beta" },
      highlighted: true,
      badge: "Polecane",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "miesięcznie · €99 / rok (oszczędź €44 — 3,5 miesiąca gratis)",
      tagline:
        "Wzmocniona nauka: Time Travel, sync audio↔kreska, współpraca w czasie rzeczywistym, wyszukiwanie we wszystkich canvasach.",
      features: [
        "⏱️ Scrubber Time Travel — oglądaj swoją naukę w odtwarzaniu",
        "🎤 Sync audio ↔ kreska — dotknij kreski i usłysz, co mówiłeś w tym momencie",
        "🤝 Współpraca na canvasie w czasie rzeczywistym (CRDT) — zapraszaj kolegów linkiem",
        "🔍 Proaktywny Background OCR — znajdź wzór napisany miesiące temu we wszystkich canvasach",
        "Cloud sync 50 GB, nieograniczone urządzenia",
        "Priorytetowe wsparcie e-mail",
        "2000 kredytów AI miesięcznie",
      ],
      cta: { label: "Zostań Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Jak działają kredyty AI?",
      a: "Każda operacja AI ma stały koszt kredytowy: Ghost Map 8, Socratic 4 za etap, Exam 12 za pytanie, Chat 1 za wiadomość. Atlas (akcje canvasu) i podstawowy Background OCR są gratis. Zawsze widzisz pozostałe saldo w nagłówku canvasu — żadnych ukrytych rate limitów, żadnych niespodzianek. Niewykorzystane kredyty się nie kumulują: plan odnawia się co 30 dni od daty rejestracji (nie 1. dnia miesiąca — płacisz za 30 dni i dostajesz 30 dni).",
    },
    {
      q: "A jeśli skończą mi się kredyty przed resetem?",
      a: "Powiadomimy z wyprzedzeniem — łagodne ostrzeżenie, gdy wykorzystasz 80% cyklu. Po zerze funkcje AI zatrzymują się z jasnym komunikatem (nigdy ciche blokady). Poczekaj na następny 30-dniowy cykl lub przejdź na wyższy plan.",
    },
    {
      q: "Dlaczego Pro kosztuje dwa razy więcej za tylko trzy filary?",
      a: "Pro to nie 'Plus z większą liczbą kredytów' — to wzmocniona nauka. Time Travel odtwarza twoją sesję nauki z audio zsynchronizowanym z każdą kreską: dotknij wzoru i usłysz wyjaśnienie, które dawałeś samemu sobie. Współpraca CRDT w czasie rzeczywistym pozwala pracować jednocześnie z kolegami z klasy lub współpracownikami na tym samym canvasie. Notability, GoodNotes i Notion AI nie dostarczają tego stacku — nie na tym poziomie integracji.",
    },
    {
      q: "Co stanie się z moimi canvasami, jeśli anuluję Plus lub Pro?",
      a: "Wszystko zostaje na twoim urządzeniu (local-first), a 3 podstawowe pędzle + eksport PNG nadal działają w tier Free. Dodatkowe canvasy stają się tylko do odczytu, dopóki nie reaktywujesz lub nie wyeksportujesz. Nic nie jest usuwane bez twojej wyraźnej akcji.",
    },
    {
      q: "Dlaczego nie ma gratis trialu Pro?",
      a: "Plus ma 7-dniowy trial gratis. Pro nie: współpraca w czasie rzeczywistym + scrubber Time Travel to powtarzalne funkcje z kosztami chmurowymi, których nie możemy oddać gratis. Jeśli chcesz ocenić metodę, Free to pełny canvas — używaj tak długo, jak ci to odpowiada.",
    },
    {
      q: "Co to jest Checkpoint?",
      a: "Checkpoint to zakładka twojego canvasa w konkretnym momencie — coś jak \"zapisz jako\". Tworzysz go, kiedy chcesz (np. \"przed kartkówką\", \"po skończeniu rozdziału 3\") i wracasz w dowolnym momencie: przywraca stan canvasa do tego punktu. Różni się od Time Travel: Checkpoint to wybrany przez ciebie stały punkt, Time Travel to ciągły scrubber po całej historii. Free zawiera 3 Checkpointy na canvas, Plus nielimitowane.",
    },
    {
      q: "Mogę wypróbować Time Travel + sync audio↔kreska przed upgradem do Pro?",
      a: "Tak. Każdy użytkownik Free dostaje wstępnie załadowany canvas demo, gdzie możesz otworzyć scrubber Time Travel i dotykać kresek, aby odtworzyć zsynchronizowane audio — tylko do odczytu, na demo. Do nagrywania własnych studiów potrzebujesz Pro.",
    },
    {
      q: "Polityka zwrotów?",
      a: "30 dni, bez pytań, zarówno na planach miesięcznych jak i rocznych. Napisz do support@fluera.dev z adresu, z którego się zarejestrowałeś.",
    },
    {
      q: "Jak działa weryfikacja studencka?",
      a: "Zweryfikowany e-mail .edu lub akademicki. Dla uczelni europejskich bez .edu akceptujemy zeskanowaną legitymację studencką, ISIC lub jednorazowy e-mail z dziekanatu.",
    },
    {
      q: "Zniżki dla badaczy lub organizacji non-profit?",
      a: "Tak. Laboratoria badawcze, programy doktorskie i zarejestrowane non-profit mogą aplikować na /contact — zwykle przyznajemy Pro w cenie Plus lub gratis w zamian za uporządkowany feedback.",
    },
    {
      q: "Jakie metody płatności akceptujecie?",
      a: "Przelewy24 (P24), BLIK, karty kredytowe/debetowe przez Stripe, SEPA, Apple Pay i Google Pay. Klienci Education mogą płacić przelewem bankowym lub zamówieniem zakupu.",
    },
    {
      q: "Plany Team lub Education?",
      a: "Pojawią się w fazie 2 (współdzielone workspaces, dashboard admina, SSO). Zainteresowany? Napisz do sales@fluera.dev — budujemy roadmapę z naszymi pierwszymi design partnerami.",
    },
  ],
};

export default data;
