---
lang: "no"
title: "Ytelses-tuning"
description: "Fluera sikter mot 60 FPS og blekk med lav latens på støttet maskinvare. Faktisk ytelse varierer med enhet, canvas-kompleksitet og aktive funksjoner."
section: troubleshooting
sectionLabel: "Feilsøking"
order: 2
updatedAt: 2026-04-20
---

Fluera-motoren sikter mot 60 FPS og blekk med lav latens på støttet maskinvare. Faktisk ytelse varierer med enhet, input-stack, canvas-kompleksitet og aktive funksjoner.

## Diagnostikk

Åpne **Innstillinger → Avansert → Ytelse**. Du ser:

- **Nåværende FPS** — bør holde seg på 60 (eller 120 på ProMotion-enheter)
- **Strek-latens** — sammenlign målingen med det dokumenterte målet for enheten og input-stacken din; det finnes ingen universell grenseverdi
- **Brukt minne** — absolutt og som prosent av enhetens budsjett
- **Tile cache hit rate** — bør være >90 % under normal zoom/pan

Hvis noe her er rødt, er de sannsynlige skyldige i listen under.

## Store canvas

Store canvas kan kreve justering. Start med disse to innstillingene:

- **Minnebudsjett.** På enheter med under 6 GB RAM er Flueras standard minnebudsjett konservativt. Hvis du har mye RAM og vil ha raskere zoom-respons, sett det til *Sjenerøs* i **Innstillinger → Canvas → Minnebudsjett**.
- **Detaljnivå.** Standard LOD-policy forenkler streker på svært lave zoom-nivåer. Hvis du legger merke til at streker ser hakkete ut når du er zoomet ut, sett LOD til *Høy detalj* — men forvent omtrent 10 % mer GPU-belastning.

## Lyd-synkronisert opptak (Time Travel)

Time Travel lagrer lyd sammen med strek-tidsstempler. For en 60-minutters forelesning er det rundt 20 MB lyd. Det er ikke lyden som gjør ting tregt — det er indeksen. Prøv:

- **Innstillinger → Time Travel → Indeks-granularitet** satt til *Standard* i stedet for *Fin*
- Slett gamle Time Travel-økter du ikke trenger (de lagres lokalt som standard; clear-cache-knappen fjerner dem trygt)

## Apple Pencil spesifikt

På iPad er standardmodusen *Predicted touch* laget for å redusere opplevd strek-latens. Resultatet varierer med iPad, Pencil, systemversjon og canvas-belastning. Hvis du har deaktivert prediksjonen (i Innstillinger → Canvas → Strek-latens → Standard), sett den tilbake til Predicted. Prediksjon er en Apple Pencil-API, ikke en gjetning — den bruker maskinvarens egen baneprediksjon.

## Når ingenting hjelper

Kjør **Innstillinger → Avansert → Eksporter diagnostikk**. Du får en liten JSON-fil med FPS-prøver, minnebruk og (anonyme) enhetsdata. Send den til [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivelse av når ting blir tregt.

Diagnostikkdata hjelper support med å undersøke ytelsesproblemer. Varigheten og utfallet av undersøkelsen avhenger av problemet og tilgjengelige data.

## Neste

- [FAQ](/no/docs/faq)
- [All brukerdokumentasjon](/no/docs)
