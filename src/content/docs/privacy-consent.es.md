---
lang: "es"
title: "Privacidad y consentimiento de IA"
description: "Qué datos recoge Fluera, qué consentimiento estás dando y cómo desactivar todo."
section: settings
sectionLabel: "Configuración"
order: 1
updatedAt: 2026-04-20
---

Fluera es una herramienta local-first. Por defecto, nada sale de tu dispositivo a menos que actives explícitamente una función que lo necesite.

## Las cuatro categorías de consentimiento

Abre **Configuración → Privacidad**. Verás cuatro toggles, todos desactivados por defecto:

- **Analytics de producto.** Datos de sesión anónimos — conteos de invocación de funciones, duración de la sesión, duraciones de llamada de IA. Nunca contenido. ID de usuario hasheado en SHA-256, retención de 180 días.
- **Funciones de IA.** Necesarias para usar Socratic, Ghost Map, OCR de LaTeX y Fog of War. El texto seleccionado del canvas se envía a Google Gemini vía nuestro proxy del lado del servidor. Nunca el cuaderno entero.
- **Cloud sync.** Necesaria para sincronizar canvas entre dispositivos. Todos los cuadernos se cifran en tu dispositivo antes del upload. La nube guarda ciphertext.
- **Crash reporting.** Stack traces y metadatos del dispositivo cuando la app crashea. Ningún contenido de usuario. Procesado por Sentry con `sendDefaultPii: false`.

Cada toggle es independiente. Puedes activar Cloud Sync sin Analytics. Puedes usar IA sin Crash Reporting. Los permisos son granulares a propósito.

## Qué nunca se recoge

- El contenido de tus canvas (cifrado en reposo con SQLCipher, AES-256)
- Las preguntas que hace la IA, o tus respuestas
- El audio que grabas con Time Travel (almacenado localmente; el sync opt-in lo cifra antes del upload)
- Información personalmente identificable de cualquier tipo sin consentimiento explícito

## Cómo verificar

Ejecuta la app en modo avión. Haz todo excepto cloud sync e IA. Observa tu firewall o monitor de red. Fluera hace cero peticiones de red con los cuatro toggles de consentimiento desactivados. Es verificable, por diseño.

## Revocar el consentimiento

Los cuatro toggles están siempre accesibles en **Configuración → Privacidad**. Desactivar un toggle tiene efecto inmediato. Los datos de backend asociados están programados para borrado en hasta 30 días.

Para borrado a nivel de cuenta (el derecho al olvido completo), escribe a [privacy@fluera.dev](mailto:privacy@fluera.dev) desde la dirección de tu cuenta.

## Cuentas Education

Si tu institución administra tu cuenta Fluera, los comportamientos de arriba siguen aplicándose a *tus* datos. El administrador puede ver estadísticas agregadas de uso para auditorías de cumplimiento (vía trail de auditoría) pero no puede leer el contenido de tus cuadernos. El cifrado se impone en tu dispositivo; la clave queda en tu keychain, no en ningún sistema admin.

## Siguiente

- [Setup del cloud sync](/es/docs/cloud-sync)
- [Arquitectura de seguridad](/es/security/architecture) — el modelo completo
