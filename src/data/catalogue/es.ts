import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catálogo — Plantillas de estudio que se te instalan en la memoria",
    "description": "Una plantilla de estudio es una página escrita a mano y la estructura de conceptos que la sostiene. Al instalarla, siembras tu calendario de repasos.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "El Catálogo de Fluera",
    "description": "Catálogo de plantillas de estudio escritas a mano que se instalan como calendarios de repetición espaciada, ordenadas por retención medida y no por descargas.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "es"
  },
  "hero": {
    "kicker": "Catálogo",
    "title": "Este capítulo ya lo ha entendido alguien.<br />Instálalo y deja que te lo pregunte.",
    "description": "Una plantilla de estudio de Fluera no es un PDF ni un mazo de tarjetas. Es una página escrita a mano, la estructura de conceptos que la sostiene y la receta del calendario de repasos que pasará a ser el tuyo. Al instalarla, siembras ese calendario en un canvas tuyo.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Solicitar acceso anticipado →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Cómo funciona el calendario de repasos"
      }
    ]
  },
  "unit": {
    "kicker": "La unidad",
    "title": "Viajan tres cosas. El autor no es ninguna de ellas.",
    "sub": "Otras tiendas te entregan un documento y te desean suerte. Una plantilla de estudio lleva la página, la estructura que hace que esa página se pueda enseñar y las instrucciones para programarla. Lo que falta, falta a propósito: la parte que pertenece a quien la escribió.",
    "items": [
      {
        "title": "Una hoja acotada",
        "body": "No un cuaderno entero: una región que el autor encuadró en su propio canvas. Dentro del marco van los trazos, las formas, el texto tecleado y las imágenes; fuera del marco no va nada. Ningún PDF de origen viaja con ella."
      },
      {
        "title": "Un andamiaje de conceptos",
        "body": "La estructura que hay bajo la tinta: cuáles son los conceptos, a qué tema pertenece cada uno y de cuáles depende. Sin ella una plantilla se lee; con ella, se estudia."
      },
      {
        "title": "Una receta de tarjetas nuevas",
        "body": "No la memoria del autor: una receta para fabricar la tuya. Retención deseada, tipo de material y cuándo debe caer el primer repaso. Tu calendario se construye a partir de ahí en cuanto la instalas."
      }
    ]
  },
  "install": {
    "kicker": "Instalar",
    "title": "Un archivo se guarda.<br />Un calendario viene a buscarte.",
    "paragraphs": [
      "Descargar apuntes nunca ha sido lo difícil. Lo difícil es volver a ellos justo el día en que estabas a punto de olvidarlos, y eso no lo ha resuelto ninguna carpeta.",
      "Por eso instalar una plantilla no deja un documento en ningún sitio. Siembra tarjetas, con fecha. Heredas los conceptos del autor y la estructura que los une; nunca su historial de repasos, ni su confianza, ni lo bien que él lo llevaba. El formato no sabe transportar eso."
    ],
    "steps": [
      {
        "step": "01",
        "title": "La página llega en tinta",
        "body": "La hoja se restaura dentro de un canvas tuyo. Es escritura a mano sobre papel, no un PDF renderizado: puedes escribir encima, prolongarla y trocearla."
      },
      {
        "step": "02",
        "title": "Cada concepto se vuelve tarjeta",
        "body": "Una tarjeta de repetición espaciada recién hecha por cada concepto con nombre, sin historial detrás: cero repeticiones y una dificultad inicial a mitad del rango de Fluera. El primer repaso cae un día después."
      },
      {
        "step": "03",
        "title": "Desde ahí el calendario es tuyo",
        "body": "Se guarda en disco y alimenta tu insignia de pendientes y tu resumen diario igual que todo lo demás que has escrito. Reinstalar la misma plantilla no pone a cero el historial de repasos que ya habías construido."
      }
    ]
  },
  "ranking": {
    "kicker": "El orden",
    "title": "Ordenadas por lo que se queda en la cabeza,<br />no por lo que corre más deprisa.",
    "sub": "Un contador de descargas mide una decisión que se tomó antes de aprender nada. Es, además, el número más fácil de inflar de cualquier tienda. Fluera puede ordenar por algo mejor, porque la app ya modela cuánto retiene cada estudiante de cada concepto.",
    "items": [
      {
        "label": "Se mide en el dispositivo",
        "body": "Cuando vuelves a abrir el canvas de una plantilla el día 1, el 7 y el 30 —o más tarde—, Fluera le pregunta al modelo de repetición espaciada cuánto cree que sigues sosteniendo esos conceptos concretos, y saca de ahí un único número."
      },
      {
        "label": "Un número y nada más",
        "body": "Ese número es todo lo que sale. Ni títulos de conceptos, ni contenido de tarjetas, ni historial de repasos, ni identidad. Se envía solo si has iniciado sesión y has aceptado la analítica, y nunca si la plantilla es tuya."
      },
      {
        "label": "Por debajo de cinco, silencio",
        "body": "Una plantilla no muestra ninguna cifra pública hasta que al menos cinco estudiantes distintos hayan aportado la suya. Por debajo de ese umbral el orden recurre a las instalaciones y la tarjeta calla."
      },
      {
        "label": "El orden no lo deciden las descargas",
        "body": "La cuadrícula de «Todas las plantillas» se ordena por defecto según esa señal medida, no según la popularidad. Correr deprisa no compra un puesto ahí arriba."
      }
    ],
    "note": "<strong class=\"text-paper-100\">Lo que esto no es.</strong> Es la estimación de un modelo: cuánto sostienen los conceptos de una plantilla los estudiantes que volvieron a estudiarlos. No es el resultado de un examen, ni un grupo de control, ni una afirmación sobre quien instaló una plantilla y no volvió a abrirla. Preferimos describir la señal como es antes que adornarla."
  },
  "discovery": {
    "kicker": "Encontrar una",
    "title": "Tres maneras de acotar la búsqueda<br />y una cuarta que solo tu dispositivo puede hacer.",
    "sub": "Un catálogo de material de estudio falla siempre igual: todo trata en teoría de tu materia y casi nada trata de tu asignatura. Así que los filtros son los que un estudiante tiene de verdad en la cabeza.",
    "paragraphs": [
      "Puedes acotar por <strong class=\"text-paper-100\">materia</strong>, por <strong class=\"text-paper-100\">curso o examen</strong> —texto libre, así que <em>Maturità</em> y <em>MCAT</em> valen igual que <em>Análisis I</em>— y por <strong class=\"text-paper-100\">idioma</strong>. Cada filtro trae su recuento en vivo, todos se vuelven a consultar en cuanto eliges algo, y el que no tenga nada detrás ni siquiera aparece. Nunca se te ofrece un camino que acabe en una página vacía.",
      "El catálogo se abre en el idioma que tengas puesto en la app, porque un muro de material que no puedes leer no es un catálogo. Es una preferencia, no una valla: un toque lo abre a todos los idiomas.",
      "La búsqueda es de texto completo y perdona los acentos. Además deja de lado esa clasificación y ordena por relevancia: cuando ya has escrito lo que quieres, lo que retuvieron los demás deja de ser la pregunta."
    ],
    "marksHeading": "Qué quieren decir las marcas de una tarjeta",
    "marks": [
      {
        "mark": "Oficial",
        "body": "La pone el catálogo; no sale de nada que un autor pueda teclear en un formulario. No se consigue escribiéndola en el nombre visible."
      },
      {
        "mark": "Nueva",
        "body": "O se gana o no se tiene: sin instalaciones, sin valoraciones, publicada en la última semana. Caduca sola; nadie la apaga."
      },
      {
        "mark": "Materia",
        "body": "La disciplina bajo la que se archivó la plantilla, para distinguir de un vistazo una página de química de otra que solo la roza."
      },
      {
        "mark": "Valoración",
        "body": "Aparece solo cuando la plantilla ha recibido valoraciones de gente que la instaló de verdad. Sin ellas no dice nada, en vez de empezar en cero."
      }
    ],
    "note": "<strong class=\"text-paper-50\">Y una fila que nadie más podría construir.</strong> Fluera ya sabe en qué conceptos andas, porque los escribiste tú. Así que puede ordenar las plantillas por cuánto se solapan con lo que hay ahora mismo en tu canvas, y esa cuenta la echa tu dispositivo. De tu teléfono sale la materia que más estudias y los identificadores de las plantillas que ya se ha traído. Tu conjunto de conceptos no sale."
  },
  "privacy": {
    "kicker": "Qué viaja y qué no",
    "title": "Publicar una página no debería publicar cómo la llevabas.",
    "sub": "Compartir material de estudio es compartir algo que hiciste cuando todavía no lo sabías del todo. La línea entre una cosa y otra está trazada en el código, no en un párrafo de una política.",
    "items": [
      {
        "title": "Tu modelo de estudiante no está en el archivo",
        "body": "Por cómo está construido, el componente que arma el andamiaje público de una plantilla no llega a leer tu historial de repasos, ni tu confianza, ni cuántas veces estudiaste algo, ni cuánto lo retenías, ni los embeddings que hay detrás. Un experto y alguien que va a trompicones publican la misma página y sale un andamiaje idéntico byte a byte."
      },
      {
        "title": "Esa línea la vigila un test, y está en la CI",
        "body": "La garantía la fija un test que recorre la salida serializada y falla si en algún punto asoma alguno de los veintiséis nombres de campo del modelo de estudiante o de comportamiento. Corre en la CI como un control con nombre propio y obligatorio, que además falla si alguien borra el archivo del test."
      },
      {
        "title": "La tinta es el límite honesto",
        "body": "Hay algo que ningún saneamiento alcanza: la escritura a mano. Y el andamiaje sí lleva un extracto corto y truncado del texto reconocido: nunca la transcripción entera, pero tampoco tachado. Por eso, antes de que se suba nada, el panel de publicación te enseña la imagen exacta que se haría pública, encima de una casilla de consentimiento."
      },
      {
        "title": "Tu nombre nunca es el alias",
        "body": "Las lecturas públicas no devuelven ningún id de cuenta. A un creador lo identifica un código unidireccional derivado de su cuenta: con sal, con hash y truncado. Es un seudónimo estable, no tu identidad."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Leer la arquitectura de seguridad →"
    }
  },
  "creators": {
    "kicker": "Para creadores",
    "title": "La mejor explicación de una idea difícil<br />suele caber en una página.",
    "paragraphs": [
      "Publicar empieza en tu canvas. Encuadras la región que merece salir, Fluera la sella y un panel te pregunta si debe ser un archivo o una ficha. Lo que encuadras es lo que viaja: el resto del canvas se queda donde está.",
      "Antes de que se suba nada, ves la imagen exacta que se haría pública y la confirmas. La ficha se valida antes de guardar un solo byte y la subida va por URL firmadas de un solo uso; si algo falla, la ficha se deshace en vez de quedarse a medias.",
      "Todas las plantillas son gratis. En Fluera no hay pasarela de pago, ni campo de precio en la API de publicación, ni libro de pagos: quien mantiene a cero la columna de precio del catálogo es una restricción de la base de datos, no una política."
    ],
    "heading": "Lo que te da publicar",
    "benefits": [
      "Un alias de creador que nunca es tu cuenta ni tu correo",
      "Un perfil opcional —nombre visible, bio, avatar—, con el avatar en espera hasta que pase la revisión",
      "Seguidores, y un estante que les acerca tu plantilla más reciente",
      "Versiones: una corrección se publica como reemplazo, no como duplicado",
      "Un motivo cada vez que una decisión va en tu contra, y un recurso que puede revertirla"
    ],
    "note": "Publicar exige una cuenta con sesión iniciada y una confirmación de edad. Explorar e instalar no exigen ninguna de las dos."
  },
  "safety": {
    "kicker": "Moderación y confianza",
    "title": "Un catálogo con la letra de desconocidos<br />tiene que dar la cara.",
    "sub": "Abrir un catálogo lo hace cualquiera. El trabajo está en lo que pasa cuando algo sale mal, y en que el grupo que más grita no sea el que decide.",
    "items": [
      {
        "label": "Enviar no publica",
        "body": "Una plantilla nueva se guarda como pendiente de revisión. Mientras no pase la revisión no aparece al explorar, ni en la búsqueda, ni en el catálogo, y su enlace para compartir no lleva a ninguna parte."
      },
      {
        "label": "La revisión lee el archivo de verdad",
        "body": "El clasificador saca las imágenes incrustadas en la propia plantilla en vez de fiarse de la miniatura de quien la sube, y se queda con el peor veredicto de todas. Se ejecuta en regiones de la UE. Puede hacer avanzar una ficha o escalarla; nunca puede revocar la decisión de un moderador."
      },
      {
        "label": "Las denuncias van a personas, no a robots",
        "body": "Una denuncia es una señal que entra en una cola humana: una por denunciante y las autodenuncias se rechazan. Un grupo coordinado puede llamar la atención. Retirar una ficha, no."
      },
      {
        "label": "Retirar borra los bytes",
        "body": "Cuando se retira una ficha, las pruebas quedan preservadas en un bucket privado al que solo accede administración y los objetos publicados se purgan del CDN, no solo se ocultan del listado."
      },
      {
        "label": "Una decisión llega con motivos",
        "body": "Al creador se le dice qué ha pasado con su plantilla y si la decisión fue automática, y puede recurrir. Un recurso que prospera devuelve la ficha a su sitio."
      },
      {
        "label": "Las valoraciones se ganan",
        "body": "No puedes valorar una plantilla que no instalaste, no puedes valorar la tuya y no puedes valorar de forma anónima. Las medias se recalculan desde cero en vez de irse sumando."
      }
    ]
  },
  "status": {
    "kicker": "Disponibilidad",
    "title": "El catálogo ya viene dentro de la app.<br />Acaba de empezar.",
    "paragraphs": [
      "Explorar, previsualizar e instalar están dentro de Fluera, traducidos a los dieciséis idiomas que habla la app. Publicar también está disponible, para adultos con sesión iniciada, y lo vamos abriendo despacio a propósito: alojar el trabajo de otros es una responsabilidad que se asume bien o no se asume.",
      "Por eso el catálogo es pequeño y en esta página no hay ningún número de plantillas, ni de instalaciones, ni de creadores. Esos números significarán algo más adelante. Hoy solo serían decoración."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Solicitar acceso anticipado →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Descargar Fluera"
      }
    ]
  }
};

export default data;

