---
lang: "es"
title: "Tuning de rendimiento"
description: "Fluera está construida para mantener 60 FPS en canvas con cientos de miles de trazos. Aquí está qué comprobar cuando eso no ocurre."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

El motor de Fluera está diseñado para quedarse a 60 FPS con latencia de trazo por debajo de 15 ms en hardware moderno — hasta cientos de miles de trazos por cuaderno. Cuando no se queda, normalmente uno de un pequeño conjunto de cosas es responsable.

## Diagnóstico

Abre **Configuración → Avanzado → Rendimiento**. Verás:

- **FPS actual** — debe quedarse en 60 (o 120 en dispositivos ProMotion)
- **Latencia de trazo** — debe leer <15 ms en iOS/macOS, <20 ms en otras plataformas
- **Memoria usada** — absoluta y como porcentaje del budget del dispositivo
- **Hit rate de la tile cache** — debe ser >90% durante zoom/pan normales

Si algo aquí está rojo, los culpables probables están en la lista de abajo.

## Canvas grandes (&gt; 200k trazos)

El motor aguanta ese volumen, pero dos ajustes importan:

- **Budget de memoria.** En dispositivos con menos de 6 GB de RAM, el budget de memoria por defecto de Fluera es conservador. Si tienes mucha RAM y quieres respuestas de zoom más rápidas, súbelo a *Generoso* en **Configuración → Canvas → Budget de memoria**.
- **Nivel de detalle.** La política de LOD por defecto simplifica los trazos en niveles de zoom muy bajos. Si notas trazos con apariencia tembleque cuando el zoom está alejado, cambia el LOD a *Alto detalle* — pero espera ~10% más de carga de GPU.

## Grabación sincronizada con audio (Time Travel)

Time Travel almacena el audio junto con los timestamps de los trazos. Para una clase de 60 minutos, son unos 20 MB de audio. No es el audio lo que ralentiza las cosas — es el índice. Prueba:

- **Configuración → Time Travel → Granularidad del índice** definida como *Estándar* en lugar de *Fina*
- Borrar sesiones antiguas de Time Travel que no necesitas (se guardan localmente por defecto; el botón clear-cache las elimina con seguridad)

## Apple Pencil específicamente

En el iPad, el modo por defecto *Predicted touch* mantiene la latencia de trazo por debajo de 8 ms. Si has deshabilitado la predicción (en Configuración → Canvas → Latencia de trazo → Estándar), vuelve a Predicted. La predicción es una API de Apple Pencil, no un guess — usa la predicción de trayectoria del propio hardware.

## Cuando nada ayuda

Ejecuta **Configuración → Avanzado → Exportar diagnóstico**. Obtienes un pequeño archivo JSON con muestras de FPS, uso de memoria e información (anónima) del dispositivo. Mándalo a [support@fluera.dev](mailto:support@fluera.dev) con una descripción corta de cuándo las cosas se ralentizan.

Logamos ≈95% de las regresiones de rendimiento visibles para el usuario en un trozo específico de código en menos de una hora después de recibir un export de diagnóstico. El 5% restante son genuinamente difíciles y te lo diremos.

## Siguiente

- [FAQ](/es/docs/faq)
- [Toda la documentación del usuario](/es/docs)
