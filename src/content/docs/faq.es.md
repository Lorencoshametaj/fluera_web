---
lang: "es"
title: "FAQ"
description: "Las preguntas que más recibimos de los beta testers. Si algo aquí está desactualizado, escríbele al soporte y lo arreglamos."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 1
updatedAt: 2026-04-20
---

## ¿Por qué mi canvas tarda en abrirse después de no usarlo durante una semana?

La primera vez que Fluera carga un cuaderno tras una pausa, reconstruye el índice espacial y reevalúa qué nodos están vencidos para review. Las aperturas siguientes son rápidas. Si la pausa fue de más de un mes, espera también que el planificador de repetición espaciada recalibre tus reviews pendientes.

Si la primera apertura tarda más de 10 segundos en un dispositivo moderno, es un bug — escribe a [support@fluera.dev](mailto:support@fluera.dev) con el nombre del canvas y el conteo aproximado de nodos.

## ¿Puedo importar mis decks de Anki?

Todavía no. El import está en el roadmap pero no es bloqueante de la Phase 1 — el modelo de recuperación de Fluera es estructuralmente distinto (espacial, no atómico), así que un import directo perdería la mayor parte del valor. Cuando llegue, estará disponible para cuentas Pro y Education.

## ¿Puedo exportar mis canvas a PNG / SVG / PDF?

Sí, todos ellos, más nuestro formato abierto `.fluera`. Mira el menú **Exportar**. Sin restricciones por tier — exportar es una función básica de propiedad de los datos, no una paywalled.

## La IA me dio una respuesta equivocada. ¿Es esperable?

A veces, sí. Nuestra IA es Google Gemini, y Gemini — como todo LLM — puede alucinar. El Socratic Mode es menos propenso a esto porque hace preguntas en lugar de producir respuestas definitivas, pero no es cero.

Si recibes una respuesta de la IA claramente equivocada, toca **Reportar** en la respuesta. Ese feedback se usa para mejorar el prompting; está anonimizado y nunca ligado a tu contenido.

## ¿Funcionará Fluera sin internet?

El canvas — escritura, lectura, exportación — está completamente offline. Las funciones de IA (Socratic, Ghost Map, scoring de Fog of War) necesitan internet. La planificación de repetición espaciada es local; solo sync e IA necesitan conexión.

## Estoy en España. ¿Y la RGPD?

Plenamente compatible. Fluera está alojada en la UE y es GDPR-nativa. Puedes ejercer tus derechos (acceso, rectificación, supresión, portabilidad) en **Configuración → Privacidad** o escribiendo a [privacy@fluera.dev](mailto:privacy@fluera.dev). Respuesta en hasta 30 días; normalmente en 48 horas.

## El Pencil va con lag en mi iPad. ¿Qué falla?

Primero, comprueba que Fluera está actualizado. Después: **Configuración → Canvas → Latencia de trazo** debe leer *Predicted (recomendado)* para dispositivos Apple Pencil. Si dice *Estándar* o *Low-power*, vuelve a Predicted.

Si el lag persiste con Predicted activado, cierra y relanza. Si aún persiste, escríbenos con el modelo de tu iPad — hay una regresión en el iPad Air 3 que estamos rastreando activamente.

## ¿Cómo reporto un bug?

[support@fluera.dev](mailto:support@fluera.dev). Describe qué estabas haciendo, qué esperabas, qué pasó, e incluye la versión de la app (Configuración → Acerca de). Las capturas de pantalla ayudan.

Para vulnerabilidades de seguridad, usa [security@fluera.dev](mailto:security@fluera.dev) y cifra con nuestra clave PGP (en nuestro perfil de GitHub).

## ¿Cómo doy feedback sobre la pedagogía?

Leemos cada email. [hello@fluera.dev](mailto:hello@fluera.dev) va directo a los founders. Especialmente útil: lo que *no* funcionó para ti, lo que pareció fricción no deseada, y cualquier cosa que te sorprendió.

## Siguiente

- [Tuning de rendimiento](/es/docs/performance) — sacándole el máximo a canvas grandes
- [Toda la documentación del usuario](/es/docs)
