---
lang: "da"
title: "Tuning af ydeevne"
description: "Fluera er bygget til at holde 60 FPS på canvasser med hundredtusindvis af streger. Her er, hvad du skal tjekke, når det ikke sker."
section: troubleshooting
sectionLabel: "Fejlfinding"
order: 2
updatedAt: 2026-04-20
---

Fluera-motoren er designet til at holde 60 FPS med streg-latens under 15 ms på moderne hardware — op til hundredtusindvis af streger pr. notesbog. Når den ikke gør det, er det som regel et af et lille sæt forhold, der er ansvarligt.

## Diagnose

Åbn **Indstillinger → Avanceret → Ydeevne**. Du vil se:

- **Aktuel FPS** — bør forblive på 60 (eller 120 på ProMotion-enheder)
- **Streg-latens** — bør læse <15 ms på iOS/macOS, <20 ms på andre platforme
- **Hukommelsesforbrug** — absolut og som procent af enhedens budget
- **Hit rate for tile cache** — bør være >90 % under normal zoom/pan

Hvis noget her er rødt, ligger de sandsynlige skyldige på listen nedenfor.

## Store canvasser (&gt; 200k streger)

Motoren kan klare det volumen, men to indstillinger betyder noget:

- **Hukommelsesbudget.** På enheder med mindre end 6 GB RAM er Flueras standard-hukommelsesbudget konservativt. Hvis du har masser af RAM og vil have hurtigere zoom-respons, så hæv det til *Generøst* i **Indstillinger → Canvas → Hukommelsesbudget**.
- **Detaljeniveau.** Standard-LOD-politikken forenkler streger på meget lave zoom-niveauer. Hvis du bemærker streger med rystende udseende, når der er zoomet ud, så skift LOD til *Høj detalje* — men forvent ~10 % mere GPU-belastning.

## Lyd-synkroniseret optagelse (Time Travel)

Time Travel gemmer lyd sammen med streg-tidsstempler. For en 60 minutters forelæsning er det omkring 20 MB lyd. Det er ikke lyden, der gør tingene langsomme — det er indekset. Prøv:

- **Indstillinger → Time Travel → Indeks-granularitet** sat til *Standard* i stedet for *Fin*
- Slet gamle Time Travel-sessioner, du ikke har brug for (de gemmes lokalt som standard; clear-cache-knappen fjerner dem sikkert)

## Specifikt for Apple Pencil

På iPad holder standard-tilstanden *Predicted touch* streg-latensen under 8 ms. Hvis du har deaktiveret prædiktion (i Indstillinger → Canvas → Streg-latens → Standard), så skift tilbage til Predicted. Prædiktion er en Apple Pencil-API, ikke et gæt — den bruger hardwarens egen banepræstation.

## Når intet hjælper

Kør **Indstillinger → Avanceret → Eksportér diagnostik**. Du får en lille JSON-fil med samples af FPS, hukommelsesforbrug og (anonyme) enhedsoplysninger. Send den til [support@fluera.dev](mailto:support@fluera.dev) med en kort beskrivelse af, hvornår tingene bliver langsomme.

Vi sporer ≈95 % af bruger-synlige ydelsesregressioner til et specifikt stykke kode inden for en time efter modtagelsen af et diagnostik-eksport. De resterende 5 % er ægte svære, og vi siger det til dig.

## Næste

- [FAQ](/da/docs/faq)
- [Hele brugerdokumentationen](/da/docs)
