import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "para sempre",
      tagline: "O canvas completo. Três cadernos. Grátis para sempre.",
      features: [
        "Canvas infinito, 13 pincéis, motor de escrita à mão completo",
        "3 cadernos, páginas ilimitadas",
        "Local-first — totalmente offline",
        "Exportação em PNG e PDF",
        "Socratic mode básico",
      ],
      cta: { label: "Comece grátis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "por mês · €49/ano",
      tagline: "Canvas completo, sincronização em 2 dispositivos, IA básica.",
      features: [
        "Todos os pincéis + camadas ilimitadas",
        "Sincronização em 2 dispositivos",
        "Exportação em PDF e todos os formatos básicos",
        "Cota de IA básica (Atlas, Ghost Map básico)",
        "Anual a €49 (cerca de €4,08/mês)",
      ],
      cta: { label: "Começar com Plus", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "por mês · €99/ano",
      tagline: "Exam Session, Atlas, suíte de IA completa, time travel e sincronização ilimitados.",
      features: [
        "Exam Session — provas simuladas do seu canvas com feedback de hipercorreção",
        "Atlas vista continente + Cross-Zone Bridges em todos os cadernos",
        "Suíte de IA completa (Ghost Map, Socratic, Fog of War, scheduler FSRS)",
        "Cadernos ilimitados",
        "Sincronização multi-dispositivo com criptografia ponta a ponta",
        "Time Travel com replay sincronizado ao áudio",
        "Todos os formatos de exportação (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Suporte por e-mail prioritário",
        "Anual a €99 (cerca de €8,25/mês)",
      ],
      cta: { label: "Tornar-se Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "por seat / mês · €179/ano por seat · a partir de 5 seats",
      tagline: "Canvas compartilhados para estúdios, labs e times pequenos.",
      features: [
        "Tudo do Pro para cada membro do time",
        "Workspace compartilhado com team Atlas",
        "Permissões role-based e ACL",
        "Dashboard admin + trilha de auditoria",
        "Faturamento por time (fatura única, IVA gerenciado)",
        "Suporte prioritário, onboarding dedicado",
      ],
      cta: { label: "Falar com sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "Por que vocês mostram preços se estão em beta privada?",
      a: "São os preços da V1. Quem assina agora trava a tarifa do seu plano por toda a duração da assinatura — mesmo que a tabela mude depois.",
    },
    {
      q: "Como funciona a verificação de estudante?",
      a: "Você se cadastra com um e-mail .edu, .ac.uk ou acadêmico verificado. Se sua universidade não usa um domínio acadêmico (comum no Brasil), aceitamos carteirinha de estudante digitalizada, ISIC ou um e-mail único da secretaria da faculdade.",
    },
    {
      q: "O que acontece com meus cadernos se eu cancelar o Plus ou Pro?",
      a: "Os cadernos ficam no seu dispositivo e voltam para o tier Free. Você mantém os três primeiros; os outros ficam somente leitura até você reativar ou exportá-los. Nada é apagado sem ação explícita sua.",
    },
    {
      q: "Existe política de reembolso?",
      a: "Sim — 30 dias, sem perguntas, em planos mensais e anuais. Escreva para support@fluera.dev a partir do endereço com o qual você se cadastrou.",
    },
    {
      q: "Posso fazer self-hosting do Fluera?",
      a: "A parte local-first já roda totalmente offline em todas as seis plataformas. O self-hosting do cloud sync está no roadmap Education (on-prem, SSO, trilha de auditoria) — ainda não disponível hoje.",
    },
    {
      q: "Vocês oferecem desconto para pesquisadores ou ONGs?",
      a: "Sim. Laboratórios de pesquisa, programas de doutorado e ONGs registradas podem solicitar em /contact. Avaliamos caso a caso e geralmente concedemos Pro pelo preço Student, ou grátis em troca de feedback estruturado.",
    },
    {
      q: "Por que não há trial gratuito do Plus ou Pro?",
      a: "O tier Free não é marketing capado — é o canvas completo. Use enquanto precisar. Plus e Pro liberam IA e sincronização, que têm custos de nuvem recorrentes que não conseguimos dar de graça.",
    },
    {
      q: "Quais formas de pagamento vocês aceitam?",
      a: "Cartão de crédito/débito via Stripe (todas as bandeiras principais), SEPA para clientes da UE, Apple Pay e Google Pay. Clientes Education podem pagar por transferência bancária ou ordem de compra.",
    },
  ],
};

export default data;
