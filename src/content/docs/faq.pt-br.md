---
lang: "pt-br"
title: "FAQ"
description: "As perguntas que mais recebemos dos beta testers. Se algo aqui estiver desatualizado, escreva para o suporte e a gente conserta."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 1
updatedAt: 2026-04-20
---

## Por que meu canvas está lento para abrir depois que não uso há uma semana?

A primeira vez que o Fluera carrega um caderno depois de uma pausa, ele reconstrói o índice espacial e re-avalia quais nós estão vencendo para review. As aberturas seguintes são rápidas. Se a pausa foi de mais de um mês, espere também que o agendador de repetição espaçada recalibre as suas reviews pendentes.

Se a primeira abertura leva mais de 10 segundos em um dispositivo moderno, isso é um bug — escreva para [support@fluera.dev](mailto:support@fluera.dev) com o nome do canvas e a contagem aproximada de nós.

## Posso importar meus decks do Anki?

Ainda não. O import está no roadmap mas não é blocker da Phase 1 — o modelo de recuperação do Fluera é estruturalmente diferente (espacial, não atômico), então um import direto perderia a maior parte do valor. Quando chegar, vai estar disponível para contas Pro e Education.

## Posso exportar meus canvas para PNG / SVG / PDF?

Sim, todos eles, mais o nosso formato aberto `.fluera`. Veja o menu **Exportar**. Sem restrições por tier — exportar é uma função básica de propriedade dos dados, não uma paywalled.

## A IA me deu uma resposta errada. Isso é esperado?

Às vezes, sim. A nossa IA é o Google Gemini, e o Gemini — como todo LLM — pode alucinar. O Socratic Mode é menos sujeito a isso porque faz perguntas em vez de produzir respostas definitivas, mas não é zero.

Se você receber uma resposta da IA claramente errada, toque em **Sinalizar** na resposta. Esse feedback é usado para melhorar o prompting; é anonimizado e nunca ligado ao seu conteúdo.

## O Fluera vai funcionar sem internet?

O canvas — escrita, leitura, exportação — está completamente offline. As funções de IA (Socratic, Ghost Map, scoring de Fog of War) precisam de internet. O agendamento de repetição espaçada é local; só sync e IA precisam de conexão.

## Estou no Brasil. E a LGPD?

Plenamente compatível. O Fluera é hospedado na UE e GDPR-nativo, o que cobre os requisitos da LGPD em paralelo. Você pode exercer os seus direitos (acesso, retificação, deleção, portabilidade) via **Configurações → Privacidade** ou escrevendo para [privacy@fluera.dev](mailto:privacy@fluera.dev). Resposta em até 30 dias; geralmente em 48 horas.

## A Pencil está laggando no meu iPad. O que está errado?

Primeiro, verifique se o Fluera está atualizado. Depois: **Configurações → Canvas → Latência de traço** deve ler *Predicted (recomendado)* para dispositivos Apple Pencil. Se diz *Padrão* ou *Low-power*, volte para Predicted.

Se o lag persistir com Predicted ligado, feche e relance. Se ainda persistir, escreva para a gente com o modelo do seu iPad — há uma regressão no iPad Air 3 que estamos rastreando ativamente.

## Como reporto um bug?

[support@fluera.dev](mailto:support@fluera.dev). Descreva o que você estava fazendo, o que esperava, o que aconteceu, e inclua a versão do app (Configurações → Sobre). Screenshots ajudam.

Para vulnerabilidades de segurança, use [security@fluera.dev](mailto:security@fluera.dev) e criptografe com a nossa chave PGP (no nosso perfil do GitHub).

## Como dou feedback sobre a pedagogia?

A gente lê cada e-mail. [hello@fluera.dev](mailto:hello@fluera.dev) vai direto para os founders. Especialmente útil: o que *não* funcionou para você, o que pareceu atrito que não era desejável, e qualquer coisa que te surpreendeu.

## Próximo

- [Tuning de performance](/pt-br/docs/performance) — tirando o máximo de canvas grandes
- [Toda a documentação do usuário](/pt-br/docs)
