import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "para sempre",
      tagline:
        "O canvas completo, a revisão e os cursos. Sem assinatura e sem prazo.",
      features: [
        "Canvas infinito e escrita à mão",
        "Revisão, cursos, todos os pincéis, exportação e time travel",
        "Mentor para testar no primeiro mês",
        "500 MB iguais em todos os seus dispositivos, sem áudio, quando a sincronização for ativada",
        "Funciona também offline: seus canvas ficam no dispositivo",
      ],
      cta: { label: "Começar grátis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera Em todo lugar",
      price: "€29,99",
      period: "por ano · somente anual · 60 GB por €44,99 / ano",
      tagline:
        "Tudo no celular, no tablet e no computador, sem pensar no espaço. É ativado com uma atualização do app.",
      features: [
        "20 GB em vez dos 500 MB do plano grátis",
        "As aulas gravadas, com o áudio, em cada dispositivo",
        "Compartilhe um canvas e escrevam juntos",
        "Se parar, 6 meses para baixar tudo. A tinta fica para sempre.",
        "Nenhuma função de estudo extra: todas já estão no grátis",
      ],
      cta: { label: "Escolher Em todo lugar", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "por mês · €84,99 / ano (economize €34,89)",
      tagline:
        "Um tutor que leu suas anotações, com uma cota do mês sempre visível em porcentagem.",
      features: [
        "Faz perguntas sobre o que você escreveu",
        "Faz uma prova oral e diz o que falta",
        "Dá um título a cada conceito que você escreve",
        "Transforma fórmulas escritas à mão em fórmulas editáveis",
        "E você pode fazer perguntas às suas anotações, num chat",
        "Uma cota por mês, sempre visível em porcentagem",
        "Os primeiros 14 dias são grátis",
      ],
      cta: { label: "Testar o Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera Em todo lugar + Mentor",
      price: "€99,99",
      period: "por ano · economize €14,99 em relação aos dois separados · com 60 GB €119,99 / ano",
      tagline:
        "Todo o Fluera, em cada dispositivo, com o tutor. O plano recomendado.",
      features: [
        "Todo o Em todo lugar: 20 GB e aulas com áudio",
        "Todo o Mentor: perguntas, prova, títulos e fórmulas",
        "Uma cota por mês, sempre visível em porcentagem",
        "Somente anual",
      ],
      cta: { label: "Escolher Em todo lugar + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
  ],
  faq: [
    {
      q: "Como vejo quanto Mentor ainda tenho?",
      a: "No app, sempre. Um contador mostra em porcentagem quanto resta da cota do Mentor no mês, quando ela recarrega (no dia 1º) e, no seu ritmo, até quando ela dura. Sem limites escondidos e sem créditos para converter de cabeça: o que você vê é o que você tem.",
    },
    {
      q: "E se o Mentor do mês acabar?",
      a: "Revisão, cursos e suas anotações funcionam sempre, mesmo sem o Mentor. O Mentor volta no dia 1º; se precisar antes, no app você pode ativar a reserva de prova ou adicionar um pouco mais.",
    },
    {
      q: "Comprando uma vez, vale em todos os meus dispositivos?",
      a: "Sim. Você assina pelo app Fluera no celular ou tablet, via App Store ou Google Play, e paga com as formas de pagamento salvas na sua conta da loja. Depois, seu plano vale em todos os dispositivos em que você entrar com a mesma conta, computadores incluídos.",
    },
    {
      q: "O Em todo lugar já funciona entre dispositivos?",
      a: "Ainda não. A sincronização entre celular, tablet e computador está em construção e é ativada com uma atualização do app. Até lá seus canvas ficam no dispositivo, onde também funcionam offline.",
    },
    {
      q: "Tem teste grátis?",
      a: "Sim: 14 dias grátis, só no Mentor. Você pode cancelar na loja quando quiser, antes do fim do teste. O Fluera grátis não expira e não pede nenhum pagamento.",
    },
    {
      q: "O que acontece com meus canvas se eu cancelar?",
      a: "Continuam seus, no dispositivo: canvas, revisão, cursos, pincéis e exportação continuam funcionando de graça. Se você tinha o Em todo lugar, tem 6 meses para baixar tudo, e a tinta fica para sempre. Nada é apagado sem uma ação sua.",
    },
    {
      q: "Política de reembolso?",
      a: "As condições de reembolso e cancelamento dependem da loja e do canal de compra. A política aplicável aparece antes da confirmação; para ajuda, escreva para support@fluera.dev usando o endereço cadastrado.",
    },
    {
      q: "Planos Team ou Education?",
      a: "Chegam na fase 2 (workspaces compartilhados, dashboard admin, SSO). Interessado? Manda email para support@fluera.dev — estamos construindo a roadmap com nossos primeiros design partners.",
    },
  ],
};

export default data;
