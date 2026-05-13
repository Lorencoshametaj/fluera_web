---
lang: "fi"
title: "Yksityisyys ja AI-suostumus"
description: "Mitä tietoja Fluera kerää, mihin annat suostumuksesi ja miten kytket kaiken pois päältä."
section: settings
sectionLabel: "Asetukset"
order: 1
updatedAt: 2026-04-20
---

Fluera on local-first-työkalu. Oletuksena mikään ei lähde laitteeltasi, ellet eksplisiittisesti aktivoi sitä tarvitsevaa toimintoa.

## Suostumuksen neljä kategoriaa

Avaa **Asetukset → Yksityisyys**. Näet neljä kytkintä, kaikki oletuksena pois päältä:

- **Tuoteanalytiikka.** Anonyymit istuntotiedot — ominaisuuksien kutsumäärät, istunnon kesto, AI-kutsujen kestot. Ei koskaan sisältöä. Käyttäjätunnus SHA-256-hashattu, säilytys 180 päivää.
- **AI-toiminnot.** Tarvitaan Socraticin, Ghost Mapin, LaTeX-OCR:n ja Fog of Warin käyttöön. Canvasista valittu teksti lähetetään Google Geminille palvelinpuolen proxymme kautta. Ei koskaan koko muistikirjaa.
- **Pilvisynkronointi.** Tarvitaan canvas-näkymien synkronointiin laitteiden välillä. Kaikki muistikirjat salataan laitteellasi ennen lataamista. Pilvi säilyttää salakirjoitusta.
- **Kaatumisraportointi.** Stack tracet ja laitteen metatiedot, kun sovellus kaatuu. Ei käyttäjäsisältöä. Käsitellään Sentryllä asetuksella `sendDefaultPii: false`.

Jokainen kytkin on itsenäinen. Voit aktivoida pilvisynkronoinnin ilman analytiikkaa. Voit käyttää AI:ta ilman kaatumisraportointia. Oikeudet ovat tarkoituksella granulaarisia.

## Mitä ei koskaan kerätä

- Canvas-näkymiesi sisältöä (salattu levossa SQLCipherillä, AES-256)
- Kysymyksiä, joita AI esittää, tai vastauksiasi
- Ääntä, jota tallennat Time Travelilla (säilytetään paikallisesti; opt-in-synkronointi salaa ennen lataamista)
- Henkilökohtaisesti tunnistettavia tietoja missään muodossa ilman eksplisiittistä suostumusta

## Miten varmistat

Aja sovellus lentokonetilassa. Tee kaikkea paitsi pilvisynkronointia ja AI:ta. Tarkkaile palomuuriasi tai verkkomonitoria. Fluera tekee nolla verkkopyyntöä, kun kaikki neljä suostumuskytkintä ovat pois päältä. Se on todennettavissa, suunnittelun mukaan.

## Suostumuksen peruuttaminen

Neljä kytkintä ovat aina saatavilla kohdassa **Asetukset → Yksityisyys**. Kytkimen pois päältä laittaminen tulee voimaan välittömästi. Liittyvät backend-tiedot aikataulutetaan poistettavaksi 30 päivän kuluessa.

Tilitason poistoa varten (täysi oikeus tulla unohdetuksi) kirjoita osoitteeseen [privacy@fluera.dev](mailto:privacy@fluera.dev) tilisi osoitteesta.

## Education-tilit

Jos instituutiosi hallinnoi Fluera-tiliäsi, yllä olevat käyttäytymiset pätevät edelleen *sinun* tietoihisi. Ylläpitäjä voi nähdä koostettuja käyttötilastoja vaatimustenmukaisuusauditointia varten (audit trailin kautta), mutta ei pysty lukemaan muistikirjojesi sisältöä. Salaus toteutetaan laitteellasi; avain on keychainissasi, ei missään ylläpitojärjestelmässä.

## Seuraavaksi

- [Pilvisynkronoinnin asetukset](/fi/docs/cloud-sync)
- [Tietoturva-arkkitehtuuri](/fi/security/architecture) — täysi malli
