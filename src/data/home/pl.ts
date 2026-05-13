import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Uchwycenie",          verb: "Dzień wykładu",          description: "Pisz pojęcia ręcznie podczas wykładu. Umieszczaj je w przestrzeni. Spowolnienie pióra wymusza kompresję — tu zaczyna się kodowanie." },
    { n: 2,  title: "Rekonstrukcja",       verb: "Tego samego wieczoru",   description: "Zamknij książkę. Zrekonstruuj na pustej kanwie to, co pamiętasz. Czerwone węzły, na których się zacinasz, są mapą następnej sesji nauki (Kapur, produktywna porażka, 2008)." },
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
    { name: "Mueller i Oppenheimer",   contribution: "Notatki ręczne pokonują notatki na laptopie w pytaniach pojęciowych — nawet gdy notatki na laptopie są pełniejsze.", year: "2014" },
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
};

export default data;
