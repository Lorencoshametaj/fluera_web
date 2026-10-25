---
lang: "es"
title: "Privacidad y consentimiento de IA"
description: "Qué datos recoge Fluera, qué consentimiento estás dando y cómo desactivar todo."
section: settings
sectionLabel: "Configuración"
order: 1
updatedAt: 2026-10-23
---

Fluera es una herramienta local-first. Por defecto, nada sale de tu dispositivo a menos que actives explícitamente una función que lo necesite.

## Las cuatro categorías de consentimiento

Abre **Configuración → Privacidad**. Verás cuatro toggles, todos desactivados por defecto:

- **Analytics de producto.** Datos de uso ligados al identificador de tu cuenta, para que puedas verlos y borrarlos — uso de funciones, duración de la sesión, duración de las llamadas de IA. Nunca contenido. Se guardan 180 días como máximo.
- **Funciones de IA.** Necesarias para usar Socratic, Ghost Map, OCR de LaTeX y Fog of War. El texto seleccionado del canvas se envía a modelos Google Gemini servidos vía Google Vertex AI, procesados en la UE (modelos 2.5 en las regiones europe-west4 NL / europe-west1 BE, modelos 3.x en el endpoint multirregión UE de Vertex AI): los datos permanecen en los Estados miembros de la UE. Nunca el canvas entero.
- **Cloud sync.** Necesaria para sincronizar canvas entre dispositivos. Los datos sincronizados se cifran en tránsito (TLS) y en reposo sobre infraestructura europea (Supabase, eu-north-1). No es cifrado de extremo a extremo: Fluera, como responsable del tratamiento, puede acceder a ellos. Nunca los vendemos ni los usamos para publicidad. Con el plan Cloud, **Sincroniza entre tus dispositivos** (abajo) también lleva tu estudio y tus ajustes.
- **Crash reporting.** Stack traces y metadatos del dispositivo cuando la app crashea. Ningún contenido de usuario. Procesado por Sentry con `sendDefaultPii: false`.

Cada toggle es independiente. Puedes activar Cloud Sync sin Analytics. Puedes usar IA sin Crash Reporting. Los permisos son granulares a propósito.

## Memoria cognitiva (en el dispositivo, opt-out)

Distinta de los cuatro consentimientos de nube de arriba: por defecto Fluera indexa tus notas **en tu dispositivo** para ofrecer títulos automáticos, el mapa conceptual (Ghost Map) y la repetición espaciada (FSRS). El índice se construye y se calcula en tu dispositivo y se queda ahí, salvo que actives **Sincroniza entre tus dispositivos** (sección siguiente): entonces tus tarjetas de repaso con el historial de tus respuestas, tus conceptos, el mapa conceptual y los títulos de tus grupos de notas pasan por la nube de Fluera para llegar a tus otros dispositivos. Puedes desactivar la memoria en **Configuración → Privacidad → Memoria cognitiva**: la indexación se detiene y los datos cognitivos de este dispositivo se borran al instante (tus notas quedan intactas); si usas Sincroniza entre tus dispositivos, también se borran las copias en la nube, y no vuelve a subir ninguna hasta que la reactives. Base jurídica: interés legítimo con derecho de oposición (RGPD art. 6.1.f / 21) — por eso está activada por defecto y es opt-out, no un consentimiento opt-in como los cuatro de arriba.

## Sincroniza entre tus dispositivos (plan Cloud)

El interruptor **Configuración → Datos y sincronización → Sincroniza entre tus dispositivos** está apagado hasta que lo enciendes tú. Necesita una cuenta y el plan Cloud, y vale para toda tu cuenta: encendido en un dispositivo, lo está en cada dispositivo en el que inicies sesión. Cuando lo enciendes, el servidor registra la fecha y la versión de la política de privacidad que tenías delante. Base jurídica: contrato (RGPD art. 6.1.b) — es el servicio Cloud que pagas.

- **Qué sube a la nube, solo mientras está encendido:** los canvas enteros (trazos, secciones, fórmulas, los PDF con las marcas hechas en el lector, fotos); las clases grabadas (el audio, en trozos); el estudio de cada canvas (tarjetas de repaso con tus respuestas, conceptos, exámenes con su tinta, el tutor socrático, el chat, el recuerdo, los cursos); las carpetas de la galería (con sus nombres), la carpeta de cada canvas, los fijados, las etiquetas y la Papelera; el texto que Fluera reconoció en tu escritura a mano; tus elecciones en la configuración (apariencia, idioma, papel, repaso, colores, goma y similares). Los ajustes ligados a un solo dispositivo (mano, palma, lápiz, ventana) se quedan en él.
- **Qué se queda siempre en el dispositivo:** el historial del canvas (Time Travel) y deshacer.
- **Quién lo ve:** tú. En un canvas que compartes, sus miembros ven el canvas y los títulos de los grupos de notas; tu estudio solo lo ves tú.
- **Dónde:** Supabase, región UE `eu-north-1` (Estocolmo), cifrado en tránsito y en reposo, **no** cifrado de extremo a extremo.
- **Apagarlo** desde cualquier dispositivo lo detiene en todos y no borra nada. Lo mismo si retiras el consentimiento de Cloud sync.
- **Cuando el plan Cloud termina,** la sincronización se pausa y todo sigue descargable durante 6 meses. Después, podemos quitar el audio de las clases, los PDF y las fotos que superen los 500 MB del plan Free, empezando por los más antiguos; la tinta de tus canvas se queda.
- **Borrar:** **Eliminar definitivamente** un canvas en la **Papelera** lo quita de la nube con lo que le pertenece, la tinta de sus exámenes incluida; **Configuración → Privacidad y telemetría → Eliminar todos mis datos de la nube** quita todos los canvas, las clases, la tinta de los exámenes, los ajustes y las carpetas, y desactiva Sincroniza entre tus dispositivos; **Configuración → Perfil y cuenta → Eliminar la cuenta** lo quita todo, ajustes incluidos.

