import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Uchwycenie",          verb: "Dzień wykładu",          description: "Pisz pojęcia ręcznie podczas wykładu. Umieszczaj je w przestrzeni. Spowolnienie pióra wymusza kompresję — tu zaczyna się kodowanie." },
    { n: 2,  title: "Rekonstrukcja",       verb: "Tego samego wieczoru",   description: "Zamknij książkę. Zrekonstruuj w wolnym obszarze tej samej kanwy to, co pamiętasz. Czerwone węzły, na których się zacinasz, są mapą następnej sesji nauki (Kapur, produktywna porażka, 2008)." },
    { n: 3,  title: "Sokratejski",         verb: "W ciągu 48 godzin",      description: "AI pyta, ty odpowiadasz. Przed każdym ujawnieniem oceń pewność od 1 do 5. Metakognicja staje się jawna." },
    { n: 4,  title: "Centaur",             verb: "Natychmiast potem",      description: "Ghost Map nakłada Twoje rozumowanie na idealną mapę. Hiperkorekcja utrwala lukę (Butterfield i Metcalfe, 2001)." },
    { n: 5,  title: "Sen",                 verb: "Tej nocy",               description: "Nic nie rób. Sen wolnofalowy odtwarza dzień. Hipokamp przekazuje ślady do kory nowej. Naszą rolą jest zejść z drogi." },
    { n: 6,  title: "Pierwszy powrót",     verb: "Dzień 1",                description: "Wróć następnego dnia. Kanwa zaciemnia to, co prawie pamiętałeś. Wydobądź z pamięci, potem przepisz to, czego brakowało." },
    { n: 7,  title: "Nauka z partnerem",   verb: "Dzień 2-3",              description: "Odwiedź kanwę kolegi. Naucz. Naucz się. Porządkowanie dla innych wzmacnia u Ciebie (efekt nauczania)." },
    { n: 8,  title: "Powtórki rozłożone",  verb: "Dzień 3 · 7 · 14…",      description: "Skuteczne uczenie się ponowne w rosnących odstępach. Złoty standard strategii oparty na dowodach (Rawson i Dunlosky, 2011)." },
    { n: 9,  title: "Mosty międzydziedzinowe", verb: "Tygodnie później",   description: "Oddal widok do skali kontynentu. Narysuj strzałki między chemią a równaniami różniczkowymi. Transfer to prawdziwy test uczenia się." },
    { n: 10, title: "Przygotowanie do egzaminu", verb: "7-14 dni przed egzaminem", description: "Tryb Fog of War. Nawiguj przez mgłę własnej kanwy. Zielone, czerwone, ślepe punkty — mapa sprawności rysuje się sama." },
    { n: 11, title: "Exam Session",        verb: "7 dni przed · Tego dnia", description: "Fluera generuje egzamin z zamkniętej księgi z Twojej kanwy. Oceń pewność od 1 do 5, odpowiedz ręcznie, a Ghost Map nałoży lukę. Hiperkorekcja utrwala zbyt pewne pomyłki (Butterfield i Metcalfe, 2001)." },
    { n: 12, title: "Trwały wzrost",       verb: "Na zawsze",              description: "Kanwa pozostaje jako autobiografia poznawcza. Wróć po dwóch latach i zobacz, jak bardzo urosłeś, w formie namacalnej." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Pożądane trudności — kontrintuicyjne odkrycie, że trudniejsza nauka daje lepsze zapamiętywanie.", year: "1994" },
    { name: "Butterfield i Metcalfe", contribution: "Efekt hiperkorekcji — pewne błędy, raz poprawione, zapamiętywane są najtrwalej.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "System 1 vs System 2 — szybka intuicja kontra wolne rozważanie w myśleniu i pamięci.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "Strefa najbliższego rozwoju — wąskie pasmo, w którym praktyka ze wsparciem przewyższa praktykę w pojedynkę.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Poczucie własnej skuteczności — silniejszy predyktor sukcesu akademickiego niż IQ.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Nastawienie na rozwój — chwalenie wysiłku zamiast talentu zmienia reakcję na trudność.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — szczyt wydajności poznawczej, gdy wyzwanie odpowiada umiejętnościom, a informacja zwrotna jest natychmiastowa.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Mapowanie pojęć — tworzenie mapy przewyższa studiowanie gotowej, niezależnie od dziedziny.", year: "1984" },
    { name: "O'Keefe i Moser",         contribution: "Komórki miejsca i komórki sieci — wbudowany GPS mózgu. Dlaczego pałace pamięci działają.", year: "Nobel 2014", nobel: true },
    { name: "Flanigan i wsp.", contribution: "W 24 badaniach notatki ręczne wypadają nieco lepiej niż pisane na klawiaturze — niewielka przewaga, która rośnie przy powtarzaniu.", year: "2024" },
    { name: "Audrey van der Meer",     contribution: "Dowody EEG, że pisanie ręczne aktywuje szersze sieci mózgowe niż pisanie na klawiaturze.", year: "2020" },
    { name: "Roediger i Karpicke",     contribution: "Praktyka wydobywania — testowanie nie mierzy pamięci, ono ją tworzy.", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "beta" },
    { name: "iPadOS",  api: "Metal",       status: "beta" },
    { name: "macOS",   api: "Metal",       status: "beta" },
    { name: "Windows", api: "Direct3D 11", status: "alpha" },
    { name: "Android", api: "Vulkan",      status: "alpha" },
    { name: "Linux",   api: "OpenGL",      status: "alpha" },
    { name: "Web",     api: "WebGPU",      status: "demo" },
  ],
  medicalUseCase: {
    kicker: "Zbudowany pod najtrudniejsze kierunki",
    title: "Medycyna, na jednym canvasie.",
    intro: "Anatomia, fizjologia, farmakologia. Tysiące faktów, które muszą pozostać połączone — i możliwe do wydobycia pod presją egzaminu. Nauka, która naprawdę działa na medycynie, to ta, która w trakcie wydaje się trudna. Fluera czyni z niej drogę najmniejszego oporu.",
    steps: [
      {
        phase: "Dzień wykładu",
        title: "Każdy układ staje się regionem.",
        description: "Zapisuj każdy wykład w jego własnym regionie tego samego nieskończonego canvasu — struktury anatomiczne, mechanizmy działania leków, szlaki metaboliczne. Położenie w przestrzeni staje się kotwicą pamięci. Dwanaście silników pędzla i atrament o niskim opóźnieniu na obsługiwanych tabletach.",
      },
      {
        phase: "Tego samego wieczoru",
        title: "Odtwórz z pamięci, przed książką.",
        description: "Zamknij materiały z wykładu. Spróbuj odbudować to, co pamiętasz, w wolnym obszarze tego samego canvasu. Luki, które znajdziesz — pominięty nerw czaszkowy, pomylony receptor — są mapą tego, czego trzeba się nauczyć dziś wieczorem. Produktywna porażka, z założenia (Kapur, 2008).",
      },
      {
        phase: "W ciągu 48 godzin",
        title: "Sokratejskie odpytywanie na canvasie, który sam zbudowałeś.",
        description: "AI pyta, ty odpowiadasz. Przed każdym odsłonięciem przewidujesz swoją pewność od 1 do 5. Każdy błąd popełniony z wysoką pewnością — każdy lek, którego byłeś pewien i pomyliłeś — zostaje wzmocniony mocniej. Hiperkorekcja (Butterfield i Metcalfe, 2001).",
      },
      {
        phase: "7–14 dni przed egzaminem",
        title: "Fog of War na układzie, w którym jesteś najsłabszy.",
        description: "Zasłoń fragmenty canvasu. Wyciągnij anatomię z pamięci, zanim odsłonisz. Fluera planuje powroty algorytmem FSRS — nowoczesnym algorytmem powtórek rozłożonych w czasie. W dniu egzaminu sam canvas jest symulacją.",
      },
    ],
    closing: "Jeśli to jest ten sposób pracy, który już w połowie realizujesz na papierze, w PDF-ach i w trzech otwartych aplikacjach, Fluera zamienia go w jedną ciągłą pętlę. Zbudowana pod to, jak działa pamięć, sprawdzona na kierunkach, które nie wybaczają niczego innego.",
  },
};

export default data;
