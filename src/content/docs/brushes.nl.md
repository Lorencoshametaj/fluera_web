---
lang: "nl"
title: "Kwasten"
description: "Dertien brush engines, elk gekalibreerd voor een ander type streek. Een korte gids om de juiste te kiezen — en waarom het er minder toe doet dan je denkt."
section: canvas
sectionLabel: "Het canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera komt met dertien brush engines. Elk is een complete rendering-pipeline — druk, tilt, snelheid, fragment shaders per kwast — geen textuurwissel. Het lijkt veel; in de praktijk zal het grootste deel van je leren in een of twee ervan plaatsvinden.

## Het korte antwoord

- Maak je aantekeningen: **vulpen** of **balpen**. Beide snel, leesbaar, vergevingsgezind.
- Annoteer je een pdf of accentueer je een concept: **markeerstift**.
- Teken je een diagram met schone geometrische lijnen: **technische pen**.
- Maak je een snelle visuele metafoor of illustratie: **potlood** (lichte streken) of **houtskool** (dramatische streken).

Al het andere is voor specifieke situaties. Denk er niet te veel over na.

## De dertien

| Kwast              | Goed voor                                          | Notities                                       |
|--------------------|----------------------------------------------------|------------------------------------------------|
| Vulpen             | Handschrift in lange vorm                          | Reageert op tilt, natuurlijke inktstroming     |
| Balpen             | Snelle aantekeningen, gelijkmatige lijn            | Drukgevoelige breedte                          |
| Potlood            | Zachte, vergevingsgezinde streken                  | Korrelige textuur, drukafhankelijke gradatie   |
| Technische pen     | CAD-achtige diagrammen, precieze geometrie         | Bewust nul drukgevoeligheid                    |
| Marker             | Titels met afgeschuinde punt, accenten             | Vlakke streken, levendige kleur                |
| Markeerstift       | Overlay-accenten (20–30% dekking)                  | Mixt in overlay-modus                          |
| Houtskool          | Expressief, ruige textuur                          | Smeereffect, vloeit aan de randen              |
| Olieverf           | Schilderachtige streken, kleur in lagen            | Wet-edge blending, verdonkering aan de randen  |
| Aquarel            | Zachte lagen, diffusie                             | Pigmentsimulatie                               |
| Wassing            | Wet-on-paper-gevoel                                | Kleurbloei aan de randen                       |
| Spray              | Deeltjeseffecten, schaduwen                        | Distortie aan de randen                        |
| Neon               | Lichtgevende annotaties                            | Externe gloed, fluorescerende verzadiging      |
| Gum                | Pixel-voor-pixel verwijdering, geen delete-tool    | Geschiedenisbewust — onthult onderliggende sporen |

## Waarom de engine ertoe doet (kort)

De engine van Fluera behoudt druk-, tilt- en snelheidssignalen met een latentie onder de 15 milliseconden op iOS en macOS. Het is geen productkapsones. <a href="/nl/science/authors/van-der-meer">Het EEG-werk van van der Meer</a> toonde dat handschrift sensorimotorische netwerken inschakelt die typen niet aanroert, en de rijkdom van die signalen schaalt met de getrouwheid van de opname.

In praktische termen: een canvas dat streken kwijtraakt, onder druk vertraagt of tilt-data afvlakt, gooit precies het signaal weg dat handgeschreven aantekeningen cognitief superieur maakt. We hebben de engine vanaf nul gebouwd omdat geen enkele off-the-shelf optie aan de standaard voldeed.

## Een kwast aanpassen

Houd een kwast in de toolbar ingedrukt. Een klein paneel opent met:

- **Grootte** (0,5pt – 12pt)
- **Dekking** (10% – 100%)
- **Stabilisatie** (geen / zacht / stevig) — strijkt jitter glad zonder de persoonlijkheid te doden
- **Drukcurve** — past de respons aan op lichte versus stevige druk

De wijzigingen zijn per canvas, niet globaal, zodat je in het ene notitieboek een zacht potlood en in het andere een scherp kunt hebben.

## Verder

- [Gebaren en zoom](/nl/docs/gestures-zoom)
- [Export en back-up](/nl/docs/cloud-sync)
