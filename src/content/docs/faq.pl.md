---
lang: "pl"
title: "FAQ"
description: "Pytania, które najczęściej dostajemy od beta testerów. Jeśli coś tu jest nieaktualne, napisz do supportu, a naprawimy."
section: troubleshooting
sectionLabel: "Rozwiązywanie problemów"
order: 1
updatedAt: 2026-04-20
---

## Dlaczego mój canvas otwiera się wolno po tym, jak nie używałem go przez tydzień?

Pierwszy raz, gdy Fluera ładuje notatnik po pauzie, odbudowuje indeks przestrzenny i ponownie ocenia, które węzły są wymagalne do powtórki. Kolejne otwarcia są szybkie. Jeśli pauza była dłuższa niż miesiąc, spodziewaj się też, że harmonogram powtórek rozłożonych w czasie przekalibruje twoje zaległe powtórki.

Jeśli pierwsze otwarcie zajmuje więcej niż 10 sekund na nowoczesnym urządzeniu, to bug — napisz do [support@fluera.dev](mailto:support@fluera.dev) z nazwą canvasu i przybliżoną liczbą węzłów.

## Czy mogę zaimportować swoje talie z Anki?

Jeszcze nie. Import jest w roadmapie, ale nie jest blockerem Phase 1 — model przypominania Fluery jest strukturalnie inny (przestrzenny, nie atomowy), więc bezpośredni import straciłby większość wartości. Kiedy nadejdzie, będzie dostępny dla kont Pro i Education.

## Czy mogę eksportować canvasy do PNG / SVG / PDF?

Tak, wszystkie, plus nasz otwarty format `.fluera`. Zobacz menu **Eksport**. Bez ograniczeń per tier — eksport to podstawowa funkcja własności danych, nie paywalled.

## AI dało mi błędną odpowiedź. Czy to jest oczekiwane?

Czasem tak. Naszym AI jest Google Gemini, a Gemini — jak każdy LLM — może halucynować. Socratic Mode jest mniej podatny na to, bo zadaje pytania zamiast produkować ostateczne odpowiedzi, ale nie jest na zerze.

Jeśli dostaniesz wyraźnie błędną odpowiedź AI, stuknij **Zgłoś** na odpowiedzi. Ten feedback jest używany do poprawy promptingu; jest zanonimizowany i nigdy nie powiązany z twoją treścią.

## Czy Fluera zadziała bez internetu?

Canvas — pisanie, czytanie, eksport — jest całkowicie offline. Funkcje AI (Socratic, Ghost Map, scoring Fog of War) wymagają internetu. Harmonogramowanie powtórek rozłożonych w czasie jest lokalne; tylko sync i AI wymagają połączenia.

## Jestem w Polsce. A RODO?

W pełni zgodne. Fluera jest hostowana w UE i jest natywnie GDPR/RODO, co pokrywa wymagania polskiej ustawy o ochronie danych osobowych równolegle. Możesz wykonywać swoje prawa (dostęp, sprostowanie, usunięcie, przenośność) przez **Ustawienia → Prywatność** albo pisząc do [privacy@fluera.dev](mailto:privacy@fluera.dev). Odpowiedź w ciągu 30 dni; zwykle w 48 godzin.

## Pencil laguje na moim iPadzie. Co jest nie tak?

Najpierw sprawdź, czy Fluera jest zaktualizowana. Potem: **Ustawienia → Canvas → Latencja pociągnięcia** powinno pokazywać *Predicted (zalecane)* dla urządzeń Apple Pencil. Jeśli pokazuje *Standardowa* albo *Low-power*, wróć do Predicted.

Jeśli lag utrzymuje się z włączonym Predicted, zamknij i uruchom ponownie. Jeśli nadal utrzymuje, napisz do nas z modelem twojego iPada — śledzimy aktywnie regresję na iPad Air 3.

## Jak zgłaszam buga?

[support@fluera.dev](mailto:support@fluera.dev). Opisz, co robiłeś, czego oczekiwałeś, co się stało, i podaj wersję aplikacji (Ustawienia → O programie). Screenshoty pomagają.

Dla podatności bezpieczeństwa użyj [security@fluera.dev](mailto:security@fluera.dev) i zaszyfruj naszym kluczem PGP (na naszym profilu GitHub).

## Jak daję feedback o pedagogice?

Czytamy każdy email. [hello@fluera.dev](mailto:hello@fluera.dev) idzie wprost do founderów. Szczególnie przydatne: co *nie* zadziałało dla ciebie, co wydawało się tarciem, które nie było pożądane, i wszystko, co cię zaskoczyło.

## Następne

- [Tuning wydajności](/pl/docs/performance) — wyciskanie maksimum z dużych canvasów
- [Cała dokumentacja użytkownika](/pl/docs)
