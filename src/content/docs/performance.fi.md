---
lang: "fi"
title: "Suorituskyvyn viritys"
description: "Fluera on rakennettu pitämään 60 FPS canvas-näkymissä, joissa on satoja tuhansia vetoja. Tässä on tarkistuslista, kun näin ei tapahdu."
section: troubleshooting
sectionLabel: "Vianetsintä"
order: 2
updatedAt: 2026-04-20
---

Flueran moottori on suunniteltu pysymään 60 FPS:ssä vedon latenssi alle 15 ms modernilla laitteistolla — jopa satojen tuhansien vetojen muistikirjoissa. Kun näin ei tapahdu, yleensä yksi pienestä joukosta asioita on vastuussa.

## Diagnostiikka

Avaa **Asetukset → Edistynyt → Suorituskyky**. Näet:

- **Nykyinen FPS** — pitäisi pysyä 60:ssa (tai 120:ssa ProMotion-laitteilla)
- **Vedon latenssi** — pitäisi lukea <15 ms iOS/macOS-järjestelmissä, <20 ms muilla alustoilla
- **Käytetty muisti** — absoluuttinen ja prosenttiosuutena laitteen budjetista
- **Tile cache -osumasuhde** — pitäisi olla >90 % normaalin zoomin/panoroinnin aikana

Jos jokin tässä on punainen, todennäköiset syylliset ovat alla olevassa luettelossa.

## Suuret canvas-näkymät (&gt; 200 000 vetoa)

Moottori kestää tämän volyymin, mutta kaksi asetusta on tärkeää:

- **Muistibudjetti.** Laitteilla, joissa on alle 6 GB RAM-muistia, Flueran oletusmuistibudjetti on konservatiivinen. Jos sinulla on paljon RAM-muistia ja haluat nopeampia zoom-vasteita, nosta arvoon *Antelias* kohdasta **Asetukset → Canvas → Muistibudjetti**.
- **Yksityiskohtien taso.** Oletus-LOD-käytäntö yksinkertaistaa vetoja erittäin matalilla zoom-tasoilla. Jos huomaat, että vedot näyttävät tärisevän loitonnettaessa, vaihda LOD-asetukseen *Korkea yksityiskohta* — mutta odota noin 10 % suurempaa GPU-kuormaa.

## Ääneen synkronoitu tallennus (Time Travel)

Time Travel tallentaa äänen vetojen aikaleimojen kanssa. 60 minuutin luennolle se on noin 20 MB ääntä. Hidastusta ei aiheuta ääni — vaan indeksi. Kokeile:

- **Asetukset → Time Travel → Indeksin tarkkuus** asetettuna *Vakio* eikä *Tarkka*
- Poista vanhoja Time Travel -istuntoja, joita et tarvitse (säilytetään oletuksena paikallisesti; clear-cache-painike poistaa ne turvallisesti)

## Apple Pencil erityisesti

iPadissa oletustila *Predicted touch* pitää vedon latenssin alle 8 ms. Jos olet poistanut ennustuksen käytöstä (kohdasta Asetukset → Canvas → Vedon latenssi → Vakio), vaihda takaisin Predictediin. Ennustus on Apple Pencilin API, ei arvaus — se käyttää itse laitteiston liikeradan ennustusta.

## Kun mikään ei auta

Suorita **Asetukset → Edistynyt → Vie diagnostiikka**. Saat pienen JSON-tiedoston FPS-näytteillä, muistinkäytöllä ja (anonyymeilla) laitetiedoilla. Lähetä se osoitteeseen [support@fluera.dev](mailto:support@fluera.dev) lyhyen kuvauksen kanssa siitä, milloin asiat hidastuvat.

Lokitamme noin 95 % käyttäjälle näkyvistä suorituskykyregressioista tiettyyn koodinpätkään tunnin sisällä diagnostiikkaviennin saamisesta. Loput 5 % ovat aidosti vaikeita ja kerromme sen.

## Seuraavaksi

- [FAQ](/fi/docs/faq)
- [Koko käyttäjädokumentaatio](/fi/docs)
