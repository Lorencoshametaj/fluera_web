---
lang: "fi"
title: "Suorituskyvyn viritys"
description: "Fluera tähtää 60 FPS:ään ja matalan viiveen musteeseen tuetulla laitteistolla. Todellinen suorituskyky vaihtelee laitteen, canvasin monimutkaisuuden ja aktiivisten ominaisuuksien mukaan."
section: troubleshooting
sectionLabel: "Vianetsintä"
order: 2
updatedAt: 2026-04-20
---

Flueran moottori tähtää 60 FPS:ään ja matalan viiveen musteeseen tuetulla laitteistolla. Todellinen suorituskyky vaihtelee laitteen, syötepinon, canvasin monimutkaisuuden ja aktiivisten ominaisuuksien mukaan.

## Diagnostiikka

Avaa **Asetukset → Edistynyt → Suorituskyky**. Näet:

- **Nykyinen FPS** — pitäisi pysyä 60:ssa (tai 120:ssa ProMotion-laitteilla)
- **Vedon latenssi** — vertaa mittausta laitteellesi ja syötepinollesi dokumentoituun tavoitteeseen; yleispätevää raja-arvoa ei ole
- **Käytetty muisti** — absoluuttinen ja prosenttiosuutena laitteen budjetista
- **Tile cache -osumasuhde** — pitäisi olla >90 % normaalin zoomin/panoroinnin aikana

Jos jokin tässä on punainen, todennäköiset syylliset ovat alla olevassa luettelossa.

## Suuret canvas-näkymät

Suuret canvas-näkymät voivat vaatia viritystä. Aloita näistä kahdesta asetuksesta:

- **Muistibudjetti.** Laitteilla, joissa on alle 6 GB RAM-muistia, Flueran oletusmuistibudjetti on konservatiivinen. Jos sinulla on paljon RAM-muistia ja haluat nopeampia zoom-vasteita, nosta arvoon *Antelias* kohdasta **Asetukset → Canvas → Muistibudjetti**.
- **Yksityiskohtien taso.** Oletus-LOD-käytäntö yksinkertaistaa vetoja erittäin matalilla zoom-tasoilla. Jos huomaat, että vedot näyttävät tärisevän loitonnettaessa, vaihda LOD-asetukseen *Korkea yksityiskohta* — mutta odota noin 10 % suurempaa GPU-kuormaa.

## Ääneen synkronoitu tallennus (Time Travel)

Time Travel tallentaa äänen vetojen aikaleimojen kanssa. 60 minuutin luennolle se on noin 20 MB ääntä. Hidastusta ei aiheuta ääni — vaan indeksi. Kokeile:

- **Asetukset → Time Travel → Indeksin tarkkuus** asetettuna *Vakio* eikä *Tarkka*
- Poista vanhoja Time Travel -istuntoja, joita et tarvitse (säilytetään oletuksena paikallisesti; clear-cache-painike poistaa ne turvallisesti)

## Apple Pencil erityisesti

iPadissa oletustila *Predicted touch* on suunniteltu vähentämään vedon koettua viivettä. Tulos vaihtelee iPadin, Pencilin, järjestelmäversion ja canvasin kuormituksen mukaan. Jos olet poistanut ennustuksen käytöstä (kohdasta Asetukset → Canvas → Vedon latenssi → Vakio), vaihda takaisin Predictediin. Ennustus on Apple Pencilin API, ei arvaus — se käyttää itse laitteiston liikeradan ennustusta.

## Kun mikään ei auta

Suorita **Asetukset → Edistynyt → Vie diagnostiikka**. Saat pienen JSON-tiedoston FPS-näytteillä, muistinkäytöllä ja (anonyymeilla) laitetiedoilla. Lähetä se osoitteeseen [support@fluera.dev](mailto:support@fluera.dev) lyhyen kuvauksen kanssa siitä, milloin asiat hidastuvat.

Diagnostiikkatiedot auttavat tukea tutkimaan suorituskykyongelmia. Tutkinnan kesto ja tulokset vaihtelevat ongelman ja saatavilla olevien tietojen mukaan.

## Seuraavaksi

- [FAQ](/fi/docs/faq)
- [Koko käyttäjädokumentaatio](/fi/docs)
