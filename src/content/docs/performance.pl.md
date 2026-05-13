---
lang: "pl"
title: "Tuning wydajności"
description: "Fluera jest zbudowana, by utrzymywać 60 FPS na canvasach z setkami tysięcy pociągnięć. Oto, co sprawdzić, kiedy to się nie dzieje."
section: troubleshooting
sectionLabel: "Rozwiązywanie problemów"
order: 2
updatedAt: 2026-04-20
---

Silnik Fluery jest zaprojektowany tak, by trzymać 60 FPS z latencją pociągnięcia poniżej 15 ms na nowoczesnym sprzęcie — do setek tysięcy pociągnięć na notatnik. Kiedy nie trzyma, zwykle odpowiada za to jedna z niewielkiego zestawu rzeczy.

## Diagnostyka

Otwórz **Ustawienia → Zaawansowane → Wydajność**. Zobaczysz:

- **Aktualne FPS** — powinno utrzymywać się na 60 (albo 120 na urządzeniach ProMotion)
- **Latencja pociągnięcia** — powinna pokazywać <15 ms na iOS/macOS, <20 ms na innych platformach
- **Użyta pamięć** — bezwzględna i jako procent budżetu urządzenia
- **Hit rate tile cache** — powinien być >90% podczas normalnego zoomowania/panowania

Jeśli coś tu jest na czerwono, prawdopodobni winowajcy są na liście poniżej.

## Duże canvasy (&gt; 200k pociągnięć)

Silnik radzi sobie z tą objętością, ale dwa ustawienia mają znaczenie:

- **Budżet pamięci.** Na urządzeniach z mniej niż 6 GB RAM domyślny budżet pamięci Fluery jest konserwatywny. Jeśli masz dużo RAM-u i chcesz szybszych odpowiedzi zoomu, podnieś do *Hojny* w **Ustawienia → Canvas → Budżet pamięci**.
- **Poziom szczegółowości.** Domyślna polityka LOD upraszcza pociągnięcia na bardzo niskich poziomach zoomu. Jeśli zauważysz pociągnięcia, które wyglądają na drżące, gdy zoom jest oddalony, zmień LOD na *Wysoki szczegół* — ale spodziewaj się ~10% większego obciążenia GPU.

## Nagrywanie zsynchronizowane z audio (Time Travel)

Time Travel przechowuje audio razem z timestampami pociągnięć. Dla 60-minutowego wykładu to około 20 MB audio. To nie audio spowalnia rzeczy — to indeks. Spróbuj:

- **Ustawienia → Time Travel → Granularność indeksu** ustawione jako *Standardowa* zamiast *Drobna*
- Skasuj stare sesje Time Travel, których nie potrzebujesz (są przechowywane lokalnie domyślnie; przycisk clear-cache usuwa je bezpiecznie)

## Konkretnie Apple Pencil

Na iPadzie domyślny tryb *Predicted touch* trzyma latencję pociągnięcia poniżej 8 ms. Jeśli wyłączyłeś predykcję (w Ustawienia → Canvas → Latencja pociągnięcia → Standardowa), wróć do Predicted. Predykcja jest API Apple Pencil, nie zgadywaniem — używa predykcji trajektorii samego sprzętu.

## Kiedy nic nie pomaga

Uruchom **Ustawienia → Zaawansowane → Eksport diagnostyki**. Dostaniesz mały plik JSON z próbkami FPS, użyciem pamięci i (anonimowymi) informacjami o urządzeniu. Wyślij go do [support@fluera.dev](mailto:support@fluera.dev) z krótkim opisem, kiedy rzeczy zwalniają.

Logujemy ≈95% widocznych dla użytkownika regresji wydajności do konkretnego kawałka kodu w ciągu godziny od otrzymania eksportu diagnostyki. Pozostałe 5% jest naprawdę trudne i powiemy ci o tym.

## Następne

- [FAQ](/pl/docs/faq)
- [Cała dokumentacja użytkownika](/pl/docs)
