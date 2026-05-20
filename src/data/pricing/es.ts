// 🇪🇸 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "para siempre",
      tagline:
        "El canvas completo para probar el método. 100 créditos de IA al mes, siempre visibles.",
      features: [
        "Canvas infinito, escritura a mano, motor de renderizado completo",
        "3 pinceles base (lápiz, pluma estilográfica, marcador — más en Plus)",
        "Exportación PNG",
        "100 créditos de IA al mes — Atlas y Chat Fluera AI siempre gratis",
        "Socratic 3 sesiones/sem., Ghost Map 3 comparaciones/sem., 1 Exam/sem.",
        "Fog of War, FSRS (repetición espaciada)",
        "Cross-Zone Bridges — ve las conexiones entre conceptos que el sistema descubre",
        "📍 3 Checkpoints por canvas — guarda un momento de estudio y vuelve a él cuando quieras",
        "Vista previa de Time Travel + sync audio↔trazo en un canvas demo (solo lectura)",
        "Local-first, totalmente offline (1 dispositivo)",
      ],
      cta: { label: "Empezar gratis", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5,99",
      period: "al mes · €49 / año (ahorras €22 — 2 meses gratis)",
      tagline:
        "Estudio individual completo: cloud sync, IA sin contadores semanales, voz ilimitada.",
      features: [
        "Cloud sync 5 GB en 2 dispositivos — tus canvas también en iPad y escritorio",
        "Socratic, Ghost Map, Exam sin límites de frecuencia (no más 3/semana)",
        "5× más créditos de IA que Free (500 al mes — alrededor de 60 Ghost Map o 18 sesiones Socratic completas)",
        "Grabación de voz ilimitada",
        "Todos los pinceles V1 (6 en total, más en camino)",
        "Exportación completa (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — crea y edita tus propias conexiones entre conceptos",
        "📍 Checkpoints ilimitados por canvas",
        "Prueba gratis de 7 días, cancelable en cualquier momento",
      ],
      cta: { label: "Probar Plus", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
    {
      name: "Pro",
      price: "€11,99",
      period: "al mes · €99 / año (ahorras €44 — 3,5 meses gratis)",
      tagline:
        "Estudio amplificado: Time Travel, sync audio↔trazo, colaboración en tiempo real, búsqueda en todos los canvas.",
      features: [
        "⏱️ Scrubber de Time Travel — revisa tu estudio en reproducción",
        "🎤 Sync audio ↔ trazo — tocas un trazo y vuelves a escuchar lo que decías en ese momento",
        "🤝 Colaboración en canvas en tiempo real (CRDT) — invitas compañeros con un enlace",
        "🔍 Background OCR proactivo — busca una fórmula escrita hace meses, la encuentra en todos los canvas",
        "Cloud sync 50 GB, dispositivos ilimitados",
        "Soporte prioritario por email",
        "2000 créditos de IA al mes",
      ],
      cta: { label: "Hazte Pro", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "¿Cómo funcionan los créditos de IA?",
      a: "Cada operación de IA tiene un coste fijo en créditos: Ghost Map 8, Socratic 4 por etapa, Exam 12 por pregunta, Chat 1 por mensaje. Atlas (acciones del canvas) y Background OCR básico son gratis. Siempre ves cuántos créditos te quedan en la cabecera del canvas — sin rate limits ocultos, sin sorpresas. Los créditos no usados no se acumulan: el plan se recarga cada 30 días desde tu fecha de suscripción (no el 1 del mes — pagas 30 días y recibes 30 días).",
    },
    {
      q: "¿Y si termino los créditos antes del reset?",
      a: "Te avisamos antes — una alerta cuando has usado el 80% del ciclo. Cuando llegas a cero, las funciones de IA se detienen con un mensaje claro (nunca bloqueos silenciosos). Espera el próximo ciclo de 30 días o sube de plan.",
    },
    {
      q: "¿Por qué Pro cuesta el doble si solo son tres pilares?",
      a: "Pro no es 'Plus con más créditos' — es estudio amplificado. Time Travel reproduce tu sesión de estudio con audio sincronizado por cada trazo: tocas una fórmula y vuelves a escuchar la explicación que te dabas. La colaboración CRDT en tiempo real te permite trabajar simultáneamente con compañeros o colegas en el mismo canvas. Notability, GoodNotes y Notion AI no ofrecen este stack — no a este nivel de integración.",
    },
    {
      q: "¿Qué pasa con mis canvas si cancelo Plus o Pro?",
      a: "Todo se queda en tu dispositivo (local-first) y los 3 pinceles base + exportación PNG siguen funcionando en el tier Free. Los canvas extra quedan en solo lectura hasta que reactives o exportes. Nada se elimina sin una acción explícita tuya.",
    },
    {
      q: "¿Por qué no hay prueba gratis de Pro?",
      a: "Plus tiene 7 días de prueba gratis. Pro no: la colaboración en tiempo real + scrubber de Time Travel son funciones recurrentes con costes cloud que no podemos regalar. Si quieres probar el método, Free es el canvas completo — úsalo todo lo que necesites.",
    },
    {
      q: "¿Qué es un Checkpoint?",
      a: "Un Checkpoint es un marcador de tu canvas en un momento concreto — como un \"guardar como\". Lo creas cuando quieres (ej. \"antes del examencito\", \"al terminar el capítulo 3\") y vuelves cuando quieres: restaura el estado del canvas a ese punto. Es distinto de Time Travel: el Checkpoint es un punto fijo elegido por ti, Time Travel es el scrubber continuo sobre todo el historial. Free incluye 3 Checkpoints por canvas, Plus ilimitados.",
    },
    {
      q: "¿Puedo probar Time Travel + sync audio↔trazo antes de pasar a Pro?",
      a: "Sí. Cada usuario Free encuentra un canvas demo precargado donde puede abrir el scrubber de Time Travel y tocar los trazos para volver a escuchar el audio sincronizado — solo lectura, en el demo. Para grabar tus propios estudios necesitas Pro.",
    },
    {
      q: "¿Política de reembolso?",
      a: "30 días, sin preguntas, tanto en mensual como anual. Escribe a support@fluera.dev desde la dirección con la que te suscribiste.",
    },
    {
      q: "¿Cómo funciona la verificación de estudiante?",
      a: "Email .edu o académico verificado. Para universidades europeas sin .edu aceptamos carné de estudiante escaneado, ISIC o un email único de la secretaría de la facultad.",
    },
    {
      q: "¿Descuentos para investigadores o no-profit?",
      a: "Sí. Laboratorios de investigación, programas de doctorado y no-profit registrados pueden solicitarlo en /contact — normalmente concedemos Pro al precio Plus o gratis a cambio de feedback estructurado.",
    },
    {
      q: "¿Qué métodos de pago aceptáis?",
      a: "Tarjetas de crédito/débito vía Stripe, SEPA para clientes UE, Apple Pay y Google Pay. Bizum donde Stripe lo soporta. Clientes Education pueden pagar por transferencia bancaria o pedido de compra.",
    },
    {
      q: "¿Planes Team o Education?",
      a: "Llegan en la fase 2 (workspaces compartidos, dashboard admin, SSO). ¿Interesado? Escribe a sales@fluera.dev — estamos construyendo la hoja de ruta con nuestros primeros design partners.",
    },
  ],
};

export default data;
