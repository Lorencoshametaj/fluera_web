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
2. Zaloguj się swoim kontem. Połączenie z serwerem jest szyfrowane w tranzycie (TLS 1.3 z nowoczesnymi zestawami szyfrów).
3. Wybierz, które notatniki synchronizować. Kliknij prawym (albo naciśnij i przytrzymaj) na notatniku → **Włącz sync**.

Mała ikona chmury pojawia się na każdym zsynchronizowanym notatniku. Czerwony wariant wskazuje błąd; szary wskazuje pauzę.

## Dodawanie drugiego urządzenia

1. Zainstaluj Fluerę na drugim urządzeniu.
2. Zaloguj się tym samym kontem.
3. Wybierz, które notatniki synchronizować na tym urządzeniu.
4. Cloud sync rusza. Spodziewaj się, że pierwsza pełna synchronizacja zajmie kilka minut dla notatnika średniej wielkości.

## Co jest szyfrowane i jak

- Lokalna baza danych na twoim urządzeniu jest szyfrowana at-rest przez SQLCipher.
- Synchronizowane dane są szyfrowane w tranzycie (TLS) oraz at-rest na infrastrukturze w UE (Supabase, region eu-north-1).
- Cloud sync **nie** jest end-to-end szyfrowany. Fluera, jako administrator danych, może technicznie uzyskać dostęp do zsynchronizowanych treści. Nigdy nie sprzedajemy twoich danych ani nie używamy ich do reklam.

Metadane (tytuły notatników, timestampy, rozmiar) są przechowywane na tych samych serwerach w UE i podlegają tym samym zasadom: zabezpieczone w tranzycie i at-rest, nieużywane do reklam.

## Jeśli stracisz dostęp do konta

Cloud sync jest powiązany z twoim kontem. Jeśli stracisz dostęp do konta, odzyskaj je standardową procedurą resetu — twoje zsynchronizowane notatniki pozostają dostępne po ponownym zalogowaniu. Lokalna kopia na każdym urządzeniu pozostaje na nim nawet bez połączenia z chmurą.

Dla **kont Education** dostęp do zsynchronizowanych danych może być zarządzany przez administratora instytucji. To jawny opt-in, udokumentowany w instytucjonalnym DPA i audytowany.

## Rozwiązywanie konfliktów

Jeśli edytujesz ten sam canvas na dwóch urządzeniach jednocześnie, gdy jedno jest offline, Fluera używa CRDT z vector clocks, by zrobić merge bez konfliktów. Nie stracisz pracy. W rzadkich przypadkach, gdy automatyczny merge jest niejednoznaczny, zobaczysz znacznik "merge needed" na dotkniętym węźle i widok obok siebie do potwierdzenia.

## Wyłączenie sync dla konkretnego notatnika

Kliknij prawym (albo naciśnij i przytrzymaj) na notatniku → **Wyłącz sync**. Kopia w chmurze jest natychmiast cofnięta. Lokalna kopia pozostaje nietknięta.

## Następne

- [FAQ i rozwiązywanie problemów](/pl/docs/faq)
- [Architektura bezpieczeństwa](/pl/security/architecture)
