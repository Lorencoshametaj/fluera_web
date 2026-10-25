---
lang: "pl"
title: "Prywatność i zgoda na AI"
description: "Jakie dane Fluera zbiera, jaką zgodę dajesz i jak to wszystko wyłączyć."
section: settings
sectionLabel: "Prywatność"
order: 1
updatedAt: 2026-10-23
---

Fluera jest narzędziem local-first. Domyślnie nic nie wychodzi z twojego urządzenia, chyba że jawnie włączysz funkcję, która tego potrzebuje.

## Cztery kategorie zgody

Otwórz **Ustawienia → Prywatność**. Zobaczysz cztery przełączniki, wszystkie domyślnie wyłączone:

- **Analityka produktu.** Dane o użyciu powiązane z identyfikatorem twojego konta, żebyś mógł je zobaczyć i usunąć — użycie funkcji, długość sesji, czas wywołań AI. Nigdy treść. Przechowywane najwyżej 180 dni.
- **Funkcje AI.** Konieczne, by używać Socratic, Ghost Map, OCR LaTeX i Fog of War. Wybrany tekst z canvasu jest wysyłany do modeli Google Gemini obsługiwanych przez Google Vertex AI, przetwarzanych w UE (modele 2.5 w regionach europe-west4 NL / europe-west1 BE, modele 3.x przez wieloregionowy punkt końcowy UE w Vertex AI): dane pozostają w państwach członkowskich UE. Nigdy cały canvas.
- **Cloud sync.** Konieczne, by synchronizować canvasy między urządzeniami. Zsynchronizowane dane są szyfrowane w tranzycie (TLS) i w spoczynku na infrastrukturze w UE (Supabase, eu-north-1). Nie jest to szyfrowanie end-to-end: Fluera jako administrator danych ma do nich techniczny dostęp, ale nigdy ich nie sprzedaje ani nie wykorzystuje do reklam. W planie Cloud **Synchronizuj między urządzeniami** (niżej) przenosi też twoją naukę i ustawienia.
- **Crash reporting.** Stack trace'y i metadane urządzenia, gdy aplikacja się crashuje. Żadnej treści użytkownika. Przetwarzane przez Sentry z `sendDefaultPii: false`.

Każdy przełącznik jest niezależny. Możesz włączyć Cloud Sync bez Analityki. Możesz używać AI bez Crash Reporting. Uprawnienia są granularne celowo.

## Pamięć poznawcza (na urządzeniu, opt-out)

Niezależnie od czterech zgód chmurowych powyżej: domyślnie Fluera indeksuje twoje notatki **na twoim urządzeniu**, aby tworzyć automatyczne tytuły, mapę pojęć (Ghost Map) i powtórki rozłożone w czasie (FSRS). Indeks jest budowany i liczony na twoim urządzeniu i tam zostaje, chyba że włączysz **Synchronizuj między urządzeniami** (następna sekcja): wtedy twoje karty powtórek z historią twoich odpowiedzi, twoje pojęcia, mapa pojęć i tytuły twoich grup notatek przechodzą przez chmurę Fluery na twoje inne urządzenia. Pamięć możesz wyłączyć w **Ustawienia → Prywatność → Pamięć poznawcza**: indeksowanie się zatrzymuje, a dane poznawcze na tym urządzeniu są od razu usuwane (twoje notatki pozostają nietknięte); jeśli używasz Synchronizuj między urządzeniami, usuwa się też kopie w chmurze i żadna nie trafia tam ponownie, dopóki jej znów nie włączysz. Podstawa prawna: prawnie uzasadniony interes z prawem sprzeciwu (RODO art. 6.1.f / 21) — dlatego jest włączona domyślnie i działa jako opt-out, a nie zgoda opt-in jak cztery powyżej.

## Synchronizuj między urządzeniami (plan Cloud)

