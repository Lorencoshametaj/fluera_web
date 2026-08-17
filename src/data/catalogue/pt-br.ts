import type { CatalogueData } from "./types";

const data: CatalogueData = {
  "meta": {
    "title": "Catálogo — Modelos de estudo que se instalam na sua memória",
    "description": "Uma página escrita à mão e a estrutura de conceitos por baixo. Instalar planta um cronograma de revisões seu. Ordenado por retenção medida, não por downloads.",
    "ogImage": "/og/page/catalogue.png"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "O Catálogo do Fluera",
    "description": "Um catálogo de modelos de estudo escritos à mão que se instalam como cronogramas de repetição espaçada, ordenados por retenção medida em vez de por downloads.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Fluera",
      "url": "https://fluera.dev"
    },
    "inLanguage": "pt-BR"
  },
  "hero": {
    "kicker": "Catálogo",
    "title": "Alguém já destrinchou este capítulo.<br />Instale e comece a ser cobrado nele.",
    "description": "Um modelo de estudo do Fluera não é um PDF nem um baralho de flashcards. É uma página escrita à mão de verdade, a estrutura de conceitos que sustenta essa página e uma receita do cronograma de revisões em que você deveria estar. Instalar um deles planta esse cronograma dentro de um canvas seu.",
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Solicitar acesso antecipado →"
      },
      {
        "href": "/features/spaced-repetition",
        "kind": "btn-secondary",
        "label": "Como funciona o cronograma de revisões"
      }
    ]
  },
  "unit": {
    "kicker": "A unidade",
    "title": "Três coisas vão juntas. O autor não é uma delas.",
    "sub": "As outras lojas entregam um documento e desejam boa sorte. Um modelo de estudo leva a página, a estrutura que faz a página ensinar e as instruções para agendá-la — e, de propósito, deixa de fora a parte que pertence a quem a fez.",
    "items": [
      {
        "title": "Uma folha enquadrada",
        "body": "Não o caderno inteiro — a região que o autor enquadrou no próprio canvas. Os traços, as formas, o texto digitado e as imagens dentro daquele quadro, e nada fora dele. Nenhum PDF de origem vai junto."
      },
      {
        "title": "Uma estrutura de conceitos",
        "body": "O que sustenta a tinta: quais são os conceitos, a que tópico cada um pertence e como um depende do outro. É isso que separa um modelo que ensina de um que só se deixa ler."
      },
      {
        "title": "Uma receita de cartões novos em folha",
        "body": "Não a memória do autor — uma receita para você montar a sua. A retenção desejada, o tipo de material e quando a primeira revisão deve cair. Seu cronograma nasce dela na hora da instalação."
      }
    ]
  },
  "install": {
    "kicker": "Instalar",
    "title": "Ter o arquivo é uma coisa.<br />Estar no cronograma é outra.",
    "paragraphs": [
      "Baixar material de estudo nunca foi a parte difícil. A parte difícil é voltar a esse material no dia em que você ia esquecer, e nenhuma pasta no computador jamais resolveu isso.",
      "Por isso instalar um modelo não guarda um documento num canto qualquer. Planta cartões, com data. Você herda os conceitos do autor e as ligações entre eles — nunca o histórico de revisões dele, nem a confiança dele, nem o quanto ele sabia daquilo. O formato não tem onde carregar isso."
    ],
    "steps": [
      {
        "step": "01",
        "title": "A página chega como tinta",
        "body": "A folha é restaurada dentro de um canvas seu. É escrita à mão de verdade em papel de verdade, não um PDF renderizado — dá para escrever por cima, esticar a página e recortar o que quiser."
      },
      {
        "step": "02",
        "title": "Cada conceito vira um cartão",
        "body": "Um cartão novo de repetição espaçada para cada conceito nomeado, sem nenhum histórico atrás dele: zero repetições e uma dificuldade inicial no meio da faixa do Fluera. A primeira revisão cai um dia depois."
      },
      {
        "step": "03",
        "title": "Daí em diante o cronograma é seu",
        "body": "Ele fica gravado em disco e alimenta o seu selo de pendências e o resumo diário, igual a qualquer outra coisa que você escreveu. Reinstalar o mesmo modelo não zera um histórico de revisões que você já construiu."
      }
    ]
  },
  "ranking": {
    "kicker": "A classificação",
    "title": "Ordenado pelo que ficou na cabeça.<br />Não pelo que se espalhou.",
    "sub": "Contagem de downloads mede uma decisão tomada antes de alguém aprender qualquer coisa. E é o número mais fácil de inflar em qualquer loja. O Fluera consegue ordenar por algo melhor, porque o app já acompanha o quanto cada estudante está segurando cada conceito.",
    "items": [
      {
        "label": "Medido no aparelho",
        "body": "Quando você reabre o canvas de um modelo a partir do dia 1, do dia 7 e do dia 30, o Fluera lê o quanto o algoritmo de repetição espaçada acha que você ainda está segurando aqueles conceitos, e tira disso um número só."
      },
      {
        "label": "Um número, nada mais",
        "body": "É esse número que sai, e nada além dele. Nenhum título de conceito, nenhum conteúdo de cartão, nenhum histórico de revisões, nenhuma identidade. Ele só é enviado se você estiver com a conta conectada e tiver aceitado a coleta de dados de uso — e nunca se o modelo for seu."
      },
      {
        "label": "Calado até o quinto estudante",
        "body": "Um modelo não mostra número público nenhum enquanto pelo menos cinco estudantes diferentes não tiverem entrado com o número deles. Abaixo disso, a ordenação recorre à contagem de instalações e o card do modelo simplesmente não diz nada."
      },
      {
        "label": "O download não é o critério",
        "body": "A grade em “Todos os modelos” vem ordenada por esse sinal medido, não pela popularidade. Um modelo que se espalha rápido não compra posição nela."
      }
    ],
    "note": "<strong class=\"text-paper-100\">O que isto não é.</strong> É a estimativa de um algoritmo sobre o quanto quem voltou a estudar um modelo ainda está segurando os conceitos dele — não é nota de prova, não é grupo de controle e não fala por quem instalou um modelo e nunca mais o abriu. Preferimos descrever o sinal com precisão a enfeitá-lo."
  },
  "discovery": {
    "kicker": "Encontrar um",
    "title": "Três jeitos de filtrar,<br />e um quarto que só o seu aparelho sabe fazer.",
    "sub": "Todo catálogo de material de estudo falha do mesmo jeito: tudo é da sua matéria só no nome e quase nada é do seu curso. Por isso os filtros aqui são os que passam pela cabeça de quem estuda.",
    "paragraphs": [
      "Dá para filtrar por <strong class=\"text-paper-100\">matéria</strong>, por <strong class=\"text-paper-100\">curso ou prova</strong> — texto livre, então <em>Maturità</em> e <em>MCAT</em> valem tanto quanto <em>Análise I</em> — e por <strong class=\"text-paper-100\">idioma</strong>. Cada filtro traz uma contagem ao vivo, cada escolha refaz a conta dos outros, e filtro sem nada por trás nem aparece. Você nunca recebe uma opção que dá em página vazia.",
      "O catálogo abre no idioma em que seu app está, porque uma parede de material que você não lê não é catálogo. É preferência, não cerca: um toque abre para todos os idiomas.",
      "A busca é em texto completo e não implica com acento. Ela também deixa a classificação de lado e ordena por relevância — depois que você digitou o que quer, o quanto os outros seguraram deixou de ser a sua pergunta."
    ],
    "marksHeading": "O que significam as marcas num card",
    "marks": [
      {
        "mark": "Oficial",
        "body": "Quem põe é o catálogo, nunca algo que o autor digite num formulário. Não dá para conquistar a marca escrevendo a palavra no nome de exibição."
      },
      {
        "mark": "Novo",
        "body": "Não se pede, se cumpre: nenhuma instalação, nenhuma avaliação, publicado na última semana. A marca vence sozinha; ninguém precisa desligá-la."
      },
      {
        "mark": "Matéria",
        "body": "A disciplina em que o modelo foi catalogado, para você distinguir num relance uma página de química de outra que só passa perto da química."
      },
      {
        "mark": "Avaliação",
        "body": "Aparece só depois que o modelo foi mesmo avaliado, e por quem de fato o instalou. Modelo sem avaliação não diz nada, em vez de começar do zero."
      }
    ],
    "note": "<strong class=\"text-paper-50\">E uma linha que ninguém mais teria como montar.</strong> O Fluera já sabe em que conceitos você está trabalhando, porque foi você que os escreveu. Então ele ordena os modelos pelo quanto eles encostam no que está no seu canvas agora — e faz essa conta no seu aparelho. O que sai daí é a matéria que você mais estuda e os identificadores dos modelos que o app já tinha buscado no catálogo. O seu conjunto de conceitos não sai."
  },
  "privacy": {
    "kicker": "O que vai, o que fica",
    "title": "A página vai. O quanto ela te custou, não.",
    "sub": "Compartilhar material de estudo é compartilhar uma coisa que você fez enquanto ainda estava aprendendo. A linha entre uma coisa e outra está desenhada no código, não num parágrafo de política.",
    "items": [
      {
        "title": "O que o Fluera sabe de você não entra no arquivo",
        "body": "O componente que monta a estrutura pública de um modelo, por construção, nunca lê o seu histórico de revisões, a sua confiança declarada, quantas vezes você estudou aquilo, o quanto disso você ainda estava segurando, nem os embeddings por trás de tudo isso. Um especialista e alguém que está penando publicam a mesma página e saem com uma estrutura idêntica byte a byte."
      },
      {
        "title": "Quem sustenta essa linha é um teste, na CI",
        "body": "Essa garantia fica amarrada a um teste que varre a saída serializada e falha se qualquer um de vinte e seis nomes de campo do seu perfil de aprendizagem ou do seu comportamento aparecer em algum canto dela. Ele roda como um gate de CI com nome próprio e obrigatório, que também falha se o arquivo de teste for apagado."
      },
      {
        "title": "A tinta é o limite honesto",
        "body": "O que nenhuma dose de sanitização alcança é a letra em si, e a estrutura carrega, sim, um trecho curto e truncado do texto reconhecido — nunca a transcrição inteira, mas também não censurado. É por isso que o painel de publicação te mostra a imagem exata que ficaria pública, acima de uma caixa de consentimento, antes de qualquer coisa subir."
      },
      {
        "title": "Seu nome nunca vira o crachá",
        "body": "As leituras públicas não devolvem id de conta nenhum, e o criador é identificado por um código derivado da conta por um caminho de mão única — com sal, hash e truncamento. É um pseudônimo estável, não a sua identidade."
      }
    ],
    "action": {
      "href": "/security",
      "label": "Ler a arquitetura de segurança →"
    }
  },
  "creators": {
    "kicker": "Para criadores",
    "title": "A melhor explicação de uma ideia difícil<br />quase sempre cabe em uma página.",
    "paragraphs": [
      "Publicar começa no seu próprio canvas. Você enquadra a região que vale a pena compartilhar, o Fluera gera o modelo a partir dela, e um painel pergunta se aquilo vira arquivo ou vira publicação. O que você enquadrou é o que vai — o resto do canvas não sai dali.",
      "Antes de subir qualquer coisa, você vê a imagem exata que ficaria pública e confirma. A publicação é validada antes de um único byte ser guardado, e o upload passa por URLs assinadas de uso único; se falhar, a publicação é desfeita em vez de ficar pela metade.",
      "Todo modelo é gratuito. Não existe checkout no Fluera, nem campo de preço na API de publicação, nem livro de repasses — a coluna de preço do catálogo é travada em zero por uma restrição do banco, não por política."
    ],
    "heading": "O que publicar te dá",
    "benefits": [
      "Um identificador de criador pseudônimo, que nunca é a sua conta e nunca é o seu e-mail",
      "Um perfil opcional — nome de exibição, bio, avatar — com o avatar em espera até passar pela triagem",
      "Seguidores e uma prateleira que leva o seu modelo mais recente até eles",
      "Versionamento: publique a correção como substituição, não como cópia",
      "Um motivo sempre que a decisão for contra você, e um recurso capaz de revertê-la"
    ],
    "note": "Publicar exige conta conectada e confirmação de idade. Navegar e instalar não exigem nem uma coisa nem outra."
  },
  "safety": {
    "kicker": "Moderação e confiança",
    "title": "Um catálogo feito da letra de estranhos<br />precisa ter quem responda por ele.",
    "sub": "Abrir um catálogo qualquer um abre. O trabalho está no que acontece quando alguma coisa dá errado — e em garantir que quem grita mais alto não seja quem decide.",
    "items": [
      {
        "label": "Enviar não publica nada",
        "body": "Um modelo novo entra em análise. Enquanto não for triado, ele não está na navegação, não está na busca, não está no catálogo, e o link de compartilhamento dele não leva a lugar nenhum."
      },
      {
        "label": "A triagem lê o arquivo de verdade",
        "body": "O classificador extrai as imagens embutidas no próprio modelo em vez de confiar na miniatura de quem enviou, adota o pior veredito entre elas e roda em regiões da UE. Ele pode liberar ou escalar um item; reverter um moderador, nunca."
      },
      {
        "label": "Denúncia fala com gente, não com robô",
        "body": "Uma denúncia é um sinal para uma fila humana — uma por denunciante, autodenúncia recusada. Um grupo coordenado consegue chamar atenção. Derrubar uma publicação, não consegue."
      },
      {
        "label": "Remover remove os bytes",
        "body": "Quando uma publicação sai do ar, as provas ficam guardadas num bucket privado que só administradores abrem e, só depois disso, os objetos publicados são expurgados do CDN, não apenas escondidos da listagem."
      },
      {
        "label": "Toda decisão vem com motivo",
        "body": "O criador fica sabendo o que aconteceu com o modelo dele e se a decisão foi automatizada — e pode recorrer. Recurso aceito devolve a publicação ao ar."
      },
      {
        "label": "Avaliação se conquista",
        "body": "Você não avalia um modelo que nunca instalou, não avalia o seu próprio e não avalia no anonimato. As médias são recalculadas do zero, nunca incrementadas."
      }
    ]
  },
  "status": {
    "kicker": "Disponibilidade",
    "title": "O catálogo já vem no app.<br />Ainda está no começo.",
    "paragraphs": [
      "Navegar, pré-visualizar e instalar já estão dentro do Fluera, traduzidos nos dezesseis idiomas que o app fala. Publicar também já está no ar, para adultos com conta conectada, e estamos abrindo devagar de propósito: hospedar o trabalho dos outros é responsabilidade que se assume direito ou não se assume.",
      "Por isso o catálogo é pequeno, e esta página não traz contagem de modelos, de instalações nem de criadores. Esses números vão dizer alguma coisa mais adiante. Hoje seriam só enfeite."
    ],
    "actions": [
      {
        "href": "/beta",
        "kind": "btn-primary",
        "label": "Solicitar acesso antecipado →"
      },
      {
        "href": "/download",
        "kind": "btn-secondary",
        "label": "Baixar o Fluera"
      }
    ]
  }
};

export default data;

