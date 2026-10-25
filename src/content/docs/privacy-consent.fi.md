---
lang: "fi"
title: "Yksityisyys ja AI-suostumus"
description: "Mitä tietoja Fluera kerää, mihin annat suostumuksesi ja miten kytket kaiken pois päältä."
section: settings
sectionLabel: "Asetukset"
order: 1
updatedAt: 2026-10-23
---

Fluera on local-first-työkalu. Oletuksena mikään ei lähde laitteeltasi, ellet eksplisiittisesti aktivoi sitä tarvitsevaa toimintoa.

## Suostumuksen neljä kategoriaa

Avaa **Asetukset → Yksityisyys**. Näet neljä kytkintä, kaikki oletuksena pois päältä:

- **Tuoteanalytiikka.** Käyttötietoja, jotka on sidottu tilisi tunnisteeseen, jotta voit nähdä ja poistaa ne — ominaisuuksien käyttö, istunnon kesto, AI-kutsujen kestot. Ei koskaan sisältöä. Säilytetään enintään 180 päivää.
- **AI-toiminnot.** Tarvitaan Socraticin, Ghost Mapin, LaTeX-OCR:n ja Fog of Warin käyttöön. Canvasista valittu teksti lähetetään Google Geminille palvelinpuolen proxymme kautta. Ei koskaan koko canvasia.
- **Pilvisynkronointi.** Tarvitaan canvas-näkymien synkronointiin laitteiden välillä. Synkronoitu data salataan siirrossa (TLS) ja levossa EU-infrastruktuurissa (Supabase, eu-north-1). Synkronointi ei ole päästä päähän -salattua: rekisterinpitäjänä Fluera voi teknisesti käyttää synkronoitua sisältöä, mutta emme koskaan myy sitä, käytä sitä mainontaan tai mallien kouluttamiseen. Cloud-tilauksella **Synkronoi laitteidesi välillä** (alla) kuljettaa myös opiskelusi ja asetuksesi.
- **Kaatumisraportointi.** Stack tracet ja laitteen metatiedot, kun sovellus kaatuu. Ei käyttäjäsisältöä. Käsitellään Sentryllä asetuksella `sendDefaultPii: false`.

Jokainen kytkin on itsenäinen. Voit aktivoida pilvisynkronoinnin ilman analytiikkaa. Voit käyttää AI:ta ilman kaatumisraportointia. Oikeudet ovat tarkoituksella granulaarisia.

## Kognitiivinen muisti (laitteella, opt-out)

Erillään yllä olevista neljästä pilvisuostumuksesta: oletuksena Fluera indeksoi muistiinpanosi **laitteellasi** automaattisia otsikoita, käsitekarttaa (Ghost Map) ja jaksotettua kertausta (FSRS) varten. Indeksi rakennetaan ja lasketaan laitteellasi ja pysyy siellä, ellet ota käyttöön asetusta **Synkronoi laitteidesi välillä** (seuraava osio): silloin kertauskorttisi vastaushistorioineen, käsitteesi, käsitekartta ja muistiinpanoryhmiesi otsikot kulkevat Fluera-pilven kautta muille laitteillesi. Voit poistaa muistin käytöstä kohdassa **Asetukset → Yksityisyys → Kognitiivinen muisti**: indeksointi pysähtyy ja tämän laitteen kognitiiviset tiedot poistetaan heti (muistiinpanosi säilyvät ennallaan); jos käytät Synkronoi laitteidesi välillä -toimintoa, myös pilvessä olevat kopiot poistetaan, eikä niitä lähetetä uudelleen ennen kuin otat sen taas käyttöön. Oikeusperuste: oikeutettu etu ja vastustamisoikeus (GDPR art. 6.1.f / 21) — siksi se on oletuksena päällä ja opt-out, ei opt-in-suostumus kuten yllä olevat neljä.

## Synkronoi laitteidesi välillä (Cloud-tilaus)

Kytkin **Asetukset → Tiedot ja synkronointi → Synkronoi laitteidesi välillä** on pois päältä, kunnes kytket sen päälle. Se vaatii tilin ja Cloud-tilauksen, ja se koskee koko tiliäsi: päällä yhdellä laitteella tarkoittaa päällä jokaisella laitteella, jolla kirjaudut sisään. Kun kytket sen päälle, palvelin tallentaa päivämäärän ja sen tietosuojaselosteen version, joka sinulla oli edessäsi. Oikeusperuste: sopimus (GDPR art. 6.1.b) — se on Cloud-palvelu, josta maksat.

