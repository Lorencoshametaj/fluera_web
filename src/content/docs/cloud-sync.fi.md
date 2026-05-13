---
lang: "fi"
title: "Pilvisynkronointi"
description: "Miten synkronoit canvas-näkymät laitteiden välillä, mitä salataan ja miten palautat tilanteen, jos salalauseesi katoaa."
section: settings
sectionLabel: "Asetukset"
order: 2
updatedAt: 2026-04-20
---

Pilvisynkronointi on opt-in muistikirjakohtaisesti. Voit synkronoida yhden canvas-näkymän pitäen toisen tiukasti paikallisena. Mikään ei lähde liikkeelle ennen kuin annat luvan.

## Synkronoinnin aktivointi ensimmäisellä laitteella

1. Avaa **Asetukset → Yksityisyys** ja aktivoi **Pilvisynkronointi**.
2. Luo tai syötä **synkronoinnin salalause**. Se on *erillinen* tilin salasanasta. Salalausetta käytetään salausavaimen johtamiseen — ja se säilytetään vain laitteellasi, ei koskaan palvelimillamme.
3. Valitse, mitkä muistikirjat synkronoidaan. Klikkaa hiiren oikealla (tai paina pitkään) muistikirjaa → **Aktivoi synkronointi**.

Pieni pilvi-ikoni ilmestyy jokaiseen synkronoituun muistikirjaan. Punainen muunnelma osoittaa virhettä; harmaa keskeytystä.

## Toisen laitteen lisääminen

1. Asenna Fluera toiselle laitteelle.
2. Kirjaudu sisään samalla tilillä.
3. Syötä *sama* synkronoinnin salalause kun sitä pyydetään. Salalausetta ei voi palauttaa — jos sitä ei ole, salatut tiedot eivät ole luettavissa uudella laitteella.
4. Pilvisynkronointi käynnistyy. Odota, että ensimmäinen täysi synkronointi vie muutaman minuutin keskikokoiselle muistikirjalle.

## Mitä salataan ja miten

- Jokainen muistikirja salataan paikallisesti muistikirjakohtaisella avaimella.
- Nämä avaimet salataan root-avaimella, joka johdetaan synkronointisi salalauseesta PBKDF2-SHA256:lla, 256 000 iteraatiolla.
- Vain salatut tavut päätyvät palvelimelle. Emme pysty lukemaan muistikirjojasi.

Metatiedot (muistikirjojen otsikot, aikaleimat, koko) salataan myös — palvelin näkee läpinäkymättömiä blobeja ja synkronoinnin aikaleimoja.

## Jos kadotat salalauseen

Jos unohdat salalauseen eikä sinulla ole laitetta, jolla on yhä avain välimuistissa, salatut tietosi ovat **palautumattomissa**. Tämä on suunniteltua. Vaihtoehto — palvelinpuolen palautusmekanismi — rikkoisi päästä päähän -mallin, ja se on kompromissi, jota emme ole valmiita tekemään kuluttajatileille.

**Education-tileille** voi konfiguroida valinnaisen palautusavaimen, jota ylläpitäjä säilyttää, käyttöönoton yhteydessä. Se on eksplisiittinen opt-in, dokumentoitu institutionaalisessa DPA:ssa ja auditoitu.

## Konfliktien ratkaisu

Jos muokkaat samaa canvas-näkymää kahdella laitteella samanaikaisesti yhden ollessa offline, Fluera käyttää CRDT:tä vector clockien kanssa konfliktivapaaseen yhdistämiseen. Et menetä työtä. Harvoissa tapauksissa, joissa automaattinen yhdistäminen on monitulkintaista, näet "merge needed" -merkinnän kyseisessä noodissa ja rinnakkaisnäkymän vahvistusta varten.

## Synkronoinnin poistaminen tietyltä muistikirjalta

Klikkaa hiiren oikealla (tai paina pitkään) muistikirjaa → **Poista synkronointi**. Pilvikopio kumotaan välittömästi. Paikallinen kopio säilyy ennallaan.

## Seuraavaksi

- [FAQ ja vianetsintä](/fi/docs/faq)
- [Tietoturva-arkkitehtuuri](/fi/security/architecture)
