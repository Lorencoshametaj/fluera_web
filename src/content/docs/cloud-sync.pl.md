---
lang: "pl"
title: "Cloud sync"
description: "Jak synchronizować canvasy między urządzeniami, co jest szyfrowane i jak odzyskać dostęp, jeśli zgubisz hasło passphrase."
section: settings
sectionLabel: "Synchronizacja"
order: 2
updatedAt: 2026-04-20
---

Cloud sync jest opt-in per notatnik. Możesz synchronizować jeden canvas, trzymając inny ściśle lokalnie. Nic się nie rusza, dopóki nie powiesz.

## Włączenie sync na pierwszym urządzeniu

1. Otwórz **Ustawienia → Prywatność** i włącz **Cloud sync**.
2. Stwórz albo wpisz swoje **passphrase sync**. Jest *oddzielne* od hasła konta. Passphrase służy do wyprowadzenia klucza szyfrowania — i jest przechowywane tylko na twoim urządzeniu, nigdy na naszych serwerach.
3. Wybierz, które notatniki synchronizować. Kliknij prawym (albo naciśnij i przytrzymaj) na notatniku → **Włącz sync**.

Mała ikona chmury pojawia się na każdym zsynchronizowanym notatniku. Czerwony wariant wskazuje błąd; szary wskazuje pauzę.

## Dodawanie drugiego urządzenia

1. Zainstaluj Fluerę na drugim urządzeniu.
2. Zaloguj się tym samym kontem.
3. Wpisz to *samo* passphrase sync, gdy zostanie poproszone. Passphrase nie jest odzyskiwalne — jeśli go nie masz, zaszyfrowane dane nie są czytelne na nowym urządzeniu.
4. Cloud sync rusza. Spodziewaj się, że pierwsza pełna synchronizacja zajmie kilka minut dla notatnika średniej wielkości.

## Co jest szyfrowane i jak

- Każdy notatnik jest szyfrowany lokalnie kluczem per notatnik.
- Te klucze są szyfrowane root keyem wyprowadzonym z twojego passphrase sync przez PBKDF2-SHA256, 256 000 iteracji.
- Tylko zaszyfrowane bajty docierają do serwera. Nie potrafimy czytać twoich notatników.

Metadane (tytuły notatników, timestampy, rozmiar) też są szyfrowane — serwer widzi nieprzejrzyste blob-y i timestampy sync.

## Jeśli zgubisz passphrase

Jeśli zapomnisz passphrase i nie masz urządzenia, które wciąż ma klucz w cache'u, twoje zaszyfrowane dane stają się **niemożliwe do odzyskania**. To jest z założenia. Alternatywa — mechanizm odzyskiwania po stronie serwera — złamałaby model end-to-end i jest kompromisem, którego nie jesteśmy gotowi zrobić dla kont konsumenckich.

Dla **kont Education** opcjonalny klucz odzyskiwania trzymany przez administratora może zostać skonfigurowany w momencie wdrożenia. To jawny opt-in, udokumentowany w instytucjonalnym DPA i audytowany.

## Rozwiązywanie konfliktów

Jeśli edytujesz ten sam canvas na dwóch urządzeniach jednocześnie, gdy jedno jest offline, Fluera używa CRDT z vector clocks, by zrobić merge bez konfliktów. Nie stracisz pracy. W rzadkich przypadkach, gdy automatyczny merge jest niejednoznaczny, zobaczysz znacznik "merge needed" na dotkniętym węźle i widok obok siebie do potwierdzenia.

## Wyłączenie sync dla konkretnego notatnika

Kliknij prawym (albo naciśnij i przytrzymaj) na notatniku → **Wyłącz sync**. Kopia w chmurze jest natychmiast cofnięta. Lokalna kopia pozostaje nietknięta.

## Następne

- [FAQ i rozwiązywanie problemów](/pl/docs/faq)
- [Architektura bezpieczeństwa](/pl/security/architecture)
