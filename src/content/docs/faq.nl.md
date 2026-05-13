---
lang: "nl"
title: "FAQ"
description: "De vragen die we het vaakst van beta testers krijgen. Klopt iets hier niet meer, mail support en we passen het aan."
section: troubleshooting
sectionLabel: "Probleemoplossing"
order: 1
updatedAt: 2026-04-20
---

## Waarom is mijn canvas traag om te openen nadat ik het een week niet heb gebruikt?

De eerste keer dat Fluera een notitieboek laadt na een pauze, bouwt hij de ruimtelijke index opnieuw op en herwaardeert welke knopen aan review toe zijn. Volgende openingen zijn snel. Was de pauze meer dan een maand, verwacht dan ook dat de spaced-repetition-scheduler je openstaande reviews opnieuw kalibreert.

Duurt het eerste openen meer dan 10 seconden op een modern apparaat, dan is dat een bug — schrijf naar [support@fluera.dev](mailto:support@fluera.dev) met de naam van het canvas en de geschatte hoeveelheid knopen.

## Kan ik mijn Anki-decks importeren?

Nog niet. Import staat op de roadmap maar is geen blocker voor fase 1 — het ophalemodel van Fluera is structureel anders (ruimtelijk, niet atomair), dus een directe import zou het grootste deel van de waarde missen. Wanneer hij komt, is hij beschikbaar voor Pro- en Education-accounts.

## Kan ik mijn canvasses exporteren naar PNG / SVG / PDF?

Ja, allemaal, plus ons open `.fluera`-formaat. Zie het menu **Exporteren**. Geen tierbeperkingen — exporteren is een basisfunctie voor data-eigendom, geen betaalde feature.

## De AI gaf me een fout antwoord. Is dat te verwachten?

Soms wel. Onze AI is Google Gemini, en Gemini kan — zoals elke LLM — hallucineren. Socratic Mode is daar minder gevoelig voor omdat ze vragen stelt in plaats van definitieve antwoorden produceert, maar het is niet nul.

Krijg je een duidelijk fout AI-antwoord, tik dan op **Markeren** in het antwoord. Die feedback wordt gebruikt om de prompting te verbeteren; ze wordt geanonimiseerd en nooit aan je inhoud gekoppeld.

## Werkt Fluera zonder internet?

Het canvas — schrijven, lezen, exporteren — werkt volledig offline. De AI-functies (Socratic, Ghost Map, Fog of War-scoring) hebben internet nodig. De spaced-repetition-scheduling is lokaal; alleen sync en AI hebben verbinding nodig.

## Ik ben in Nederland. En de AVG?

Volledig conform. Fluera wordt in de EU gehost en is AVG-native, wat de vereisten dekt. Je kunt je rechten (inzage, rectificatie, verwijdering, dataportabiliteit) uitoefenen via **Instellingen → Privacy** of door te mailen naar [privacy@fluera.dev](mailto:privacy@fluera.dev). Reactie binnen 30 dagen; meestal binnen 48 uur.

## De Pencil hapert op mijn iPad. Wat is er aan de hand?

Controleer eerst dat Fluera up-to-date is. Daarna: **Instellingen → Canvas → Streek-latentie** moet *Predicted (aanbevolen)* aangeven voor Apple Pencil-apparaten. Staat er *Standaard* of *Low-power*, zet het terug op Predicted.

Blijft de lag bestaan met Predicted aan, sluit de app en open hem opnieuw. Blijft het dan nog, mail ons met het model van je iPad — er is een regressie op de iPad Air 3 die we actief onderzoeken.

## Hoe meld ik een bug?

[support@fluera.dev](mailto:support@fluera.dev). Beschrijf wat je deed, wat je verwachtte, wat er gebeurde, en voeg de app-versie toe (Instellingen → Over). Screenshots helpen.

Voor beveiligingsproblemen, gebruik [security@fluera.dev](mailto:security@fluera.dev) en versleutel met onze PGP-sleutel (op ons GitHub-profiel).

## Hoe geef ik feedback over de pedagogie?

We lezen elke mail. [hello@fluera.dev](mailto:hello@fluera.dev) komt rechtstreeks bij de oprichters terecht. Vooral nuttig: wat *niet* voor je werkte, wat aanvoelde als wrijving die niet wenselijk was, en alles wat je verraste.

## Verder

- [Performance-tuning](/nl/docs/performance) — het maximale uit grote canvasses halen
- [Alle gebruikersdocumentatie](/nl/docs)
