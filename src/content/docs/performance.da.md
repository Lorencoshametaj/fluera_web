---
lang: "da"
title: "Tuning af ydeevne"
description: "Fluera sigter mod 60 FPS og blæk med lav latenstid på understøttet hardware. Den faktiske ydeevne varierer med enhed, canvas-kompleksitet og aktive funktioner."
section: troubleshooting
sectionLabel: "Fejlfinding"
order: 2
updatedAt: 2026-04-20
---

Fluera-motoren sigter mod 60 FPS og blæk med lav latenstid på understøttet hardware. Den faktiske ydeevne varierer med enhed, input-stack, canvas-kompleksitet og aktive funktioner.

## Diagnose

Åbn **Indstillinger → Avanceret → Ydeevne**. Du vil se:

- **Aktuel FPS** — bør forblive på 60 (eller 120 på ProMotion-enheder)
- **Streg-latens** — sammenlign målingen med det dokumenterede mål for din enhed og input-stack; der findes ingen universel grænseværdi
- **Hukommelsesforbrug** — absolut og som procent af enhedens budget
- **Hit rate for tile cache** — bør være >90 % under normal zoom/pan

Hvis noget her er rødt, ligger de sandsynlige skyldige på listen nedenfor.

## Store canvasser

Store canvasser kan kræve tuning. Start med disse to indstillinger:

- **Hukommelsesbudget.** På enheder med mindre end 6 GB RAM er Flueras standard-hukommelsesbudget konservativt. Hvis du har masser af RAM og vil have hurtigere zoom-respons, så hæv det til *Generøst* i **Indstillinger → Canvas → Hukommelsesbudget**.
- **Detaljeniveau.** Standard-LOD-politikken forenkler streger på meget lave zoom-niveauer. Hvis du bemærker streger med rystende udseende, når der er zoomet ud, så skift LOD til *Høj detalje* — men forvent ~10 % mere GPU-belastning.

## Lyd-synkroniseret optagelse (Time Travel)

Time Travel gemmer lyd sammen med streg-tidsstempler. For en 60 minutters forelæsning er det omkring 20 MB lyd. Det er ikke lyden, der gør tingene langsomme — det er indekset. Prøv:

- **Indstillinger → Time Travel → Indeks-granularitet** sat til *Standard* i stedet for *Fin*
- Slet gamle Time Travel-sessioner, du ikke har brug for (de gemmes lokalt som standard; clear-cache-knappen fjerner dem sikkert)

## Specifikt for Apple Pencil

På iPad er standardtilstanden *Predicted touch* designet til at reducere den oplevede streg-latens. Resultatet varierer med iPad, Pencil, systemversion og canvas-belastning. Hvis du har deaktiveret prædiktion (i Indstillinger → Canvas → Streg-latens → Standard), så skift tilbage til Predicted. Prædiktion er en Apple Pencil-API, ikke et gæt — den bruger hardwarens egen banepræstation.

## Når intet hjælper

Kør **Indstillinger → Avanceret → Eksportér diagnostik**. Du får en lille JSON-fil med samples af FPS, hukommelsesforbrug og (anonyme) enhedsoplysninger. Send den til [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivelse af, hvornår tingene bliver langsomme.

Diagnostik hjælper support med at undersøge ydelsesproblemer. Undersøgelsens varighed og resultat afhænger af problemet og de tilgængelige data.

## Næste

- [FAQ](/da/docs/faq)
- [Hele brugerdokumentationen](/da/docs)
