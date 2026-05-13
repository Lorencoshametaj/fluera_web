---
lang: "pt-br"
title: "Tuning de performance"
description: "O Fluera é construído para manter 60 FPS em canvas com centenas de milhares de traços. Aqui está o que checar quando isso não acontece."
section: troubleshooting
sectionLabel: "Troubleshooting"
order: 2
updatedAt: 2026-04-20
---

O motor do Fluera é projetado para ficar a 60 FPS com latência de traço abaixo de 15 ms em hardware moderno — até centenas de milhares de traços por caderno. Quando não fica, geralmente um de um pequeno conjunto de coisas é responsável.

## Diagnóstico

Abra **Configurações → Avançado → Performance**. Você vai ver:

- **FPS atual** — deve ficar em 60 (ou 120 em dispositivos ProMotion)
- **Latência de traço** — deve ler <15 ms em iOS/macOS, <20 ms em outras plataformas
- **Memória usada** — absoluta e como porcentagem do budget do dispositivo
- **Hit rate da tile cache** — deve ser >90% durante zoom/pan normais

Se algo aqui está vermelho, os culpados prováveis estão na lista abaixo.

## Canvas grandes (&gt; 200k traços)

O motor aguenta esse volume, mas duas configurações importam:

- **Budget de memória.** Em dispositivos com menos de 6 GB de RAM, o budget de memória padrão do Fluera é conservador. Se você tem muita RAM e quer respostas de zoom mais rápidas, suba para *Generoso* em **Configurações → Canvas → Budget de memória**.
- **Nível de detalhe.** A política de LOD padrão simplifica os traços em níveis de zoom muito baixos. Se você notar traços com aparência tremida quando o zoom está afastado, mude o LOD para *Alto detalhe* — mas espere ~10% mais de carga de GPU.

## Gravação sincronizada com áudio (Time Travel)

Time Travel armazena o áudio junto com os timestamps dos traços. Para uma aula de 60 minutos, são cerca de 20 MB de áudio. Não é o áudio que deixa as coisas lentas — é o índice. Tente:

- **Configurações → Time Travel → Granularidade do índice** definida como *Padrão* em vez de *Fina*
- Apagar sessões antigas do Time Travel que você não precisa (ficam guardadas localmente por padrão; o botão clear-cache as remove com segurança)

## Apple Pencil especificamente

No iPad, o modo padrão *Predicted touch* mantém a latência de traço abaixo de 8 ms. Se você desabilitou a predição (em Configurações → Canvas → Latência de traço → Padrão), volte para Predicted. A predição é uma API do Apple Pencil, não um chute — usa a predição de trajetória do próprio hardware.

## Quando nada ajuda

Rode **Configurações → Avançado → Exportar diagnóstico**. Você ganha um pequeno arquivo JSON com amostras de FPS, uso de memória e informações (anônimas) do dispositivo. Mande para [support@fluera.dev](mailto:support@fluera.dev) com uma descrição curta de quando as coisas ficam lentas.

A gente loga ≈95% das regressões de performance visíveis ao usuário em um pedaço específico de código em até uma hora depois de receber um export de diagnóstico. Os 5% restantes são genuinamente difíceis e a gente vai te dizer.

## Próximo

- [FAQ](/pt-br/docs/faq)
- [Toda a documentação do usuário](/pt-br/docs)
