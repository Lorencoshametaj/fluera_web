---
lang: "sv"
title: "Integritet och AI-samtycke"
description: "Vilka data Fluera samlar in, vilket samtycke du ger och hur du stänger av allt."
section: settings
sectionLabel: "Inställningar"
order: 1
updatedAt: 2026-10-23
---

Fluera är ett local-first-verktyg. Som standard lämnar inget din enhet om du inte uttryckligen aktiverar en funktion som kräver det.

## De fyra samtyckeskategorierna

Öppna **Inställningar → Integritet**. Du ser fyra växlar, alla avstängda som standard:

- **Produktanalys.** Användningsdata kopplad till ditt kontos identifierare, så att du kan se och radera den — användning av funktioner, sessionslängd, längd på AI-anrop. Aldrig innehåll. Sparas högst 180 dagar.
- **AI-funktioner.** Krävs för att använda Socratic, Ghost Map, LaTeX-OCR och Fog of War. Den valda texten från canvasen skickas till Google Gemini-modeller via Google Vertex AI och behandlas i EU (2.5-modeller i regionerna europe-west4 NL / europe-west1 BE, 3.x-modeller via Vertex AI:s EU-multiregionsslutpunkt): uppgifterna stannar i EU:s medlemsstater. Aldrig hela canvasen.
- **Cloud sync.** Krävs för att synkronisera canvasar mellan enheter. Synkroniserade data krypteras under överföring (TLS) och i vila på EU-infrastruktur (Supabase, eu-north-1). Det är inte end-to-end-krypterat: Fluera kan som personuppgiftsansvarig komma åt innehållet, men säljer det aldrig och använder det aldrig för annonsering. Med Cloud-abonnemanget tar **Synka mellan dina enheter** (nedan) även med dina studier och dina inställningar.
- **Crash reporting.** Stack traces och enhetsmetadata när appen kraschar. Inget användarinnehåll. Behandlas av Sentry med `sendDefaultPii: false`.

Varje växel är oberoende. Du kan aktivera Cloud Sync utan Analytics. Du kan använda AI utan Crash Reporting. Behörigheterna är medvetet granulära.

## Kognitivt minne (på enheten, opt-out)

Skild från de fyra molnsamtyckena ovan: som standard indexerar Fluera dina anteckningar **på din enhet** för automatiska titlar, begreppskartan (Ghost Map) och repetition med mellanrum (FSRS). Indexet byggs och beräknas på din enhet och stannar där, om du inte slår på **Synka mellan dina enheter** (nästa avsnitt): då går dina repetitionskort med historiken över dina svar, dina begrepp, begreppskartan och titlarna på dina anteckningsgrupper via Flueras moln till dina andra enheter. Du kan stänga av minnet i **Inställningar → Integritet → Kognitivt minne**: indexeringen stoppas och de kognitiva data på den här enheten raderas direkt (dina anteckningar förblir orörda); använder du Synka mellan dina enheter raderas också kopiorna i molnet, och inget laddas upp igen förrän du slår på det igen. Rättslig grund: berättigat intresse med rätt att invända (GDPR art. 6.1.f / 21) — därför är det på som standard och opt-out, inte ett opt-in-samtycke som de fyra ovan.

## Synka mellan dina enheter (Cloud-abonnemang)

Reglaget **Inställningar → Data och synkronisering → Synka mellan dina enheter** är avstängt tills du slår på det. Det kräver ett konto och Cloud-abonnemanget, och det gäller hela ditt konto: på på en enhet betyder på på varje enhet du loggar in på. När du slår på det registrerar servern datumet och den version av integritetspolicyn du hade framför dig. Rättslig grund: avtal (GDPR art. 6.1.b) — det är Cloud-tjänsten du betalar för.

- **Vad som går till molnet, bara medan det är på:** hela canvas (streck, avsnitt, formler, PDF:er med markeringarna du gjorde i läsaren, foton); inspelade föreläsningar (ljudet, i delar); studierna på varje canvas (repetitionskort med dina svar, begrepp, prov med sitt bläck, den sokratiska handledaren, chatten, återkallning, kurser); galleriets mappar (med sina namn), mappen för varje canvas, de fästa, etiketterna och Papperskorgen; texten Fluera kände igen i din handstil; dina val i inställningarna (utseende, språk, papper, repetition, färger, suddgummi och liknande). Inställningar som hör till en enda enhet (hand, handflata, penna, fönster) stannar där.
- **Vad som alltid stannar på enheten:** canvasets historik (Time Travel) och ångra.
- **Vem som ser det:** du. På ett canvas du delar ser medlemmarna canvaset och titlarna på anteckningsgrupperna; dina studier ser bara du.
- **Var:** Supabase, EU-regionen `eu-north-1` (Stockholm), krypterat under överföring och i vila, **inte** end-to-end-krypterat.
- **Att stänga av det** på vilken enhet som helst stoppar det på alla och raderar ingenting. Detsamma gäller om du drar tillbaka samtycket till Cloud sync.
- **När Cloud-abonnemanget tar slut** pausas synkroniseringen och allt går att ladda ner i 6 månader. Därefter kan vi ta bort ljudet från föreläsningar, PDF:er och foton utöver de 500 MB som ingår i Free-abonnemanget, de äldsta först; bläcket i dina canvas stannar.
- **Radera:** **Radera permanent** på ett canvas i **Papperskorgen** tar bort det från molnet med det som hör till, även bläcket från dess prov; **Inställningar → Integritet och telemetri → Radera alla mina data från molnet** tar bort alla canvas, föreläsningarna, provbläcket, inställningarna och mapparna och stänger av Synka mellan dina enheter; **Inställningar → Profil och konto → Radera kontot** tar bort allt, inställningarna också.

