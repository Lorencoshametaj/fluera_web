---
lang: "fi"
title: "Siveltimet"
description: "Kolmetoista sivellinmoottoria, jokainen kalibroitu eri vetotyypille. Lyhyt opas oikean valitsemiseen — ja miksi sillä on vähemmän väliä kuin luulet."
section: canvas
sectionLabel: "Canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera tulee kolmellatoista sivellinmoottorilla. Jokainen on täydellinen renderöintiputki — paine, kallistus, nopeus, fragment shader per sivellin — ei tekstuurivaihtoa. Kuulostaa paljolta; käytännössä suurin osa oppimisestasi tapahtuu yhdessä tai kahdessa niistä.

## Lyhyt vastaus

- Jos teet muistiinpanoja: **täytekynä** tai **kuulakärkikynä**. Molemmat nopeita, luettavia, anteeksiantavia.
- Jos annoteeraat PDF:ää tai korostat käsitettä: **korostuskynä**.
- Jos piirrät diagrammia siisteillä geometrisillä viivoilla: **tekninen kynä**.
- Jos teet nopean visuaalisen metaforan tai kuvituksen: **lyijykynä** (kevyet vedot) tai **hiili** (dramaattiset vedot).

Kaikki muu on tiettyjä tilanteita varten. Älä mieti liikaa.

## Kolmetoista

| Sivellin            | Hyvä                                              | Huomiot                                          |
|---------------------|---------------------------------------------------|--------------------------------------------------|
| Täytekynä           | Käsinkirjoitus pitkässä muodossa                  | Reagoi kallistukseen, luonnollinen musteen virta |
| Kuulakärkikynä      | Nopeat muistiinpanot, tasainen viiva              | Painearka leveys                                 |
| Lyijykynä           | Pehmeät, anteeksiantavat vedot                    | Rakeinen tekstuuri, paineen gradaatio            |
| Tekninen kynä       | CAD-tyyliset diagrammit, tarkka geometria         | Tarkoituksellisesti nolla painearkuus            |
| Tussi               | Otsikot vinolla kärjellä, korostukset             | Litteät vedot, eloisa väri                       |
| Korostuskynä        | Korostukset peittokuvana (20–30 % peitto)         | Sekoittuu overlay-tilassa                        |
| Hiili               | Ilmaiseva, karkea tekstuuri                       | Tahriintunut efekti, vuotaa reunoilla            |
| Öljy                | Maalauksellisia vetoja, väri kerroksina           | Wet-edge-sekoitus, reunojen tummuminen           |
| Vesiväri            | Pehmeät kerrokset, diffuusio                      | Pigmenttisimulaatio                              |
| Lavaus              | Wet-on-paper-tunne                                | Värin vuotaminen reunoilla                       |
| Suihke              | Hiukkasefektejä, varjoja                          | Vääristymä reunoilla                             |
| Neon                | Hohtavat annotaatiot                              | Ulkoinen hehku, fluoresoiva kylläisyys           |
| Pyyhekumi           | Pikselikohtainen poisto, ei delete-työkalua       | Historia-tietoinen — paljastaa allaolevat merkit |

## Miksi moottorilla on väliä (lyhyesti)

Flueran moottori säilyttää paine-, kallistus- ja nopeussignaalit alle 15 millisekunnin latenssilla iOS:ssä ja macOS:ssä. Tämä ei ole vain tuoteyturhamaisuutta. <a href="/fi/science/authors/van-der-meer">Van der Meerin EEG-työ</a> osoitti, että käsinkirjoitus aktivoi sensomotorisia verkkoja, joita näppäily ei aktivoi, ja näiden signaalien rikkaus skaalaa keräämisen uskollisuuden kanssa.

Käytännössä: canvas, joka kadottaa vetoja, viivästyy paineen alla tai litistää kallistusdataa, heittää pois juuri sen signaalin, joka tekee käsinkirjoitetuista muistiinpanoista kognitiivisesti ylivertaisia. Rakensimme moottorin alusta lähtien, koska mikään valmis ratkaisu ei täyttänyt vaatimusta.

## Siveltimen mukauttaminen

Pidä mitä tahansa työkalupalkin sivellintä painettuna. Pieni paneeli avautuu:

- **Koko** (0,5 pt – 12 pt)
- **Peitto** (10 % – 100 %)
- **Vakautus** (ei mitään / pehmeä / kova) — silottaa värinää tappamatta persoonallisuutta
- **Painekäyrä** — säätää reaktiota kevyeen vs. voimakkaaseen paineeseen

Muutokset ovat canvas-kohtaisia, eivät globaaleja, joten voit pitää yhdessä muistikirjassa pehmeää lyijykynää ja toisessa terävää.

## Eteenpäin

- [Eleet ja zoom](/fi/docs/gestures-zoom)
- [Vienti ja varmuuskopio](/fi/docs/cloud-sync)
