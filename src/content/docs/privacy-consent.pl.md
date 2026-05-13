---
lang: "pl"
title: "Prywatność i zgoda na AI"
description: "Jakie dane Fluera zbiera, jaką zgodę dajesz i jak to wszystko wyłączyć."
section: settings
sectionLabel: "Prywatność"
order: 1
updatedAt: 2026-04-20
---

Fluera jest narzędziem local-first. Domyślnie nic nie wychodzi z twojego urządzenia, chyba że jawnie włączysz funkcję, która tego potrzebuje.

## Cztery kategorie zgody

Otwórz **Ustawienia → Prywatność**. Zobaczysz cztery przełączniki, wszystkie domyślnie wyłączone:

- **Analityka produktu.** Anonimowe dane sesji — liczby wywołań funkcji, długość sesji, czasy wywołań AI. Nigdy treść. ID użytkownika hashowane SHA-256, retencja 180 dni.
- **Funkcje AI.** Konieczne, by używać Socratic, Ghost Map, OCR LaTeX i Fog of War. Wybrany tekst z canvasu jest wysyłany do Google Gemini przez nasze proxy po stronie serwera. Nigdy cały notatnik.
- **Cloud sync.** Konieczne, by synchronizować canvasy między urządzeniami. Wszystkie notatniki są szyfrowane na twoim urządzeniu przed uploadem. Chmura przechowuje ciphertext.
- **Crash reporting.** Stack trace'y i metadane urządzenia, gdy aplikacja się crashuje. Żadnej treści użytkownika. Przetwarzane przez Sentry z `sendDefaultPii: false`.

Każdy przełącznik jest niezależny. Możesz włączyć Cloud Sync bez Analityki. Możesz używać AI bez Crash Reporting. Uprawnienia są granularne celowo.

## Co nigdy nie jest zbierane

- Treść twoich canvasów (szyfrowana w spoczynku przez SQLCipher, AES-256)
- Pytania, które AI zadaje, ani twoje odpowiedzi
- Audio nagrane przez Time Travel (przechowywane lokalnie; opt-in sync szyfruje przed uploadem)
- Informacje umożliwiające identyfikację osoby jakiegokolwiek rodzaju bez jawnej zgody

## Jak to zweryfikować

Uruchom aplikację w trybie samolotowym. Rób wszystko poza cloud sync i AI. Obserwuj swój firewall albo monitor sieci. Fluera robi zero requestów sieciowych z czterema przełącznikami zgody wyłączonymi. Jest to weryfikowalne, z założenia.

## Cofanie zgody

Cztery przełączniki są zawsze dostępne w **Ustawienia → Prywatność**. Wyłączenie przełącznika ma efekt natychmiastowy. Powiązane dane backendowe są zaplanowane do usunięcia w ciągu 30 dni.

Dla usunięcia na poziomie konta (pełne prawo do bycia zapomnianym) napisz do [privacy@fluera.dev](mailto:privacy@fluera.dev) z adresu twojego konta.

## Konta Education

Jeśli twoja instytucja administruje twoje konto Fluera, powyższe zachowania nadal mają zastosowanie do *twoich* danych. Administrator może zobaczyć zagregowane statystyki użycia do audytów zgodności (przez ślad audytu), ale nie może czytać treści twoich notatników. Szyfrowanie jest egzekwowane na twoim urządzeniu; klucz pozostaje w twoim keychainie, nie w żadnym systemie admin.

## Następne

- [Setup cloud sync](/pl/docs/cloud-sync)
- [Architektura bezpieczeństwa](/pl/security/architecture) — pełny model
