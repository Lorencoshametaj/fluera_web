---
lang: "pt-br"
title: "Privacidade e consentimento de IA"
description: "Quais dados o Fluera coleta, qual consentimento você está dando, e como desligar tudo."
section: settings
sectionLabel: "Configurações"
order: 1
updatedAt: 2026-10-23
---

O Fluera é uma ferramenta local-first. Por padrão, nada sai do seu dispositivo a menos que você ative explicitamente uma função que precise disso.

## As quatro categorias de consentimento

Abra **Configurações → Privacidade**. Você verá quatro toggles, todos desligados por padrão:

- **Analytics de produto.** Dados de uso ligados ao identificador da sua conta, para que você possa vê-los e apagá-los — uso de recursos, duração da sessão, duração das chamadas de IA. Nunca conteúdo. Guardados por no máximo 180 dias.
- **Funções de IA.** Necessárias para usar Socratic, Ghost Map, OCR de LaTeX e Fog of War. O texto selecionado do canvas é enviado para os modelos Google Gemini servidos via Google Vertex AI, processados na UE (modelos 2.5 nas regiões europe-west4 NL / europe-west1 BE, modelos 3.x no endpoint multirregional UE da Vertex AI): os dados permanecem nos Estados-membros da UE. Nunca o canvas inteiro.
- **Cloud sync.** Necessária para sincronizar canvas entre dispositivos. Os dados sincronizados são criptografados em trânsito (TLS) e em repouso na infraestrutura da UE (Supabase, eu-north-1). Não há criptografia ponta a ponta: como controlador de dados, o Fluera pode acessar o conteúdo sincronizado, mas nunca o vende nem o usa para publicidade. Com o plano Cloud, **Sincronizar entre seus dispositivos** (abaixo) também leva o seu estudo e as suas configurações.
- **Crash reporting.** Stack traces e metadados do dispositivo quando o app dá crash. Nenhum conteúdo do usuário. Processado pelo Sentry com `sendDefaultPii: false`.

Cada toggle é independente. Você pode ativar Cloud Sync sem Analytics. Pode usar IA sem Crash Reporting. As permissões são granulares de propósito.

## Memória cognitiva (no dispositivo, opt-out)

Diferente dos quatro consentimentos de nuvem acima: por padrão o Fluera indexa suas notas **no seu dispositivo** para gerar títulos automáticos, o mapa conceitual (Ghost Map) e a repetição espaçada (FSRS). O índice é construído e calculado no seu dispositivo e fica lá, a menos que você ative **Sincronizar entre seus dispositivos** (próxima seção): aí seus cartões de revisão com o histórico das suas respostas, seus conceitos, o mapa conceitual e os títulos dos seus grupos de notas passam pela nuvem do Fluera para chegar aos seus outros dispositivos. Você pode desativar a memória em **Configurações → Privacidade → Memória cognitiva**: a indexação para e os dados cognitivos deste dispositivo são apagados na hora (suas notas ficam intactas); se você usa Sincronizar entre seus dispositivos, as cópias na nuvem também são apagadas, e nenhuma volta a subir até você reativá-la. Base legal: interesse legítimo com direito de oposição (GDPR art. 6.1.f / 21) — por isso fica ativada por padrão e é opt-out, não um consentimento opt-in como os quatro acima.

## Sincronizar entre seus dispositivos (plano Cloud)

O interruptor **Configurações → Dados e sincronização → Sincronizar entre seus dispositivos** fica desligado até você ligá-lo. Ele precisa de uma conta e do plano Cloud, e vale para a sua conta inteira: ligado em um dispositivo, fica ligado em todo dispositivo em que você entrar. Quando você o liga, o servidor registra a data e a versão da política de privacidade que você tinha diante de si. Base legal: contrato (GDPR art. 6.1.b) — é o serviço Cloud que você paga.

- **O que vai para a nuvem, só enquanto está ligado:** os canvas inteiros (traços, seções, fórmulas, PDFs com as marcas feitas no leitor, fotos); as aulas gravadas (o áudio, em partes); o estudo de cada canvas (cartões de revisão com suas respostas, conceitos, provas com a tinta delas, o tutor socrático, o chat, a lembrança ativa, os cursos); as pastas da galeria (com seus nomes), a pasta de cada canvas, os fixados, as etiquetas e a Lixeira; o texto que o Fluera reconheceu na sua escrita à mão; suas escolhas nas configurações (aparência, idioma, papel, revisão, cores, borracha e afins). As configurações ligadas a um único dispositivo (mão, palma, caneta, janela) ficam nele.
- **O que sempre fica no dispositivo:** o histórico do canvas (Time Travel) e o desfazer.
- **Quem vê:** você. Num canvas que você compartilha, os membros veem o canvas e os títulos dos grupos de notas; o seu estudo só você vê.
- **Onde:** Supabase, região UE `eu-north-1` (Estocolmo), criptografado em trânsito e em repouso, **não** criptografado de ponta a ponta.
- **Desligá-lo** de qualquer dispositivo para em todos e não apaga nada. O mesmo vale se você retirar o consentimento do Cloud sync.
- **Quando o plano Cloud termina,** a sincronização pausa e tudo continua disponível para baixar por 6 meses. Depois disso, podemos remover o áudio das aulas, os PDFs e as fotos além dos 500 MB do plano Free, começando pelos mais antigos; a tinta dos seus canvas fica.
- **Apagar:** **Excluir definitivamente** um canvas na **Lixeira** o remove da nuvem com o que pertence a ele, incluindo a tinta das provas dele; **Configurações → Privacidade e telemetria → Excluir todos os meus dados da nuvem** remove todos os canvas, as aulas, a tinta das provas, as configurações e as pastas, e desliga Sincronizar entre seus dispositivos; **Configurações → Perfil e conta → Excluir conta** remove tudo, configurações incluídas.

