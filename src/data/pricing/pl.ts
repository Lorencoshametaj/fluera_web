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
      period: "na zawsze",
      tagline:
        "Cały canvas, powtórki i kursy. Bez subskrypcji i bez daty ważności.",
      features: [
        "Nieskończony canvas i pismo odręczne",
        "Powtórki, kursy, wszystkie pędzle, eksport i time travel",
        "Mentor do wypróbowania w pierwszym miesiącu",
        "500 MB takie samo na wszystkich twoich urządzeniach, bez audio, gdy wystartuje synchronizacja",
        "Działa też offline: twoje canvasy zostają na urządzeniu",
      ],
      cta: { label: "Zacznij za darmo", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Wszędzie",
      price: "€29,99",
      period: "rocznie · tylko rocznie · 60 GB za €44,99 / rok",
      tagline:
        "Wszystko na telefonie, tablecie i komputerze, bez myślenia o miejscu. Startuje wraz z aktualizacją aplikacji.",
      features: [
        "20 GB zamiast 500 MB w wersji darmowej",
        "Nagrane wykłady, z dźwiękiem, na każdym urządzeniu",
        "Udostępnij canvas i piszcie razem",
        "Jeśli zrezygnujesz, masz 6 miesięcy na pobranie wszystkiego. Atrament zostaje na zawsze.",
        "Żadnych dodatkowych funkcji do nauki: wszystkie są już w darmowej wersji",
      ],
      cta: { label: "Wybierz Wszędzie", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "miesięcznie · €84,99 / rok (oszczędzasz €34,89)",
      tagline:
        "Tutor, który przeczytał twoje notatki, z miesięcznym limitem zawsze widocznym w procentach.",
      features: [
        "Zadaje ci pytania o to, co napisałeś",
        "Przeprowadza egzamin ustny i mówi, czego brakuje",
        "Nadaje tytuł każdemu pojęciu, które piszesz",
        "Zamienia odręczne wzory w wzory do edycji",
        "Możesz też zadawać pytania swoim notatkom na czacie",
        "Miesięczny limit, zawsze widoczny w procentach",
        "Pierwsze 14 dni jest za darmo",
      ],
      cta: { label: "Wypróbuj Mentora", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Wszędzie + Mentor",
      price: "€99,99",
      period: "rocznie · oszczędzasz €14,99 w porównaniu z dwoma osobno · z 60 GB €119,99 / rok",
      tagline:
        "Cała Fluera, na każdym urządzeniu, z tutorem. Polecany plan.",
      features: [
        "Całe Wszędzie: 20 GB i wykłady z dźwiękiem",
        "Cały Mentor: pytania, egzamin, tytuły i wzory",
        "Miesięczny limit, zawsze widoczny w procentach",
        "Tylko rocznie",
      ],
      cta: { label: "Wybierz Wszędzie + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Polecane",
    },
  ],
  faq: [
    {
      q: "Jak sprawdzę, ile Mentora mi zostało?",
      a: "W aplikacji, zawsze. Licznik pokazuje w procentach, ile zostało z miesięcznego limitu Mentora, kiedy się odnawia (1. dnia miesiąca) i do kiedy wystarczy w twoim tempie. Bez ukrytych limitów i bez kredytów do przeliczania w głowie: to, co widzisz, to to, co masz.",
    },
    {
      q: "A jeśli Mentor na ten miesiąc się skończy?",
      a: "Powtórki, kursy i twoje notatki działają zawsze, także bez Mentora. Mentor wraca 1. dnia miesiąca; jeśli potrzebujesz go wcześniej, w aplikacji możesz włączyć rezerwę egzaminacyjną albo trochę dokupić.",
    },
    {
      q: "Kupuję raz: czy działa na wszystkich moich urządzeniach?",
      a: "Tak. Subskrypcję wykupujesz w aplikacji Fluera na telefonie lub tablecie, przez App Store lub Google Play, i płacisz metodami zapisanymi na koncie w sklepie. Potem twój plan działa na wszystkich urządzeniach, na których zalogujesz się na to samo konto, łącznie z komputerami.",
    },
    {
      q: "Czy Wszędzie działa już między urządzeniami?",
      a: "Jeszcze nie. Synchronizacja między telefonem, tabletem i komputerem jest w budowie i wystartuje wraz z aktualizacją aplikacji. Do tego czasu twoje canvasy zostają na urządzeniu, gdzie działają też offline.",
    },
    {
      q: "Czy jest darmowy okres próbny?",
      a: "Tak: 14 dni za darmo, tylko dla Mentora. Możesz zrezygnować w sklepie w każdej chwili przed końcem okresu próbnego. Darmowa Fluera nie wygasa i nie wymaga płatności.",
    },
    {
      q: "Co stanie się z moimi canvasami, jeśli zrezygnuję?",
      a: "Zostają twoje, na twoim urządzeniu: canvas, powtórki, kursy, pędzle i eksport działają dalej za darmo. Jeśli miałeś Wszędzie, masz 6 miesięcy na pobranie wszystkiego, a atrament zostaje na zawsze. Nic nie zostanie usunięte bez twojego działania.",
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
