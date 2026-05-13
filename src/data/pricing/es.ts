import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "para siempre",
      tagline: "El canvas completo. Tres cuadernos. Gratis para siempre.",
      features: [
        "Canvas infinito, 13 pinceles, motor de escritura a mano completo",
        "3 cuadernos, páginas ilimitadas",
        "Local-first — totalmente offline",
        "Exportación en PNG y PDF",
        "Socratic mode básico",
      ],
      cta: { label: "Empieza gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "al mes · €49/año",
      tagline: "Canvas completo, sincronización en 2 dispositivos, IA básica.",
      features: [
        "Todos los pinceles + capas ilimitadas",
        "Sincronización en 2 dispositivos",
        "Exportación en PDF y todos los formatos básicos",
        "Cuota de IA básica (Atlas, Ghost Map básico)",
        "Anual a €49 (unos €4,08/mes)",
      ],
      cta: { label: "Empezar con Plus", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "al mes · €99/año",
      tagline: "Exam Session, Atlas, suite de IA completa, time travel y sincronización ilimitados.",
      features: [
        "Exam Session — exámenes simulados desde tu canvas con feedback de hipercorrección",
        "Atlas vista continente + Cross-Zone Bridges en todos los cuadernos",
        "Suite de IA completa (Ghost Map, Socratic, Fog of War, scheduler FSRS)",
        "Cuadernos ilimitados",
        "Sincronización multi-dispositivo cifrada de extremo a extremo",
        "Time Travel con replay sincronizado al audio",
        "Todos los formatos de exportación (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Soporte por correo prioritario",
        "Anual a €99 (unos €8,25/mes)",
      ],
      cta: { label: "Conviértete en Pro", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19,99",
      period: "por asiento / mes · €179/año por asiento · desde 5 asientos",
      tagline: "Canvas compartidos para estudios, labs y equipos pequeños.",
      features: [
        "Todo lo de Pro para cada miembro del equipo",
        "Workspace compartido con team Atlas",
        "Permisos role-based y ACL",
        "Dashboard admin + registro de auditoría",
        "Facturación de equipo (factura única, IVA gestionado)",
        "Soporte prioritario, onboarding dedicado",
      ],
      cta: { label: "Habla con sales", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "¿Por qué publicáis precios si estáis en beta privada?",
      a: "Son los precios de la V1. Quien se suscribe ahora bloquea la tarifa de su plan durante toda la duración de la suscripción — incluso si la tabla cambia después.",
    },
    {
      q: "¿Cómo funciona la verificación de estudiante?",
      a: "Te registras con un correo .edu, .ac.uk o académico verificado. Si tu universidad no usa un dominio académico (común en España y LATAM), aceptamos carnet de estudiante escaneado, ISIC o un correo único de la secretaría de la facultad.",
    },
    {
      q: "¿Qué pasa con mis cuadernos si cancelo Plus o Pro?",
      a: "Los cuadernos quedan en tu dispositivo y vuelven al tier Free. Mantienes los tres primeros; los demás pasan a sólo lectura hasta que reactives o los exportes. Nada se borra sin una acción explícita tuya.",
    },
    {
      q: "¿Hay política de reembolso?",
      a: "Sí — 30 días, sin preguntas, en planes mensuales y anuales. Escribe a support@fluera.dev desde la dirección con la que te registraste.",
    },
    {
      q: "¿Puedo hacer self-hosting de Fluera?",
      a: "La parte local-first ya funciona totalmente offline en las seis plataformas. El self-hosting del cloud sync está en la roadmap Education (on-prem, SSO, registro de auditoría) — todavía no disponible hoy.",
    },
    {
      q: "¿Ofrecéis descuentos para investigadores u ONGs?",
      a: "Sí. Laboratorios de investigación, programas de doctorado y ONGs registradas pueden solicitarlo en /contact. Lo evaluamos caso por caso y solemos conceder Pro al precio Student, o gratis a cambio de feedback estructurado.",
    },
    {
      q: "¿Por qué no hay trial gratuito de Plus o Pro?",
      a: "El tier Free no es marketing capado — es el canvas completo. Úsalo el tiempo que necesites. Plus y Pro liberan IA y sincronización, que tienen costes de nube recurrentes que no podemos regalar.",
    },
    {
      q: "¿Qué métodos de pago aceptáis?",
      a: "Tarjeta de crédito/débito vía Stripe (todas las marcas principales), SEPA para clientes UE, Apple Pay y Google Pay. Los clientes Education pueden pagar por transferencia bancaria u orden de compra.",
    },
  ],
};

export default data;
