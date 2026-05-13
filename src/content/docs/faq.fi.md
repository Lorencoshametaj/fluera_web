---
lang: "fi"
title: "FAQ"
description: "Useimmin beta-testaajilta saadut kysymykset. Jos jokin on vanhentunut, kirjoita tukeen ja korjaamme."
section: troubleshooting
sectionLabel: "Vianetsintä"
order: 1
updatedAt: 2026-04-20
---

## Miksi canvas-näkymäni avautuu hitaasti, kun en ole käyttänyt sitä viikkoon?

Kun Fluera lataa muistikirjan ensimmäistä kertaa tauon jälkeen, se rakentaa uudelleen avaruusindeksin ja arvioi uudelleen, mitkä noodit ovat erääntymässä kertaukseen. Seuraavat avaukset ovat nopeita. Jos tauko on ollut yli kuukauden, odota myös jaksottaisen kertauksen aikatauluttajan kalibroivan uudelleen erääntyvät kertauksesi.

Jos ensimmäinen avaus kestää yli 10 sekuntia modernilla laitteella, se on bugi — kirjoita osoitteeseen [support@fluera.dev](mailto:support@fluera.dev) canvas-näkymän nimen ja noodien likimääräisen lukumäärän kanssa.

## Voinko tuoda Anki-pakkani?

En vielä. Tuonti on tiekartalla, mutta ei estä Phase 1 -julkaisua — Flueran palauttamismalli on rakenteellisesti erilainen (avaruudellinen, ei atominen), joten suora tuonti menettäisi suuren osan arvosta. Kun se tulee, se on saatavilla Pro- ja Education-tileille.

## Voinko viedä canvas-näkymäni PNG-, SVG- tai PDF-muotoon?

Kyllä, kaikkia näitä, sekä avoimen `.fluera`-formaattimme. Katso **Vie**-valikko. Ei tier-rajoituksia — vienti on perustavanlaatuinen tietojen omistuksen toiminto, ei maksumuurin takana.

## AI antoi minulle väärän vastauksen. Onko tämä odotettua?

Joskus, kyllä. AI:mme on Google Gemini, ja Gemini — kuten kaikki LLM:t — voi hallusinoida. Socratic Mode on vähemmän altis tälle, koska se kysyy kysymyksiä lopullisten vastausten tuottamisen sijaan, mutta ei ole nolla.

Jos saat AI:lta selvästi väärän vastauksen, napauta vastauksessa **Ilmoita**. Tätä palautetta käytetään prompttauksen parantamiseen; se anonymisoidaan eikä koskaan linkitetä sisältöösi.

## Toimiiko Fluera ilman internetiä?

Canvas — kirjoittaminen, lukeminen, vienti — toimii täysin offline. AI-toiminnot (Socratic, Ghost Map, Fog of War -arviointi) tarvitsevat internetin. Jaksottaisen kertauksen aikataulutus on paikallinen; vain synkronointi ja AI tarvitsevat yhteyden.

## Olen Suomessa. Entä GDPR?

Täysin yhteensopiva. Fluera on isännöity EU:ssa ja GDPR-natiivi. Voit käyttää oikeuksiasi (pääsy, oikaisu, poisto, siirrettävyys) kohdasta **Asetukset → Yksityisyys** tai kirjoittamalla osoitteeseen [privacy@fluera.dev](mailto:privacy@fluera.dev). Vastaus 30 päivän kuluessa; yleensä 48 tunnissa.

## Pencil takkuilee iPadillani. Mikä on vialla?

Tarkista ensin, että Fluera on päivitetty. Sitten: **Asetukset → Canvas → Vedon latenssi** pitäisi lukea *Predicted (suositeltu)* Apple Pencil -laitteille. Jos siinä lukee *Vakio* tai *Low-power*, vaihda takaisin Predictediin.

Jos viive jatkuu Predicted päällä, sulje ja käynnistä uudelleen. Jos se silti jatkuu, kirjoita meille iPad-mallisi kanssa — iPad Air 3:ssa on regressio, jota seuraamme aktiivisesti.

## Miten ilmoitan bugista?

[support@fluera.dev](mailto:support@fluera.dev). Kuvaile, mitä olit tekemässä, mitä odotit, mitä tapahtui, ja sisällytä sovelluksen versio (Asetukset → Tietoja). Kuvakaappaukset auttavat.

Tietoturvahaavoittuvuuksia varten käytä [security@fluera.dev](mailto:security@fluera.dev) ja salaa PGP-avaimellamme (GitHub-profiilissamme).

## Miten annan palautetta pedagogiikasta?

Luemme jokaisen sähköpostin. [hello@fluera.dev](mailto:hello@fluera.dev) menee suoraan perustajille. Erityisen hyödyllistä: mikä *ei* toiminut sinulle, mikä tuntui ei-toivotulta kitkalta ja mikä tahansa, mikä yllätti.

## Seuraavaksi

- [Suorituskyvyn viritys](/fi/docs/performance) — saa enemmän irti suurista canvas-näkymistä
- [Koko käyttäjädokumentaatio](/fi/docs)
