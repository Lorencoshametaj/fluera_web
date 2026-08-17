import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Fånga",                       verb: "Föreläsningsdagen",     description: "Skriv begreppen för hand under föreläsningen. Placera dem i rummet. Den långsamma pennan tvingar fram mental komprimering — det är där inkodningen föds." },
    { n: 2,  title: "Rekonstruktion",              verb: "Samma kväll",           description: "Stäng boken. Rekonstruera det du minns i en fri yta på samma canvas. De röda noderna där du tvekar är kartan över vad du behöver repetera (Kapur, produktivt misslyckande, 2008)." },
    { n: 3,  title: "Sokratisk",                   verb: "Inom 48 timmar",        description: "AI:n frågar, du svarar. Bedöm din säkerhet från 1 till 5 före varje avslöjande. Metakognition gjord explicit." },
    { n: 4,  title: "Centaur",                     verb: "Direkt efter",          description: "Ghost Map lägger ditt resonemang över den ideala kartan. Hyperkorrigering förankrar rättningarna i minnet (Butterfield och Metcalfe, 2001)." },
    { n: 5,  title: "Sömn",                        verb: "Den natten",            description: "Gör ingenting. Slow-wave-sömnen spelar upp dagen igen. Hippocampus för spåren vidare till cortex. Vårt jobb är att hålla oss undan." },
    { n: 6,  title: "Första återkallandet",        verb: "Dag 1",                 description: "Kom tillbaka nästa dag. Canvasen tonar bort det du nästan kunde. Hämta det ur minnet och skriv om det som glidit undan." },
    { n: 7,  title: "Lärande mellan studenter",    verb: "Dag 2–3",               description: "Besök en kurskamrats canvas. Lär ut. Låt dig läras. Att strukturera för andra konsoliderar det hos dig (lärareffekten)." },
    { n: 8,  title: "Distribuerade återkallanden", verb: "Dag 3 · 7 · 14…",       description: "Successivt återinlärande i växande intervall. Gold standard-strategin i den vetenskapliga evidensen (Rawson och Dunlosky, 2011)." },
    { n: 9,  title: "Broar mellan domäner",        verb: "Veckor senare",         description: "Zooma ut till kontinentvyn. Dra pilar mellan kemi och differentialekvationer. Transfer är det verkliga testet av lärande." },
    { n: 10, title: "Tentaförberedelse",           verb: "7–14 dagar innan",      description: "Fog of War. Navigera genom dimman på din egen canvas. Grönt, rött, blinda fläckar — behärskningskartan ritar sig själv." },
    { n: 11, title: "Exam Session",                verb: "7 dagar innan · Dagen", description: "Fluera genererar en closed-book-tenta från din egen canvas. Du anger din säkerhet från 1 till 5, svarar för hand, och Ghost Map lägger glappet över. Hyperkorrigering förankrar permanent de punkter där du var säker och hade fel (Butterfield och Metcalfe, 2001)." },
    { n: 12, title: "Bestående tillväxt",          verb: "För alltid",            description: "Canvasen består som en kognitiv självbiografi. Du kommer tillbaka två år senare och ser den påtagliga formen av hur mycket du vuxit." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Önskvärda svårigheter — den kontraintuitiva upptäckten att svårare studier ger bättre minnet.", year: "1994" },
    { name: "Butterfield och Metcalfe", contribution: "Hyperkorrigeringseffekten — fel som begåtts med hög säkerhet, en gång rättade, är de mest långlivade.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "System 1 vs System 2 — snabb intuition mot långsam överläggning i tänkande och minne.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "Zonen för proximal utveckling — den smala zon där lärande med stöd överträffar att lära ensam.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Självtillit — den starkaste prediktorn för akademisk framgång, före IQ.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Växande tankesätt — att berömma ansträngning i stället för talang förändrar svaret på svårigheter.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — maximal kognitiv prestation när utmaning och förmåga balanseras med omedelbar återkoppling.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Begreppskartor — att bygga en karta slår att studera en färdig, i vilken disciplin som helst.", year: "1984" },
    { name: "O'Keefe och Moser",       contribution: "Place cells och grid cells — hjärnans biologiska GPS. Därför fungerar minnespalatset.", year: "Nobel 2014", nobel: true },
    { name: "Mueller och Oppenheimer", contribution: "Handskrivna anteckningar slår laptop-anteckningar på konceptuella frågor — även när laptop-versionen är fullständigare.", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEG-evidens: handskrift aktiverar bredare hjärnnätverk än att skriva på tangentbord.", year: "2020" },
    { name: "Roediger och Karpicke",   contribution: "Återkallelsepraktik — testet mäter inte minnet, det skapar det.", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "Beta" },
    { name: "iPadOS",  api: "Metal",       status: "Beta" },
    { name: "macOS",   api: "Metal",       status: "Beta" },
    { name: "Windows", api: "Direct3D 11", status: "Alpha" },
    { name: "Android", api: "Vulkan",      status: "Alpha" },
    { name: "Linux",   api: "OpenGL",      status: "Alpha" },
    { name: "Web",     api: "WebGPU",      status: "Demo" },
  ],
  medicalUseCase: {
    kicker: "Byggd för de tuffaste utbildningarna",
    title: "Läkarutbildningen, på en enda canvas.",
    intro: "Anatomi, fysiologi, farmakologi. Tusentals fakta som måste hänga ihop — och gå att plocka fram under tentapress. Den plugg som faktiskt fungerar på medicin är den som känns svår medan du gör den. Fluera gör just den till vägen med minst motstånd.",
    steps: [
      {
        phase: "Föreläsningsdag",
        title: "Varje organsystem blir en region.",
        description: "Skriv varje föreläsning i sin egen region av samma oändliga canvas — anatomiska strukturer, läkemedelsmekanismer, metabola vägar. Platsen i rummet blir ett minnesankare. Tolv penselmotorer och bläck med låg latens på plattor som stöds.",
      },
      {
        phase: "Samma kväll",
        title: "Återskapa ur minnet, före boken.",
        description: "Stäng föreläsningsmaterialet. Försök bygga upp det du minns i ett tomt område av samma canvas. Luckorna du hittar — kranialnerven du hoppade över, receptorn du blandade ihop — är kartan över vad som ska pluggas i kväll. Produktivt misslyckande, med avsikt (Kapur, 2008).",
      },
      {
        phase: "Inom 48 h",
        title: "Sokratiskt förhör på den canvas du själv byggde.",
        description: "AI:n frågar, du svarar. Före varje avslöjande förutsäger du din säkerhet 1–5. Varje miss du gjorde med hög säkerhet — varje läkemedel du var säker på och hade fel om — förstärks hårdare. Hyperkorrigering (Butterfield och Metcalfe, 2001).",
      },
      {
        phase: "7–14 dagar före tentan",
        title: "Fog of War på det system du är svagast på.",
        description: "Maskera delar av canvasen. Hämta tillbaka anatomin ur minnet innan du avslöjar. Fluera schemalägger återbesöken med FSRS — den moderna algoritmen för spridd repetition. På tentadagen är canvasen själv simuleringen.",
      },
    ],
    closing: "Om det här är arbetssättet du redan halvvägs gör med papper, pdf:er och tre öppna appar, gör Fluera det till en enda sammanhängande slinga. Byggd för hur minnet fungerar, prövad mot utbildningar som inte förlåter något annat.",
  },
};

export default data;