Utan reglaget stannar allt detta på din enhet, som förut.

## Träningsdata för AI (egen del, bara opt-in)

Vi bygger en egen handskriftsigenkänning, anpassad efter hur Fluera-användare faktiskt skriver. Under **Inställningar → Integritet → Träningsdata för AI** hittar du två reglage till, också avstängda som standard och oberoende av de fyra ovan:

- **Kalibreringspass (~5 min).** Ett guidat pass, en enda gång, där du skriver 30 föreslagna symboler (siffror, matematiska operatorer, grekiska bokstäver, vanliga bokstäver). Symbolen på skärmen är facit, parat med dina streck.
- **Automatisk insamling medan du skriver.** Medan du skriver som vanligt på canvasen sparar vi de råa strecken (koordinater, tider, tryck, pennans lutning där det stöds) och en liten krypterad PNG av varje kluster. Datan förblir krypterad på vår server. **När vårt avtal med Google är klart** (personuppgiftsbiträdesavtal för Vertex AI, pågår) analyserar Google Gemini bilderna så att vi kan lära Fluera vad du skrev. Tills dess lämnar ingen träningsdata vår infrastruktur till tredje part.

Båda reglagen använder en egen pseudonym identifierare, beräknad på din enhet och **inte** samma som produktanalysens: utifrån datan själv går det inte att koppla ett bidrag till ditt konto.

Särskilda skydd för den här kategorin:
- Kryptering av datan med AES-256-GCM *innan* uppladdning; nyckeln för att dekryptera är ett asymmetriskt nyckelpar (X25519) vars privata halva förvaras offline på papper och aldrig digitaliseras.
- Row-Level Security på Supabase-tabellerna: ingen kan läsa någon annans prover.
- Brusfilter: kluster med färre än 3 punkter (tryck, kladd) kastas innan de sparas.
- Bestående deduplicering via geometriskt fingeravtryck: att rita samma kluster exakt igen skapar ingen dubblett.
- Förhandsvisning av varje prov i **Inställningar → Träningsdata för AI → Senaste insamlingarna**: du ser miniatyrer av exakt det vi har sparat.

## Vad som aldrig samlas in

- Innehållet i dina canvasar (krypterat i vila med sqlite3mc, ChaCha20-Poly1305), om du inte slår på **Synka mellan dina enheter** (ovan)
- Frågorna AI:n ställer eller dina svar
- Ljudet du spelar in, om du inte slår på **Synka mellan dina enheter** (ovan): då går det till molnet som dina canvas, krypterat under överföring och i vila, inte end-to-end
- Personligt identifierbar information av något slag utan uttryckligt samtycke

## Hur du verifierar

Stäng av de fyra reglagen och titta på din brandvägg eller nätverksmonitor: dina canvasar, dina inspelningar och det du skriver stannar på enheten. Appen pratar ändå med nätet för saker som inte bär något canvasinnehåll, till exempel: inloggning på ditt konto, kontroll av ditt abonnemang hos butiken (RevenueCat), nedladdning av modeller som vissa funktioner behöver, marketplace-signalen när du installerar eller studerar ett kort från katalogen (på som standard, av i **Inställningar → Integritet och telemetri → Marketplace-signal**) och sidorna du öppnar i den inbyggda webbläsaren.

## Återkalla samtycke

De fyra växlarna är alltid tillgängliga i **Inställningar → Integritet**. Att stänga av en växel får omedelbar effekt. Vad som händer med data som redan samlats in beror på kategorin:

- **Produktanalys:** när återkallelsen når våra servrar raderas telemetrin som redan samlats in med ditt konto direkt. Den sparas i alla fall aldrig längre än 180 dagar.
- **AI-funktioner:** förfrågningarna stoppas direkt, även på vår server. AI-användningsloggen (vilken funktion, hur många tokens, inget innehåll) sparas i 24 månader, för planens gränser.
- **Cloud sync:** att stänga av det, eller stänga av Synka mellan dina enheter, raderar ingenting som redan finns i molnet — använd **Radera alla mina data från molnet** för det.
- **Crash reporting:** återkallelsen raderar inte rapporter som redan skickats: Sentry sparar dem i 30 dagar, och sina krypterade säkerhetskopior i upp till 90.

För att radera ditt konto och dess data i molnet, använd **Inställningar → Profil och konto → Radera kontot**. Om det inte går, skriv till [lorenco@fluera.dev](mailto:lorenco@fluera.dev) från adressen på ditt konto.

## Nästa

- [Setup av cloud sync](/sv/docs/cloud-sync)
- [Säkerhetsarkitektur](/sv/security/architecture) — hela modellen
