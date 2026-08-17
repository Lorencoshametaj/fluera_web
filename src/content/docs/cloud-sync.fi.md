---
lang: "fi"
title: "Pilvisynkronointi"
description: "Miten synkronoit canvas-näkymät laitteiden välillä, miten dataasi suojataan ja mitä voit odottaa."
section: settings
sectionLabel: "Asetukset"
order: 2
updatedAt: 2026-04-20
---

Pilvisynkronointi on opt-in muistikirjakohtaisesti. Voit synkronoida yhden canvas-näkymän pitäen toisen tiukasti paikallisena. Mikään ei lähde liikkeelle ennen kuin annat luvan.

## Synkronoinnin aktivointi ensimmäisellä laitteella

1. Avaa **Asetukset → Yksityisyys** ja aktivoi **Pilvisynkronointi**.
2. Valitse, mitkä muistikirjat synkronoidaan. Klikkaa hiiren oikealla (tai paina pitkään) muistikirjaa → **Aktivoi synkronointi**.

Pieni pilvi-ikoni ilmestyy jokaiseen synkronoituun muistikirjaan. Punainen muunnelma osoittaa virhettä; harmaa keskeytystä.

## Toisen laitteen lisääminen

1. Asenna Fluera toiselle laitteelle.
2. Kirjaudu sisään samalla tilillä.
3. Pilvisynkronointi käynnistyy automaattisesti. Odota, että ensimmäinen täysi synkronointi vie muutaman minuutin keskikokoiselle muistikirjalle.

## Miten synkronoitua dataasi suojataan

- Laitteellasi paikallinen tietokanta salataan levossa SQLCipherillä (AES-256).
- Synkronoitaessa data salataan siirron aikana TLS 1.3:lla ja moderneilla cipher suiteilla.
- Palvelimillamme data tallennetaan EU-infrastruktuuriin (Supabase, `eu-north-1`) ja suojataan levossa infrastruktuuritason salauksella.

Selvyyden vuoksi: pilvisynkronointi ei ole **päästä päähän -salattua**. Rekisterinpitäjänä Fluera voi teknisesti käyttää synkronoitua sisältöä palvelun tarjoamiseen ja ylläpitoon. Emme koskaan myy dataasi, käytä sitä mainontaan tai mallien kouluttamiseen. Jos haluat kopion, jonka vain sinä voit avata, vie `.fluera`-tiedosto; nämä viennit salataan AES-256-GCM:llä.

## Datan palauttaminen

Koska synkronoidut muistikirjat tallennetaan EU-palvelimillemme ja liitetään tiliisi, voit palauttaa ne kirjautumalla uudelleen millä tahansa laitteella. Erillistä salalausetta ei tarvitse muistaa eikä sitä voi kadottaa.

Jos haluat salatun kopion, jonka vain sinä voit avata, vie `.fluera`-tiedosto (AES-256-GCM) ja säilytä sen salasana itse; Fluera ei voi lukea tätä tiedostoa.

## Konfliktien ratkaisu

Jos muokkaat samaa canvas-näkymää kahdella laitteella samanaikaisesti yhden ollessa offline, Fluera käyttää CRDT:tä vector clockien kanssa konfliktivapaaseen yhdistämiseen. Et menetä työtä. Harvoissa tapauksissa, joissa automaattinen yhdistäminen on monitulkintaista, näet "merge needed" -merkinnän kyseisessä noodissa ja rinnakkaisnäkymän vahvistusta varten.

## Synkronoinnin poistaminen tietyltä muistikirjalta

Klikkaa hiiren oikealla (tai paina pitkään) muistikirjaa → **Poista synkronointi**. Pilvikopio kumotaan välittömästi. Paikallinen kopio säilyy ennallaan.

## Seuraavaksi

- [FAQ ja vianetsintä](/fi/docs/faq)
- [Tietoturva-arkkitehtuuri](/fi/security/architecture)
