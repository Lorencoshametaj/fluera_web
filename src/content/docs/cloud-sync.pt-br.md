---
lang: "pt-br"
title: "Cloud sync"
description: "Como sincronizar canvas entre dispositivos, como os seus dados são protegidos e o que esperar."
section: settings
sectionLabel: "Configurações"
order: 2
updatedAt: 2026-04-20
---

O cloud sync é opt-in por caderno. Você pode sincronizar um canvas mantendo outro estritamente local. Nada se move até você dizer.

## Ativando o sync no primeiro dispositivo

1. Abra **Configurações → Privacidade** e ative **Cloud sync**.
2. Escolha quais cadernos sincronizar. Clique direito (ou pressione e segure) em um caderno → **Ativar sync**.

Um pequeno ícone de nuvem aparece em cada caderno sincronizado. Uma variante vermelha indica erro; uma cinza indica pausa.

## Adicionando um segundo dispositivo

1. Instale o Fluera no segundo dispositivo.
2. Entre com a mesma conta.
3. O cloud sync começa automaticamente. Espere que a primeira sincronização completa leve alguns minutos para um caderno de tamanho médio.

## Como os seus dados sincronizados são protegidos

- No seu dispositivo, o banco de dados local é criptografado em repouso com SQLCipher (AES-256).
- Ao sincronizar, os dados viajam criptografados em trânsito (TLS 1.3 com cipher suites modernas).
- Nos nossos servidores, os dados ficam na infraestrutura da UE (Supabase, `eu-north-1`) e são protegidos por criptografia em repouso no nível da infraestrutura.

Para deixar claro: o cloud sync **não** é criptografado ponta a ponta. Como controlador de dados, o Fluera pode acessar tecnicamente o conteúdo sincronizado para fornecer e operar o serviço. Nunca vendemos os seus dados, usamos para publicidade ou para treinar modelos. Se você quiser uma cópia que só você possa abrir, exporte um arquivo `.fluera`; essas exportações são criptografadas com AES-256-GCM.

## Recuperando os seus dados

Como os cadernos sincronizados ficam nos nossos servidores da UE e são vinculados à sua conta, você pode recuperá-los entrando novamente em qualquer dispositivo. Não há uma passphrase separada para lembrar ou perder.

Se você quiser uma cópia criptografada que só você possa abrir, exporte um arquivo `.fluera` (AES-256-GCM) e guarde a senha; o Fluera não consegue ler esse arquivo.

## Resolução de conflitos

Se você editar o mesmo canvas em dois dispositivos simultaneamente enquanto um está offline, o Fluera usa um CRDT com vector clocks para fazer o merge sem conflitos. Você não vai perder trabalho. Em casos raros em que o merge automático é ambíguo, você verá um marcador "merge needed" no nó afetado e uma vista lado a lado para confirmar.

## Desativando o sync para um caderno específico

Clique direito (ou pressione e segure) em um caderno → **Desativar sync**. A cópia da nuvem é revogada imediatamente. A cópia local fica intacta.

## Próximo

- [FAQ e troubleshooting](/pt-br/docs/faq)
- [Arquitetura de segurança](/pt-br/security/architecture)
