---
lang: "no"
title: "Ytelses-tuning"
description: "Fluera er bygget for å holde 60 FPS på canvas med hundretusener av streker. Her er hva du sjekker når det ikke skjer."
section: troubleshooting
sectionLabel: "Feilsøking"
order: 2
updatedAt: 2026-04-20
---

Fluera-motoren er designet for å holde 60 FPS med strek-latens under 15 ms på moderne maskinvare — opp til hundretusener av streker per notatbok. Når den ikke gjør det, er det vanligvis én av et lite sett av ting som er ansvarlig.

## Diagnostikk

Åpne **Innstillinger → Avansert → Ytelse**. Du ser:

- **Nåværende FPS** — bør holde seg på 60 (eller 120 på ProMotion-enheter)
- **Strek-latens** — bør være <15 ms på iOS/macOS, <20 ms på andre plattformer
- **Brukt minne** — absolutt og som prosent av enhetens budsjett
- **Tile cache hit rate** — bør være >90 % under normal zoom/pan

Hvis noe her er rødt, er de sannsynlige skyldige i listen under.

## Store canvas (&gt; 200k streker)

Motoren tåler det volumet, men to innstillinger betyr noe:

- **Minnebudsjett.** På enheter med under 6 GB RAM er Flueras standard minnebudsjett konservativt. Hvis du har mye RAM og vil ha raskere zoom-respons, sett det til *Sjenerøs* i **Innstillinger → Canvas → Minnebudsjett**.
- **Detaljnivå.** Standard LOD-policy forenkler streker på svært lave zoom-nivåer. Hvis du legger merke til at streker ser hakkete ut når du er zoomet ut, sett LOD til *Høy detalj* — men forvent omtrent 10 % mer GPU-belastning.

## Lyd-synkronisert opptak (Time Travel)

Time Travel lagrer lyd sammen med strek-tidsstempler. For en 60-minutters forelesning er det rundt 20 MB lyd. Det er ikke lyden som gjør ting tregt — det er indeksen. Prøv:

- **Innstillinger → Time Travel → Indeks-granularitet** satt til *Standard* i stedet for *Fin*
- Slett gamle Time Travel-økter du ikke trenger (de lagres lokalt som standard; clear-cache-knappen fjerner dem trygt)

## Apple Pencil spesifikt

På iPad holder standardmodus *Predicted touch* strek-latensen under 8 ms. Hvis du har deaktivert prediksjonen (i Innstillinger → Canvas → Strek-latens → Standard), sett den tilbake til Predicted. Prediksjon er en Apple Pencil-API, ikke en gjetning — den bruker maskinvarens egen baneprediksjon.

## Når ingenting hjelper

Kjør **Innstillinger → Avansert → Eksporter diagnostikk**. Du får en liten JSON-fil med FPS-prøver, minnebruk og (anonyme) enhetsdata. Send den til [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivelse av når ting blir tregt.

Vi sporer omtrent 95 % av brukersynlige ytelses-regresjoner til en spesifikk del av koden innen en time etter å ha mottatt en diagnostikk-eksport. De resterende 5 % er genuint vanskelige, og det skal vi si fra om.

## Neste

- [FAQ](/no/docs/faq)
- [All brukerdokumentasjon](/no/docs)
