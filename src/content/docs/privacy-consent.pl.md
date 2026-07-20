---
lang: "pl"
title: "Prywatność i zgoda na AI"
description: "Jakie dane Fluera zbiera, jaką zgodę dajesz i jak to wszystko wyłączyć."
section: settings
sectionLabel: "Prywatność"
order: 1
updatedAt: 2026-06-29
---

Fluera jest narzędziem local-first. Domyślnie nic nie wychodzi z twojego urządzenia, chyba że jawnie włączysz funkcję, która tego potrzebuje.

## Cztery kategorie zgody

Otwórz **Ustawienia → Prywatność**. Zobaczysz cztery przełączniki, wszystkie domyślnie wyłączone:

- **Analityka produktu.** Anonimowe dane sesji — liczby wywołań funkcji, długość sesji, czasy wywołań AI. Nigdy treść. ID użytkownika hashowane SHA-256, retencja 180 dni.
- **Funkcje AI.** Konieczne, by używać Socratic, Ghost Map, OCR LaTeX i Fog of War. Wybrany tekst z canvasu jest wysyłany do modeli Google Gemini obsługiwanych przez Google Vertex AI, przetwarzanych w UE (europe-west4 NL / europe-west1 BE). Nigdy cały notatnik.
- **Cloud sync.** Konieczne, by synchronizować canvasy między urządzeniami. Zsynchronizowane dane są szyfrowane w tranzycie (TLS) i w spoczynku na infrastrukturze w UE (Supabase, eu-north-1). Nie jest to szyfrowanie end-to-end: Fluera jako administrator danych ma do nich techniczny dostęp, ale nigdy ich nie sprzedaje ani nie wykorzystuje do reklam.
- **Crash reporting.** Stack trace'y i metadane urządzenia, gdy aplikacja się crashuje. Żadnej treści użytkownika. Przetwarzane przez Sentry z `sendDefaultPii: false`.

Każdy przełącznik jest niezależny. Możesz włączyć Cloud Sync bez Analityki. Możesz używać AI bez Crash Reporting. Uprawnienia są granularne celowo.

## Pamięć poznawcza (na urządzeniu, opt-out)

W odróżnieniu od czterech chmurowych zgód powyżej: domyślnie Fluera indeksuje twoje notatki **tylko na twoim urządzeniu**, aby zasilać automatyczne tytuły, mapę koncepcji (Ghost Map) i powtórki rozłożone w czasie (FSRS). Ten indeks **nigdy nie opuszcza twojego urządzenia** — żadna treść nie jest wysyłana do chmury (w przeciwieństwie do *Funkcji AI* i *Cloud sync*). Możesz go wyłączyć w **Ustawienia → Prywatność → Pamięć poznawcza**: indeksowanie się zatrzymuje, a dane poznawcze już zbudowane na urządzeniu są usuwane natychmiast (twoje notatki pozostają nienaruszone). Podstawa prawna: uzasadniony interes z prawem do sprzeciwu (GDPR Art. 6.1.f / 21) — dlatego jest domyślnie włączona i działa jako opt-out, a nie jako zgoda opt-in jak cztery powyższe.

## Co nigdy nie jest zbierane

- Treść twoich canvasów (szyfrowana w spoczynku przez SQLCipher, AES-256)
- Pytania, które AI zadaje, ani twoje odpowiedzi
- Audio nagrane przez Time Travel (przechowywane lokalnie; opcjonalny sync przesyła je szyfrowane w tranzycie (TLS) i przechowuje na infrastrukturze w UE — nie end-to-end)
- Informacje umożliwiające identyfikację osoby jakiegokolwiek rodzaju bez jawnej zgody

## Jak to zweryfikować

Uruchom aplikację w trybie samolotowym. Rób wszystko poza cloud sync i AI. Obserwuj swój firewall albo monitor sieci. Fluera robi zero requestów sieciowych z czterema przełącznikami zgody wyłączonymi. Jest to weryfikowalne, z założenia.

## Cofanie zgody

Cztery przełączniki są zawsze dostępne w **Ustawienia → Prywatność**. Wyłączenie przełącznika ma efekt natychmiastowy. Powiązane dane backendowe są zaplanowane do usunięcia w ciągu 30 dni.

Dla usunięcia na poziomie konta (pełne prawo do bycia zapomnianym) napisz do [lorenco@fluera.dev](mailto:lorenco@fluera.dev) z adresu twojego konta.

## Konta Education

Jeśli twoja instytucja administruje twoje konto Fluera, powyższe zachowania nadal mają zastosowanie do *twoich* danych. Administrator może zobaczyć zagregowane statystyki użycia do audytów zgodności (przez ślad audytu), ale nie może czytać treści twoich notatników. Lokalna baza danych na twoim urządzeniu jest szyfrowana w spoczynku przez SQLCipher, a klucz pozostaje w twoim keychainie, nie w żadnym systemie admin. Jeśli włączysz Cloud Sync, zsynchronizowane dane nie są szyfrowane end-to-end: są szyfrowane w tranzycie (TLS) i w spoczynku na infrastrukturze w UE, a Fluera jako administrator danych ma do nich techniczny dostęp.

## Następne

- [Setup cloud sync](/pl/docs/cloud-sync)
- [Architektura bezpieczeństwa](/pl/security/architecture) — pełny model
