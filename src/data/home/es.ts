import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "Captura",                verb: "Día de clase",          description: "Escribe los conceptos a mano durante la clase. Posiciónalos en el espacio. La pluma lenta fuerza la compresión mental — ahí nace la codificación." },
    { n: 2,  title: "Reconstrucción",         verb: "Esa misma noche",       description: "Cierra el libro. Reconstruye lo que recuerdas en un canvas vacío. Los nodos rojos donde dudas son el mapa de qué estudiar (Kapur, productive failure, 2008)." },
    { n: 3,  title: "Socrática",              verb: "En 48 horas",           description: "La IA pregunta, tú respondes. Declaras tu confianza del 1 al 5 antes de cada revelación. Metacognición hecha explícita." },
    { n: 4,  title: "Centauro",               verb: "Justo después",         description: "Ghost Map superpone tu razonamiento al mapa ideal. La hipercorrección fija las correcciones en la memoria (Butterfield & Metcalfe, 2001)." },
    { n: 5,  title: "Sueño",                  verb: "Esa noche",             description: "No hagas nada. El sueño de ondas lentas reproduce el día. El hipocampo pasa las trazas a la corteza. Nuestro trabajo es apartarnos." },
    { n: 6,  title: "Primer retorno",         verb: "Día 1",                 description: "Vuelve al día siguiente. El canvas atenúa lo que casi sabías. Recupéralo de la memoria y reescribe lo que se escapó." },
    { n: 7,  title: "Aprendizaje entre pares",verb: "Días 2–3",              description: "Visita el canvas de un compañero. Enseña. Déjate enseñar. Organizar para otros lo consolida en ti (aprendizaje por enseñanza)." },
    { n: 8,  title: "Retornos espaciados",    verb: "Día 3 · 7 · 14…",       description: "Reaprendizaje sucesivo a intervalos crecientes. La estrategia gold standard de la evidencia científica (Rawson & Dunlosky, 2011)." },
    { n: 9,  title: "Puentes entre dominios", verb: "Semanas después",       description: "Aleja el zoom a la vista continente. Traza flechas entre química y ecuaciones diferenciales. La transferencia es la prueba real del aprendizaje." },
    { n: 10, title: "Preparación de examen",  verb: "7–14 días antes",       description: "Fog of War. Navega en la niebla de tu propio canvas. Verde, rojo, puntos ciegos — el mapa de dominio se dibuja solo." },
    { n: 11, title: "Exam Session",           verb: "7 días antes · El día", description: "Fluera genera un examen a libro cerrado desde tu propio canvas. Declara tu confianza del 1 al 5, responde a mano, y Ghost Map superpone la brecha. La hipercorrección fija para siempre los puntos donde estabas seguro y te equivocaste (Butterfield & Metcalfe, 2001)." },
    { n: 12, title: "Crecimiento permanente", verb: "Para siempre",          description: "El canvas persiste como autobiografía cognitiva. Vuelves dos años después y ves la forma tangible de cuánto has crecido." },
  ],
  authors: [
    { name: "Robert A. Bjork",        contribution: "Desirable difficulties — el hallazgo contraintuitivo de que un estudio más difícil produce mejor recuerdo.", year: "1994" },
    { name: "Butterfield y Metcalfe", contribution: "Efecto de hipercorrección — los errores cometidos con alta confianza, una vez corregidos, son los más duraderos.", year: "2001" },
    { name: "Daniel Kahneman",        contribution: "Sistema 1 vs Sistema 2 — intuición rápida frente a deliberación lenta en el pensamiento y la memoria.", year: "2011" },
    { name: "Lev Vygotsky",           contribution: "Zona de desarrollo próximo — la franja estrecha donde aprender con andamiaje supera al aprendizaje en solitario.", year: "1978" },
    { name: "Albert Bandura",         contribution: "Autoeficacia — el predictor más fuerte del éxito académico, por encima del CI.", year: "1977" },
    { name: "Carol Dweck",            contribution: "Mentalidad de crecimiento — elogiar el esfuerzo en lugar del talento cambia la respuesta a la dificultad.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi",contribution: "Flow — máximo rendimiento cognitivo cuando reto y habilidad se equilibran y el feedback es inmediato.", year: "1990" },
    { name: "Joseph Novak",           contribution: "Concept mapping — construir un mapa supera a estudiar uno prefabricado, en cualquier disciplina.", year: "1984" },
    { name: "O'Keefe y Moser",        contribution: "Place cells y grid cells — el GPS biológico del cerebro. Por qué funciona el Palacio de la Memoria.", year: "Nobel 2014", nobel: true },
    { name: "Mueller y Oppenheimer",  contribution: "Los apuntes a mano superan a los del portátil en preguntas conceptuales — incluso cuando los del portátil son más completos.", year: "2014" },
    { name: "Audrey van der Meer",    contribution: "Evidencia EEG: la escritura a mano activa redes cerebrales más amplias que la escritura con teclado.", year: "2020" },
    { name: "Roediger y Karpicke",    contribution: "Práctica de recuperación — el examen no mide la memoria, la crea.", year: "2006" },
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
};

export default data;