Sem o interruptor, tudo isso fica no seu dispositivo, como antes.

## Dados de treino da IA (seção à parte, só opt-in)

Estamos construindo um reconhecedor de escrita à mão próprio, feito para o jeito como os usuários do Fluera escrevem de verdade. Em **Configurações → Privacidade → Dados de treino da IA** você encontra mais duas chaves, também desligadas por padrão e independentes das quatro acima:

- **Sessão de calibração (~5 min).** Uma sessão guiada, uma vez só, em que você escreve 30 símbolos propostos (dígitos, operadores matemáticos, letras gregas, letras comuns). O símbolo na tela é a verdade de referência, pareada com os seus traços.
- **Captura automática enquanto você escreve.** Enquanto você escreve normalmente no canvas, guardamos os traços brutos (coordenadas, tempos, pressão, inclinação da caneta quando há suporte) e uma pequena imagem PNG criptografada de cada cluster. Os dados ficam criptografados no nosso servidor. **Quando o nosso acordo com o Google for concluído** (acordo de processamento de dados do Vertex AI, em andamento), o Google Gemini vai analisar as imagens para podermos ensinar ao Fluera o que você escreveu. Até lá, nenhum dado de treino sai da nossa infraestrutura para terceiros.

As duas chaves usam um identificador pseudônimo próprio, calculado no seu dispositivo e **diferente** do usado pelos Analytics de produto: só com os dados não dá para ligar uma contribuição à sua conta.

Medidas de segurança desta categoria:
- Criptografia dos dados com AES-256-GCM *antes* do envio; a chave para decifrá-los é um par de chaves assimétrico (X25519) cuja metade privada fica guardada em papel, offline, e nunca é digitalizada.
- Row-Level Security nas tabelas do Supabase: ninguém consegue ler as amostras de outra pessoa.
- Filtro de ruído: clusters com menos de 3 pontos (toques, borrões) são descartados antes de salvar.
- Deduplicação persistente por impressão geométrica: redesenhar igual o mesmo cluster não gera duplicata.
- Prévia de cada amostra em **Configurações → Dados de treino da IA → Capturas recentes**: você vê miniaturas de exatamente o que guardamos.

## O que nunca é coletado

- O conteúdo dos seus canvas (criptografado em repouso com sqlite3mc, ChaCha20-Poly1305), a menos que você ative **Sincronizar entre seus dispositivos** (acima)
- As perguntas que a IA faz, ou as suas respostas
- O áudio que você grava, a menos que você ative **Sincronizar entre seus dispositivos** (acima): aí ele vai para a nuvem como seus canvas, criptografado em trânsito e em repouso, não de ponta a ponta
- Informação pessoalmente identificável de qualquer tipo sem consentimento explícito

## Como verificar

Desligue as quatro chaves e observe o seu firewall ou monitor de rede: seus canvas, suas gravações e o que você escreve ficam no dispositivo. O app ainda fala com a rede para coisas que não levam conteúdo dos canvas, por exemplo: o login na sua conta, a verificação da sua assinatura com a loja (RevenueCat), o download dos modelos de que alguns recursos precisam, o sinal do marketplace quando você instala ou estuda um card do catálogo (ligado por padrão, desliga em **Configurações → Privacidade e telemetria → Sinal do marketplace**) e as páginas que você abre no navegador integrado.

## Revogando o consentimento

Os quatro toggles estão sempre acessíveis em **Configurações → Privacidade**. Desligar um toggle tem efeito imediato. O que acontece com os dados já coletados depende da categoria:

- **Analytics de produto:** quando a revogação chega aos nossos servidores, a telemetria já coletada com a sua conta é apagada na hora. De qualquer forma, ela nunca fica mais de 180 dias.
- **Funções de IA:** as solicitações param na hora, também no nosso servidor. O registro de uso da IA (qual função, quantos tokens, nenhum conteúdo) fica 24 meses, para os limites do plano.
- **Cloud sync:** desligá-lo, ou desligar Sincronizar entre seus dispositivos, não apaga nada do que já está na nuvem — para isso use **Excluir todos os meus dados da nuvem**.
- **Crash reporting:** a revogação não apaga os relatórios já enviados: a Sentry os guarda por 30 dias, e os backups criptografados dela por até 90.

Para excluir sua conta e os dados dela na nuvem, use **Configurações → Perfil e conta → Excluir conta**. Se não funcionar, escreva para [lorenco@fluera.dev](mailto:lorenco@fluera.dev) a partir do endereço da sua conta.

## Próximo

- [Setup do cloud sync](/pt-br/docs/cloud-sync)
- [Arquitetura de segurança](/pt-br/security/architecture) — o modelo completo
