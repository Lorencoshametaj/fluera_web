import type { PricingData } from "../types";

// Listino del 22/10/2026 (Free, Cloud, IA, Cloud + IA). Allineato a it.ts.
// Gli importi di `price` e `period` li controlla
// fluera_engine/tool/public_truth_gate.dart contro FlueraPricing, per `id`.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "para sempre",
      tagline:
        "O canvas completo, a revisão e os cursos. Sem assinatura e sem prazo.",
      features: [
        "Canvas infinito e escrita à mão",
        "Revisão, cursos, todos os pincéis, exportação e time travel",
        "Uma amostra de IA no primeiro mês após o cadastro",
        "500 MB de nuvem em todos os seus dispositivos, sem áudio, quando o Cloud for ativado",
        "Funciona também offline: seus canvas ficam no dispositivo",
      ],
      cta: { label: "Começar grátis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "por ano · somente anual · Cloud 60 por €44,99 / ano",
      tagline:
        "Espaço para seus canvas e suas aulas gravadas. É ativado com uma atualização do app.",
      features: [
        "20 GB nos seus dispositivos: celular, tablet e computador",
        "As aulas gravadas tocam em qualquer lugar",
        "Seus canvas seguros, mesmo se trocar de celular",
        "Cloud 60: 60 GB para quem grava muitas aulas",
      ],
      cta: { label: "Escolher Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "IA",
      price: "€9,99",
      period: "por mês · €84,99 / ano (economize €34,89)",
      tagline: "Uma IA que lê o que você escreve, com um contador sempre visível.",
      features: [
        "A IA lê suas anotações e dá nome a cada conceito",
        "Tutor, provas, chat, fórmulas e transcrição",
        "Você sempre vê quanta IA ainda tem no mês, em porcentagem",
        "Reserva de prova para os meses mais pesados",
        "14 dias grátis para experimentar",
      ],
      cta: { label: "Experimentar a IA", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + IA",
      price: "€99,99",
      period: "por ano · economize €4,99 em relação aos dois separados · com Cloud 60 €119,99 / ano",
      tagline: "Todo o Cloud e toda a IA, em uma assinatura só.",
      features: [
        "Todo o Cloud e toda a IA",
        "20 GB, ou 60 GB com Cloud 60 + IA",
        "Você sempre vê quanta IA ainda tem no mês, em porcentagem",
        "Somente anual",
      ],
      cta: { label: "Escolher Cloud + IA", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
  ],
  faq: [
    {
      q: "Como vejo quanta IA ainda tenho?",
      a: "No app, sempre. Um contador mostra em porcentagem quanta IA do mês ainda resta, quando ela recarrega (no dia 1º de cada mês) e, no seu ritmo, até quando ela dura. Sem limites escondidos e sem créditos para converter de cabeça: o que você vê é o que você tem.",
    },
    {
      q: "E se a IA do mês acabar?",
      a: "A revisão, os cursos e suas anotações sempre funcionam, mesmo sem IA. A IA volta no dia 1º do mês; se precisar antes, pelo app você pode ativar a reserva de prova ou adicionar um pouco mais.",
    },
    {
      q: "Comprando uma vez, vale em todos os meus dispositivos?",
      a: "Sim. Você assina pelo app Fluera no celular ou tablet, via App Store ou Google Play, e paga com as formas de pagamento salvas na sua conta da loja. Depois, seu plano vale em todos os dispositivos em que você entrar com a mesma conta, computadores incluídos.",
    },
    {
      q: "O Cloud já funciona entre dispositivos?",
      a: "Ainda não. O Cloud entre celular, tablet e computador está em construção e é ativado com uma atualização do app. Até lá seus canvas ficam no dispositivo, onde funcionam também offline.",
    },
    {
      q: "Existe um teste grátis?",
      a: "Sim: 14 dias grátis, somente na IA. Você pode cancelar pela loja quando quiser, antes do fim do teste. O Free não expira e não pede nenhum pagamento.",
    },
    {
      q: "O que acontece com meus canvas se eu cancelar?",
      a: "Continuam seus, no dispositivo: canvas, revisão, cursos, pincéis e exportação seguem funcionando no Free. As funções do plano param até você reativá-lo. Nada é apagado sem uma ação sua.",
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