Przełącznik **Ustawienia → Dane i synchronizacja → Synchronizuj między urządzeniami** jest wyłączony, dopóki go nie włączysz. Wymaga konta i planu Cloud i dotyczy całego twojego konta: włączony na jednym urządzeniu oznacza włączony na każdym urządzeniu, na którym się zalogujesz. Gdy go włączasz, serwer zapisuje datę i wersję polityki prywatności, którą miałeś przed sobą. Podstawa prawna: umowa (RODO art. 6.1.b) — to usługa Cloud, za którą płacisz.

- **Co trafia do chmury, tylko gdy jest włączony:** całe canvasy (pociągnięcia, sekcje, wzory, pliki PDF z oznaczeniami z czytnika, zdjęcia); nagrane wykłady (dźwięk, w częściach); nauka w każdym canvasie (karty powtórek z twoimi odpowiedziami, pojęcia, egzaminy z ich atramentem, tutor sokratejski, czat, przypominanie, kursy); foldery galerii (z ich nazwami), folder każdego canvasu, przypięte, etykiety i Kosz; tekst, który Fluera rozpoznała w twoim piśmie odręcznym; twoje wybory w ustawieniach (wygląd, język, papier, powtórki, kolory, gumka i podobne). Ustawienia przypisane do jednego urządzenia (ręka, dłoń, rysik, okno) zostają na nim.
- **Co zawsze zostaje na urządzeniu:** historia canvasu (Time Travel) i cofanie.
- **Kto to widzi:** ty. Na canvasie, który udostępniasz, członkowie widzą canvas i tytuły grup notatek; twoją naukę widzisz tylko ty.
- **Gdzie:** Supabase, region UE `eu-north-1` (Sztokholm), szyfrowane w transmisji i w spoczynku, **nie** szyfrowane end-to-end.
- **Wyłączenie** na dowolnym urządzeniu zatrzymuje go na wszystkich i niczego nie usuwa. Tak samo, gdy wycofasz zgodę na Cloud sync.
- **Gdy plan Cloud się kończy,** synchronizacja się wstrzymuje, a wszystko można pobrać jeszcze przez 6 miesięcy. Potem możemy usunąć dźwięk wykładów, pliki PDF i zdjęcia ponad 500 MB planu Free, zaczynając od najstarszych; atrament twoich canvasów zostaje.
- **Usuwanie:** **Usuń na zawsze** dla canvasu w **Koszu** usuwa go z chmury razem z tym, co do niego należy, łącznie z atramentem jego egzaminów; **Ustawienia → Prywatność i telemetria → Usuń wszystkie moje dane z chmury** usuwa wszystkie canvasy, wykłady, atrament egzaminów, ustawienia i foldery oraz wyłącza Synchronizuj między urządzeniami; **Ustawienia → Profil i konto → Usuń konto** usuwa wszystko, łącznie z ustawieniami.

Bez przełącznika wszystko to zostaje na twoim urządzeniu, jak dotąd.

## Dane treningowe AI (osobna sekcja, tylko opt-in)

Budujemy własne rozpoznawanie pisma odręcznego, dopasowane do tego, jak naprawdę piszą użytkownicy Fluera. W **Ustawienia → Prywatność → Dane treningowe AI** znajdziesz jeszcze dwa przełączniki, też domyślnie wyłączone i niezależne od czterech powyżej:

- **Sesja kalibracyjna (~5 min).** Jednorazowa sesja z przewodnikiem, w której piszesz 30 pokazanych symboli (cyfry, operatory matematyczne, litery greckie, popularne litery). Symbol na ekranie to wzorzec, połączony z twoimi pociągnięciami.
- **Automatyczne przechwytywanie podczas pisania.** Gdy piszesz normalnie na canvasie, zapisujemy surowe pociągnięcia (współrzędne, czas, nacisk, nachylenie rysika, jeśli jest obsługiwane) i mały zaszyfrowany obraz PNG każdego klastra. Dane pozostają zaszyfrowane na naszym serwerze. **Gdy sfinalizujemy umowę z Google** (umowa powierzenia przetwarzania dla Vertex AI, w toku), Google Gemini przeanalizuje obrazy, żebyśmy mogli nauczyć Fluera, co napisałeś. Do tego czasu żadne dane treningowe nie opuszczają naszej infrastruktury do osób trzecich.