- **Mitä pilveen menee, vain kun kytkin on päällä:** kokonaiset canvasit (vedot, osiot, kaavat, PDF:t lukijassa tehtyine merkintöineen, valokuvat); tallennetut luennot (ääni, paloina); jokaisen canvasin opiskelu (kertauskortit vastauksineen, käsitteet, kokeet musteineen, sokraattinen tutor, chat, mieleen palauttaminen, kurssit); gallerian kansiot (nimineen), kunkin canvasin kansio, kiinnitetyt, tunnisteet ja Roskakori; teksti, jonka Fluera tunnisti käsialastasi; valintasi asetuksissa (ulkoasu, kieli, paperi, kertaus, värit, pyyhekumi ja vastaavat). Yhteen laitteeseen sidotut asetukset (käsi, kämmen, kynä, ikkuna) jäävät sille.
- **Mikä jää aina laitteelle:** canvasin historia (Time Travel) ja kumoa.
- **Kuka sen näkee:** sinä. Jakamassasi canvasissa jäsenet näkevät canvasin ja muistiinpanoryhmien otsikot; opiskelusi näet vain sinä.
- **Missä:** Supabase, EU-alue `eu-north-1` (Tukholma), salattu siirron aikana ja levossa, **ei** päästä päähän salattu.
- **Kytkimen sammuttaminen** miltä tahansa laitteelta pysäyttää sen kaikilla eikä poista mitään. Sama pätee, jos perut Cloud sync -suostumuksen.
- **Kun Cloud-tilaus päättyy,** synkronointi keskeytyy ja kaikki on ladattavissa vielä 6 kuukautta. Sen jälkeen voimme poistaa luentojen äänen, PDF:t ja valokuvat, jotka ylittävät Free-tilauksen 500 Mt, vanhimmat ensin; canvastesi muste jää.
- **Poistaminen:** **Poista pysyvästi** canvasille **Roskakorissa** poistaa sen pilvestä kaikkineen, myös sen kokeiden musteen; **Asetukset → Tietosuoja ja telemetria → Poista kaikki tietoni pilvestä** poistaa kaikki canvasit, luennot, kokeiden musteen, asetukset ja kansiot sekä kytkee pois Synkronoi laitteidesi välillä; **Asetukset → Profiili ja tili → Poista tili** poistaa kaiken, myös asetukset.

Ilman kytkintä kaikki tämä jää laitteellesi, kuten ennenkin.

## AI-harjoitusaineisto (erillinen osio, vain opt-in)

Rakennamme omaa käsialan tunnistusta, joka on räätälöity sille, miten Flueran käyttäjät oikeasti kirjoittavat. Kohdasta **Asetukset → Yksityisyys → AI-harjoitusaineisto** löydät kaksi kytkintä lisää, nekin oletuksena pois päältä ja riippumattomia yllä olevista neljästä:

- **Kalibrointi-istunto (~5 min).** Kertaluonteinen ohjattu istunto, jossa kirjoitat 30 näytettyä symbolia (numeroita, matemaattisia operaattoreita, kreikkalaisia kirjaimia, yleisiä kirjaimia). Näytöllä oleva symboli on oikea vastaus, joka liitetään vetoihisi.
- **Automaattinen talteenotto kirjoittaessa.** Kun kirjoitat tavalliseen tapaan canvasille, tallennamme raa'at vedot (koordinaatit, ajoitus, paine, kynän kallistus, jos tuettu) ja pienen salatun PNG-kuvan jokaisesta klusterista. Tiedot pysyvät salattuina palvelimellamme. **Kun sopimuksemme Googlen kanssa on valmis** (Vertex AI:n käsittelysopimus, työn alla), Google Gemini analysoi kuvat, jotta voimme opettaa Flueralle, mitä kirjoitit. Siihen asti mikään harjoitusaineisto ei lähde infrastruktuuristamme kolmansille osapuolille.

Molemmat kytkimet käyttävät omaa pseudonyymiä tunnistetta, joka lasketaan laitteellasi ja joka **ei** ole sama kuin tuoteanalytiikan: pelkästä datasta osallistumista ei voi yhdistää tiliisi.

