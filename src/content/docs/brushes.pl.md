---
lang: "pl"
title: "Pędzle"
description: "Dwanaście silników pędzli, każdy skalibrowany do innego rodzaju śladu. Krótki przewodnik po wyborze właściwego — i dlaczego liczy się to mniej, niż myślisz."
section: canvas
sectionLabel: "Canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera dostarcza dwanaście silników pędzli. Każdy to kompletny pipeline renderowania — nacisk, nachylenie, prędkość, fragment shadery per pędzel — nie podmiana tekstury. Brzmi jak dużo; w praktyce większość twojego uczenia się odbędzie się w jednym albo dwóch z nich.

## Krótka odpowiedź

- Jeśli robisz notatki: **pióro wieczne** albo **długopis**. Oba szybkie, czytelne, wybaczające.
- Jeśli adnotujesz PDF albo wyróżniasz pojęcie: **zakreślacz**.
- Jeśli rysujesz diagram z czystymi geometrycznymi liniami: **pióro techniczne**.
- Jeśli robisz szybką wizualną metaforę albo ilustrację: **ołówek** (lekkie pociągnięcia) albo **węgiel** (dramatyczne pociągnięcia).

Cała reszta jest do specyficznych sytuacji. Nie myśl o tym za dużo.

## Dwanaście

| Pędzel              | Dobry do                                          | Notatki                                          |
|---------------------|---------------------------------------------------|--------------------------------------------------|
| Pióro wieczne       | Pisanie ręczne w długiej formie                   | Reaguje na nachylenie, naturalny przepływ atramentu |
| Długopis            | Szybkie notatki, równa linia                      | Szerokość wrażliwa na nacisk                     |
| Ołówek              | Miękkie, wybaczające pociągnięcia                 | Ziarnista tekstura, gradacja przez nacisk        |
| Pióro techniczne    | Diagramy w stylu CAD, precyzyjna geometria        | Zerowa wrażliwość na nacisk celowo               |
| Marker              | Tytuły z chamferowanym końcem, wyróżnienia        | Płaskie pociągnięcia, intensywny kolor           |
| Zakreślacz          | Wyróżnienia w trybie overlay (20–30% przezroczystości) | Miesza się w trybie overlay                  |
| Węgiel              | Ekspresyjny, szorstka tekstura                    | Efekt smużenia, krwawi na krawędziach            |
| Olej                | Malarskie pociągnięcia, kolor w warstwach         | Wet-edge blending, ciemnienie na krawędziach     |
| Akwarela            | Miękkie warstwy, dyfuzja                          | Symulacja pigmentu                               |
| Lawowanie           | Odczucie wet-on-paper                             | Krwawienie koloru na krawędziach                 |
| Spray               | Efekty cząsteczek, cienie                         | Zniekształcenie krawędzi                         |
| Neon                | Świecące adnotacje                                | Zewnętrzne świecenie, fluorescencyjne nasycenie  |

## Dlaczego silnik się liczy (krótko)

Silnik Fluery zachowuje sygnały nacisku, nachylenia i prędkości dzięki atramentowi o niskiej latencji na obsługiwanym sprzęcie. To nie jest tylko kaprys produktowy. <a href="/pl/science/authors/van-der-meer">Praca EEG van der Meer</a> pokazała, że pisanie ręczne angażuje sieci sensomotoryczne, których pisanie na klawiaturze nie angażuje, a bogactwo tych sygnałów skaluje się z wiernością przechwytywania.

W praktyce: canvas, który gubi pociągnięcia, opóźnia się pod naciskiem albo spłaszcza dane nachylenia, wyrzuca dokładnie ten sygnał, który czyni notatki ręczne poznawczo lepszymi. Zbudowaliśmy silnik od zera, bo żadna opcja off-the-shelf nie spełniała standardu.

## Personalizacja pędzla

Naciśnij i przytrzymaj dowolny pędzel w toolbarze. Otworzy się mały panel z:

- **Rozmiar** (0,5pt – 12pt)
- **Przezroczystość** (10% – 100%)
- **Stabilizacja** (żadna / miękka / mocna) — wygładza jitter bez zabijania osobowości
- **Krzywa nacisku** — dostosowuje reakcję na lekki vs mocny nacisk

Zmiany dotyczą bieżącego canvasu, zamiast modyfikować całą aplikację. Dzięki temu canvas całych studiów zachowuje własne ustawienia pędzli.

## Następne

- [Gesty i zoom](/pl/docs/gestures-zoom)
- [Eksport i backup](/pl/docs/cloud-sync)
