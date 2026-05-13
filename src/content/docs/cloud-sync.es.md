---
lang: "es"
title: "Cloud sync"
description: "Cómo sincronizar canvas entre dispositivos, qué se cifra y cómo recuperar si pierdes la passphrase."
section: settings
sectionLabel: "Configuración"
order: 2
updatedAt: 2026-04-20
---

El cloud sync es opt-in por cuaderno. Puedes sincronizar un canvas y mantener otro estrictamente local. Nada se mueve hasta que tú lo digas.

## Activar el sync en el primer dispositivo

1. Abre **Configuración → Privacidad** y activa **Cloud sync**.
2. Crea o introduce tu **passphrase de sync**. Es *separada* de la contraseña de la cuenta. La passphrase se usa para derivar la clave de cifrado — y se guarda solo en tu dispositivo, nunca en nuestros servidores.
3. Elige qué cuadernos sincronizar. Clic derecho (o mantén pulsado) en un cuaderno → **Activar sync**.

Aparece un pequeño icono de nube en cada cuaderno sincronizado. Una variante roja indica error; una gris indica pausa.

## Añadir un segundo dispositivo

1. Instala Fluera en el segundo dispositivo.
2. Inicia sesión con la misma cuenta.
3. Introduce la *misma* passphrase de sync cuando te lo pida. La passphrase no es recuperable — si no la tienes, los datos cifrados no son legibles en el nuevo dispositivo.
4. El cloud sync empieza. Espera que la primera sincronización completa tarde unos minutos para un cuaderno de tamaño medio.

## Qué se cifra y cómo

- Cada cuaderno se cifra localmente con una clave por cuaderno.
- Esas claves se cifran con una root key derivada de tu passphrase de sync mediante PBKDF2-SHA256, 256.000 iteraciones.
- Solo los bytes cifrados llegan al servidor. No podemos leer tus cuadernos.

Los metadatos (títulos de los cuadernos, timestamps, tamaño) también se cifran — el servidor ve blobs opacos y timestamps de sync.

## Si pierdes la passphrase

Si olvidas la passphrase y no tienes un dispositivo que aún tenga una clave en caché, tus datos cifrados son **irrecuperables**. Es por diseño. La alternativa — un mecanismo de recovery del lado del servidor — rompería el modelo de extremo a extremo y es un trade-off que no estamos dispuestos a hacer para cuentas consumer.

Para **cuentas Education**, una clave de recovery opcional mantenida por el administrador puede configurarse en el momento del despliegue. Es un opt-in explícito, documentado en el DPA institucional y auditado.

## Resolución de conflictos

Si editas el mismo canvas en dos dispositivos simultáneamente mientras uno está offline, Fluera usa un CRDT con vector clocks para hacer el merge sin conflictos. No vas a perder trabajo. En casos raros en los que el merge automático es ambiguo, verás un marcador "merge needed" en el nodo afectado y una vista lado a lado para confirmar.

## Desactivar el sync para un cuaderno específico

Clic derecho (o mantén pulsado) en un cuaderno → **Desactivar sync**. La copia de la nube se revoca inmediatamente. La copia local queda intacta.

## Siguiente

- [FAQ y troubleshooting](/es/docs/faq)
- [Arquitectura de seguridad](/es/security/architecture)