Tämän luokan erityiset suojatoimet:
- Tietojen salaus AES-256-GCM:llä *ennen* lähetystä; salauksen purkuavain on epäsymmetrinen avainpari (X25519), jonka yksityinen puolisko säilytetään offline-tilassa paperilla eikä sitä koskaan digitoida.
- Row-Level Security Supabasen tauluissa: kukaan ei voi lukea toisen käyttäjän näytteitä.
- Kohinasuodatin: alle 3 pisteen klusterit (napautukset, tahrat) hylätään ennen tallennusta.
- Pysyvä kaksoiskappaleiden poisto geometrisen sormenjäljen avulla: saman klusterin piirtäminen täsmälleen uudelleen ei tuota kaksoiskappaletta.
- Jokaisen näytteen esikatselu kohdassa **Asetukset → AI-harjoitusaineisto → Viimeisimmät talteenotot**: näet pienoiskuvat juuri siitä, mitä olemme tallentaneet.

## Mitä ei koskaan kerätä

- Canvas-näkymiesi sisältöä (salattu levossa sqlite3mc:llä, ChaCha20-Poly1305), ellet ota käyttöön asetusta **Synkronoi laitteidesi välillä** (yllä)
- Kysymyksiä, joita AI esittää, tai vastauksiasi
- Tallentamasi ääni, ellet ota käyttöön asetusta **Synkronoi laitteidesi välillä** (yllä): silloin se menee pilveen kuten canvasisi, salattuna siirron aikana ja levossa, ei päästä päähän
- Henkilökohtaisesti tunnistettavia tietoja missään muodossa ilman eksplisiittistä suostumusta

## Miten varmistat

Kytke neljä kytkintä pois ja seuraa palomuuria tai verkkomonitoria: canvas-näkymäsi, tallenteesi ja kirjoittamasi pysyvät laitteella. Sovellus puhuu silti verkon kanssa asioista, joissa ei ole canvasin sisältöä, esimerkiksi: kirjautuminen tilillesi, tilauksesi tarkistus kaupasta (RevenueCat), joidenkin ominaisuuksien tarvitsemien mallien lataus, marketplace-signaali, kun asennat tai opiskelet kortin katalogista (oletuksena päällä, pois kohdassa **Asetukset → Tietosuoja ja telemetria → Marketplace-signaali**), ja sivut, jotka avaat sisäänrakennetussa selaimessa.

## Suostumuksen peruuttaminen

Neljä kytkintä ovat aina saatavilla kohdassa **Asetukset → Yksityisyys**. Kytkimen pois päältä laittaminen tulee voimaan välittömästi. Se, mitä jo kerätyille tiedoille tapahtuu, riippuu luokasta:

- **Tuoteanalytiikka:** kun peruutus saapuu palvelimillemme, tililläsi jo kerätty telemetria poistetaan heti. Sitä ei joka tapauksessa koskaan säilytetä yli 180 päivää.
- **AI-toiminnot:** pyynnöt pysähtyvät heti, myös palvelimellamme. AI:n käyttöloki (mikä toiminto, montako tokenia, ei sisältöä) säilyy 24 kuukautta tilauksen rajoja varten.
- **Pilvisynkronointi:** sen sammuttaminen tai Synkronoi laitteidesi välillä -kytkimen sammuttaminen ei poista mitään, mikä on jo pilvessä — käytä siihen toimintoa **Poista kaikki tietoni pilvestä**.
- **Kaatumisraportointi:** peruutus ei poista jo lähetettyjä raportteja: Sentry säilyttää niitä 30 päivää ja salattuja varmuuskopioitaan enintään 90 päivää.

Poistaaksesi tilisi ja sen tiedot pilvestä käytä kohtaa **Asetukset → Profiili ja tili → Poista tili**. Jos se ei onnistu, kirjoita osoitteeseen [lorenco@fluera.dev](mailto:lorenco@fluera.dev) tilisi sähköpostiosoitteesta.

## Seuraavaksi

- [Pilvisynkronoinnin asetukset](/fi/docs/cloud-sync)
- [Tietoturva-arkkitehtuuri](/fi/security/architecture) — täysi malli
