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
      period: "para siempre",
      tagline:
        "El canvas completo, el repaso y las asignaturas. Sin suscripción y sin caducidad.",
      features: [
        "Canvas infinito y escritura a mano",
        "Repaso, cursos, todos los pinceles, exportación y time travel",
        "Mentor para probar el primer mes",
        "500 MB iguales en todos tus dispositivos, sin audio, cuando se active la sincronización",
        "Funciona también sin conexión: tus canvas se quedan en el dispositivo",
      ],
      cta: { label: "Empezar gratis", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera En todas partes",
      price: "€29,99",
      period: "al año · solo anual · 60 GB a €44,99 / año",
      tagline:
        "Todo en el móvil, la tableta y el ordenador, sin pensar en el espacio. Se activa con una actualización de la app.",
      features: [
        "20 GB en lugar de los 500 MB del plan gratis",
        "Las clases grabadas, con el audio, en cada dispositivo",
        "Comparte un canvas y escribid juntos",
        "Si lo dejas, 6 meses para descargarlo todo. La tinta se queda para siempre.",
        "Ninguna función de estudio extra: ya están todas en el plan gratis",
      ],
      cta: { label: "Elegir En todas partes", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera Mentor",
      price: "€9,99",
      period: "al mes · €84,99 / año (ahorras €34,89)",
      tagline:
        "Un tutor que ha leído tus apuntes, con una cuota del mes siempre visible en porcentaje.",
      features: [
        "Te hace preguntas sobre lo que has escrito",
        "Te hace un examen oral y te dice qué falta",
        "Pone un título a cada concepto que escribes",
        "Convierte las fórmulas escritas a mano en fórmulas editables",
        "Y puedes hacer preguntas a tus apuntes, en un chat",
        "Una cuota al mes, siempre visible en porcentaje",
        "Los primeros 14 días son gratis",
      ],
      cta: { label: "Probar Mentor", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera En todas partes + Mentor",
      price: "€99,99",
      period: "al año · ahorras €14,99 frente a los dos por separado · con 60 GB €119,99 / año",
      tagline:
        "Todo Fluera, en cada dispositivo, con el tutor. El plan recomendado.",
      features: [
        "Todo En todas partes: 20 GB y las clases con audio",
        "Todo Mentor: preguntas, examen, títulos y fórmulas",
        "Una cuota al mes, siempre visible en porcentaje",
        "Solo anual",
      ],
      cta: { label: "Elegir En todas partes + Mentor", href: "/beta" },
      highlighted: true,
      badge: "Recomendado",
    },
  ],
  faq: [
    {
      q: "¿Cómo veo cuánto Mentor me queda?",
      a: "En la app, siempre. Un contador te dice en porcentaje cuánto te queda de la cuota de Mentor del mes, cuándo se recarga (el día 1) y, a tu ritmo, hasta cuándo te alcanza. Sin límites ocultos ni créditos que convertir de cabeza: lo que ves es lo que tienes.",
    },
    {
      q: "¿Y si se acaba Mentor del mes?",
      a: "El repaso, los cursos y tus apuntes funcionan siempre, incluso sin Mentor. Mentor vuelve el día 1; si lo necesitas antes, desde la app puedes activar la reserva de examen o añadir un poco más.",
    },
    {
      q: "Si compro una vez, ¿vale en todos mis dispositivos?",
      a: "Sí. Te suscribes desde la app de Fluera en tu móvil o tableta, a través de App Store o Google Play, y pagas con los métodos guardados en tu cuenta de la tienda. Después, tu plan vale en todos los dispositivos donde inicies sesión con la misma cuenta, ordenadores incluidos.",
    },
    {
      q: "¿En todas partes ya funciona entre dispositivos?",
      a: "Todavía no. La sincronización entre móvil, tableta y ordenador está en construcción y se activa con una actualización de la app. Hasta entonces tus canvas se quedan en el dispositivo, donde funcionan también sin conexión.",
    },
    {
      q: "¿Hay una prueba gratuita?",
      a: "Sí: 14 días gratis, solo en Mentor. Puedes cancelar desde la tienda cuando quieras, antes de que termine la prueba. Fluera gratis no caduca y no pide ningún pago.",
    },
    {
      q: "¿Qué pasa con mis canvas si cancelo?",
      a: "Siguen siendo tuyos, en tu dispositivo: canvas, repaso, cursos, pinceles y exportación siguen funcionando gratis. Si tenías En todas partes, tienes 6 meses para descargarlo todo, y la tinta se queda para siempre. No se borra nada sin una acción tuya.",
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
