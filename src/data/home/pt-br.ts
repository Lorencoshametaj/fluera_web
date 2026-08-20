import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Captura",                   verb: "Dia da aula",          description: "Escreva os conceitos à mão durante a aula. Posicione-os no espaço. A caneta lenta força a compressão mental — é aí que nasce a codificação." },
    { n: 2,  title: "Reconstrução",              verb: "Mesma noite",          description: "Feche o livro. Reconstrua o que você lembra em uma área livre do mesmo canvas. Os nós vermelhos onde você hesita são o mapa do que estudar (Kapur, falha produtiva, 2008)." },
    { n: 3,  title: "Socrática",                 verb: "Em até 48h",           description: "A IA pergunta, você responde. Declara sua confiança de 1 a 5 antes de cada revelação. Metacognição tornada explícita." },
    { n: 4,  title: "Centauro",                  verb: "Logo depois",          description: "Ghost Map sobrepõe seu raciocínio ao mapa ideal. A hipercorreção fixa as correções na memória (Butterfield e Metcalfe, 2001)." },
    { n: 5,  title: "Sono",                      verb: "Aquela noite",         description: "Não faça nada. O sono de ondas lentas reproduz o dia. O hipocampo passa os traços ao córtex. Nosso trabalho é sair do caminho." },
    { n: 6,  title: "Primeiro retorno",          verb: "Dia 1",                description: "Volte no dia seguinte. O canvas desbota o que você quase sabia. Recupere da memória e reescreva o que escapou." },
    { n: 7,  title: "Aprendizado entre pares",   verb: "Dias 2–3",             description: "Visite o canvas de um colega. Ensine. Deixe-se ensinar. Organizar para os outros consolida em você (efeito do ensino)." },
    { n: 8,  title: "Retornos espaçados",        verb: "Dia 3 · 7 · 14…",      description: "Reaprendizado sucessivo em intervalos crescentes. A estratégia gold standard nas evidências científicas (Rawson e Dunlosky, 2011)." },
    { n: 9,  title: "Pontes entre domínios",     verb: "Semanas depois",       description: "Afaste o zoom para a vista continente. Trace setas entre química e equações diferenciais. A transferência é o teste real da aprendizagem." },
    { n: 10, title: "Preparação para a prova",   verb: "7–14 dias antes",      description: "Fog of War. Navegue pela névoa do seu próprio canvas. Verde, vermelho, pontos cegos — o mapa de domínio se desenha sozinho." },
    { n: 11, title: "Exam Session",              verb: "7 dias antes · O dia", description: "Fluera gera uma prova de livro fechado do seu próprio canvas. Você declara sua confiança de 1 a 5, responde à mão, e o Ghost Map sobrepõe a lacuna. A hipercorreção fixa para sempre os pontos em que você estava seguro e errou (Butterfield e Metcalfe, 2001)." },
    { n: 12, title: "Crescimento permanente",    verb: "Para sempre",          description: "O canvas persiste como autobiografia cognitiva. Você volta dois anos depois e vê a forma tangível do quanto cresceu." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "Dificuldades desejáveis — a descoberta contraintuitiva de que estudar mais difícil produz lembrança melhor.", year: "1994" },
    { name: "Butterfield e Metcalfe",  contribution: "Efeito de hipercorreção — erros cometidos com alta confiança, uma vez corrigidos, são os mais duradouros.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "Sistema 1 vs Sistema 2 — intuição rápida contra deliberação lenta no pensamento e na memória.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "Zona de desenvolvimento proximal — a faixa estreita onde aprender com apoio supera aprender sozinho.", year: "1978" },
    { name: "Albert Bandura",          contribution: "Autoeficácia — o preditor mais forte do sucesso acadêmico, acima do QI.", year: "1977" },
    { name: "Carol Dweck",             contribution: "Mentalidade de crescimento — elogiar o esforço em vez do talento muda a resposta à dificuldade.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "Flow — desempenho cognitivo máximo quando desafio e habilidade se equilibram com feedback imediato.", year: "1990" },
    { name: "Joseph Novak",            contribution: "Mapeamento conceitual — construir um mapa supera estudar um pronto, em qualquer disciplina.", year: "1984" },
    { name: "O'Keefe e Moser",         contribution: "Place cells e grid cells — o GPS biológico do cérebro. Por que o Palácio da Memória funciona.", year: "Nobel 2014", nobel: true },
    { name: "Flanigan e colegas", contribution: "Em 24 estudos, anotações à mão rendem um pouco mais que as digitadas — vantagem pequena, que cresce ao revisá-las.", year: "2024" },
    { name: "Audrey van der Meer",     contribution: "Evidência por EEG: a escrita à mão ativa redes cerebrais mais amplas do que a digitação.", year: "2020" },
    { name: "Roediger e Karpicke",     contribution: "Prática de recuperação — o teste não mede a memória, ele a cria.", year: "2006" },
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
    kicker: "Feito para os currículos mais duros",
    title: "Medicina, em um só canvas.",
    intro: "Anatomia, fisiologia, farmacologia. Milhares de informações que precisam continuar conectadas — e recuperáveis sob pressão de prova. O estudo que realmente funciona em medicina é aquele que parece difícil enquanto você faz. A Fluera transforma esse tipo de estudo no caminho de menor resistência.",
    steps: [
      {
        phase: "Dia da aula",
        title: "Cada sistema do corpo vira uma região.",
        description: "Escreva cada aula na sua própria região do mesmo canvas infinito — estruturas anatômicas, mecanismos de ação, vias metabólicas. A posição no espaço vira âncora de memória. Doze motores de pincel e tinta de baixa latência nos tablets compatíveis.",
      },
      {
        phase: "Na mesma noite",
        title: "Reconstrua de memória, antes do livro.",
        description: "Feche o material da aula. Tente reconstruir o que você lembra em uma área livre do mesmo canvas. As lacunas que aparecerem — o nervo craniano que você pulou, o receptor que confundiu — são o mapa do que estudar hoje à noite. Fracasso produtivo, por design (Kapur, 2008).",
      },
      {
        phase: "Em até 48 h",
        title: "Arguição socrática sobre o canvas que você construiu.",
        description: "A IA pergunta, você responde. Antes de cada revelação você prevê sua confiança de 1 a 5. Todo erro cometido com alta confiança — todo fármaco de que você tinha certeza e errou — é reforçado com mais força. Hipercorreção (Butterfield e Metcalfe, 2001).",
      },
      {
        phase: "7–14 dias antes da prova",
        title: "Fog of War no sistema em que você é mais fraco.",
        description: "Cubra seções do canvas. Puxe a anatomia da memória antes de revelar. A Fluera agenda os retornos com FSRS — o algoritmo moderno de repetição espaçada. No dia da prova, o próprio canvas é a simulação.",
      },
    ],
    closing: "Se esse é o fluxo que você já faz pela metade com papel, PDFs e três apps abertos, a Fluera transforma tudo em um único ciclo contínuo. Feita para o jeito como a memória funciona, testada contra currículos que não perdoam outra coisa.",
  },
};

export default data;
