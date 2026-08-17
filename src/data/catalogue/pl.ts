import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Katalog — szablony do nauki, które instalują się w pamięci, nie w folderze",
    "description": "Szablon do nauki to pismo odręczne i struktura pojęć pod spodem. Gdy go instalujesz, dostajesz własny harmonogram powtórek. Kolejność z retencji, nie pobrań.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Katalog Fluery",
    "description": "Katalog odręcznych szablonów do nauki, uszeregowany według zmierzonej retencji, a nie liczby pobrań. Każdy szablon instaluje się jako harmonogram powtórek rozłożonych w czasie.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "pl"
  },
  "hero": {
    "kicker": "Katalog",
    "title": "Ktoś już przerobił ten rozdział.<br />Zainstaluj go i daj się odpytać.",
    "description": "Szablon do nauki we Fluerze to nie PDF i nie talia fiszek. To strona prawdziwego pisma odręcznego, struktura pojęć pod spodem i przepis na to, kiedy masz do niej wracać. Gdy go zainstalujesz, ten harmonogram zaczyna biec na kanwie, która należy do Ciebie.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Poproś o wczesny dostęp →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Jak działa harmonogram powtórek"
      }
    ]
  },
  "unit": {
    "kicker": "Jednostka",
    "title": "Trzy rzeczy ruszają w drogę. Autor zostaje.",
    "sub": "Każdy inny sklep wysyła Ci dokument i życzy powodzenia. Szablon do nauki niesie stronę, strukturę, dzięki której da się z tej strony uczyć, i instrukcję, kiedy do niej wracać — celowo bez tej części, która należy do autora.",
    "items": [
      {
        "title": "Strona zamknięta ramką",
        "body": "Nie cały notatnik — obszar, który autor obrysował na własnej kanwie. Kreski, kształty, wpisany tekst i obrazy w środku tej ramki, i nic spoza niej. Źródłowego PDF-a w paczce nie ma."
      },
      {
        "title": "Szkielet pojęć",
        "body": "Struktura pod atramentem: jakie pojęcia się tu pojawiają, do którego tematu należy każde z nich i które od którego zależy. To dzięki niej z szablonu można się uczyć, a nie tylko go przeczytać."
      },
      {
        "title": "Przepis na nowe karty",
        "body": "Nie pamięć autora — przepis na Twoją własną. Docelowa retencja, rodzaj materiału i termin pierwszej powtórki. Twój harmonogram powstaje z tego przepisu w chwili, gdy instalujesz szablon."
      }
    ]
  },
  "install": {
    "kicker": "Instalacja",
    "title": "Plik po prostu masz.<br />Harmonogram Cię pilnuje.",
    "paragraphs": [
      "Pobrać materiały nigdy nie było trudno. Trudno jest wrócić do nich dokładnie w tym dniu, w którym miały Ci wypaść z głowy — i żaden folder nigdy tego nie załatwił.",
      "Dlatego gdy instalujesz szablon, nigdzie nie ląduje dokument. Powstają karty. Z datami. Dziedziczysz pojęcia autora i strukturę między nimi — nigdy jego historii powtórek, jego pewności ani tego, jak dobrze sam to umiał. Format szablonu po prostu nie ma na to miejsca."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Strona przychodzi atramentem",
        "body": "Odtwarza się na kanwie, która należy do Ciebie. To pismo odręczne na papierze, a nie wyrenderowany PDF — możesz po nim pisać, dopisywać dalej i ciąć je na kawałki."
      },
      {
        "step": "02",
        "title": "Każde pojęcie zamienia się w kartę",
        "body": "Na każde nazwane pojęcie powstaje jedna zupełnie nowa karta powtórek, bez żadnej historii za sobą: zero powtórzeń i trudność startowa w środku skali Fluery. Pierwsza powtórka wypada dzień później."
      },
      {
        "step": "03",
        "title": "Od tej chwili harmonogram jest Twój",
        "body": "Zapisuje się na dysku i wchodzi do plakietki zaległości oraz do dziennego podsumowania tak samo jak wszystko, co powstało pod Twoją ręką. Jeśli zainstalujesz ten sam szablon jeszcze raz, nie skasuje to historii powtórek, którą już masz za sobą."
      }
    ]
  },
  "ranking": {
    "kicker": "Ranking",
    "title": "Liczy się to, co zostało w głowach.<br />Nie to, co się rozeszło.",
    "sub": "Licznik pobrań mierzy decyzję podjętą, zanim ktokolwiek czegokolwiek się nauczył. Jest przy tym najłatwiejszą do napompowania liczbą w każdym sklepie. Fluera może oprzeć kolejność na czymś lepszym, bo aplikacja i tak modeluje, jak mocno każdy uczący się trzyma każde pojęcie.",
    "items": [
      {
        "label": "Mierzone na urządzeniu",
        "body": "Gdy ponownie otwierasz kanwę szablonu — w dniu 1., 7. i 30. albo później — Fluera sprawdza, jak mocno, zdaniem modelu powtórek, trzymają Ci się właśnie te pojęcia, i wyprowadza z tego jedną liczbę."
      },
      {
        "label": "Jedna liczba i nic poza nią",
        "body": "Poza urządzenie wychodzi tylko ta liczba. Żadnych nazw pojęć, żadnej treści kart, żadnej historii powtórek, żadnej tożsamości. Trafia dalej wyłącznie wtedy, gdy masz zalogowane konto i włączoną zgodę na analitykę — i nigdy wtedy, gdy szablon jest Twojego autorstwa."
      },
      {
        "label": "Poniżej pięciorga uczących się — cisza",
        "body": "Szablon nie pokazuje żadnej publicznej liczby, dopóki nie złoży się na nią co najmniej pięcioro różnych uczących się. Poniżej tego progu sortowanie wraca do liczby instalacji, a kafelek po prostu milczy."
      },
      {
        "label": "Pobrania to nie miejsce w rankingu",
        "body": "Siatka pod nagłówkiem „Wszystkie szablony” układa się domyślnie według tego zmierzonego sygnału, a nie według popularności. Szablon, który rozchodzi się szybko, nie kupi sobie w niej wyższego miejsca."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Czym to nie jest.</strong> To oszacowanie modelu: jak mocno pojęcia z szablonu trzymają się w głowach tych osób, które wróciły, żeby się ich uczyć. Nie wynik egzaminu, nie grupa kontrolna i nie zdanie o kimkolwiek, kto szablon zainstalował i nigdy więcej go nie otworzył. Wolimy opisać ten sygnał dokładnie, niż go ubrać w coś ładniejszego."
  },
  "discovery": {
    "kicker": "Jak go znaleźć",
    "title": "Trzy sposoby, żeby zawęzić wybór,<br />i jeden, na który stać tylko Twoje urządzenie.",
    "sub": "Katalog materiałów do nauki psuje się zawsze tak samo: wszystko jest niby o Twoim przedmiocie i prawie nic nie jest o Twoim kursie. Dlatego filtry idą po kategoriach, którymi uczący się naprawdę myślą.",
    "paragraphs": [
      "Możesz zawężać wyniki po <strong class=\"text-paper-100\">przedmiocie</strong>, po <strong class=\"text-paper-100\">kursie lub egzaminie</strong> — dowolny tekst, więc <em>matura</em> i <em>MCAT</em> są tak samo dobre jak <em>Analiza I</em> — oraz po <strong class=\"text-paper-100\">języku</strong>. Każdy filtr niesie licznik na żywo, każdy przelicza pozostałe od nowa, kiedy coś wybierzesz, a filtr, za którym nic nie stoi, w ogóle się nie pokazuje. Nigdy nie dostaniesz do wyboru drogi, która kończy się pustą stroną.",
      "Katalog otwiera się w języku, na który masz ustawioną aplikację, bo ściana tekstu, którego nie czytasz, katalogiem nie jest. To preferencja, nie płot: jedno dotknięcie otwiera go na wszystkie języki.",
      "Wyszukiwarka działa na pełnym tekście i nie odróżnia polskich znaków od gołych liter. Porzuca też ranking i ustawia wyniki według trafności — kiedy wpisujesz, czego szukasz, to, ile zostało w głowach innych, przestaje być pytaniem, które zadajesz."
    ],
    "marksHeading": "Co znaczą oznaczenia na kafelku",
    "marks": [
      {
        "mark": "Oficjalny",
        "body": "Ustawia go katalog — nigdy to, co autor wpisze w formularzu. Nie da się go sobie wpisać w nazwę wyświetlaną."
      },
      {
        "mark": "Nowość",
        "body": "Trzeba na nią zasłużyć: zero instalacji, zero ocen, publikacja w ostatnim tygodniu. Gaśnie sama, nikt jej nie wyłącza."
      },
      {
        "mark": "Przedmiot",
        "body": "Dziedzina, do której szablon został przypisany, żeby na pierwszy rzut oka odróżnić stronę z chemii od takiej, która chemii tylko dotyka."
      },
      {
        "mark": "Ocena",
        "body": "Pojawia się dopiero wtedy, gdy szablon rzeczywiście ktoś ocenił — i to ktoś, kto go wcześniej zainstalował. Szablon bez ocen nie mówi nic, zamiast zaczynać od zera."
      }
    ],
    "note": "<strong class=\"text-paper-50\">I jeszcze jeden rząd, którego nikt inny by nie zbudował.</strong> Fluera wie, nad jakimi pojęciami teraz pracujesz, bo to Ty je zapisujesz. Może więc ustawiać szablony według tego, jak bardzo pokrywają się z tym, co masz w tej chwili na kanwie — a liczy to wszystko na Twoim urządzeniu. Z telefonu wychodzi przedmiot, którego uczysz się najwięcej, i identyfikatory szablonów, które i tak już pobrał. Zbiór Twoich pojęć nie wychodzi."
  },
  "privacy": {
    "kicker": "Co jedzie dalej, a co zostaje",
    "title": "Publikujesz stronę. Nie to, jak Ci z nią szło.",
    "sub": "Materiał do nauki zawsze powstaje w trakcie nauki — razem ze śladami tego, jak ona szła. Granica między jednym a drugim przebiega w kodzie, a nie w akapicie polityki prywatności.",
    "items": [
      {
        "title": "Twojego modelu uczenia się nie ma w pliku",
        "body": "Komponent, który buduje publiczny szkielet szablonu, już z samej konstrukcji nie sięga po Twoją historię powtórek, po Twoją pewność, po to, ile razy do czegoś wracasz i jak mocno to trzymasz, ani po embeddingi, które za tym stoją. Jeśli tę samą stronę opublikuje ekspert i ktoś, kto ledwo nadąża, oba szkielety wyjdą identyczne co do bajta."
      },
      {
        "title": "Granicy pilnuje test — w CI",
        "body": "Tę gwarancję trzyma test, który przechodzi przez cały zserializowany wynik i pada, jeśli znajdzie w nim gdziekolwiek choć jedną z dwudziestu sześciu nazw pól modelu uczenia się albo zachowania. Działa jako wymieniona z nazwy, obowiązkowa bramka CI — i pada również wtedy, gdy ktoś usunie sam plik testu."
      },
      {
        "title": "Atrament to uczciwa granica",
        "body": "Żadne czyszczenie nie dosięgnie samego pisma odręcznego — a szkielet rzeczywiście niesie krótki, ucięty fragment rozpoznanego tekstu: nigdy całej transkrypcji, ale też nie zamazany. Dlatego zanim cokolwiek pojedzie dalej, panel publikacji pokazuje Ci dokładnie ten obraz, który stanie się publiczny, a pod nim pole zgody."
      },
      {
        "title": "Twoje imię nigdy nie jest podpisem",
        "body": "Nic, co katalog pokazuje publicznie, nie zawiera żadnego identyfikatora konta, a twórcę wskazuje kod wyprowadzony z konta jednokierunkowo — solony, haszowany, skracany. To stały pseudonim, nie Twoja tożsamość."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Przeczytaj architekturę bezpieczeństwa →"
    }
  },
  "creators": {
    "kicker": "Dla twórców",
    "title": "Najlepsze wytłumaczenie trudnej rzeczy<br />mieści się zwykle na jednej stronie.",
    "paragraphs": [
      "Wszystko zaczyna się na Twojej własnej kanwie. Obrysowujesz obszar wart udostępnienia, Fluera zamyka go w szablon, a panel pyta, czy ma z tego być plik, czy wpis w katalogu. Dalej jedzie tylko to, co obrysujesz — reszta kanwy nigdzie się nie rusza.",
      "Zanim cokolwiek pojedzie dalej, widzisz dokładnie ten obraz, który stanie się publiczny, i potwierdzasz go. Wpis przechodzi walidację, zanim zapisze się choćby jeden bajt, a sama wysyłka idzie przez jednorazowe podpisane adresy. Jeśli się nie uda, wpis zostaje wycofany, a nie zostawiony w połowie.",
      "Każdy szablon jest darmowy. We Fluerze nie ma koszyka, nie ma pola ceny w API publikowania ani rejestru wypłat — zero w kolumnie z ceną trzyma ograniczenie w bazie danych, a nie nasza deklaracja."
    ],
    "heading": "Co daje publikowanie",
    "benefits": [
      "Pseudonimowy podpis twórcy, który nigdy nie jest Twoim kontem ani Twoim adresem e-mail",
      "Opcjonalny profil — nazwa wyświetlana, notka o sobie, awatar — przy czym awatar czeka, aż przejdzie moderację",
      "Obserwujący i półka, która podsuwa im Twój najnowszy szablon",
      "Wersjonowanie: poprawkę publikujesz jako zamiennik, nie jako duplikat",
      "Uzasadnienie za każdym razem, gdy decyzja wypada nie po Twojej myśli, i odwołanie, które potrafi przywrócić wpis"
    ],
    "note": "Żeby publikować, trzeba mieć zalogowane konto i potwierdzić wiek. Żeby przeglądać i instalować — nie trzeba niczego."
  },
  "safety": {
    "kicker": "Moderacja i zaufanie",
    "title": "Katalog cudzego pisma odręcznego<br />musi za siebie odpowiadać.",
    "sub": "Katalog może otworzyć każdy. Praca zaczyna się wtedy, gdy coś pójdzie nie tak — i wtedy, gdy trzeba pilnować, żeby nie decydował o tym ten, kto krzyczy najgłośniej.",
    "items": [
      {
        "label": "W chwili wysłania nic nie trafia do katalogu",
        "body": "Nowy szablon zapisuje się jako oczekujący na sprawdzenie. Dopóki nie przejdzie moderacji, nie ma go ani na listach, ani w wyszukiwarce, ani nigdzie indziej w katalogu, a jego link do udostępniania nie prowadzi donikąd."
      },
      {
        "label": "Moderacja czyta prawdziwy plik",
        "body": "Klasyfikator wyciąga obrazy osadzone w samym szablonie, zamiast wierzyć miniaturze od przesyłającego, i bierze z nich najgorszy werdykt. Działa w regionach UE. Może przepuścić wpis dalej albo go eskalować; cofnąć decyzji moderatora nie może nigdy."
      },
      {
        "label": "Zgłoszenia trafiają do ludzi, nie do robotów",
        "body": "Zgłoszenie to sygnał do kolejki, którą przegląda człowiek — jedno na zgłaszającego, zgłoszeń własnych treści się nie przyjmuje. Zorganizowana grupa może ściągnąć na wpis uwagę. Zdjąć go nie może."
      },
      {
        "label": "Usunięcie usuwa bajty",
        "body": "Kiedy wpis znika, opublikowane pliki kasujemy z CDN, a nie tylko wypisujemy z katalogu — wcześniej dowody lądują w prywatnym zasobniku, do którego dostęp mają wyłącznie administratorzy."
      },
      {
        "label": "Decyzja przychodzi z uzasadnieniem",
        "body": "Twórca dowiaduje się, co stało się z jego szablonem i czy decyzję podjął automat. Może się od niej odwołać, a odwołanie, które przejdzie, przywraca wpis."
      },
      {
        "label": "Na ocenę trzeba zapracować",
        "body": "Nie da się ocenić szablonu, którego się nie zainstalowało, ani własnego, ani anonimowo. Średnie przeliczają się od nowa, a nie przyrostowo."
      }
    ]
  },
  "status": {
    "kicker": "Dostępność",
    "title": "Katalog jest już w aplikacji.<br />Dopiero się zaczyna.",
    "paragraphs": [
      "Przeglądanie, podgląd i instalowanie są wbudowane we Fluerę i przetłumaczone na wszystkie szesnaście języków, którymi mówi aplikacja. Publikowanie też już działa — dla zalogowanych osób pełnoletnich — i celowo otwieramy je powoli: cudzą pracę albo się hostuje porządnie, albo wcale.",
      "Dlatego katalog jest mały, a na tej stronie nie ma ani liczby szablonów, ani liczby instalacji, ani liczby twórców. Kiedyś te liczby będą coś znaczyć. Dziś byłyby tylko ozdobą."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Poproś o wczesny dostęp →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Pobierz Fluerę"
      }
    ]
  }
};

export default data;

