---
lang: "fi"
title: "Yksityisyys ja AI-suostumus"
description: "Mitä tietoja Fluera kerää, mihin annat suostumuksesi ja miten kytket kaiken pois päältä."
section: settings
sectionLabel: "Asetukset"
order: 1
updatedAt: 2026-06-29
---

Fluera on local-first-työkalu. Oletuksena mikään ei lähde laitteeltasi, ellet eksplisiittisesti aktivoi sitä tarvitsevaa toimintoa.

## Suostumuksen neljä kategoriaa

Avaa **Asetukset → Yksityisyys**. Näet neljä kytkintä, kaikki oletuksena pois päältä:

- **Tuoteanalytiikka.** Anonyymit istuntotiedot — ominaisuuksien kutsumäärät, istunnon kesto, AI-kutsujen kestot. Ei koskaan sisältöä. Käyttäjätunnus SHA-256-hashattu, säilytys 180 päivää.
- **AI-toiminnot.** Tarvitaan Socraticin, Ghost Mapin, LaTeX-OCR:n ja Fog of Warin käyttöön. Canvasista valittu teksti lähetetään Google Geminille palvelinpuolen proxymme kautta. Ei koskaan koko muistikirjaa.
- **Pilvisynkronointi.** Tarvitaan canvas-näkymien synkronointiin laitteiden välillä. Synkronoitu data salataan siirrossa (TLS) ja levossa EU-infrastruktuurissa (Supabase, eu-north-1). Synkronointi ei ole päästä päähän -salattua: rekisterinpitäjänä Fluera voi teknisesti käyttää synkronoitua sisältöä, mutta emme koskaan myy sitä, käytä sitä mainontaan tai mallien kouluttamiseen.
- **Kaatumisraportointi.** Stack tracet ja laitteen metatiedot, kun sovellus kaatuu. Ei käyttäjäsisältöä. Käsitellään Sentryllä asetuksella `sendDefaultPii: false`.

Jokainen kytkin on itsenäinen. Voit aktivoida pilvisynkronoinnin ilman analytiikkaa. Voit käyttää AI:ta ilman kaatumisraportointia. Oikeudet ovat tarkoituksella granulaarisia.

## Kognitiivinen muisti (laitteella, opt-out)

Erillinen yllä olevista neljästä pilvisuostumuksesta: oletuksena Fluera indeksoi muistiinpanojasi **vain laitteellasi** tuottaakseen automaattiset otsikot, käsitekartan (Ghost Map) ja kertausvälitykset (FSRS). Tämä indeksi **ei koskaan poistu laitteeltasi** — mitään sisältöä ei lähetetä pilveen (toisin kuin *AI-toiminnot* ja *Pilvisynkronointi*). Voit kytkeä sen pois päältä kohdassa **Asetukset → Yksityisyys → Kognitiivinen muisti**: indeksointi pysähtyy ja laitteelle jo rakennetut kognitiiviset tiedot poistetaan välittömästi (muistiinpanosi pysyvät koskemattomina). Oikeusperuste: oikeutettu etu vastustamisoikeuden kanssa (GDPR Art. 6.1.f / 21) — siksi se on oletuksena päällä ja opt-out, ei opt-in-suostumus kuten yllä olevat neljä.

## Mitä ei koskaan kerätä

- Canvas-näkymiesi sisältöä (salattu levossa SQLCipherillä, AES-256)
- Kysymyksiä, joita AI esittää, tai vastauksiasi
- Ääntä, jota tallennat Time Travelilla (säilytetään paikallisesti; opt-in-synkronointi salaa sen siirrossa TLS:llä ja levossa EU-infrastruktuurissa, ei päästä päähän)
- Henkilökohtaisesti tunnistettavia tietoja missään muodossa ilman eksplisiittistä suostumusta

## Miten varmistat

Aja sovellus lentokonetilassa. Tee kaikkea paitsi pilvisynkronointia ja AI:ta. Tarkkaile palomuuriasi tai verkkomonitoria. Fluera tekee nolla verkkopyyntöä, kun kaikki neljä suostumuskytkintä ovat pois päältä. Se on todennettavissa, suunnittelun mukaan.

## Suostumuksen peruuttaminen

Neljä kytkintä ovat aina saatavilla kohdassa **Asetukset → Yksityisyys**. Kytkimen pois päältä laittaminen tulee voimaan välittömästi. Liittyvät backend-tiedot aikataulutetaan poistettavaksi 30 päivän kuluessa.

Tilitason poistoa varten (täysi oikeus tulla unohdetuksi) kirjoita osoitteeseen [lorenco@fluera.dev](mailto:lorenco@fluera.dev) tilisi osoitteesta.

## Education-tilit

Jos instituutiosi hallinnoi Fluera-tiliäsi, yllä olevat käytännöt pätevät edelleen *sinun* dataasi. Ylläpitäjä voi nähdä koostettuja käyttötilastoja vaatimustenmukaisuusauditointia varten (audit trailin kautta), mutta ei voi lukea muistikirjojesi sisältöä. Laitteellasi paikallinen tietokanta salataan levossa SQLCipherillä, ja avain säilyy keychainissasi, ei ylläpitojärjestelmässä. Pilvisynkronointi ei ole päästä päähän -salattua: rekisterinpitäjänä Fluera voi teknisesti käyttää synkronoitua sisältöä, mutta emme koskaan myy sitä, käytä sitä mainontaan tai mallien kouluttamiseen.

## Seuraavaksi

- [Pilvisynkronoinnin asetukset](/fi/docs/cloud-sync)
- [Tietoturva-arkkitehtuuri](/fi/security/architecture) — täysi malli
