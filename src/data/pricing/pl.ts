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
      period: "na zawsze",
      tagline:
        "Cały canvas, powtórki i kursy. Bez subskrypcji i bez daty ważności.",
      features: [
        "Nieskończony canvas i pismo odręczne",
        "Powtórki, kursy, wszystkie pędzle, eksport i time travel",
        "Próbka AI w pierwszym miesiącu od rejestracji",
        "500 MB chmury na wszystkich twoich urządzeniach, bez audio, gdy Cloud wystartuje",
        "Działa też offline: twoje canvasy zostają na urządzeniu",
      ],
      cta: { label: "Zacznij gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "rocznie · tylko rocznie · Cloud 60 za €44,99 / rok",
      tagline:
        "Miejsce na twoje canvasy i nagrane wykłady. Startuje wraz z aktualizacją aplikacji.",
      features: [
        "20 GB na twoich urządzeniach: telefon, tablet i komputer",
        "Nagrane wykłady odsłuchasz wszędzie",
        "Twoje canvasy bezpieczne, nawet gdy zmienisz telefon",
        "Cloud 60: 60 GB dla tych, którzy nagrywają dużo wykładów",
      ],
      cta: { label: "Wybierz Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9,99",
      period: "miesięcznie · €84,99 / rok (oszczędzasz €34,89)",
      tagline: "AI, które czyta to, co piszesz, z licznikiem zawsze na widoku.",
      features: [
        "AI czyta twoje notatki i nazywa każde pojęcie",
        "Tutor, egzaminy, czat, wzory i transkrypcja",
        "Zawsze widzisz, ile AI zostało ci w tym miesiącu, w procentach",
        "Rezerwa egzaminacyjna na najcięższe miesiące",
        "14 dni za darmo na wypróbowanie",
      ],
      cta: { label: "Wypróbuj AI", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99,99",
      period: "rocznie · oszczędzasz €4,99 w porównaniu z dwoma osobno · z Cloud 60 €119,99 / rok",
      tagline: "Cały Cloud i całe AI w jednej subskrypcji.",
      features: [
        "Cały Cloud i całe AI",
        "20 GB albo 60 GB z Cloud 60 + AI",
        "Zawsze widzisz, ile AI zostało ci w tym miesiącu, w procentach",
        "Tylko rocznie",
      ],
      cta: { label: "Wybierz Cloud + AI", href: "/beta" },
      highlighted: true,
      badge: "Polecane",
    },
  ],
  faq: [
    {
      q: "Jak sprawdzę, ile AI mi zostało?",
      a: "W aplikacji, zawsze. Licznik pokazuje w procentach, ile AI z tego miesiąca ci zostało, kiedy się odnowi (1. dnia miesiąca) i do kiedy wystarczy w twoim tempie. Bez ukrytych limitów i bez kredytów do przeliczania w głowie: to, co widzisz, to to, co masz.",
    },
    {
      q: "A jeśli AI z tego miesiąca się skończy?",
      a: "Powtórki, kursy i twoje notatki działają zawsze, także bez AI. AI wraca 1. dnia miesiąca; jeśli potrzebujesz wcześniej, w aplikacji możesz włączyć rezerwę egzaminacyjną albo trochę dokupić.",
    },
    {
      q: "Kupuję raz: czy działa na wszystkich moich urządzeniach?",
      a: "Tak. Subskrypcję wykupujesz w aplikacji Fluera na telefonie lub tablecie, przez App Store lub Google Play, i płacisz metodami zapisanymi na koncie w sklepie. Potem twój plan działa na wszystkich urządzeniach, na których zalogujesz się na to samo konto, łącznie z komputerami.",
    },
    {
      q: "Czy Cloud działa już między urządzeniami?",
      a: "Jeszcze nie. Cloud między telefonem, tabletem i komputerem jest w budowie i wystartuje wraz z aktualizacją aplikacji. Do tego czasu twoje canvasy zostają na urządzeniu, gdzie działają też offline.",
    },
    {
      q: "Czy jest darmowy okres próbny?",
      a: "Tak: 14 dni za darmo, tylko dla AI. Możesz anulować w sklepie w dowolnej chwili przed końcem okresu próbnego. Free nie wygasa i nie wymaga żadnej płatności.",
    },
    {
      q: "Co się stanie z moimi canvasami, jeśli zrezygnuję?",
      a: "Zostają twoje, na urządzeniu: canvas, powtórki, kursy, pędzle i eksport dalej działają w Free. Funkcje planu zatrzymują się, dopóki go nie wznowisz. Nic nie jest usuwane bez twojego działania.",
    },
    {
      q: "Polityka zwrotów?",
      a: "Warunki zwrotu i odstąpienia zależą od sklepu oraz kanału zakupu. Obowiązująca polityka jest wyświetlana przed potwierdzeniem; po pomoc napisz na support@fluera.dev z adresu użytego przy rejestracji.",
    },
    {
      q: "Plany Team lub Education?",
      a: "Pojawią się w fazie 2 (współdzielone workspaces, dashboard admina, SSO). Zainteresowany? Napisz do support@fluera.dev — budujemy roadmapę z naszymi pierwszymi design partnerami.",
    },
  ],
};

export default data;
