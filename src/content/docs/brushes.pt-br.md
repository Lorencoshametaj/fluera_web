---
lang: "pt-br"
title: "Pincéis"
description: "Treze brush engines, cada um calibrado para um tipo de marca diferente. Um guia curto para escolher o certo — e por que importa menos do que você pensa."
section: canvas
sectionLabel: "O canvas"
order: 1
updatedAt: 2026-04-20
---

O Fluera vem com treze brush engines. Cada um é uma pipeline de renderização completa — pressão, inclinação, velocidade, fragment shaders por pincel — não uma troca de textura. Parece muito; na prática, a maior parte da sua aprendizagem vai acontecer em um ou dois deles.

## A resposta curta

- Se você está fazendo anotações: **caneta tinteiro** ou **caneta esferográfica**. Ambas rápidas, legíveis, indulgentes.
- Se você está anotando um PDF ou destacando um conceito: **marca-texto**.
- Se você está desenhando um diagrama com linhas geométricas limpas: **caneta técnica**.
- Se você está fazendo uma metáfora visual rápida ou ilustração: **lápis** (traços leves) ou **carvão** (traços dramáticos).

Todo o resto é para situações específicas. Não pense demais.

## Os treze

| Pincel              | Bom para                                          | Notas                                          |
|---------------------|---------------------------------------------------|------------------------------------------------|
| Caneta tinteiro     | Escrita à mão em forma longa                      | Responde à inclinação, fluxo natural de tinta  |
| Caneta esferográfica| Anotações rápidas, linha uniforme                 | Largura sensível à pressão                     |
| Lápis               | Traços macios, indulgentes                        | Textura granulada, gradação por pressão        |
| Caneta técnica      | Diagramas estilo CAD, geometria precisa           | Zero sensibilidade à pressão de propósito      |
| Marker              | Títulos com ponta chanfrada, destaques            | Traços planos, cor vívida                      |
| Marca-texto         | Destaques em overlay (20–30% de opacidade)        | Mistura em modo overlay                        |
| Carvão              | Expressivo, textura áspera                        | Efeito esfumado, sangra nas bordas             |
| Óleo                | Traços pictóricos, cor em camadas                 | Wet-edge blending, escurecimento nas bordas    |
| Aquarela            | Camadas suaves, difusão                           | Simulação de pigmento                          |
| Aguada              | Sensação wet-on-paper                             | Sangria de cor nas bordas                      |
| Spray               | Efeitos de partículas, sombras                    | Distorção nas bordas                           |
| Neon                | Anotações luminosas                               | Brilho externo, saturação fluorescente         |
| Borracha            | Remoção pixel a pixel, não é uma ferramenta de delete | Consciente do histórico — revela marcas embaixo |

## Por que o motor importa (rapidamente)

O motor do Fluera preserva os sinais de pressão, inclinação e velocidade com latência abaixo de 15 milissegundos no iOS e macOS. Não é só capricho de produto. <a href="/pt-br/science/authors/van-der-meer">O trabalho de EEG da van der Meer</a> mostrou que a escrita à mão engaja redes sensorimotoras que a digitação não engaja, e a riqueza desses sinais escala com a fidelidade da captura.

Em termos práticos: um canvas que perde traços, atrasa sob pressão ou achata os dados de inclinação está jogando fora exatamente o sinal que torna as anotações à mão cognitivamente superiores. Construímos o motor do zero porque nenhuma opção off-the-shelf atendia o padrão.

## Personalizar um pincel

Pressione e segure qualquer pincel na toolbar. Um pequeno painel abre com:

- **Tamanho** (0.5pt – 12pt)
- **Opacidade** (10% – 100%)
- **Estabilização** (nenhuma / suave / firme) — suaviza o jitter sem matar a personalidade
- **Curva de pressão** — ajusta a resposta a pressões leves vs fortes

As mudanças são por canvas, não globais, então você pode ter um lápis macio em um caderno e um afiado em outro.

## Próximo

- [Gestos e zoom](/pt-br/docs/gestures-zoom)
- [Exportação e backup](/pt-br/docs/cloud-sync)
