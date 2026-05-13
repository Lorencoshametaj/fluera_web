---
lang: "pt-br"
title: "Privacidade e consentimento de IA"
description: "Quais dados o Fluera coleta, qual consentimento você está dando, e como desligar tudo."
section: settings
sectionLabel: "Configurações"
order: 1
updatedAt: 2026-04-20
---

O Fluera é uma ferramenta local-first. Por padrão, nada sai do seu dispositivo a menos que você ative explicitamente uma função que precise disso.

## As quatro categorias de consentimento

Abra **Configurações → Privacidade**. Você verá quatro toggles, todos desligados por padrão:

- **Analytics de produto.** Dados de sessão anônimos — contagens de invocação de recursos, duração da sessão, durações de chamada de IA. Nunca conteúdo. ID do usuário hasheado em SHA-256, retenção de 180 dias.
- **Funções de IA.** Necessárias para usar Socratic, Ghost Map, OCR de LaTeX e Fog of War. O texto selecionado do canvas é enviado para o Google Gemini via nosso proxy do lado do servidor. Nunca o caderno inteiro.
- **Cloud sync.** Necessária para sincronizar canvas entre dispositivos. Todos os cadernos são criptografados no seu dispositivo antes do upload. A nuvem guarda ciphertext.
- **Crash reporting.** Stack traces e metadados do dispositivo quando o app dá crash. Nenhum conteúdo do usuário. Processado pelo Sentry com `sendDefaultPii: false`.

Cada toggle é independente. Você pode ativar Cloud Sync sem Analytics. Pode usar IA sem Crash Reporting. As permissões são granulares de propósito.

## O que nunca é coletado

- O conteúdo dos seus canvas (criptografado em repouso com SQLCipher, AES-256)
- As perguntas que a IA faz, ou as suas respostas
- O áudio que você grava com Time Travel (armazenado localmente; o sync opt-in criptografa antes do upload)
- Informação pessoalmente identificável de qualquer tipo sem consentimento explícito

## Como verificar

Rode o app em modo avião. Faça tudo exceto cloud sync e IA. Observe o seu firewall ou monitor de rede. O Fluera faz zero requisições de rede com os quatro toggles de consentimento desligados. É verificável, por design.

## Revogando o consentimento

Os quatro toggles estão sempre acessíveis em **Configurações → Privacidade**. Desligar um toggle tem efeito imediato. Os dados de backend associados são programados para deleção em até 30 dias.

Para deleção a nível de conta (o direito ao esquecimento completo), escreva para [privacy@fluera.dev](mailto:privacy@fluera.dev) a partir do endereço da sua conta.

## Contas Education

Se a sua instituição administra a sua conta Fluera, os comportamentos acima ainda se aplicam aos *seus* dados. O administrador pode ver estatísticas agregadas de uso para auditorias de conformidade (via trilha de auditoria) mas não consegue ler o conteúdo dos seus cadernos. A criptografia é imposta no seu dispositivo; a chave fica no seu keychain, não em nenhum sistema admin.

## Próximo

- [Setup do cloud sync](/pt-br/docs/cloud-sync)
- [Arquitetura de segurança](/pt-br/security/architecture) — o modelo completo
