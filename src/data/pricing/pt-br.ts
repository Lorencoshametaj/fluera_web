// 🇧🇷 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "para sempre",
      tagline:
        "O canvas completo para experimentar o método. 100 créditos de IA por mês, sempre visíveis.",
      features: [
        "Canvas infinito, escrita à mão, motor de renderização completo",
        "3 pincéis base (lápis, caneta-tinteiro, marca-texto — mais no Plus)",
        "Exportação PNG",
        "100 créditos de IA por mês — Atlas e Chat Fluera AI sempre grátis",
        "Socratic 3 sessões/sem., Ghost Map 3 comparações/sem., 1 Exam/sem.",
        "Fog of War, FSRS (repetição espaçada)",
        "Cross-Zone Bridges — veja as conexões entre conceitos que o sistema descobre",
        "📍 3 Checkpoints por canvas — salve um momento de estudo e volte quando quiser",
        "Prévia de Time Travel + sync áudio↔traço em um canvas demo (somente leitura)",
        "Local-first, totalmente offline (1 dispositivo)",
      ],
      cta: { label: "Começar grátis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "por mês · €49 / ano (economiza €22 — 2 meses grátis)",
      tagline:
        "Estudo individual completo: cloud sync, IA sem limites semanais, gravação de voz ilimitada.",
      features: [
        "Cloud sync 5 GB em 2 dispositivos — seus canvas também no iPad e desktop",
        "Socratic, Ghost Map, Exam sem limites de frequência (sem mais 3/semana)",
        "5× mais créditos de IA que Free (500 por mês — cerca de 60 Ghost Maps ou 18 sessões Socratic completas)",
        "Gravação de voz ilimitada",
        "Todos os pincéis V1 (6 no total, mais chegando)",
        "Exportação completa (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — crie e edite suas próprias conexões entre conceitos",
        "📍 Checkpoints ilimitados por canvas",
        "7 dias de teste grátis, cancelável a qualquer momento",
      ],
      cta: { label: "Experimentar Plus", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "por mês · €99 / ano (economiza €44 — 3,5 meses grátis)",
      tagline:
        "Estudo amplificado: Time Travel, sync áudio↔traço, colaboração em tempo real, busca em todos os canvas.",
      features: [
        "⏱️ Scrubber Time Travel — assista seu estudo em replay",
        "🎤 Sync áudio ↔ traço — toca um traço e ouve novamente o que dizia naquele momento",
        "🤝 Colaboração no canvas em tempo real (CRDT) — convida colegas com um link",
        "🔍 Background OCR proativo — busca uma fórmula escrita há meses, encontra em todos os canvas",
        "Cloud sync 50 GB, dispositivos ilimitados",
        "Suporte prioritário por email",
        "2000 créditos de IA por mês",
      ],
      cta: { label: "Virar Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Como funcionam os créditos de IA?",
      a: "Cada operação de IA tem custo fixo em créditos: Ghost Map 8, Socratic 4 por estágio, Exam 12 por questão, Chat 1 por mensagem. Atlas (ações no canvas) e Background OCR básico são grátis. Você sempre vê quantos créditos restam no cabeçalho do canvas — sem rate limits ocultos, sem surpresas. Créditos não usados não acumulam: o plano recarrega a cada 30 dias a partir da sua data de inscrição (não no dia 1 do mês — você paga 30 dias e recebe 30 dias).",
    },
    {
      q: "E se eu acabar os créditos antes do reset?",
      a: "Avisamos antes — um alerta quando você usou 80% do ciclo. Ao chegar a zero, as funções de IA param com uma mensagem clara (nunca bloqueios silenciosos). Espera o próximo ciclo de 30 dias ou faz upgrade.",
    },
    {
      q: "Por que o Pro custa o dobro se são só três pilares?",
      a: "Pro não é 'Plus com mais créditos' — é estudo amplificado. Time Travel reproduz sua sessão de estudo com áudio sincronizado por traço: você toca uma fórmula e ouve novamente a explicação que dava para si mesmo. A colaboração CRDT em tempo real permite trabalhar simultaneamente com colegas no mesmo canvas. Notability, GoodNotes e Notion AI não entregam essa stack — não nesse nível de integração.",
    },
    {
      q: "O que acontece com meus canvas se eu cancelar Plus ou Pro?",
      a: "Tudo fica no seu dispositivo (local-first) e os 3 pincéis base + exportação PNG continuam funcionando no tier Free. Canvas extras ficam somente leitura até reativar ou exportar. Nada é deletado sem uma ação explícita sua.",
    },
    {
      q: "Por que não tem trial grátis do Pro?",
      a: "Plus tem 7 dias de trial grátis. Pro não: a colaboração em tempo real + scrubber Time Travel são funções recorrentes com custos cloud que não dá para dar de graça. Se quer testar o método, Free é o canvas completo — use o quanto precisar.",
    },
    {
      q: "O que é um Checkpoint?",
      a: "Um Checkpoint é um marcador do seu canvas em um momento específico — tipo \"salvar como\". Você cria quando quiser (ex. \"antes da prova\", \"depois de terminar o capítulo 3\") e volta quando quiser: restaura o estado do canvas naquele ponto. É diferente do Time Travel: o Checkpoint é um ponto fixo que você escolheu, Time Travel é o scrubber contínuo sobre todo o histórico. Free inclui 3 Checkpoints por canvas, Plus ilimitados.",
    },
    {
      q: "Posso experimentar Time Travel + sync áudio↔traço antes de virar Pro?",
      a: "Sim. Todo usuário Free encontra um canvas demo pré-carregado onde pode abrir o scrubber Time Travel e tocar nos traços para ouvir novamente o áudio sincronizado — somente leitura, no demo. Para gravar seus próprios estudos, é Pro.",
    },
    {
      q: "Política de reembolso?",
      a: "30 dias, sem perguntas, tanto no mensal quanto no anual. Manda email para support@fluera.dev do endereço que você se inscreveu.",
    },
    {
      q: "Como funciona a verificação de estudante?",
      a: "Email .edu ou acadêmico verificado. Para universidades brasileiras (.edu.br) ou europeias sem .edu, aceitamos carteirinha de estudante digitalizada, ISIC ou email único da secretaria da faculdade.",
    },
    {
      q: "Descontos para pesquisadores ou ONGs?",
      a: "Sim. Laboratórios de pesquisa, programas de doutorado e ONGs registradas podem pedir em /contact — geralmente concedemos Pro no preço Plus ou grátis em troca de feedback estruturado.",
    },
    {
      q: "Quais formas de pagamento aceitam?",
      a: "PIX, Boleto bancário, cartões de crédito/débito via Stripe, Apple Pay e Google Pay. Clientes Education podem pagar por transferência bancária ou ordem de compra.",
    },
    {
      q: "Planos Team ou Education?",
      a: "Chegam na fase 2 (workspaces compartilhados, dashboard admin, SSO). Interessado? Manda email para sales@fluera.dev — estamos construindo a roadmap com nossos primeiros design partners.",
    },
  ],
};

export default data;