Sin el interruptor, todo esto se queda en tu dispositivo, como antes.

## Datos de entrenamiento de la IA (sección aparte, solo opt-in)

Estamos construyendo un reconocedor de escritura a mano propio, hecho a la medida de cómo escriben de verdad los usuarios de Fluera. En **Configuración → Privacidad → Datos de entrenamiento de la IA** encontrarás dos interruptores más, también apagados por defecto e independientes de los cuatro de arriba:

- **Sesión de calibración (~5 min).** Una sesión guiada, una sola vez, en la que escribes 30 símbolos propuestos (dígitos, operadores matemáticos, letras griegas, letras comunes). El símbolo en pantalla es la verdad de referencia, emparejada con tus trazos.
- **Captura automática mientras escribes.** Mientras escribes con normalidad en el canvas, guardamos los trazos en bruto (coordenadas, tiempos, presión, inclinación del lápiz donde se admite) y una pequeña imagen PNG cifrada de cada clúster. Los datos se quedan cifrados en nuestro servidor. **Cuando cerremos el acuerdo con Google** (acuerdo de tratamiento de datos de Vertex AI, en curso), Google Gemini analizará las imágenes para que podamos enseñar a Fluera lo que escribiste. Hasta entonces, ningún dato de entrenamiento sale de nuestra infraestructura hacia terceros.

Los dos interruptores usan un identificador seudónimo propio, calculado en tu dispositivo y **distinto** del de los Analytics de producto: con los datos solos no se puede vincular una contribución a tu cuenta.

Medidas de seguridad propias de esta categoría:
- Cifrado de los datos con AES-256-GCM *antes* de subirlos; la clave para descifrarlos es un par de claves asimétrico (X25519) cuya mitad privada se guarda en papel, fuera de línea, y nunca se digitaliza.
- Row-Level Security en las tablas de Supabase: nadie puede leer las muestras de otro usuario.
- Filtro de ruido: los clústeres con menos de 3 puntos (toques, manchas) se descartan antes de guardarse.
- Deduplicación persistente por huella geométrica: volver a dibujar igual el mismo clúster no crea duplicados.
- Vista previa de cada muestra en **Configuración → Datos de entrenamiento de la IA → Capturas recientes**: ves miniaturas de exactamente lo que hemos guardado.

## Qué nunca se recoge

- El contenido de tus canvas (cifrado en reposo con sqlite3mc, ChaCha20-Poly1305), salvo que actives **Sincroniza entre tus dispositivos** (arriba)
- Las preguntas que hace la IA, o tus respuestas
- El audio que grabas, salvo que actives **Sincroniza entre tus dispositivos** (arriba): entonces va a la nube como tus canvas, cifrado en tránsito y en reposo, no de extremo a extremo
- Información personalmente identificable de cualquier tipo sin consentimiento explícito

## Cómo verificar

Apaga los cuatro interruptores y observa tu firewall o tu monitor de red: tus canvas, tus grabaciones y lo que escribes se quedan en el dispositivo. La app sigue hablando con la red para cosas que no llevan contenido de los canvas, por ejemplo: el inicio de sesión en tu cuenta, la comprobación de tu suscripción con la tienda (RevenueCat), la descarga de los modelos que necesitan algunas funciones, la señal del marketplace cuando instalas o estudias una ficha del catálogo (activada por defecto, se apaga en **Configuración → Privacidad y telemetría → Señal del marketplace**) y las páginas que abres en el navegador integrado.

## Revocar el consentimiento

Los cuatro toggles están siempre accesibles en **Configuración → Privacidad**. Desactivar un toggle tiene efecto inmediato. Lo que pasa con los datos ya recogidos depende de la categoría:

- **Analytics de producto:** cuando la revocación llega a nuestros servidores, la telemetría ya recogida con tu cuenta se borra enseguida. En cualquier caso, nunca se guarda más de 180 días.
- **Funciones de IA:** las solicitudes se detienen enseguida, también en nuestro servidor. El registro de uso de la IA (qué función, cuántos tokens, ningún contenido) se queda 24 meses, para los límites del plan.
- **Cloud sync:** apagarlo, o apagar Sincroniza entre tus dispositivos, no borra nada de lo que ya está en la nube — para eso usa **Eliminar todos mis datos de la nube**.
- **Crash reporting:** la revocación no borra los informes ya enviados: Sentry los guarda 30 días, y sus copias de seguridad cifradas hasta 90.

Para eliminar tu cuenta y sus datos en la nube, usa **Configuración → Perfil y cuenta → Eliminar la cuenta**. Si no funciona, escribe a [lorenco@fluera.dev](mailto:lorenco@fluera.dev) desde la dirección de tu cuenta.

## Siguiente

- [Setup del cloud sync](/es/docs/cloud-sync)
- [Arquitectura de seguridad](/es/security/architecture) — el modelo completo
