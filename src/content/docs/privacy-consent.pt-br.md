---
lang: "pt-br"
title: "Privacidade e consentimento de IA"
description: "Quais dados o Fluera coleta, qual consentimento você está dando, e como desligar tudo."
section: settings
sectionLabel: "Configurações"
order: 1
updatedAt: 2026-06-29
---

O Fluera é uma ferramenta local-first. Por padrão, nada sai do seu dispositivo a menos que você ative explicitamente uma função que precise disso.

## As quatro categorias de consentimento

Abra **Configurações → Privacidade**. Você verá quatro toggles, todos desligados por padrão:

- **Analytics de produto.** Dados de sessão anônimos — contagens de invocação de recursos, duração da sessão, durações de chamada de IA. Nunca conteúdo. ID do usuário hasheado em SHA-256, retenção de 180 dias.
- **Funções de IA.** Necessárias para usar Socratic, Ghost Map, OCR de LaTeX e Fog of War. O texto selecionado do canvas é enviado para os modelos Google Gemini servidos via Google Vertex AI, processados na UE (europe-west4 NL / europe-west1 BE). Nunca o caderno inteiro.
- **Cloud sync.** Necessária para sincronizar canvas entre dispositivos. Os dados sincronizados são criptografados em trânsito (TLS) e em repouso na infraestrutura da UE (Supabase, eu-north-1). Não há criptografia ponta a ponta: como controlador de dados, o Fluera pode acessar o conteúdo sincronizado, mas nunca o vende nem o usa para publicidade.
- **Crash reporting.** Stack traces e metadados do dispositivo quando o app dá crash. Nenhum conteúdo do usuário. Processado pelo Sentry com `sendDefaultPii: false`.

Cada toggle é independente. Você pode ativar Cloud Sync sem Analytics. Pode usar IA sem Crash Reporting. As permissões são granulares de propósito.

## Memória cognitiva (no dispositivo, opt-out)

Distinta dos quatro consentimentos de nuvem acima: por padrão, o Fluera indexa os seus cadernos **apenas no seu dispositivo** para gerar títulos automáticos, o mapa de conceitos (Ghost Map) e a repetição espaçada (FSRS). Esse índice **nunca sai do seu dispositivo** — nenhum conteúdo é enviado para a nuvem (ao contrário das *Funções de IA* e do *Cloud sync*). Você pode desligá-la em **Configurações → Privacidade → Memória cognitiva**: a indexação para e os dados cognitivos já construídos no dispositivo são apagados imediatamente (os seus cadernos permanecem intactos). Base legal: interesse legítimo com direito de oposição (GDPR Art. 6.1.f / 21) — e é por isso que ela vem ligada por padrão e é opt-out, não um consentimento opt-in como os quatro acima.

## O que nunca é coletado

- O conteúdo dos seus canvas (criptografado em repouso com SQLCipher, AES-256)
- As perguntas que a IA faz, ou as suas respostas
- O áudio que você grava com Time Travel (armazenado localmente; o sync opt-in o transmite criptografado em trânsito (TLS) e em repouso na infraestrutura da UE, não ponta a ponta)
- Informação pessoalmente identificável de qualquer tipo sem consentimento explícito

## Como verificar

Rode o app em modo avião. Faça tudo exceto cloud sync e IA. Observe o seu firewall ou monitor de rede. O Fluera faz zero requisições de rede com os quatro toggles de consentimento desligados. É verificável, por design.

## Revogando o consentimento

Os quatro toggles estão sempre acessíveis em **Configurações → Privacidade**. Desligar um toggle tem efeito imediato. Os dados de backend associados são programados para deleção em até 30 dias.

Para deleção a nível de conta (o direito ao esquecimento completo), escreva para [lorenco@fluera.dev](mailto:lorenco@fluera.dev) a partir do endereço da sua conta.

## Contas Education

Se a sua instituição administra a sua conta Fluera, os comportamentos acima ainda se aplicam aos *seus* dados. O administrador pode ver estatísticas agregadas de uso para auditorias de conformidade (via trilha de auditoria) mas não tem acesso ao conteúdo dos seus cadernos. No seu dispositivo, os dados ficam criptografados em repouso com SQLCipher e a chave fica no seu keychain, não em nenhum sistema admin. Se você ativar o Cloud Sync, os cadernos sincronizados não são criptografados ponta a ponta: o Fluera, como controlador de dados, pode acessá-los na infraestrutura da UE, mas nunca os vende nem os usa para publicidade.

## Próximo

- [Setup do cloud sync](/pt-br/docs/cloud-sync)
- [Arquitetura de segurança](/pt-br/security/architecture) — o modelo completo
