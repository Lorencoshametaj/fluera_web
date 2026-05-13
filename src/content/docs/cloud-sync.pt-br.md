---
lang: "pt-br"
title: "Cloud sync"
description: "Como sincronizar canvas entre dispositivos, o que é criptografado e como recuperar se você perder a passphrase."
section: settings
sectionLabel: "Configurações"
order: 2
updatedAt: 2026-04-20
---

O cloud sync é opt-in por caderno. Você pode sincronizar um canvas mantendo outro estritamente local. Nada se move até você dizer.

## Ativando o sync no primeiro dispositivo

1. Abra **Configurações → Privacidade** e ative **Cloud sync**.
2. Crie ou insira sua **passphrase de sync**. Ela é *separada* da senha da conta. A passphrase é usada para derivar a chave de criptografia — e fica guardada apenas no seu dispositivo, nunca nos nossos servidores.
3. Escolha quais cadernos sincronizar. Clique direito (ou pressione e segure) em um caderno → **Ativar sync**.

Um pequeno ícone de nuvem aparece em cada caderno sincronizado. Uma variante vermelha indica erro; uma cinza indica pausa.

## Adicionando um segundo dispositivo

1. Instale o Fluera no segundo dispositivo.
2. Entre com a mesma conta.
3. Insira a *mesma* passphrase de sync quando solicitado. A passphrase não é recuperável — se você não tiver ela, os dados criptografados não são legíveis no novo dispositivo.
4. O cloud sync começa. Espere que a primeira sincronização completa leve alguns minutos para um caderno de tamanho médio.

## O que é criptografado e como

- Cada caderno é criptografado localmente com uma chave por caderno.
- Essas chaves são criptografadas com uma root key derivada da sua passphrase de sync via PBKDF2-SHA256, 256.000 iterações.
- Apenas os bytes criptografados chegam ao servidor. Não conseguimos ler os seus cadernos.

Os metadados (títulos dos cadernos, timestamps, tamanho) também são criptografados — o servidor vê blobs opacos e timestamps de sync.

## Se você perder a passphrase

Se você esquecer a passphrase e não tiver um dispositivo que ainda tenha uma chave em cache, os seus dados criptografados ficam **irrecuperáveis**. Isso é por design. A alternativa — um mecanismo de recovery do lado do servidor — quebraria o modelo ponta a ponta e é um trade-off que não estamos dispostos a fazer para contas consumer.

Para **contas Education**, uma chave de recovery opcional mantida pelo administrador pode ser configurada no momento da implantação. É um opt-in explícito, documentado no DPA institucional e auditado.

## Resolução de conflitos

Se você editar o mesmo canvas em dois dispositivos simultaneamente enquanto um está offline, o Fluera usa um CRDT com vector clocks para fazer o merge sem conflitos. Você não vai perder trabalho. Em casos raros em que o merge automático é ambíguo, você verá um marcador "merge needed" no nó afetado e uma vista lado a lado para confirmar.

## Desativando o sync para um caderno específico

Clique direito (ou pressione e segure) em um caderno → **Desativar sync**. A cópia da nuvem é revogada imediatamente. A cópia local fica intacta.

## Próximo

- [FAQ e troubleshooting](/pt-br/docs/faq)
- [Arquitetura de segurança](/pt-br/security/architecture)
