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
      period: "para siempre",
      tagline:
        "El canvas completo, el repaso y las asignaturas. Sin suscripción y sin caducidad.",
      features: [
        "Canvas infinito y escritura a mano",
        "Repaso, asignaturas, todos los pinceles, exportación y time travel",
        "Una muestra de IA en el primer mes desde que te registras",
        "500 MB de nube en todos tus dispositivos, sin audio, cuando Cloud se active",
        "Funciona también sin conexión: tus canvas se quedan en el dispositivo",
      ],
      cta: { label: "Empezar gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19,99",
      period: "al año · solo anual · Cloud 60 a €44,99 / año",
      tagline:
        "Espacio para tus canvas y tus clases grabadas. Se activa con una actualización de la app.",
      features: [
        "20 GB en tus dispositivos: móvil, tableta y ordenador",
        "Las clases grabadas se escuchan en cualquier lugar",
        "Tus canvas a salvo, aunque cambies de móvil",
        "Cloud 60: 60 GB para quien graba muchas clases",
      ],
      cta: { label: "Elegir Cloud", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "IA",
      price: "€9,99",
      period: "al mes · €84,99 / año (ahorras €34,89)",
      tagline: "Una IA que lee lo que escribes, con un contador siempre visible.",
      features: [
        "La IA lee tus apuntes y da nombre a cada concepto",
        "Tutor, exámenes, chat, fórmulas y transcripción",
        "Ves siempre cuánta IA te queda en el mes, en porcentaje",
        "Reserva de examen para los meses más intensos",
        "14 días gratis para probarla",
      ],
      cta: { label: "Probar la IA", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + IA",
      price: "€99,99",
      period: "al año · ahorras €4,99 frente a los dos por separado · con Cloud 60 €119,99 / año",
      tagline: "Todo el Cloud y toda la IA, en una sola suscripción.",
      features: [
        "Todo el Cloud y toda la IA",
        "20 GB, o 60 GB con Cloud 60 + IA",
        "Ves siempre cuánta IA te queda en el mes, en porcentaje",
        "Solo anual",
      ],
      cta: { label: "Elegir Cloud + IA", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
  ],
  faq: [
    {
      q: "¿Cómo veo cuánta IA me queda?",
      a: "En la app, siempre. Un contador te dice en porcentaje cuánta IA del mes te queda, cuándo se recarga (el día 1 de cada mes) y, a tu ritmo, hasta cuándo te alcanza. Sin límites ocultos y sin créditos que convertir de cabeza: lo que ves es lo que tienes.",
    },
    {
      q: "¿Y si se acaba la IA del mes?",
      a: "El repaso, las asignaturas y tus apuntes funcionan siempre, incluso sin IA. La IA vuelve el día 1 del mes; si la necesitas antes, desde la app puedes activar la reserva de examen o añadir un poco más.",
    },
    {
      q: "Si compro una vez, ¿vale en todos mis dispositivos?",
      a: "Sí. Te suscribes desde la app de Fluera en tu móvil o tableta, a través de App Store o Google Play, y pagas con los métodos guardados en tu cuenta de la tienda. Después, tu plan vale en todos los dispositivos donde inicies sesión con la misma cuenta, ordenadores incluidos.",
    },
    {
      q: "¿Cloud ya funciona entre dispositivos?",
      a: "Todavía no. Cloud entre móvil, tableta y ordenador está en construcción y se activa con una actualización de la app. Hasta entonces tus canvas se quedan en el dispositivo, donde funcionan también sin conexión.",
    },
    {
      q: "¿Hay una prueba gratuita?",
      a: "Sí: 14 días gratis, solo en la IA. Puedes cancelar desde la tienda cuando quieras, antes de que termine la prueba. Free no caduca y no pide ningún pago.",
    },
    {
      q: "¿Qué pasa con mis canvas si cancelo?",
      a: "Siguen siendo tuyos, en el dispositivo: canvas, repaso, asignaturas, pinceles y exportación siguen funcionando con Free. Las funciones del plan se detienen hasta que lo reactives. Nada se borra sin una acción tuya.",
    },
    {
      q: "¿Política de reembolso?",
      a: "Las condiciones de reembolso y desistimiento dependen de la tienda y del canal de compra. La política aplicable se muestra antes de confirmar; si necesitas ayuda, escribe a support@fluera.dev desde tu dirección de registro.",
    },
    {
      q: "¿Planes Team o Education?",
      a: "Llegan en la fase 2 (workspaces compartidos, dashboard admin, SSO). ¿Interesado? Escribe a support@fluera.dev — estamos construyendo la hoja de ruta con nuestros primeros design partners.",
    },
  ],
};

export default data;
