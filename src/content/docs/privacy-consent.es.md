---
lang: "es"
title: "Privacidad y consentimiento de IA"
description: "Qué datos recoge Fluera, qué consentimiento estás dando y cómo desactivar todo."
section: settings
sectionLabel: "Configuración"
order: 1
updatedAt: 2026-06-29
---

Fluera es una herramienta local-first. Por defecto, nada sale de tu dispositivo a menos que actives explícitamente una función que lo necesite.

## Las cuatro categorías de consentimiento

Abre **Configuración → Privacidad**. Verás cuatro toggles, todos desactivados por defecto:

- **Analytics de producto.** Datos de sesión anónimos — conteos de invocación de funciones, duración de la sesión, duraciones de llamada de IA. Nunca contenido. ID de usuario hasheado en SHA-256, retención de 180 días.
- **Funciones de IA.** Necesarias para usar Socratic, Ghost Map, OCR de LaTeX y Fog of War. El texto seleccionado del canvas se envía a modelos Google Gemini servidos vía Google Vertex AI, procesados en la UE (europe-west4 NL / europe-west1 BE). Nunca el cuaderno entero.
- **Cloud sync.** Necesaria para sincronizar canvas entre dispositivos. Los datos sincronizados se cifran en tránsito (TLS) y en reposo sobre infraestructura europea (Supabase, eu-north-1). No es cifrado de extremo a extremo: Fluera, como responsable del tratamiento, puede acceder a ellos. Nunca los vendemos ni los usamos para publicidad.
- **Crash reporting.** Stack traces y metadatos del dispositivo cuando la app crashea. Ningún contenido de usuario. Procesado por Sentry con `sendDefaultPii: false`.

Cada toggle es independiente. Puedes activar Cloud Sync sin Analytics. Puedes usar IA sin Crash Reporting. Los permisos son granulares a propósito.

## Memoria cognitiva (en el dispositivo, opt-out)

A diferencia de los cuatro consentimientos de nube de arriba: por defecto Fluera indexa tus notas **solo en tu dispositivo** para impulsar los títulos automáticos, el mapa de conceptos (Ghost Map) y la repetición espaciada (FSRS). Este índice **nunca sale de tu dispositivo** — ningún contenido se envía a la nube (a diferencia de las *Funciones de IA* y el *Cloud sync*). Puedes desactivarlo en **Configuración → Privacidad → Memoria cognitiva**: el indexado se detiene y los datos cognitivos ya construidos en el dispositivo se borran de inmediato (tus notas quedan intactas). Base legal: interés legítimo con derecho de oposición (GDPR Art. 6.1.f / 21) — por eso está activado por defecto y es opt-out, no un consentimiento opt-in como los cuatro de arriba.

## Qué nunca se recoge

- El contenido de tus canvas (cifrado en reposo con SQLCipher, AES-256)
- Las preguntas que hace la IA, o tus respuestas
- El audio que grabas con Time Travel (almacenado localmente; el sync opt-in lo transmite cifrado en tránsito (TLS) y lo guarda en reposo sobre infraestructura europea, no de extremo a extremo)
- Información personalmente identificable de cualquier tipo sin consentimiento explícito

## Cómo verificar

Ejecuta la app en modo avión. Haz todo excepto cloud sync e IA. Observa tu firewall o monitor de red. Fluera hace cero peticiones de red con los cuatro toggles de consentimiento desactivados. Es verificable, por diseño.

## Revocar el consentimiento

Los cuatro toggles están siempre accesibles en **Configuración → Privacidad**. Desactivar un toggle tiene efecto inmediato. Los datos de backend asociados están programados para borrado en hasta 30 días.

Para borrado a nivel de cuenta (el derecho al olvido completo), escribe a [lorenco@fluera.dev](mailto:lorenco@fluera.dev) desde la dirección de tu cuenta.

## Cuentas Education

Si tu institución administra tu cuenta Fluera, los comportamientos de arriba siguen aplicándose a *tus* datos. El administrador puede ver estadísticas agregadas de uso para auditorías de cumplimiento (vía trail de auditoría) pero no puede leer el contenido de tus cuadernos. Tu base de datos local se cifra en reposo en tu dispositivo con SQLCipher y la clave queda en tu keychain. Los datos que sincronizas a la nube viajan cifrados en tránsito (TLS) y se guardan en reposo sobre infraestructura europea (Supabase, eu-north-1); no son de extremo a extremo, por lo que Fluera, como responsable del tratamiento, puede acceder a ellos, pero nunca los vende ni los usa para publicidad.

## Siguiente

- [Setup del cloud sync](/es/docs/cloud-sync)
- [Arquitectura de seguridad](/es/security/architecture) — el modelo completo
