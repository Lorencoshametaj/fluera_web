---
lang: "es"
title: "Cloud sync"
description: "Cómo sincronizar canvas entre dispositivos, cómo se protegen tus datos y qué esperar."
section: settings
sectionLabel: "Configuración"
order: 2
updatedAt: 2026-04-20
---

El cloud sync es opt-in por cuaderno. Puedes sincronizar un canvas y mantener otro estrictamente local. Nada se mueve hasta que tú lo digas.

## Activar el sync en el primer dispositivo

1. Abre **Configuración → Privacidad** y activa **Cloud sync**.
2. Elige qué cuadernos sincronizar. Clic derecho (o mantén pulsado) en un cuaderno → **Activar sync**.

Aparece un pequeño icono de nube en cada cuaderno sincronizado. Una variante roja indica error; una gris indica pausa.

## Añadir un segundo dispositivo

1. Instala Fluera en el segundo dispositivo.
2. Inicia sesión con la misma cuenta.
3. El cloud sync empieza automáticamente. Espera que la primera sincronización completa tarde unos minutos para un cuaderno de tamaño medio.

## Cómo se protegen tus datos sincronizados

- En tu dispositivo, la base de datos local se cifra en reposo con SQLCipher (AES-256).
- Al sincronizar, los datos viajan cifrados en tránsito (TLS 1.3 con cipher suites modernas).
- En nuestros servidores se almacenan en infraestructura de la UE (Supabase, `eu-north-1`) y están protegidos mediante cifrado en reposo a nivel de infraestructura.

Para que quede claro: el cloud sync **no** está cifrado de extremo a extremo. Como responsable del tratamiento, Fluera puede acceder técnicamente al contenido sincronizado para prestar y operar el servicio. Nunca vendemos tus datos, los usamos para publicidad ni para entrenar modelos. Si quieres una copia que solo tú puedas abrir, exporta un archivo `.fluera`; esas exportaciones están cifradas con AES-256-GCM.

## Recuperar tus datos

Como los cuadernos sincronizados se almacenan en nuestros servidores de la UE y están vinculados a tu cuenta, puedes recuperarlos iniciando sesión de nuevo en cualquier dispositivo. No hay una passphrase separada que recordar o perder.

Si quieres una copia cifrada que solo tú puedas abrir, exporta un archivo `.fluera` (AES-256-GCM) y conserva tú la contraseña; Fluera no puede leer ese archivo.

## Resolución de conflictos

Si editas el mismo canvas en dos dispositivos simultáneamente mientras uno está offline, Fluera usa un CRDT con vector clocks para hacer el merge sin conflictos. No vas a perder trabajo. En casos raros en los que el merge automático es ambiguo, verás un marcador "merge needed" en el nodo afectado y una vista lado a lado para confirmar.

## Desactivar el sync para un cuaderno específico

Clic derecho (o mantén pulsado) en un cuaderno → **Desactivar sync**. La copia de la nube se revoca inmediatamente. La copia local queda intacta.

## Siguiente

- [FAQ y troubleshooting](/es/docs/faq)
- [Arquitectura de seguridad](/es/security/architecture)