Oba przełączniki używają osobnego pseudonimowego identyfikatora, liczonego na twoim urządzeniu i **innego** niż ten z analityki produktu: z samych danych nie da się powiązać wkładu z twoim kontem.

Szczególne zabezpieczenia tej kategorii:
- Szyfrowanie danych AES-256-GCM *przed* wysłaniem; klucz do odszyfrowania to asymetryczna para kluczy (X25519), której prywatna połowa jest przechowywana offline na papierze i nigdy nie jest digitalizowana.
- Row-Level Security na tabelach Supabase: nikt nie może czytać próbek innej osoby.
- Filtr szumu: klastry z mniej niż 3 punktami (stuknięcia, smugi) są odrzucane przed zapisem.
- Trwała deduplikacja przez geometryczny odcisk: narysowanie tego samego klastra identycznie jeszcze raz nie tworzy duplikatu.
- Podgląd każdej próbki w **Ustawienia → Dane treningowe AI → Ostatnio przechwycone**: widzisz miniatury dokładnie tego, co zapisaliśmy.

## Co nigdy nie jest zbierane

- Treść twoich canvasów (szyfrowana w spoczynku przez sqlite3mc, ChaCha20-Poly1305), chyba że włączysz **Synchronizuj między urządzeniami** (wyżej)
- Pytania, które AI zadaje, ani twoje odpowiedzi
- Dźwięk, który nagrywasz, chyba że włączysz **Synchronizuj między urządzeniami** (wyżej): wtedy trafia do chmury jak twoje canvasy, szyfrowany w transmisji i w spoczynku, nie end-to-end
- Informacje umożliwiające identyfikację osoby jakiegokolwiek rodzaju bez jawnej zgody

## Jak to zweryfikować

Wyłącz cztery przełączniki i obserwuj zaporę albo monitor sieci: twoje canvasy, nagrania i to, co piszesz, zostają na urządzeniu. Aplikacja nadal łączy się z siecią w sprawach, które nie niosą treści canvasów, na przykład: logowanie do konta, sprawdzenie subskrypcji w sklepie (RevenueCat), pobranie modeli potrzebnych niektórym funkcjom, sygnał marketplace, gdy instalujesz lub uczysz się karty z katalogu (domyślnie włączony, wyłączysz go w **Ustawienia → Prywatność i telemetria → Sygnał marketplace**), oraz strony, które otwierasz we wbudowanej przeglądarce.

## Cofanie zgody

Cztery przełączniki są zawsze dostępne w **Ustawienia → Prywatność**. Wyłączenie przełącznika ma efekt natychmiastowy. To, co dzieje się z już zebranymi danymi, zależy od kategorii:

- **Analityka produktu:** gdy wycofanie zgody dotrze do naszych serwerów, telemetria już zebrana z twoim kontem jest od razu usuwana. I tak nigdy nie jest przechowywana dłużej niż 180 dni.
- **Funkcje AI:** zapytania zatrzymują się od razu, także na naszym serwerze. Dziennik użycia AI (jaka funkcja, ile tokenów, bez treści) zostaje przez 24 miesiące, na potrzeby limitów planu.
- **Cloud sync:** jego wyłączenie, albo wyłączenie Synchronizuj między urządzeniami, nie usuwa niczego, co już jest w chmurze — do tego służy **Usuń wszystkie moje dane z chmury**.
- **Crash reporting:** wycofanie zgody nie usuwa już wysłanych raportów: Sentry przechowuje je przez 30 dni, a swoje zaszyfrowane kopie zapasowe do 90.

Aby usunąć konto i jego dane w chmurze, użyj **Ustawienia → Profil i konto → Usuń konto**. Jeśli to się nie uda, napisz na [lorenco@fluera.dev](mailto:lorenco@fluera.dev) z adresu swojego konta.

## Następne

- [Setup cloud sync](/pl/docs/cloud-sync)
- [Architektura bezpieczeństwa](/pl/security/architecture) — pełny model
