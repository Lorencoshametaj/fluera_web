---
lang: "es"
title: "Pinceles"
description: "Trece brush engines, cada uno calibrado para un tipo de marca distinto. Una guía corta para elegir el correcto — y por qué importa menos de lo que crees."
section: canvas
sectionLabel: "El canvas"
order: 1
updatedAt: 2026-04-20
---

Fluera viene con trece brush engines. Cada uno es una pipeline de renderizado completa — presión, inclinación, velocidad, fragment shaders por pincel — no un cambio de textura. Parece mucho; en la práctica, la mayor parte de tu aprendizaje va a ocurrir en uno o dos de ellos.

## La respuesta corta

- Si estás tomando notas: **bolígrafo de tinta** o **bolígrafo de bola**. Ambos rápidos, legibles, indulgentes.
- Si estás anotando un PDF o resaltando un concepto: **marcador fluorescente**.
- Si estás dibujando un diagrama con líneas geométricas limpias: **rotulador técnico**.
- Si estás haciendo una metáfora visual rápida o ilustración: **lápiz** (trazos suaves) o **carboncillo** (trazos dramáticos).

Todo lo demás es para situaciones específicas. No le des demasiadas vueltas.

## Los trece

| Pincel              | Bueno para                                          | Notas                                          |
|---------------------|-----------------------------------------------------|------------------------------------------------|
| Bolígrafo de tinta  | Escritura a mano larga                              | Responde a la inclinación, flujo natural de tinta |
| Bolígrafo de bola   | Notas rápidas, línea uniforme                       | Ancho sensible a la presión                    |
| Lápiz               | Trazos suaves, indulgentes                          | Textura granulada, gradación por presión       |
| Rotulador técnico   | Diagramas estilo CAD, geometría precisa             | Cero sensibilidad a la presión a propósito     |
| Marker              | Títulos con punta biselada, destacados              | Trazos planos, color vívido                    |
| Marcador fluorescente | Resaltados en overlay (20–30% de opacidad)        | Mezcla en modo overlay                         |
| Carboncillo         | Expresivo, textura áspera                           | Efecto difuminado, sangra en los bordes        |
| Óleo                | Trazos pictóricos, color por capas                  | Wet-edge blending, oscurecimiento en los bordes |
| Acuarela            | Capas suaves, difusión                              | Simulación de pigmento                         |
| Aguada              | Sensación wet-on-paper                              | Sangrado de color en los bordes                |
| Spray               | Efectos de partículas, sombras                      | Distorsión en los bordes                       |
| Neón                | Anotaciones luminosas                               | Brillo externo, saturación fluorescente        |
| Goma de borrar      | Eliminación píxel a píxel, no es una herramienta de delete | Consciente del historial — revela las marcas de debajo |

## Por qué el motor importa (rápidamente)

El motor de Fluera preserva las señales de presión, inclinación y velocidad con latencia por debajo de 15 milisegundos en iOS y macOS. No es solo capricho de producto. <a href="/es/science/authors/van-der-meer">El trabajo de EEG de van der Meer</a> mostró que la escritura a mano activa redes sensoriomotoras que la escritura con teclado no activa, y la riqueza de esas señales escala con la fidelidad de la captura.

En términos prácticos: un canvas que pierde trazos, se retrasa bajo presión o aplana los datos de inclinación está tirando exactamente la señal que hace que las notas a mano sean cognitivamente superiores. Construimos el motor desde cero porque ninguna opción off-the-shelf cumplía el estándar.

## Personalizar un pincel

Mantén pulsado cualquier pincel en la toolbar. Se abre un pequeño panel con:

- **Tamaño** (0,5pt – 12pt)
- **Opacidad** (10% – 100%)
- **Estabilización** (ninguna / suave / firme) — suaviza el jitter sin matar la personalidad
- **Curva de presión** — ajusta la respuesta a presiones ligeras vs fuertes

Los cambios son por canvas, no globales, así que puedes tener un lápiz suave en un cuaderno y uno afilado en otro.

## Siguiente

- [Gestos y zoom](/es/docs/gestures-zoom)
- [Exportación y backup](/es/docs/cloud-sync)
