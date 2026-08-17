import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Luettelo – opiskelupohjia, jotka asentuvat muistiisi",
    "description": "Opiskelupohja on sivullinen käsialaa ja sen alla oleva käsiterakenne. Asentaminen istuttaa kertausaikataulusi. Järjestys mitataan, ei lasketa asennuksista.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Flueran luettelo",
    "description": "Luettelo käsin kirjoitetuista opiskelupohjista: ne asentuvat jaksottaisen kertauksen aikatauluiksi ja järjestyvät mitatun muistissa pysymisen mukaan, eivät asennusmäärien.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "fi"
  },
  "hero": {
    "kicker": "Luettelo",
    "title": "Joku on jo purkanut tämän luvun auki.<br />Asenna se, niin se kuulustelee sinua.",
    "description": "Flueran opiskelupohja ei ole PDF eikä korttipakka. Se on sivullinen aitoa käsialaa, sen alla oleva käsiterakenne ja ohje siihen kertausaikatauluun, jota sinun kannattaisi noudattaa. Asentaminen istuttaa sen aikataulun omaan canvakseesi.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Pyydä pääsyä →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Näin kertausaikataulu toimii"
      }
    ]
  },
  "unit": {
    "kicker": "Yksikkö",
    "title": "Kolme asiaa lähtee mukaan. Tekijä ei ole niistä yksikään.",
    "sub": "Muut kaupat ojentavat dokumentin ja toivottavat onnea. Opiskelupohja kantaa mukanaan sivun, rakenteen, joka tekee sivusta opetettavan, ja ohjeet sen aikatauluttamiseen – tarkoituksella ilman sitä osaa, joka kuuluu tekijälleen.",
    "items": [
      {
        "title": "Rajattu tehtäväsivu",
        "body": "Ei kokonaista muistikirjaa vaan alue, jonka tekijä rajasi omalta canvakseltaan. Kehyksen sisällä olevat vedot, muodot, näppäillyt tekstit ja kuvat – eikä mitään sen ulkopuolelta. Lähde-PDF ei tule mukaan."
      },
      {
        "title": "Käsitteiden tukirakenne",
        "body": "Musteen alla oleva rakenne: mitä käsitteitä sivulla on, mihin aiheeseen kukin niistä kuuluu ja miten ne riippuvat toisistaan. Juuri tämä tekee opiskelupohjasta opetettavan eikä pelkästään luettavan."
      },
      {
        "title": "Ohje uusille korteille",
        "body": "Ei tekijän muistia vaan ohje oman muistisi rakentamiseen: tavoiteltu muistissa pysyminen, aineiston laji ja se, milloin ensimmäisen kertauksen kuuluu osua. Aikataulusi syntyy siitä asennushetkellä."
      }
    ]
  },
  "install": {
    "kicker": "Asentaminen",
    "title": "Sinä pidät tiedoston.<br />Aikataulu pitää sinusta kiinni.",
    "paragraphs": [
      "Opiskelumateriaalin lataaminen ei ole koskaan ollut vaikeaa. Vaikeaa on palata siihen sinä päivänä, jona olet unohtamaisillasi sen, eikä yksikään kansio ole ratkaissut sitä.",
      "Siksi opiskelupohjan asentaminen ei siirrä dokumenttia jonnekin. Se istuttaa kortteja, joilla on päivämäärät. Perit tekijän käsitteet ja niiden väliset riippuvuudet – et hänen kertaushistoriaansa, et hänen varmuuttaan etkä sitä, kuinka hyvin hän itse asian osasi. Tiedostomuoto ei kanna niitä."
    ],
    "steps": [
      {
        "step": "01",
        "title": "Sivu saapuu musteena",
        "body": "Tehtäväsivu palautuu omaan canvakseesi. Se on aitoa käsialaa aidolla paperilla, ei renderöityä PDF:ää: voit kirjoittaa sen päälle, jatkaa sitä ja leikata sen osiin."
      },
      {
        "step": "02",
        "title": "Jokaisesta käsitteestä tulee kortti",
        "body": "Yksi uusi jaksottaisen kertauksen kortti jokaista nimettyä käsitettä kohti, ilman kertaushistoriaa takanaan: nolla toistoa ja aloitusvaikeus Flueran asteikon keskeltä. Ensimmäinen kertaus osuu yhden päivän päähän."
      },
      {
        "step": "03",
        "title": "Aikataulu on tästä eteenpäin sinun",
        "body": "Se tallentuu levylle ja ohjaa eräpäivämerkkiäsi ja päivän koostetta kuten mikä tahansa itse kirjoittamasi kortti. Sama opiskelupohja uudelleen asennettuna ei nollaa jo kertynyttä kertaushistoriaa."
      }
    ]
  },
  "ranking": {
    "kicker": "Järjestys",
    "title": "Järjestys syntyy siitä, mikä jäi mieleen.<br />Ei siitä, mikä levisi.",
    "sub": "Asennusmäärä mittaa päätöstä, joka tehtiin, ennen kuin kukaan oppi mitään, ja se on helpoin luku paisuttaa missä tahansa kaupassa. Fluera voi järjestää paremmalla perusteella, koska sovellus mallintaa jo, kuinka hyvin kukin oppija pitää kunkin käsitteen muistissa.",
    "items": [
      {
        "label": "Mitataan laitteella",
        "body": "Kun avaat opiskelupohjan canvaksen uudelleen 1., 7. ja 30. päivänä tai niiden jälkeen, Fluera katsoo, kuinka hyvin jaksottaisen kertauksen malli arvioi sinun pitävän juuri ne käsitteet muistissa. Arvio tiivistyy yhdeksi luvuksi."
      },
      {
        "label": "Yksi luku, ei muuta",
        "body": "Vain se luku lähtee eteenpäin. Ei käsitteiden otsikoita, ei korttien sisältöä, ei kertaushistoriaa, ei henkilöllisyyttä. Sekin lähtee vain, jos olet kirjautunut ja hyväksynyt analytiikan – eikä koskaan, jos olet opiskelupohjan oma tekijä."
      },
      {
        "label": "Viisi oppijaa tai ei mitään",
        "body": "Opiskelupohjalla ei ole julkista lukua lainkaan, ennen kuin vähintään viisi eri oppijaa on lähettänyt omansa. Sen alle jäävät järjestyvät asennusmäärien mukaan, ja kortti vaikenee."
      },
      {
        "label": "Asennusmäärä ei ole sija",
        "body": "”Kaikki opiskelupohjat” -ruudukko järjestyy oletuksena tuon mitatun signaalin mukaan, ei suosion. Nopeasti leviävä opiskelupohja ei osta tietään sen kärkeen."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Mitä tämä ei ole.</strong> Se on mallin arvio siitä, kuinka hyvin opiskelupohjan käsitteet pysyvät muistissa niillä oppijoilla, jotka palasivat kertaamaan niitä. Se ei ole koetulos, ei kontrolliryhmä eikä väite kenestäkään, joka asensi opiskelupohjan muttei avannut sitä enää. Kuvaamme signaalin mieluummin täsmällisesti kuin puemme sen juhlavaatteisiin."
  },
  "discovery": {
    "kicker": "Löytäminen",
    "title": "Kolme tapaa rajata joukkoa,<br />ja yksi, jonka vain sinun laitteesi osaa.",
    "sub": "Opiskelumateriaalin luettelo epäonnistuu aina samalla tavalla: kaikki liittyy nimellisesti sinun oppiaineeseesi eikä juuri mikään sinun kurssiisi. Siksi suodattimet vastaavat sitä, miten opiskelija oikeasti ajattelee.",
    "paragraphs": [
      "Voit rajata <strong class=\"text-paper-100\">oppiaineella</strong>, <strong class=\"text-paper-100\">kurssilla tai tentillä</strong> – vapaana tekstinä, joten <em>Maturità</em> ja <em>MCAT</em> kelpaavat yhtä hyvin kuin <em>Analyysi I</em> – ja <strong class=\"text-paper-100\">kielellä</strong>. Jokainen suodatin näyttää elävän lukumäärän, jokainen valinta laskee muiden luvut uudelleen, eikä tyhjän päälle jäävä suodatin näy lainkaan. Sinulle ei tarjota valintaa, joka johtaa tyhjälle sivulle.",
      "Luettelo avautuu sovelluksesi kielellä: seinällinen materiaalia, jota et osaa lukea, ei ole luettelo. Se on oletus eikä aita – yksi napautus avaa kaikki kielet.",
      "Haku on kokotekstihaku eikä takerru tarkkeisiin. Se myös jättää järjestyksen sikseen ja nostaa esiin osuvimmat: kun olet kirjoittanut hakuun sen, mitä haluat, kysymys ei ole enää se, mikä jäi muiden mieleen."
    ],
    "marksHeading": "Mitä kortin merkinnät tarkoittavat",
    "marks": [
      {
        "mark": "Virallinen",
        "body": "Merkin asettaa luettelo, ei mikään, jonka tekijä voi kirjoittaa lomakkeeseen. Sitä ei loihdi esiin näyttönimellä."
      },
      {
        "mark": "Uusi",
        "body": "Tiukasti ansaittu: ei asennuksia, ei arvosteluja, julkaistu viimeisen viikon aikana. Se vanhenee itsestään, sitä ei sammuteta."
      },
      {
        "mark": "Oppiaine",
        "body": "Ala, jonka alle opiskelupohja on arkistoitu, jotta erotat yhdellä silmäyksellä kemian sivun sellaisesta, joka vain sivuaa kemiaa."
      },
      {
        "mark": "Arvostelu",
        "body": "Näkyy vasta, kun opiskelupohjaa ovat arvostelleet ihmiset, jotka myös asensivat sen. Arvostelematon opiskelupohja vaikenee sen sijaan, että aloittaisi nollasta."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Ja yksi rivi, jota kukaan muu ei pystyisi rakentamaan.</strong> Fluera tietää jo, mitä käsitteitä työstät, koska kirjoitit ne itse. Siksi se osaa järjestää opiskelupohjat sen mukaan, kuinka paljon ne menevät päällekkäin canvaksesi kanssa – ja laskee sen sinun laitteellasi. Puhelimesta lähtee eniten opiskelemasi oppiaine ja niiden opiskelupohjien tunnisteet, jotka se on jo hakenut. Käsitteesi eivät lähde."
  },
  "privacy": {
    "kicker": "Mikä lähtee mukaan, mikä ei",
    "title": "Kun julkaiset sivun, et julkaise sitä, miten sinulla meni.",
    "sub": "Opiskelumateriaalin jakaminen tarkoittaa, että jaat jotain, minkä teit kesken oppimisen. Raja näiden kahden välillä on vedetty koodiin eikä käytäntökappaleeseen.",
    "items": [
      {
        "title": "Oppijamallisi ei ole tiedostossa",
        "body": "Komponentti, joka rakentaa julkisen tukirakenteen, ei rakenteensa puolesta yllä kertaushistoriaasi, varmuuteesi, opiskelukertoihisi, siihen, kuinka hyvin pidit asian muistissa, eikä näiden takana oleviin upotuksiin. Osaaja ja vasta-alkaja tuottavat samasta sivusta tavulleen saman tukirakenteen."
      },
      {
        "title": "Rajan pitää testi, ei lupaus",
        "body": "Rajan naulaa paikalleen testi, joka käy sarjallistetun tulosteen läpi ja kaatuu, jos yksikin kahdestakymmenestäkuudesta oppijamallin tai käyttäytymisen kenttänimestä esiintyy siinä missään kohtaa. Se ajetaan nimettynä CI-porttina, josta ei voi luistaa: portti kaatuu myös silloin, kun testitiedosto poistetaan."
      },
      {
        "title": "Muste on rehellinen raja",
        "body": "Siivoaminen ei yllä itse käsialaan, ja tukirakenne kantaa mukanaan myös lyhyen katkaistun otteen tunnistetusta tekstistä. Ote ei ole koko litterointi, mutta sitä ei myöskään ole peitetty. Siksi julkaisunäkymä näyttää sinulle suostumusruudun yläpuolella täsmälleen sen kuvan, josta tulisi julkinen – ennen kuin mitään lähtee palvelimelle."
      },
      {
        "title": "Nimesi ei koskaan päädy tunnukseksi",
        "body": "Julkiset haut eivät palauta tilitunnusta lainkaan, ja tekijä tunnistetaan koodilla, joka johdetaan hänen tilistään yhteen suuntaan – suolattuna, tiivistettynä ja katkaistuna. Se on pysyvä salanimi, ei henkilöllisyytesi."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Lue tietoturva-arkkitehtuuri →"
    }
  },
  "creators": {
    "kicker": "Tekijöille",
    "title": "Vaikean asian paras selitys<br />mahtuu yleensä yhdelle sivulle.",
    "paragraphs": [
      "Julkaiseminen alkaa omalta canvakseltasi. Rajaat alueen, joka kannattaa jakaa. Fluera lyö siitä opiskelupohjan, ja näkymä kysyy, tuleeko siitä tiedosto vai listaus. Mukaan lähtee se, minkä rajaat – muu canvas jää sinulle.",
      "Ennen kuin mitään siirtyy palvelimelle, näet täsmälleen sen kuvan, josta tulisi julkinen, ja vahvistat sen. Listaus tarkistetaan, ennen kuin yhtäkään tavua tallennetaan, ja siirto kulkee kertakäyttöisten allekirjoitettujen osoitteiden kautta. Jos siirto kaatuu, listaus perutaan kokonaan eikä jää puolitiehen.",
      "Jokainen opiskelupohja on ilmainen. Fluerassa ei ole kassaa, julkaisurajapinnassa ei ole hintakenttää eikä tilityksiä kirjata minnekään – luettelon hintasarake on naulattu nollaan tietokannan rajoitteella, ei linjauksella."
    ],
    "heading": "Mitä julkaiseminen antaa sinulle",
    "benefits": [
      "Salanimitunnuksen, joka ei ole tilisi eikä sähköpostisi",
      "Valinnaisen profiilin – näyttönimi, esittely, profiilikuva – ja kuva näkyy vasta seulonnan jälkeen",
      "Seuraajat ja hyllyn, joka vie uusimman opiskelupohjasi heille",
      "Versioinnin: julkaise korjaus korvaajana, älä kaksoiskappaleena",
      "Perustelun aina, kun päätös menee sinua vastaan, ja valituksen, joka voi palauttaa listauksen"
    ],
    "note": "Julkaiseminen vaatii kirjautumisen ja iän vahvistuksen. Selaaminen ja asentaminen eivät vaadi kumpaakaan."
  },
  "safety": {
    "kicker": "Moderointi ja luottamus",
    "title": "Kun jaossa on vieraiden käsialaa,<br />jonkun on vastattava siitä.",
    "sub": "Luettelon avaa kuka tahansa. Työ alkaa siitä, mitä tapahtuu, kun jokin menee pieleen – ja siitä, ettei huoneen äänekkäin joukko ole se, joka päättää.",
    "items": [
      {
        "label": "Lähettäminen ei vielä listaa mitään",
        "body": "Uusi opiskelupohja menee tilaan ”odottaa tarkistusta”. Ennen seulontaa se puuttuu selauksesta, hausta ja koko luettelosta, eikä sen jakolinkki avaa mitään."
      },
      {
        "label": "Seulonta lukee oikean tiedoston",
        "body": "Luokittelija purkaa kuvat itse opiskelupohjasta eikä luota lähettäjän pikkukuvaan. Niistä se ottaa ankarimman tuomion, ja ajo tapahtuu EU-alueilla. Se voi päästää kohteen eteenpäin tai nostaa sen jatkokäsittelyyn; moderaattorin päätöstä se ei kumoa koskaan."
      },
      {
        "label": "Ilmoitukset menevät ihmisille, eivät roboteille",
        "body": "Ilmoitus on signaali ihmisen jonoon – yksi ilmoittajaa kohti, omaa työtä koskevat hylätään. Järjestäytynyt joukko voi herättää huomiota. Listausta se ei saa alas."
      },
      {
        "label": "Poisto poistaa tavut",
        "body": "Kun listaus poistetaan, julkaistut objektit pyyhitään CDN:stä eikä vain piiloteta luettelosta – sen jälkeen, kun todisteet on säilötty yksityiseen, vain ylläpidon säiliöön."
      },
      {
        "label": "Päätös tulee perusteltuna",
        "body": "Tekijälle kerrotaan, mitä hänen opiskelupohjalleen tapahtui ja tekikö päätöksen kone, ja hän voi valittaa. Hyväksytty valitus palauttaa listauksen."
      },
      {
        "label": "Arvostelu pitää ansaita",
        "body": "Et voi arvostella opiskelupohjaa, jota et ole asentanut, et omaasi etkä nimettömänä. Keskiarvot lasketaan joka kerta alusta eikä niitä kasvateta askel kerrallaan."
      }
    ]
  },
  "status": {
    "kicker": "Saatavuus",
    "title": "Luettelo tulee sovelluksen mukana.<br />Se vasta alkaa täyttyä.",
    "paragraphs": [
      "Selaaminen, esikatselu ja asentaminen ovat sovelluksen sisällä, ja ne on käännetty kaikille kuudelletoista kielelle, joita Fluera puhuu. Myös julkaiseminen on auki kirjautuneille täysi-ikäisille, ja avaamme sitä hitaasti tarkoituksella: toisten työn isännöinti on vastuu, joka kannetaan kunnolla tai ei ollenkaan.",
      "Siksi luettelo on pieni, eikä tällä sivulla ole opiskelupohjien, asennusten eikä tekijöiden lukumäärää. Ne luvut merkitsevät joskus jotain. Tänään ne olisivat koristetta."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Pyydä pääsyä →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Lataa Fluera"
      }
    ]
  }
};

export default data;

