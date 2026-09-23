// Conteúdo do curso "Claude 101 em português".
// Estrutura espelha o curso oficial da Anthropic Academy (13 aulas em 4 módulos + conclusão),
// mas o texto é original, escrito para uso pessoal.

window.CURSO = {
  titulo: "Claude 101 em português",
  subtitulo: "Do primeiro prompt ao uso diário: projetos, artefatos, skills, conectores e Research.",
  alunos: [
    { id: "felipe", nome: "Felipe" },
    { id: "arthur", nome: "Arthur" },
    { id: "dayane", nome: "Dayane" },
  ],
  modulos: [
    {
      id: "m1",
      nome: "Conhecendo o Claude",
      pergunta: "O que é o Claude, como conversar com ele e como conseguir bons resultados?",
      aulas: [1, 2, 3, 4],
    },
    {
      id: "m2",
      nome: "Projetos, Artefatos e Skills",
      pergunta: "Como dar estrutura e conhecimento reutilizável ao Claude, e onde ficam as coisas que você cria?",
      aulas: [5, 6, 7],
    },
    {
      id: "m3",
      nome: "Conectores, Busca e Research",
      pergunta: "Como trazer suas ferramentas, seus documentos e a web para dentro da conversa?",
      aulas: [8, 9, 10],
    },
    {
      id: "m4",
      nome: "Casos de uso e outras formas de usar",
      pergunta: "Como o Claude aparece no dia a dia de diferentes pessoas, e onde mais ele funciona?",
      aulas: [11, 12],
    },
    {
      id: "m5",
      nome: "Conclusão e certificado",
      pergunta: "Para onde ir a partir daqui, e como ganhar o certificado?",
      aulas: [13],
      final: true,
    },
  ],

  aulas: {
    /* ------------------------------------------------------------------ */
    1: {
      titulo: "O que é o Claude?",
      duracao: "5 min",
      resumo: "O Claude é mais que um chatbot: é um parceiro de raciocínio. Nesta aula você entende o que ele é, o que faz bem e por onde acessá-lo.",
      objetivos: [
        "Explicar o que é o Claude e os princípios que orientam seu comportamento",
        "Descrever as capacidades principais do Claude e o que o diferencia de um chatbot simples",
        "Identificar as formas de acessar o Claude (web, computador e celular)",
      ],
      secoes: [
        {
          h: "Pontos principais",
          html: `
<ul class="pontos">
<li><b>O Claude é um assistente de IA para a vida e para o trabalho.</b> Ele foi treinado para seguir um conjunto de princípios: evitar respostas tóxicas ou discriminatórias, não ajudar em atividades ilegais ou antiéticas e agir de forma segura e útil. A Anthropic chama essa abordagem de <i>Constitutional AI</i> (IA constitucional): o modelo aprende a se alinhar a valores humanos e a agir com transparência.</li>
<li><b>Ele é mais que um chatbot.</b> Resumir, pesquisar, escrever junto com você, responder perguntas, programar, analisar dados. Pense no Claude como alguém com quem você pensa em voz alta sobre um problema difícil, não só como uma caixa que devolve respostas curtas.</li>
<li><b>Ele aceita direção.</b> Você pode pedir um tom, uma personalidade, um formato. Comparado a outras ferramentas, ele tende a ser mais fácil de conduzir e menos propenso a sair do trilho, então você gasta menos esforço para chegar no resultado que quer.</li>
<li><b>Ele está onde você está.</b> Os aplicativos do Claude existem em todos os planos (Free, Pro, Max, Team e Enterprise). Conversas, projetos, memória e preferências sincronizam entre os aparelhos quando você está logado: navegador, app de computador e app de celular.</li>
</ul>`,
        },
        {
          h: "O que o Claude faz bem",
          html: `
<p>As tarefas vão muito além de "pergunta e resposta". Alguns exemplos:</p>
<dl class="lista-def">
<dt>Escrita e conteúdo</dt><dd>Mensagens, e-mails, posts, relatórios longos. Como ele aceita instruções de tom, dá para ir ajustando estrutura e clareza até o texto soar como você.</dd>
<dt>Pesquisa e análise</dt><dd>Explorar ângulos, juntar achados, analisar dados. Você pode enviar documentos inteiros: a "janela de contexto" do Claude comporta mais de 200 mil tokens (por volta de 500 páginas de texto), chegando a 1 milhão de tokens nos planos pagos com modelos compatíveis.</dd>
<dt>Programação</dt><dd>Uma das maiores forças do Claude. Ele escreve, corrige e explica código em várias linguagens.</dd>
<dt>Raciocínio e resolução de problemas</dt><dd>Matemática, análise estratégica, decisões complexas. O Claude pode responder na hora ou parar para raciocinar antes, um recurso chamado <b>Thinking</b> (pensamento estendido), útil quando o problema pede cuidado.</dd>
<dt>Aprender coisas novas</dt><dd>Ele se adapta ao seu ritmo. Existe ainda o <b>modo de aprendizado</b>, que guia o seu raciocínio em vez de entregar a resposta pronta, bom para estudar de verdade.</dd>
</dl>`,
        },
        {
          h: "Formas de acessar o Claude",
          html: `
<p>O Claude é a inteligência. A mesma inteligência aparece em várias interfaces, cada uma boa para um tipo de tarefa:</p>
<ul class="pontos">
<li><b>Claude.ai</b> (e os apps de celular e computador): a forma principal. Conversar, escrever, pesquisar, analisar e criar arquivos. É o foco deste curso.</li>
<li><b>Claude Code</b>: ferramenta de programação que edita arquivos, roda comandos e faz commits. Feita para quem programa, mas serve para mexer em arquivos no computador de forma geral.</li>
<li><b>Claude Tag</b>: o Claude dentro do Slack. Você marca o Claude numa conversa e ele busca contexto nos canais e arquivos do seu espaço de trabalho.</li>
<li><b>Claude Design</b>: transforma uma descrição, um rabisco ou uma captura de tela em um protótipo de interface que você refina e compartilha.</li>
<li><b>Claude para Microsoft 365</b>: o Claude como barra lateral dentro do Excel, PowerPoint, Word e Outlook, editando o documento que já está aberto.</li>
</ul>
<p class="nota">A aula 12 volta a cada uma dessas ferramentas com mais detalhe.</p>`,
        },
      ],
      pratica: {
        titulo: "Sua primeira olhada",
        intro: "Abra o Claude (claude.ai ou o app) e faça uma conversa curta só para se ambientar.",
        passos: [
          "Entre em claude.ai (ou abra o app no computador ou no celular) e faça login.",
          "Envie o prompt sugerido abaixo, ou escreva o seu.",
          "Leia a resposta e faça uma pergunta de continuação sobre um dos itens.",
        ],
        prompt: "Estou começando a usar o Claude. Me explique em poucas linhas o que você é e em que tipo de tarefa você costuma ajudar mais. Depois, me faça 3 perguntas sobre a minha semana para sugerir onde você poderia me ajudar.",
        reflexao: [
          "Quais tarefas da sua semana poderiam ganhar com um parceiro de raciocínio como o Claude?",
          "Você usaria mais no computador ou no celular? Por quê?",
        ],
      },
      quiz: [
        {
          p: "Qual destas frases descreve melhor o Claude?",
          o: [
            "Um buscador que devolve links da internet",
            "Um assistente de IA que atua como parceiro de raciocínio em tarefas variadas",
            "Um corretor ortográfico avançado",
            "Um programa que só responde perguntas de sim ou não",
          ],
          r: 1,
          e: "O Claude conversa, escreve, analisa, programa e raciocina. A ideia de \"parceiro de raciocínio\" é o que o diferencia de um chatbot simples.",
        },
        {
          p: "O que significa dizer que o Claude tem uma janela de contexto grande?",
          o: [
            "Ele consegue abrir várias janelas do navegador ao mesmo tempo",
            "Ele lembra de tudo para sempre, sem limites",
            "Ele consegue considerar muito material de uma vez (centenas de páginas) dentro de uma mesma conversa",
            "Ele responde mais rápido que outros modelos",
          ],
          r: 2,
          e: "A janela de contexto é a quantidade de texto que o modelo consegue considerar de uma vez: mais de 200 mil tokens, algo como 500 páginas.",
        },
        {
          p: "Qual é a forma principal de usar o Claude que este curso acompanha?",
          o: ["Claude Code no terminal", "Claude Tag no Slack", "Claude.ai e seus apps de computador e celular", "Claude dentro do Excel"],
          r: 2,
          e: "Claude.ai (com os apps) é a porta de entrada e o foco do curso. As outras ferramentas aparecem na aula 12.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    2: {
      titulo: "Sua primeira conversa com o Claude",
      duracao: "15 min",
      resumo: "Como escrever um bom prompt, anexar arquivos, iterar sobre as respostas e personalizar o Claude para você.",
      objetivos: [
        "Iniciar uma conversa nova e se orientar pela interface",
        "Escrever prompts eficazes com linguagem clara e específica",
        "Enviar arquivos e imagens para dar mais contexto ao Claude",
        "Usar mensagens de continuação para refinar as respostas",
      ],
      secoes: [
        {
          h: "Pontos principais",
          html: `
<ul class="pontos">
<li>O Claude traz a inteligência; <b>você traz o contexto e a experiência</b> que dão sentido ao trabalho.</li>
<li>Fale com ele como falaria com um colega: de forma natural, direta e em tom de conversa.</li>
<li>Antes de escrever, pense em três coisas: <b>o cenário</b> (quem você é e o que quer), <b>a tarefa</b> (o que ele deve fazer) e <b>as regras</b> (estilo, tom, formato, exemplos).</li>
<li>Anexar documentos é um atalho: o Claude passa a considerar aquele conteúdo na resposta.</li>
<li>O poder de verdade está na conversa contínua, não em um prompt isolado.</li>
</ul>`,
        },
        {
          h: "A interface",
          html: `
<p>Ao abrir o Claude você vê uma caixa de texto na parte de baixo. Na barra lateral ficam o botão de nova conversa, o histórico, os <b>Projetos</b> (conversas organizadas com contexto permanente) e os <b>Artefatos</b> (as coisas que você cria com o Claude). Os dois têm aulas próprias mais à frente.</p>
<p>Embaixo da caixa de texto aparece o <b>modelo</b> em uso. Em geral o Sonnet é o padrão do dia a dia; o Opus é o mais capaz para tarefas complexas. Trocar de modelo abre uma conversa nova. No mesmo menu você liga o <b>Thinking</b>, que faz o Claude raciocinar antes de responder (mais lento, melhor para problemas difíceis).</p>`,
        },
        {
          h: "O que é um bom prompt",
          html: `
<p>Um prompt é a mensagem que você manda. Junto com o restante do contexto, ele define a resposta. Um bom prompt costuma ter três partes:</p>
<dl class="lista-def">
<dt>1. Cenário</dt><dd>Qual é o seu papel e o seu objetivo? Tem algo do seu contexto que o Claude precisa saber?</dd>
<dt>2. Tarefa</dt><dd>Que ação você quer? Escrever, analisar, comparar, montar, explicar?</dd>
<dt>3. Regras</dt><dd>Qual estilo ou tom? Que formato? Tem um exemplo que você possa anexar para mostrar o que espera?</dd>
</dl>
<p>Veja um exemplo com as três partes marcadas:</p>
<div class="exemplo-prompt">
<span class="parte p1">Sou responsável pela festa de 15 anos da minha sobrinha, para 60 convidados, em outubro, com orçamento de 8 mil reais.</span>
<span class="parte p2">Monte um plano de organização com tudo o que preciso decidir e contratar, em ordem cronológica.</span>
<span class="parte p3">Use uma tabela com colunas "o quê", "quando" e "custo estimado", em português, sem enrolação.</span>
</div>
<p class="legenda"><span class="p1">Cenário</span> · <span class="p2">Tarefa</span> · <span class="p3">Regras</span></p>
<p class="nota">Esse esquema vem do <b>Framework 4D de Fluência em IA</b>, criado pelos professores Rick Dakan e Joseph Feller. As quatro competências (Delegação, Descrição, Discernimento e Diligência) aparecem na aula 3.</p>`,
        },
        {
          h: "Adicionando contexto",
          html: `
<p>Você pode anexar arquivos direto na conversa: PDF, DOCX, CSV, TXT e imagens (PNG, JPEG). O Claude lê texto e também elementos visuais, como gráficos e tabelas dentro de um PDF. Algumas ideias:</p>
<ul class="pontos">
<li>Anexar um contrato e pedir um resumo dos pontos de atenção.</li>
<li>Mandar a foto de um cardápio e pedir sugestões dentro de uma dieta.</li>
<li>Subir uma planilha de gastos e pedir as tendências dos últimos meses.</li>
<li>Enviar um trecho de código e pedir uma explicação ou a causa de um erro.</li>
</ul>
<p class="nota"><b>Dica:</b> se quiser que o Claude leve em conta uma preferência em toda conversa (por exemplo, "responda sempre em português do Brasil, de forma direta"), configure em <i>Configurações › Conta › Instruções para o Claude</i>.</p>`,
        },
        {
          h: "Iterando sobre as respostas",
          html: `
<p>A conversa é feita para ir e voltar. Se a primeira resposta não for o que você queria:</p>
<ul class="pontos">
<li><b>Pergunte mais.</b> "Pode detalhar o segundo ponto?" ou "Deixa isso mais curto."</li>
<li><b>Dê feedback.</b> "Ficou bom, mas o tom está formal demais. Faz mais leve."</li>
<li><b>Redirecione ou recomece.</b> "Na verdade eu perguntei sobre X, não Y." Se a conversa se perdeu de vez, abrir uma nova costuma ser mais rápido.</li>
</ul>
<p class="nota"><b>Dica:</b> o ícone de lápis em qualquer mensagem sua permite editar e reenviar o prompt em vez de acrescentar uma mensagem nova.</p>`,
        },
        {
          h: "Personalizando o Claude",
          html: `
<p>Dois recursos fazem o Claude funcionar melhor para você com o tempo:</p>
<ul class="pontos">
<li><b>Memória.</b> O Claude guarda automaticamente contexto importante das conversas: o que você faz, preferências, decisões passadas. Você pode ver, editar ou apagar qualquer lembrança em Configurações, e a memória sincroniza entre aparelhos.</li>
<li><b>Skills.</b> Conjuntos de instruções reutilizáveis que ensinam ao Claude como fazer um tipo de tarefa, aplicados automaticamente quando fazem sentido. A aula 7 mostra como ativar e criar as suas.</li>
</ul>`,
        },
      ],
      pratica: {
        titulo: "Um prompt com as três partes",
        intro: "Escolha algo real da sua vida esta semana e escreva um prompt com cenário, tarefa e regras. Depois refine duas vezes.",
        passos: [
          "Escreva o prompt com as três partes (pode adaptar o sugerido abaixo).",
          "Leia a resposta e peça uma mudança de tom ou de tamanho.",
          "Anexe um arquivo relacionado (um PDF, uma foto, uma planilha) e peça para ele considerar o conteúdo.",
          "Use o lápis para editar o prompt original e ver como a resposta muda.",
        ],
        prompt: "Sou [seu papel ou situação] e preciso [objetivo]. Escreva [o que você quer: uma mensagem, um plano, uma lista...]. Use um tom [formal / leve / direto], em português do Brasil, com no máximo [tamanho].",
        reflexao: [
          "Qual das três partes você tinha mais tendência a esquecer?",
          "O que mudou na resposta quando você anexou um arquivo?",
        ],
      },
      quiz: [
        {
          p: "Quais são as três partes de um bom prompt, segundo o curso?",
          o: ["Pergunta, resposta e conclusão", "Cenário, tarefa e regras", "Título, corpo e assinatura", "Modelo, temperatura e tokens"],
          r: 1,
          e: "Cenário (quem você é e o que quer), tarefa (a ação pedida) e regras (tom, formato, exemplos).",
        },
        {
          p: "A primeira resposta do Claude não ficou como você queria. Qual é a melhor atitude?",
          o: [
            "Desistir e fazer à mão",
            "Repetir o mesmo prompt até dar certo",
            "Dar feedback específico ou editar o prompt e continuar a conversa",
            "Trocar de modelo imediatamente",
          ],
          r: 2,
          e: "A conversa é iterativa. Feedback específico (\"deixa mais curto e menos formal\") ou editar o prompt pelo lápis costuma resolver.",
        },
        {
          p: "O que a Memória do Claude faz?",
          o: [
            "Guarda contexto importante das conversas para você não precisar repetir, com controle seu em Configurações",
            "Salva cópias de todos os seus arquivos na nuvem",
            "Lembra as senhas dos sites que você usa",
            "Registra o histórico de navegação do seu computador",
          ],
          r: 0,
          e: "A memória guarda contexto como seu papel e preferências. Você pode revisar, editar ou apagar tudo em Configurações.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    3: {
      titulo: "Como conseguir resultados melhores",
      duracao: "10 min",
      resumo: "Os problemas mais comuns de quem começa, a mentalidade de iteração, o Framework 4D de Fluência em IA e um jeito simples de testar o Claude nas suas tarefas.",
      objetivos: [
        "Reconhecer os problemas mais comuns ao começar com IA e saber corrigi-los",
        "Definir Fluência em IA e saber onde aprender mais",
        "Explicar como montar uma avaliação simples (eval) para saber se o Claude serve para uma tarefa sua",
      ],
      secoes: [
        {
          h: "Problemas comuns e como resolver",
          html: `
<div class="tabela-wrap"><table class="tabela">
<thead><tr><th>Problema</th><th>O que está acontecendo</th><th>Tente isto</th></tr></thead>
<tbody>
<tr><td>A resposta ficou genérica</td><td>Faltou contexto sobre a sua situação</td><td>Diga para quem é, qual o seu papel e quais as restrições. Em vez de "escreva um e-mail sobre o atraso", diga "escreva para o cliente X avisando que a entrega atrasa duas semanas; é o segundo atraso, então seja profissional e peça desculpas sem exagero".</td></tr>
<tr><td>Ficou longo (ou curto) demais</td><td>O Claude está chutando o tamanho</td><td>Seja explícito: "dois parágrafos", "até 100 palavras", "pode ser longo, quero tudo".</td></tr>
<tr><td>Não seguiu o formato</td><td>Ele entendeu o quê, não o como</td><td>Mostre um exemplo do formato ou descreva a estrutura: "tópicos com título em negrito".</td></tr>
<tr><td>Veio uma informação errada dita com confiança</td><td>Modelos às vezes inventam fatos plausíveis, em especial em temas de nicho</td><td>Para coisas importantes, confira de forma independente. Peça fontes, peça o nível de confiança e ligue a busca na web.</td></tr>
<tr><td>O tom não é o certo</td><td>O padrão é útil e profissional, que nem sempre é o que você quer</td><td>Descreva o tom em palavras simples ou anexe um texto no estilo desejado.</td></tr>
</tbody></table></div>`,
        },
        {
          h: "A mentalidade de iteração",
          html: `
<p>O primeiro prompt raramente dá o resultado perfeito, e tudo bem. Trate-o como o começo de uma conversa. Quem usa bem o Claude:</p>
<ul class="pontos">
<li><b>Trata o primeiro rascunho como ponto de partida.</b> Lê, identifica o que funciona e o que não, e refina.</li>
<li><b>Dá feedback específico.</b> "Encurta" serve; "corta os dois primeiros parágrafos e termina com um chamado para ação" é melhor.</li>
<li><b>Sabe quando recomeçar.</b> Se a conversa saiu do trilho, abrir uma nova com um prompt mais claro é mais rápido do que tentar consertar.</li>
</ul>`,
        },
        {
          h: "O que é Fluência em IA",
          html: `
<p>Fluência em IA é a capacidade de colaborar bem com ferramentas de IA: não é saber em que botão clicar, é ter o julgamento para usar a IA bem em situações diferentes. O <b>Framework 4D</b>, dos professores Rick Dakan (Ringling College) e Joseph Feller (University College Cork), organiza isso em quatro competências:</p>
<dl class="lista-def">
<dt>Delegação</dt><dd>Decidir o que fica com você e o que vai para a IA, conhecendo os seus objetivos e o que a IA consegue fazer.</dd>
<dt>Descrição</dt><dd>Comunicar bem: definir a saída esperada, guiar o processo, dizer como a IA deve se comportar.</dd>
<dt>Discernimento</dt><dd>Avaliar com senso crítico o que a IA produziu: qualidade, precisão, adequação, o que melhorar.</dd>
<dt>Diligência</dt><dd>Usar a IA com responsabilidade: escolhas conscientes, transparência e responsabilidade pelo resultado final.</dd>
</dl>
<p>Você já vem praticando: o esquema cenário/tarefa/regras da aula 2 é Descrição; a tabela de problemas acima é Discernimento e Diligência.</p>`,
        },
        {
          h: "Avaliando o Claude nas suas tarefas",
          html: `
<p>Como saber se o Claude é bom em uma tarefa específica sua? Fazendo um teste simples, o que o pessoal de IA chama de <b>eval</b> (avaliação). Não precisa de nada sofisticado:</p>
<ol class="passos">
<li><b>Junte exemplos.</b> De 5 a 10 casos de algo que você já faz: e-mails escritos, análises prontas, textos seus.</li>
<li><b>Crie prompts de teste.</b> Escreva prompts que gerariam algo parecido, com o contexto que você teria de verdade.</li>
<li><b>Compare.</b> Rode e compare com os seus exemplos: ele pegou o essencial? O tom está certo? O que faltou?</li>
<li><b>Ajuste.</b> Refine os prompts, acrescente exemplos ou marque onde a revisão humana é obrigatória.</li>
</ol>
<p><b>Um caso concreto.</b> Imagine alguém que todo trimestre cruza a frequência de um curso com o resultado dos alunos, e leva horas nisso. Para testar se pode delegar, ele pega os dados do trimestre passado, cuja resposta já conhece, e pede ao Claude a mesma análise. A cada resposta, confere contra o que sabe. Descobre que o Claude acertou a correlação principal mas ignorou um detalhe do tipo de programa; ajusta o prompt e pede de novo; agora acerta. Anota que, no futuro, precisa citar o tipo de programa no pedido. Ao final, tem um método validado, com notas claras do que informar e onde conferir. Isso é o ciclo Delegação e Diligência na prática.</p>
<p class="nota">Validar dá confiança, mas não tira a responsabilidade: quem assina o resultado é você.</p>`,
        },
      ],
      pratica: {
        titulo: "Sua primeira eval",
        intro: "Pegue algo que você já fez e sabe como deveria ficar. Peça ao Claude para fazer de novo e compare.",
        passos: [
          "Escolha um texto ou análise sua já pronta (um e-mail importante, uma lista de compras organizada, um resumo de reunião).",
          "Escreva um prompt com o contexto que você tinha na hora e peça ao Claude para produzir o equivalente.",
          "Compare com a sua versão: o que ele acertou, o que faltou, o que ficou melhor que o seu?",
          "Ajuste o prompt uma vez e veja se fecha a diferença. Anote o que precisou informar.",
        ],
        prompt: "Vou te passar um contexto e quero que você produza [tipo de texto]. Depois eu vou comparar com uma versão que eu mesmo fiz. Contexto: [...]. Produza o texto e, no final, liste as informações que você precisou supor por não ter recebido.",
        reflexao: [
          "Qual dos problemas da tabela você já sentiu na pele? O que vai tentar da próxima vez?",
          "Em que tarefa recorrente da sua vida uma eval rápida ajudaria a decidir se dá para delegar?",
        ],
      },
      quiz: [
        {
          p: "A resposta do Claude ficou genérica demais. Qual é a causa mais provável?",
          o: ["O modelo está com defeito", "Faltou contexto sobre a sua situação no prompt", "Você usou o modelo errado", "A conversa está longa demais"],
          r: 1,
          e: "Resposta genérica quase sempre é sinal de prompt genérico. Diga para quem é, qual o seu papel e quais as restrições.",
        },
        {
          p: "Quais são as quatro competências do Framework 4D de Fluência em IA?",
          o: [
            "Dados, Design, Desenvolvimento e Distribuição",
            "Delegação, Descrição, Discernimento e Diligência",
            "Definir, Decidir, Delegar e Descansar",
            "Descrição, Depuração, Documentação e Deploy",
          ],
          r: 1,
          e: "Delegação (o que vai para a IA), Descrição (como comunicar), Discernimento (avaliar o resultado) e Diligência (uso responsável).",
        },
        {
          p: "O que é uma eval simples, no sentido usado pelo curso?",
          o: [
            "Um teste de velocidade do modelo",
            "Comparar as respostas do Claude com exemplos que você já fez e conhece, para ver se dá para delegar",
            "Uma prova que o Claude aplica em você",
            "Um relatório automático gerado pela Anthropic",
          ],
          r: 1,
          e: "Você pega tarefas cujo resultado já conhece, pede ao Claude e compara. Assim descobre o que ele faz bem e o que precisa de mais contexto.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    4: {
      titulo: "Como você vai trabalhar com o Claude no computador",
      duracao: "10 min",
      resumo: "O app de computador tem três formas de trabalho: conversar turno a turno (Chat), entregar uma tarefa inteira (Cowork) e construir software (Code). Saber qual é qual é a habilidade desta aula.",
      objetivos: [
        "Distinguir as três formas de trabalhar com o Claude no computador",
        "Reconhecer que forma de trabalho uma tarefa pede antes de começar",
        "Encontrar onde cada uma vive no app hoje",
      ],
      secoes: [
        {
          h: "As três formas de trabalho",
          html: `
<p>O app do Claude para computador é a sua base: da pergunta rápida no meio de uma reunião ao relatório que ele monta a partir de seis fontes enquanto você faz outra coisa. O trabalho se divide em três formas:</p>
<dl class="lista-def">
<dt>Trabalhar turno a turno</dt><dd>Você pergunta, ele responde, você ajusta, ele revisa. O raciocínio acontece na troca. <b>No app: Chat.</b></dd>
<dt>Entregar o trabalho ao Claude</dt><dd>Você descreve um resultado (um relatório pronto, um arquivo formatado, uma tarefa que roda toda segunda) e ele planeja, executa e volta com a entrega. Você revisa o plano e o resultado, sem costurar os passos. <b>No app: Cowork.</b></dd>
<dt>Construir software com o Claude Code</dt><dd>O Claude trabalha direto numa base de código: lê, escreve, testa, roda comandos. Feito para quem programa. <b>No app: a aba Code.</b></dd>
</dl>
<p class="nota">Em 2026 a Anthropic começou a unificar o Cowork dentro do próprio Claude. O nome pode mudar na tela, mas a ideia (entregar a tarefa inteira) continua a mesma.</p>`,
        },
        {
          h: "Turno a turno (Chat)",
          html: `
<p>É o Claude como parceiro de raciocínio. Use quando:</p>
<ul class="pontos">
<li><b>A resposta muda a próxima pergunta.</b> Você está pensando junto e não conseguiria escrever o pedido inteiro de antemão.</li>
<li><b>Você quer ficar dentro.</b> Redigir, editar, pensar em voz alta: o valor está no seu julgamento a cada turno.</li>
<li><b>É rápido.</b> Uma dúvida, uma reescrita, um "o que isso significa?".</li>
</ul>
<p>Rodando no computador, o Chat ganha alguns extras: <b>entrada rápida</b> (no Mac, toque duas vezes na tecla Option para abrir o Claude por cima de qualquer app), <b>captura de tela e compartilhamento de janela</b> para ele ver o que você vê, <b>ditado</b> por voz e <b>conectores locais</b>.</p>`,
        },
        {
          h: "Entregar o trabalho (Cowork)",
          html: `
<p>Aqui você delega, não só conversa. Use quando a tarefa:</p>
<ul class="pontos">
<li><b>Tem vários passos</b> que você faria em sequência (puxar números, comparar, escrever o resumo, formatar).</li>
<li><b>Termina em arquivos prontos</b>, salvos onde você precisa: uma pasta com arquivos renomeados, uma planilha no lugar certo.</li>
<li><b>Atravessa ferramentas</b>: anotações num lugar, mensagens em outro, números numa planilha.</li>
<li><b>Deve rodar num horário</b> ou enquanto você faz outra coisa: um resumo toda sexta, um briefing na segunda de manhã.</li>
</ul>
<p>Entregar não é se afastar: antes de começar, o Claude pode fazer perguntas para fechar o escopo e mostra o plano. Enquanto trabalha, você acompanha e pode redirecionar. E quando está configurado para pedir antes de agir, ele para e aguarda a sua aprovação nas ações que importam, como enviar um e-mail.</p>
<p>O que o Cowork oferece: <b>acesso a pastas</b> (ele lê e salva de volta no mesmo lugar), <b>tarefas agendadas</b> (rodam mesmo com o computador fechado, exceto as que precisam de arquivos locais), <b>subagentes</b> (divide um trabalho grande em partes paralelas), <b>projetos</b>, <b>uso do navegador</b> com o Claude no Chrome, <b>uso do computador</b> (clicar, digitar, abrir apps, pedindo permissão a cada app) e <b>plugins</b>, pacotes prontos de skills e conectores para um tipo de trabalho.</p>
<p class="nota">Disponível nos planos Pro, Max, Team e Enterprise.</p>`,
        },
        {
          h: "Construir software (Code)",
          html: `
<p>Para quem escreve código, o app traz um ambiente completo: o Claude lê o projeto, altera arquivos, roda comandos, mostra o que mudou e o git guarda cada versão. Você escolhe onde o trabalho acontece (<b>local</b>, numa pasta do seu computador, ou <b>na nuvem</b>, conectado a um repositório do GitHub, onde a sessão continua mesmo com o app fechado) e quanto ele faz sozinho: <b>aprovar manualmente</b> cada mudança, <b>aceitar edições</b> automaticamente ou <b>planejar</b> antes de mexer.</p>
<p>Se você não programa, o que precisa saber é: é uma aba separada, e este curso não depende dela.</p>`,
        },
        {
          h: "Escolhendo a forma certa",
          html: `
<p>Você não escolhe a aba primeiro; você percebe que tipo de trabalho está na sua frente, e a aba vem depois.</p>
<div class="tabela-wrap"><table class="tabela">
<thead><tr><th>Você está prestes a...</th><th>A forma</th><th>Onde vive hoje</th></tr></thead>
<tbody>
<tr><td>Perguntar, pensar, rascunhar, turno a turno</td><td>Turno a turno</td><td>Chat (entrada rápida, ditado, capturas de tela)</td></tr>
<tr><td>Entregar uma tarefa de vários passos, que termina num arquivo, cruza ferramentas ou roda num horário</td><td>Entregar o trabalho</td><td>Cowork (pastas, conectores, agendamento, subagentes)</td></tr>
<tr><td>Escrever, testar e publicar código</td><td>Construir software</td><td>Aba Code (local ou nuvem)</td></tr>
</tbody></table></div>`,
        },
      ],
      pratica: {
        titulo: "Classifique as tarefas",
        intro: "Para cada tarefa abaixo, escolha a forma de trabalho que ela pede. A correção é imediata.",
        classificar: {
          opcoes: ["Turno a turno (Chat)", "Entregar o trabalho (Cowork)", "Construir software (Code)"],
          itens: [
            { t: "Tirar uma captura de tela de um extrato bancário e perguntar o que significa uma taxa", r: 0 },
            { t: "Renomear e organizar 80 fotos de uma viagem numa pasta, por data e cidade", r: 1 },
            { t: "Corrigir um erro num site pequeno que você mantém, com os arquivos no computador", r: 2 },
            { t: "Todo domingo à noite, montar a lista de compras da semana a partir do cardápio salvo numa pasta", r: 1 },
            { t: "Melhorar o tom de uma mensagem difícil para um vizinho, ajustando frase por frase", r: 0 },
            { t: "Ler 30 PDFs de orçamento de uma reforma e produzir uma comparação em planilha", r: 1 },
          ],
        },
        reflexao: [
          "Pense em como você usou o Claude esta semana. O que era raciocínio turno a turno, e o que era uma tarefa inteira que você foi entregando pergunta por pergunta por hábito?",
          "Qual tarefa você mais gostaria de tirar da sua lista? Escreva o resultado que descreveria ao Claude, não a primeira pergunta que faria.",
        ],
      },
      quiz: [
        {
          p: "Você quer que o Claude leia uma pasta com 50 documentos e salve um resumo em PDF na mesma pasta. Qual forma de trabalho é essa?",
          o: ["Turno a turno, no Chat", "Entregar o trabalho, no Cowork", "Construir software, na aba Code", "Nenhuma: o Claude não lê pastas"],
          r: 1,
          e: "Vários passos, arquivos prontos salvos onde você precisa: é um trabalho entregue ao Claude, que vive no Cowork.",
        },
        {
          p: "Qual destas é uma característica do trabalho turno a turno?",
          o: [
            "A tarefa roda num horário agendado",
            "O resultado são arquivos salvos numa pasta",
            "A resposta de agora muda a sua próxima pergunta",
            "O Claude altera e testa código no repositório",
          ],
          r: 2,
          e: "No turno a turno o valor está na troca: cada resposta abre a próxima pergunta, e você fica dentro do processo.",
        },
        {
          p: "O que acontece quando o Claude no Cowork está configurado para pedir antes de agir?",
          o: [
            "Ele não faz nada sem que você digite cada comando",
            "Ele para e aguarda a sua aprovação nas ações que importam, como enviar um e-mail",
            "Ele envia um relatório por e-mail ao final",
            "Ele desliga os conectores",
          ],
          r: 1,
          e: "Entregar o trabalho não é perder o controle: o Claude mostra o plano e para nas ações importantes para você aprovar.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    5: {
      titulo: "Introdução aos Projetos",
      duracao: "15 min",
      resumo: "Projetos são espaços de trabalho com histórico, base de conhecimento e instruções próprias. Você para de reenviar os mesmos arquivos e de reexplicar o mesmo contexto.",
      objetivos: [
        "Explicar o que são projetos e quando usá-los",
        "Criar um projeto com nome, descrição e visibilidade",
        "Adicionar documentos à base de conhecimento do projeto",
        "Escrever instruções de projeto que orientem o comportamento do Claude",
        "Compartilhar projetos com outras pessoas (planos Team e Enterprise)",
      ],
      secoes: [
        {
          h: "Pontos principais",
          html: `
<ul class="pontos">
<li><b>Projetos são espaços de trabalho autocontidos</b>, com memória, histórico de conversas, base de conhecimento e instruções próprias.</li>
<li><b>A base de conhecimento</b> guarda documentos que o Claude consulta em todas as conversas daquele projeto. Chega de subir o mesmo arquivo toda vez.</li>
<li><b>As instruções do projeto</b> definem tom, nível de detalhe, formato e regras, e valem para toda conversa ali dentro.</li>
<li><b>Projetos crescem sozinhos.</b> Quando a base se aproxima do limite de contexto, o Claude passa a buscar só o que é relevante, ampliando a capacidade em até 10 vezes sem perder qualidade.</li>
<li><b>Nos planos Team e Enterprise</b>, projetos podem ser compartilhados, e todo mundo trabalha com o mesmo contexto.</li>
</ul>`,
        },
        {
          h: "Quando usar um projeto",
          html: `
<p>Projetos valem a pena para trabalho contínuo, não para uma pergunta solta. Crie um quando tiver:</p>
<ul class="pontos">
<li><b>Materiais de referência</b> que você vai usar repetidas vezes (contratos, anotações, relatórios, apostilas).</li>
<li><b>Exigências constantes</b> de como o Claude deve responder (sempre em tom formal, sempre citar a fonte, sempre seguir um modelo).</li>
<li><b>Colaboração</b>: mais de uma pessoa partindo da mesma base.</li>
</ul>
<p>Exemplos pessoais: "Reforma da cozinha" (orçamentos, medidas, decisões), "Estudos do vestibular" (apostilas, cronograma), "Viagem de julho" (reservas, roteiro, orçamento), "Finanças da casa" (extratos, metas).</p>`,
        },
        {
          h: "Criando o seu primeiro projeto",
          html: `
<ol class="passos">
<li><b>Crie o projeto.</b> Na barra lateral, clique em <i>Projetos</i> (ou vá a claude.ai/projects) e em <i>+ Novo projeto</i>. Dê um nome descritivo e uma descrição curta. A descrição é para você e para quem mais entrar; o Claude não a lê diretamente.</li>
<li><b>Escreva as instruções.</b> Clique em <i>Instruções</i>. Boas instruções trazem contexto ("este projeto é para organizar a reforma da cozinha"), processo ("quando eu mandar um orçamento, compare com os anteriores antes de opinar"), tom ("direto, sem jargão") e exigências ("sempre mostre valores em reais"). Salve. Elas valem para toda conversa do projeto e podem automatizar fluxos: "quando eu subir uma ata de reunião, faça um resumo neste modelo".</li>
<li><b>Monte a base de conhecimento.</b> No menu de arquivos, à direita, clique em <i>+</i>. Aceita PDF, DOCX, CSV, TXT, HTML e mais, ou conecte o Google Drive. Suba referências, materiais de fundo, exemplos do que quer que ele imite, especificações.</li>
</ol>
<p class="nota"><b>Dica:</b> nomeie os arquivos de forma descritiva. "Orcamento-marcenaria-set-2026.pdf" ajuda o Claude a achar a informação certa; "documento1.pdf" não.</p>`,
        },
        {
          h: "Como o projeto lida com muitos arquivos",
          html: `
<p>Quando a base de conhecimento se aproxima do limite da janela de contexto, o projeto entra num modo chamado <b>RAG</b> (geração aumentada por recuperação): em vez de carregar tudo de uma vez, o Claude busca nos seus arquivos e traz só os trechos relevantes para a pergunta. Isso amplia a capacidade em até 10 vezes. Você vê um indicador quando isso acontece, mas a experiência é a mesma.</p>
<p>Você também pode anexar um arquivo só numa conversa, sem colocá-lo na base: bom para um exemplo pontual que não precisa ficar guardado.</p>`,
        },
        {
          h: "Colaboração (Team e Enterprise)",
          html: `
<p>Ao compartilhar, há três níveis: <b>pode ver</b> (lê, consulta a base e conversa, mas não altera), <b>pode editar</b> (muda instruções, atualiza a base, gerencia membros) e <b>dono</b> (controla tudo, inclusive quem vê). Para compartilhar, abra o projeto, clique em <i>Compartilhar</i>, adicione pessoas por nome ou e-mail ou libere para toda a organização. Quem recebe encontra o projeto na aba <i>Compartilhados comigo</i>.</p>
<p class="nota">Em planos pessoais (Free, Pro, Max) o projeto é só seu. A base de conhecimento continua valendo a pena mesmo assim.</p>`,
        },
        {
          h: "Boas práticas",
          html: `
<ul class="pontos">
<li><b>Comece focado.</b> Um projeto por assunto, não um projeto para tudo.</li>
<li><b>Mantenha a base atualizada.</b> Documento velho gera resposta velha.</li>
<li><b>Instruções claras.</b> Vago gera resultado inconsistente.</li>
<li><b>Cite o documento pelo nome</b> quando perguntar: "com base no orçamento da marcenaria, o que ficou de fora?"</li>
</ul>`,
        },
      ],
      pratica: {
        titulo: "Crie o seu projeto",
        intro: "Crie um projeto para algo que está acontecendo na sua vida agora e que gera várias conversas.",
        passos: [
          "Escolha um assunto contínuo (uma viagem, um curso, uma reforma, um evento, os estudos).",
          "Crie o projeto com nome e descrição.",
          "Escreva instruções com contexto, tom e ao menos uma regra fixa (adapte a sugestão abaixo).",
          "Suba de 1 a 3 arquivos com nomes descritivos e faça uma pergunta que dependa deles.",
        ],
        prompt: "Instruções do projeto: Este projeto é sobre [assunto]. Eu sou [seu papel] e o objetivo é [objetivo]. Responda em português do Brasil, de forma direta. Sempre que eu enviar um documento novo, resuma os pontos principais em até 5 tópicos antes de qualquer outra coisa. Quando houver valores, mostre em reais.",
        reflexao: [
          "Que documentos você vive reenviando ou reexplicando ao Claude?",
          "Que trabalho contínuo seu ganharia com contexto permanente?",
        ],
      },
      quiz: [
        {
          p: "Qual é a diferença entre anexar um arquivo numa conversa e colocá-lo na base de conhecimento do projeto?",
          o: [
            "Não há diferença",
            "Na base, o arquivo vale para todas as conversas do projeto; anexado, vale só naquela conversa",
            "Anexado, o Claude lê melhor",
            "A base aceita só PDF",
          ],
          r: 1,
          e: "A base de conhecimento é consultada em toda conversa do projeto. Um anexo na conversa fica separado, útil para um exemplo pontual.",
        },
        {
          p: "O que as instruções do projeto fazem?",
          o: [
            "Explicam o projeto para outras pessoas, sem efeito no Claude",
            "Orientam o comportamento do Claude em todas as conversas do projeto (tom, formato, regras)",
            "Definem a senha do projeto",
            "Escolhem o modelo usado",
          ],
          r: 1,
          e: "As instruções valem para toda conversa ali dentro. A descrição, essa sim, é só para pessoas.",
        },
        {
          p: "O que acontece quando a base de conhecimento fica grande demais para a janela de contexto?",
          o: [
            "O projeto para de aceitar arquivos",
            "O Claude passa a buscar só os trechos relevantes (RAG), ampliando a capacidade em até 10 vezes",
            "O Claude apaga os arquivos mais antigos",
            "É preciso criar outro projeto",
          ],
          r: 1,
          e: "É o modo RAG: em vez de carregar tudo, ele recupera o que importa para cada pergunta.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    6: {
      titulo: "Criando com Artefatos",
      duracao: "10 min",
      resumo: "Artefatos são as coisas que você cria com o Claude: documentos, apresentações, designs, painéis, protótipos. Onde ficam, como editar e como compartilhar.",
      objetivos: [
        "Explicar o que são artefatos e onde as suas criações ficam guardadas",
        "Criar designs, apresentações e documentos vivos como artefatos (planos pagos)",
        "Editar um artefato direto, por comentário ou pedindo na conversa",
        "Compartilhar um artefato e controlar quem vê e quem edita",
      ],
      secoes: [
        {
          h: "O que são artefatos",
          html: `
<p>Um artefato é uma saída que fica de pé sozinha: um documento, uma apresentação, um design, um painel, um protótipo. Em vez de um bloco de texto ou código perdido no meio da conversa, você vê a coisa real tomando forma numa janela ao lado, pronta para usar e refinar.</p>
<p>O Claude cria um artefato quando você pede algo que vai ser editado, reaproveitado ou compartilhado, não só lido uma vez. Se quiser garantir, diga: "crie isso como um artefato".</p>
<p>Nos planos pagos, o artefato não fica preso à conversa que o criou: tudo o que você faz é salvo na aba <b>Artefatos</b>, para voltar, continuar editando e compartilhar. A conversa é onde você cria; a aba Artefatos é onde as criações moram. (No plano Free, o artefato fica junto da conversa.)</p>
<p class="nota">Esta página do curso é, ela mesma, um artefato: uma página interativa feita com o Claude.</p>`,
        },
        {
          h: "Designs, apresentações e documentos vivos",
          html: `
<p>Para os formatos mais comuns, o Claude tem um jeito dedicado de criar cada um:</p>
<dl class="lista-def">
<dt>Claude Design</dt><dd>Trabalho visual: páginas, cartazes, telas de aplicativo, protótipos. Você pode trazer o seu sistema de design para os rascunhos saírem na sua identidade, e editar direto na tela (arrastar, redimensionar, alinhar).</dd>
<dt>Claude Slides</dt><dd>Apresentações. Passe as anotações ou o relatório que já tem e o Claude estrutura, escreve e monta cada slide. Você edita, coloca as suas imagens, apresenta ali mesmo ou exporta para PowerPoint ou PDF.</dd>
<dt>Claude Docs</dt><dd>Documentos vivos: páginas de texto que você e o Claude escrevem juntos. Ele rascunha na sua frente, faz perguntas e explica escolhas em comentários. Várias pessoas editam ao mesmo tempo e tudo salva sozinho. Ele também traz dados das suas ferramentas conectadas em gráficos dentro da página (uma foto do momento, não um feed ao vivo). Exporta para Google Docs ou .docx.</dd>
</dl>
<p>Os três conversam entre si: "transforme este doc numa apresentação", "faça uma página única a partir deste deck".</p>
<p class="nota"><b>Disponibilidade:</b> Design, Slides e Docs estão nos planos pagos (Pro, Max, Team e Enterprise). No Pro e no Max vêm ligados por padrão e podem ser desligados em <i>Configurações › Capacidades</i>. No Team também vêm ligados; no Enterprise um administrador precisa ativar.</p>`,
        },
        {
          h: "Artefatos em qualquer plano",
          html: `
<p>Nem tudo precisa de Design, Slides ou Docs. Peça um painel com os números da casa, um rastreador que você atualiza toda semana, um fluxograma de um processo, uma página interativa ou um código que funciona, e o Claude constrói como artefato na conversa, em qualquer plano, inclusive o Free.</p>
<p>Artefatos são diferentes da <b>criação de arquivos</b>, que gera Word, Excel, PowerPoint e PDF para baixar. A diferença prática: o artefato abre e atualiza dentro do Claude e é compartilhado por link; o arquivo você baixa e abre em outro programa.</p>`,
        },
        {
          h: "Criando o seu primeiro artefato",
          html: `
<p>Basta descrever o que quer em qualquer conversa (o menu <i>Saída</i> do compositor deixa escolher design, slides ou doc) ou começar pela aba Artefatos. Exemplos:</p>
<ul class="pontos">
<li>"Transforme estas anotações numa apresentação de cinco slides para a reunião de condomínio." Cria um deck editável.</li>
<li>"Rascunhe um resumo de uma página do projeto da horta comunitária como um doc que eu possa compartilhar." Cria um doc vivo.</li>
<li>"Desenhe uma página inicial para um app de receitas, com destaque e lista de recursos." Cria um design editável.</li>
<li>"Monte um painel interativo onde eu lance os gastos do mês e veja a divisão por categoria." Cria um painel, disponível em qualquer plano.</li>
</ul>
<p>O Claude usa o contexto que já tem: arquivos enviados, a conversa até ali, a base do projeto, as ferramentas conectadas. Se vocês acabaram de fazer uma análise, a apresentação parte dela.</p>`,
        },
        {
          h: "Trabalhando num artefato",
          html: `
<p>Com o artefato criado, há três jeitos de mudar, que você pode misturar:</p>
<ul class="pontos">
<li><b>Editar direto.</b> Digitar no doc, mexer num slide, arrastar elementos no design. Suas edições e as do Claude convivem.</li>
<li><b>Comentar para o Claude.</b> Deixe um comentário no elemento, slide ou trecho exato, e o Claude altera ali. Num doc, mencione o Claude no comentário e ele responde explicando o que mudou.</li>
<li><b>Simplesmente pedir.</b> Continue conversando e o Claude faz a próxima passada, mostrando cada mudança.</li>
</ul>
<p class="nota">Editar direto, comentar e mudar o compartilhamento é no computador ou no navegador. No celular você pede um artefato em qualquer conversa e abre em tela cheia na aba Artefatos.</p>`,
        },
        {
          h: "Compartilhando",
          html: `
<p>Artefatos são privados até você compartilhar. Em designs, decks e docs, você adiciona pessoas por nome ou e-mail e define o que cada uma pode fazer (ver, comentar ou editar). Quem recebe precisa de uma conta Claude.</p>
<ul class="pontos">
<li><b>Pro e Max:</b> você escolhe entre manter só seu ou liberar para qualquer pessoa com o link; designs e decks podem ser publicados como artefatos públicos. Só o artefato fica público; a conversa segue privada.</li>
<li><b>Team e Enterprise:</b> os links ficam dentro da organização por padrão; o compartilhamento externo depende de o dono da organização liberar.</li>
<li><b>Free:</b> copiar, baixar ou publicar para quem tiver o link ver.</li>
</ul>
<p>Quando o trabalho precisa sair do Claude, exporte: deck para .pptx ou .pdf; design para .pptx, .pdf ou .html; doc para Google Docs ou .docx.</p>`,
        },
        {
          h: "Dicas",
          html: `
<ul class="pontos">
<li><b>Peça a entrega, não só o conteúdo.</b> "Resuma os gastos do trimestre" dá uma resposta no chat; "transforme os gastos do trimestre num doc de uma página para mostrar em casa" dá um artefato.</li>
<li><b>Seja específico.</b> "Monte um controle de orçamento" é bom; "um controle mensal onde eu lance gastos por categoria, veja um gráfico de pizza e receba um aviso quando passar do limite" é melhor.</li>
<li><b>Descreva quem vai usar.</b> "Este fluxograma é para quem nunca fez isso" muda o resultado.</li>
<li><b>Construa sobre o que já fez.</b> Os melhores artefatos nascem no fim de uma conversa, quando o Claude já entendeu o problema.</li>
<li><b>Atualize os dados quando precisar.</b> Gráficos dentro de um doc não se atualizam sozinhos; peça ao Claude para puxar dados novos.</li>
</ul>`,
        },
      ],
      pratica: {
        titulo: "Um artefato para usar de verdade",
        intro: "Peça um artefato interativo que você usaria mais de uma vez. Funciona em qualquer plano.",
        passos: [
          "Escolha algo que você controla à mão hoje (gastos, tarefas da casa, treino, estudos, uma lista de presentes).",
          "Peça ao Claude um artefato interativo com o prompt abaixo, adaptado.",
          "Peça uma mudança na conversa (\"acrescenta um total no rodapé\") e veja o artefato atualizar.",
          "Se estiver num plano pago, abra a aba Artefatos e confira que ele ficou salvo lá.",
        ],
        prompt: "Crie como um artefato um [rastreador / painel / lista] interativo para [finalidade]. Preciso poder [ação principal: lançar itens, marcar como feito, ver um resumo]. Mostre [um gráfico / um total / um destaque do que falta]. Design simples, em português, que funcione bem no celular.",
        reflexao: [
          "Qual entrega você mais monta à mão que poderia nascer como artefato?",
          "Com quem você compartilharia o próximo artefato, e o que essa pessoa deveria poder fazer: ver, comentar ou editar?",
        ],
      },
      quiz: [
        {
          p: "Qual é a diferença prática entre um artefato e a criação de arquivos (Word, Excel, PDF)?",
          o: [
            "Artefatos são pagos; arquivos são gratuitos",
            "O artefato abre e atualiza dentro do Claude e é compartilhado por link; o arquivo você baixa e abre em outro programa",
            "Arquivos são melhores para texto; artefatos só servem para código",
            "Não há diferença",
          ],
          r: 1,
          e: "Artefato vive no Claude, editável e compartilhável por link. Criação de arquivos entrega algo para baixar.",
        },
        {
          p: "Quais são os três jeitos de alterar um artefato existente?",
          o: [
            "Apagar, recriar e renomear",
            "Editar direto, comentar para o Claude e pedir na conversa",
            "Exportar, importar e sincronizar",
            "Copiar, colar e salvar",
          ],
          r: 1,
          e: "Você pode digitar direto, deixar um comentário no ponto exato ou simplesmente continuar a conversa.",
        },
        {
          p: "Um painel interativo com os gastos da casa, criado na conversa, está disponível em que planos?",
          o: ["Só no Enterprise", "Só nos planos pagos", "Em qualquer plano, inclusive o Free", "Só no app de computador"],
          r: 2,
          e: "Painéis, rastreadores, fluxogramas, páginas interativas e código funcionam em todos os planos. Design, Slides e Docs é que são dos planos pagos.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    7: {
      titulo: "Trabalhando com Skills",
      duracao: "15 min",
      resumo: "Skills são pacotes de instruções que ensinam ao Claude como executar um tipo de tarefa do mesmo jeito toda vez. Você já usou sem saber ao pedir uma planilha ou um PDF.",
      objetivos: [
        "Explicar o que são Skills e como o Claude as usa",
        "Identificar as Skills da Anthropic para criação de documentos",
        "Ativar e gerenciar Skills nas configurações",
        "Criar uma Skill própria conversando com o Claude",
      ],
      secoes: [
        {
          h: "O que são Skills",
          html: `
<p>Skills são pastas com instruções, scripts e recursos que o Claude carrega quando precisa, para fazer melhor uma tarefa específica. Pense nelas como pacotes de especialidade: ensinam a completar um tipo de trabalho de forma repetível.</p>
<p>Se você já pediu ao Claude uma planilha Excel, uma apresentação PowerPoint, um documento Word ou um PDF, viu Skills funcionando por trás. Mas elas vão além de documentos: uma Skill própria pode codificar um fluxo inteiro, como "como eu reviso um contrato de aluguel", "como eu monto o cardápio da semana" ou "o padrão dos meus relatórios", para o Claude seguir os mesmos passos toda vez.</p>`,
        },
        {
          h: "Tipos de Skills",
          html: `
<dl class="lista-def">
<dt>Skills da Anthropic</dt><dd>Criadas e mantidas pela Anthropic. Incluem a criação avançada de Excel, Word, PowerPoint e PDF. O Claude as aciona sozinho quando o pedido combina.</dd>
<dt>Skills personalizadas</dt><dd>Criadas por você (ou pela sua organização) para fluxos específicos: aplicar a sua identidade visual numa apresentação, estruturar anotações num formato fixo, seguir o seu método de análise.</dd>
</dl>`,
        },
        {
          h: "Ativando as Skills",
          html: `
<p>Skills existem em todos os planos. Elas precisam do ambiente seguro de execução do Claude, então:</p>
<ol class="passos">
<li>Vá a <i>Configurações › Capacidades</i>.</li>
<li>Confira que <i>Execução de código e criação de arquivos</i> está ligado.</li>
<li>Desça até a seção <i>Skills</i>.</li>
<li>Ligue ou desligue cada Skill.</li>
</ol>
<p class="nota">No Enterprise, o dono da organização precisa liberar execução de código e Skills antes. No Team vem ligado por padrão.</p>`,
        },
        {
          h: "Skills na prática",
          html: `
<p>Na maior parte do tempo você não pensa nelas: o Claude escolhe a Skill certa a partir do pedido. Exemplos que acionam Skills:</p>
<ul class="pontos">
<li>"Crie uma planilha Excel com os gastos do mês e fórmulas de total por categoria."</li>
<li>"Transforme estas anotações numa apresentação PowerPoint."</li>
<li>"Gere um PDF resumindo estes dados."</li>
<li>"Monte uma planilha de simulação de financiamento com três cenários."</li>
</ul>
<p>Quando usa uma Skill, o Claude menciona isso enquanto trabalha, e a saída é um arquivo para baixar ou salvar no Google Drive. (Nos planos pagos com Slides e Docs ligados, pedir uma apresentação ou um documento pode criar um artefato em vez de um arquivo; a aula 6 explica a diferença.)</p>
<p>A mesma capacidade permite que o Claude trabalhe com os <b>seus arquivos</b>: suba uma planilha, uma apresentação ou um contrato (.xlsx, .pptx, .docx, .pdf) e ele cria uma versão nova com análises ou sugestões. Ele não altera o seu original; gera uma cópia. Se aparecer o aviso, ligue <i>Permitir acesso limitado à rede</i>.</p>`,
        },
        {
          h: "Segurança",
          html: `
<ul class="pontos">
<li>Só instale Skills personalizadas de fontes confiáveis.</li>
<li>As Skills da Anthropic são testadas e mantidas por ela.</li>
<li>Skills que você sobe são privadas da sua conta.</li>
<li>Se pegar uma Skill de fora, leia o conteúdo antes de usar: elas podem conter código executável.</li>
</ul>`,
        },
        {
          h: "Criando a sua Skill",
          html: `
<p>O jeito mais fácil é conversando com o próprio Claude. Não precisa escrever código nem montar arquivos à mão:</p>
<ol class="passos">
<li><b>Abra uma conversa nova</b> e diga o que quer: "quero criar uma skill para escrever o relatório mensal do condomínio" ou "preciso de uma skill que revise textos no meu estilo".</li>
<li><b>Responda às perguntas.</b> O Claude vai entrevistar você: o que a skill faz, o que é um bom resultado, quando você a usaria.</li>
<li><b>Suba referências</b>, se tiver: modelos, exemplos de que você gosta, guias de estilo.</li>
<li><b>Salve.</b> O Claude gera o arquivo já estruturado; basta salvar.</li>
<li><b>Veja as suas skills</b> na aba <i>Personalizar</i>, na barra lateral, onde dá para editar cada uma, à mão ou conversando.</li>
</ol>
<p>A partir daí, o Claude aciona a skill sozinho sempre que o pedido combinar. Para melhorar, peça: "edita a skill X para incluir Y".</p>`,
        },
        {
          h: "Skills ou Projetos?",
          html: `
<p>Os dois dão contexto ao Claude. A regra: <b>projetos guardam conhecimento, skills executam tarefas</b>. O projeto é o quê (informação); a skill é o como (processo). Uma skill pode usar o que está num projeto: a skill "preparar reunião com cliente" pode puxar os perfis guardados na base do projeto.</p>
<div class="tabela-wrap"><table class="tabela">
<thead><tr><th></th><th>Projetos</th><th>Skills</th></tr></thead>
<tbody>
<tr><td>Propósito</td><td>Guardar conhecimento que o Claude consulta</td><td>Definir processos que o Claude executa</td></tr>
<tr><td>Melhor para</td><td>Contexto de longo prazo, referências, colaboração</td><td>Fluxos repetíveis, tarefas de vários passos, método consistente</td></tr>
<tr><td>Exemplo</td><td>Pasta da reforma, base de estudos, hub de um cliente</td><td>Padrão de relatório, revisão no seu estilo, geração de PDF</td></tr>
<tr><td>Persistência</td><td>Conhecimento disponível em todas as conversas do projeto</td><td>Instruções aplicadas quando a skill é acionada</td></tr>
</tbody></table></div>`,
        },
      ],
      pratica: {
        titulo: "Uma planilha e o começo de uma skill",
        intro: "Primeiro veja uma Skill da Anthropic em ação; depois comece a sua.",
        passos: [
          "Confira em Configurações › Capacidades que a criação de arquivos está ligada.",
          "Peça uma planilha Excel com fórmulas (adapte o prompt abaixo) e abra o arquivo para conferir as fórmulas.",
          "Numa conversa nova, diga: \"quero criar uma skill para [algo que você faz sempre]\" e responda às perguntas do Claude.",
          "Salve a skill e confira que ela aparece em Personalizar.",
        ],
        prompt: "Crie uma planilha Excel para controlar [gastos da casa / notas da escola / treinos] com uma aba de lançamentos e uma aba de resumo. Na aba de resumo, use fórmulas (não valores fixos) para total por categoria e por mês. Inclua 5 linhas de exemplo marcadas como exemplo.",
        reflexao: [
          "Que tipo de documento você cria com frequência e poderia sair de uma Skill da Anthropic?",
          "Que tarefa repetitiva sua seria uma boa Skill personalizada?",
        ],
      },
      quiz: [
        {
          p: "Qual frase resume a diferença entre Projetos e Skills?",
          o: [
            "Projetos são pagos, Skills são gratuitas",
            "Projetos guardam conhecimento; Skills executam tarefas",
            "Projetos servem para código; Skills para texto",
            "São a mesma coisa com nomes diferentes",
          ],
          r: 1,
          e: "Projeto é o quê (informação de referência); Skill é o como (processo repetível).",
        },
        {
          p: "O que é preciso para as Skills funcionarem?",
          o: [
            "Um plano Enterprise",
            "Saber programar em Python",
            "Ter \"Execução de código e criação de arquivos\" ligado em Configurações › Capacidades",
            "Instalar o app de computador",
          ],
          r: 2,
          e: "Skills rodam no ambiente seguro de execução do Claude, disponível em todos os planos com essa opção ligada.",
        },
        {
          p: "Qual é o jeito mais fácil de criar uma Skill personalizada?",
          o: [
            "Escrever um arquivo de configuração à mão",
            "Conversar com o Claude, responder à entrevista dele e salvar o arquivo que ele gera",
            "Pedir ao suporte da Anthropic",
            "Não é possível criar Skills próprias",
          ],
          r: 1,
          e: "O Claude entrevista você, aceita referências e gera a skill estruturada. Depois é só salvar e ela aparece em Personalizar.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    8: {
      titulo: "Conectando suas ferramentas",
      duracao: "15 min",
      resumo: "Conectores dão ao Claude acesso às ferramentas que você já usa: Gmail, Google Drive, Agenda, Notion, Slack e muitas outras. Ele passa a trabalhar com a sua informação real.",
      objetivos: [
        "Explicar o que são conectores e por que eles importam",
        "Navegar pelo diretório de conectores e configurar a sua primeira conexão",
        "Usar ferramentas conectadas com eficiência nas conversas",
      ],
      secoes: [
        {
          h: "Pontos principais",
          html: `
<ul class="pontos">
<li><b>Conectores transformam o Claude de assistente em colaborador informado</b>, com acesso às mesmas ferramentas, dados e contexto que você usa. Em vez de começar do zero toda conversa, ele trabalha com a sua informação real.</li>
<li><b>Conectores permitem ler e agir.</b> Dependendo do conector e das permissões, o Claude busca arquivos, lê documentos, analisa dados, cria conteúdo, atualiza registros e executa tarefas nos apps conectados, tudo de dentro da conversa.</li>
<li><b>Por trás está o MCP</b> (Model Context Protocol). Pense nele como o USB-C da IA: um padrão único pelo qual o Claude se conecta a muitos aplicativos diferentes. Por ser aberto, qualquer desenvolvedor pode criar um conector.</li>
<li><b>Há dois tipos:</b> conectores web, que ligam o Claude a serviços na nuvem (Google Drive, Notion, Slack, Asana), e extensões de desktop, que rodam no seu computador pelo app do Claude e dão acesso a arquivos locais e programas nativos.</li>
</ul>`,
        },
        {
          h: "Encontrando e conectando",
          html: `
<p>A Anthropic mantém um diretório de conectores recomendados em <b>claude.ai/directory</b>, com duas abas: <b>Web</b> (Gmail, Notion, Slack, Asana, Linear, Stripe e muitos outros) e <b>Extensões de desktop</b> (ferramentas locais, pelo app de computador). O diretório lista conectores, não aplicativos: um conector pode cobrir várias ferramentas relacionadas. Se a ferramenta que você precisa não está lá, dá para adicionar um conector personalizado.</p>
<p>Você também chega lá pelo botão <b>+</b> no canto inferior esquerdo da conversa, em <i>Conectores</i>.</p>
<p><b>Para conectar um serviço na nuvem:</b></p>
<ol class="passos">
<li>Encontre o conector no diretório ou em + › Conectores.</li>
<li>Clique em <i>Conectar</i>.</li>
<li>Faça login no serviço com a sua conta de sempre.</li>
<li>Revise as permissões que o Claude está pedindo e autorize.</li>
<li>Volte ao Claude e teste com algo simples: "você consegue acessar meu Google Drive?"</li>
</ol>
<p><b>Extensões de desktop</b> precisam do app de computador: em <i>Configurações › Extensões</i>, escolha e instale. Exemplos: acesso a arquivos locais, controle do navegador, integração com programas nativos.</p>`,
        },
        {
          h: "Usando conectores no dia a dia",
          html: `
<p>Com as ferramentas conectadas, o Claude as considera ao responder. Alguns pedidos:</p>
<dl class="lista-def">
<dt>Agenda e e-mail (Google Calendar, Gmail)</dt><dd>"O que tenho na agenda esta semana que precisa de preparação?" · "Ache o e-mail em que combinamos o valor do serviço" · "Rascunhe uma resposta ao último e-mail da escola."</dd>
<dt>Documentos (Google Drive, Notion)</dt><dd>"Procure nos meus arquivos a apólice do seguro do carro" · "Resuma as anotações da reunião de ontem."</dd>
<dt>Tarefas e projetos (Asana, Linear, Notion)</dt><dd>"Quais tarefas vencem esta semana?" · "Crie uma tarefa para renovar a CNH."</dd>
<dt>Negócios (Stripe, HubSpot)</dt><dd>"Mostre a receita do último trimestre" · "Liste as transações acima de mil reais."</dd>
</dl>`,
        },
        {
          h: "Segurança e permissões",
          html: `
<p>Ao conectar um serviço, você dá ao Claude acesso para ler, e às vezes alterar, dados ali. Três coisas para ter em mente:</p>
<ul class="pontos">
<li><b>Acesso delimitado.</b> As permissões são específicas do que o conector precisa, e você pode ligar e desligar cada uma no menu do aplicativo.</li>
<li><b>O Claude vê o que você vê.</b> Ele só acessa o que a sua conta acessa. Conectar o seu e-mail não abre a caixa de ninguém mais.</li>
<li><b>Revogável a qualquer momento.</b> Desconecte pelas configurações do Claude ou pela segurança do próprio serviço. Como nas Skills, só instale conectores de fontes confiáveis.</li>
</ul>`,
        },
      ],
      pratica: {
        titulo: "Sua primeira conexão",
        intro: "Conecte uma ferramenta que você usa todo dia e faça um pedido que dependa dela.",
        passos: [
          "Abra + › Conectores (ou claude.ai/directory) e escolha Google Drive, Gmail ou Google Calendar.",
          "Conecte, faça login e leia as permissões antes de autorizar.",
          "Teste: \"você consegue acessar meu [serviço]?\"",
          "Faça um pedido real com o prompt abaixo, adaptado.",
        ],
        prompt: "Olhe minha agenda dos próximos 7 dias e me diga: quais compromissos precisam de alguma preparação, o que está apertado demais e se há algum conflito. Depois sugira dois horários livres para um exercício de 40 minutos.",
        reflexao: [
          "Qual ferramenta do seu dia a dia seria mais valiosa conectada ao Claude?",
          "Que informação você copia e cola para o Claude hoje que um conector traria sozinho?",
        ],
      },
      quiz: [
        {
          p: "O que é o MCP, no contexto dos conectores?",
          o: [
            "Um plano pago do Claude",
            "Um padrão aberto, como um USB-C da IA, pelo qual o Claude se conecta a muitos aplicativos",
            "Um tipo de arquivo de planilha",
            "O nome do app de computador",
          ],
          r: 1,
          e: "Model Context Protocol: um padrão único que permite a qualquer desenvolvedor criar conectores que funcionam com o Claude.",
        },
        {
          p: "Você conectou o seu Gmail. O que o Claude passa a ver?",
          o: [
            "Todas as caixas de e-mail da sua empresa",
            "Só o que a sua própria conta tem acesso",
            "Só os e-mails marcados com estrela",
            "Nada, conectores não leem e-mail",
          ],
          r: 1,
          e: "O Claude vê o que você vê: as permissões são da sua conta e podem ser revogadas quando quiser.",
        },
        {
          p: "Qual é a diferença entre conector web e extensão de desktop?",
          o: [
            "Conector web é gratuito; extensão é paga",
            "Conector web liga a serviços na nuvem; extensão roda no seu computador pelo app e acessa arquivos e programas locais",
            "Extensões são só para programadores",
            "Não há diferença",
          ],
          r: 1,
          e: "Web: Google Drive, Notion, Slack. Desktop: arquivos locais, navegador, programas nativos, via app do Claude.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    9: {
      titulo: "Busca corporativa (Enterprise Search)",
      duracao: "15 min",
      resumo: "Um projeto pré-montado para toda a organização, que busca e sintetiza o conhecimento espalhado pelas ferramentas da empresa. Só nos planos Team e Enterprise.",
      objetivos: [
        "Explicar o que é a busca corporativa e que perguntas ela responde",
        "Entender como funciona a configuração, para administradores e para usuários",
        "Reconhecer como a segurança e as permissões protegem os dados da organização",
      ],
      secoes: [
        {
          h: "Disponibilidade",
          html: `
<p class="nota"><b>Atenção:</b> a busca corporativa está disponível nos planos Team e Enterprise e precisa ser ativada por um administrador. Se você está no Free, Pro ou Max, pode ler esta aula por conhecimento e fazer a prática adaptada abaixo, que simula a ideia com um projeto.</p>`,
        },
        {
          h: "O que é",
          html: `
<p>A busca corporativa acrescenta à barra lateral uma opção <b>"Pergunte à [sua empresa]"</b>. Ela foi feita para encontrar e juntar conhecimento enterrado nas ferramentas e fontes de dados da organização. Pense nela como um projeto pré-montado para a empresa inteira: a base de conhecimento já está carregada, e você só pergunta.</p>
<p>Diferente de uma conversa comum com conectores, ela é voltada a levantar informação, com instruções personalizadas configuradas pela Anthropic.</p>`,
        },
        {
          h: "O que dá para perguntar",
          html: `
<p>Ela brilha em perguntas que atravessam várias fontes:</p>
<dl class="lista-def">
<dt>Se atualizar</dt><dd>"O que aconteceu ontem enquanto eu estava fora?" · "Quais são os bloqueios atuais do projeto X?"</dd>
<dt>Políticas e processos</dt><dd>"Qual é a política de home office?" · "Como eu peço reembolso de despesas?"</dd>
<dt>Pesquisa e análise</dt><dd>"Por que os clientes dizem que escolheram a concorrência?" · "Resuma as discussões sobre o roteiro do produto."</dd>
<dt>Integração de gente nova</dt><dd>"Com quem eu falo para aprender o sistema de cobrança?" · "Que ferramentas o time usa para publicar?"</dd>
<dt>Acompanhamento</dt><dd>"Quais foram as decisões das reuniões de liderança da semana passada?"</dd>
</dl>
<p>Ao perguntar, o Claude busca em todas as ferramentas conectadas (SharePoint, Slack, Gmail, Google Drive) e sintetiza uma resposta única, sempre citando as fontes.</p>`,
        },
        {
          h: "Configuração",
          html: `
<p>São dois passos: primeiro um administrador configura para a organização; depois cada pessoa autentica com as próprias contas.</p>
<p><b>Para administradores (Owners):</b> clique em "Pergunte à sua organização" na barra lateral, depois em "Configurar para a organização". Conecte as ferramentas: é obrigatório escolher um conector de <b>Documentos</b> (Google Drive ou SharePoint) e um de <b>Chat</b> (Slack ou Teams); e-mail é recomendado. Adicione outras, personalize o nome (vira "Pergunte à [Nome]" para todos), escreva uma descrição e finalize.</p>
<p><b>Para usuários:</b> o projeto aparece com estrela na barra lateral. Clique, siga o passo a passo para conectar os serviços recomendados, autentique em cada um e comece a perguntar. Quanto mais conectores, mais completa a busca; dá para adicionar depois em "Conectar", na seção de instruções do projeto.</p>`,
        },
        {
          h: "É muito dado. Isso é seguro?",
          html: `
<p>Em resumo, sim. A busca corporativa só mostra o que você já tem permissão de ver na ferramenta original. As conversas continuam privadas, e os dados conectados não são indexados nem guardados à parte.</p>`,
        },
      ],
      pratica: {
        titulo: "Uma busca corporativa de brinquedo",
        intro: "Se você não tem plano Team ou Enterprise, simule a ideia com um projeto: várias fontes, uma pergunta que atravessa todas.",
        passos: [
          "Crie um projeto chamado \"Pergunte à casa\" (ou \"Pergunte à família\").",
          "Suba de 3 a 5 documentos de assuntos diferentes: manual de um eletrodoméstico, apólice de seguro, contrato de aluguel, calendário escolar, um extrato.",
          "Faça perguntas que exijam cruzar fontes e peça sempre a citação do documento.",
          "Se você tem plano Team ou Enterprise, abra \"Pergunte à [empresa]\" e faça a mesma pergunta de verdade.",
        ],
        prompt: "Usando só os documentos deste projeto, responda: quais compromissos e vencimentos temos nos próximos 60 dias? Para cada item, diga em qual documento você encontrou a informação. Se algo não estiver nos documentos, diga que não encontrou em vez de supor.",
        reflexao: [
          "Que perguntas você faz repetidamente a colegas (ou à família) que poderiam ser respondidas buscando nos documentos?",
          "Se você trabalhasse numa empresa com isso ligado, quais fontes seriam as mais valiosas para o seu papel?",
        ],
      },
      quiz: [
        {
          p: "Em quais planos a busca corporativa está disponível?",
          o: ["Todos, inclusive o Free", "Pro e Max", "Team e Enterprise, ativada por um administrador", "Só no app de computador"],
          r: 2,
          e: "É um recurso do Claude para trabalho: planos Team e Enterprise, com configuração inicial feita por um Owner.",
        },
        {
          p: "Qual é a melhor descrição da busca corporativa?",
          o: [
            "Um buscador da internet dentro do Claude",
            "Um projeto pré-montado para a organização inteira, que busca e sintetiza conhecimento nas ferramentas conectadas, citando as fontes",
            "Uma pasta compartilhada de arquivos",
            "Um plano de assinatura",
          ],
          r: 1,
          e: "\"Pergunte à [empresa]\": base já carregada, resposta única cruzando fontes, com citações.",
        },
        {
          p: "Um funcionário usa a busca corporativa. O que ele consegue ver?",
          o: [
            "Tudo o que existe nas ferramentas da empresa",
            "Só o que ele já tem permissão de acessar nas ferramentas originais",
            "Só documentos públicos",
            "Só o que o administrador marcar",
          ],
          r: 1,
          e: "As permissões das ferramentas de origem continuam valendo. Os dados também não são indexados à parte.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    10: {
      titulo: "Research para investigações profundas",
      duracao: "10 min",
      resumo: "Research transforma o Claude em um investigador sistemático: várias buscas encadeadas, planejamento antes de começar e um relatório com citações que você pode conferir.",
      objetivos: [
        "Explicar o que o Research faz: investigação sistemática em várias fontes",
        "Identificar quando usar o Research em vez de uma busca simples",
        "Entender como o Research usa o Thinking para planejar antes de buscar",
        "Escrever bons prompts de Research",
      ],
      secoes: [
        {
          h: "Pontos principais",
          html: `
<ul class="pontos">
<li><b>Research muda o jeito de o Claude achar e analisar informação.</b> Em vez de uma busca, ele conduz várias, uma construindo sobre a outra, decidindo sozinho o que investigar em seguida.</li>
<li><b>Demora mais que uma busca comum:</b> alguns minutos ou mais, porque pode disparar dezenas de buscas ao mesmo tempo, às vezes em centenas de fontes, e juntar tudo numa resposta.</li>
<li><b>Funciona com o Thinking:</b> o Claude planeja a abordagem antes de buscar, quebrando o pedido em partes.</li>
<li><b>Citações facilitam a conferência.</b> Cada afirmação aponta para a fonte.</li>
</ul>`,
        },
        {
          h: "Quando usar o Research",
          html: `
<p><b>Use Research quando precisar de:</b> relatórios completos que juntem várias fontes; análise profunda na web e nas suas integrações; investigações que levariam horas à mão; comparações (fornecedores, produtos, cidades, escolas); relatórios com citações verificáveis.</p>
<p><b>Prefira a busca na web quando:</b> quiser um fato rápido e específico (a cotação de hoje, o endereço de um lugar); uma ou duas fontes bastam; velocidade importa mais que abrangência.</p>
<p><b>Prefira ligar só o Thinking quando:</b> o problema exige raciocínio profundo mas não informação externa: matemática, depuração de código, análise lógica.</p>
<p><b>Prefira a busca corporativa quando:</b> a resposta está no conhecimento interno da sua organização, não na web pública.</p>`,
        },
        {
          h: "Como o Research funciona",
          html: `
<ol class="passos">
<li><b>O Claude planeja.</b> Quebra o pedido, identifica o que precisa saber e traça os ângulos.</li>
<li><b>Faz várias buscas.</b> Uma leva à outra; ele persegue pistas e preenche lacunas sem que você dirija cada passo.</li>
<li><b>Sintetiza.</b> Junta o que achou na web e nas integrações conectadas (Gmail, Agenda, Drive) num relatório organizado.</li>
<li><b>Cita.</b> Cada afirmação leva à fonte, para você conferir e aprofundar.</li>
</ol>
<p><b>Para usar:</b> clique no botão <b>+</b> no canto inferior esquerdo, escolha <i>Research</i> (fica destacado quando ativo), escreva o pedido e envie. O Claude trabalha em segundo plano e mostra o progresso.</p>
<p class="nota"><b>Importante:</b> a busca na web precisa estar ligada para o Research funcionar. Está no mesmo menu +.</p>`,
        },
        {
          h: "Dicas para bons prompts de Research",
          html: `
<p>Como uma rodada leva minutos, vale investir no pedido:</p>
<ul class="pontos">
<li><b>Seja específico no objetivo.</b> Em vez de "fale sobre carros elétricos", peça "compare os carros elétricos vendidos no Brasil até 250 mil reais: autonomia real, custo de recarga, rede de assistência e desvalorização, pensando em uso urbano".</li>
<li><b>Diga a estrutura.</b> O Claude organiza o relatório nas seções que você pedir: "compare as opções de escola considerando: distância, mensalidade, proposta pedagógica, período integral e avaliações de pais".</li>
<li><b>Inclua restrições.</b> Orçamento, prazo, região, requisitos.</li>
<li><b>Peça ajuda para o próprio prompt.</b> Se não souber como formular, peça ao Claude para escrever um bom prompt de Research antes de ativar o recurso.</li>
</ul>
<p>Com integrações conectadas, fica ainda mais forte: "resuma o que discutimos sobre a viagem nos meus e-mails, depois pesquise as melhores opções de hospedagem para as datas". Você pode direcionar: "puxe contexto do meu Google Drive" ou "inclua meus e-mails recentes sobre isso".</p>`,
        },
      ],
      pratica: {
        titulo: "Uma decisão real com Research",
        intro: "Escolha uma decisão que você vem adiando por dar trabalho pesquisar. Rode um Research com estrutura definida.",
        passos: [
          "Escolha a decisão (um eletrodoméstico, um curso, um destino, um plano de saúde, um celular).",
          "Ligue a busca na web e o Research no menu +.",
          "Envie um prompt com objetivo, estrutura e restrições (adapte o de baixo).",
          "Quando terminar, abra duas citações e confira se dizem o que o relatório diz.",
        ],
        prompt: "Compare as opções de [produto ou serviço] disponíveis no Brasil para [seu uso], com orçamento de até [valor]. Organize o relatório em: 1) resumo com a recomendação, 2) tabela comparativa (preço, principais características, pontos fracos), 3) o que as avaliações de usuários mais elogiam e reclamam, 4) perguntas que eu deveria fazer antes de decidir. Cite as fontes.",
        reflexao: [
          "Que pesquisas suas costumam exigir juntar informação de várias fontes?",
          "Que pergunta complexa você vem adiando porque pesquisar levaria tempo demais?",
        ],
      },
      quiz: [
        {
          p: "Você quer saber a cotação do dólar agora. Qual recurso faz mais sentido?",
          o: ["Research", "Busca na web", "Thinking", "Busca corporativa"],
          r: 1,
          e: "Fato rápido e específico, uma fonte basta: busca na web. Research é para investigações de várias fontes.",
        },
        {
          p: "Qual é o primeiro passo do Research quando você envia o pedido?",
          o: [
            "Ele responde de memória e depois confere",
            "Ele planeja a abordagem, quebrando o pedido em partes, antes de buscar",
            "Ele pede que você escolha os sites",
            "Ele envia um e-mail com o resultado",
          ],
          r: 1,
          e: "Research usa o Thinking para planejar: identifica o que precisa saber e os ângulos, e só então dispara as buscas.",
        },
        {
          p: "O que precisa estar ligado para o Research funcionar?",
          o: ["Um conector do Slack", "O modo de aprendizado", "A busca na web", "O app de computador"],
          r: 2,
          e: "Sem a busca na web ligada, o Research não roda. Os dois ficam no menu +.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    11: {
      titulo: "Claude em ação: casos de uso por papel",
      duracao: "5 min",
      resumo: "Exemplos práticos organizados por área, e alguns para a vida pessoal, para você ver o Claude aplicado ao seu contexto.",
      objetivos: [
        "Descrever 2 ou 3 casos de uso do claude.ai para experimentar já",
        "Saber onde encontrar mais inspiração de casos de uso",
      ],
      secoes: [
        {
          h: "Casos de uso gerais",
          html: `
<p>Não importa o que você faça, o Claude pode agilizar. Estes valem para muita gente:</p>
<ul class="pontos">
<li><b>Relatórios de status.</b> Manter quem depende de você informado com atualizações claras e no mesmo formato toda vez.</li>
<li><b>Padrões em feedback.</b> Extrair o que se repete em comentários, avaliações e respostas de pesquisa.</li>
<li><b>Identidade numa skill.</b> Empacotar o seu padrão visual ou de escrita numa skill reutilizável.</li>
</ul>`,
        },
        {
          h: "Por área",
          html: `
<dl class="lista-def">
<dt>Vendas</dt><dd>Montar fichas comparativas com a concorrência; preparar reuniões pesquisando o cliente e organizando os pontos de conversa; transformar o funil em relatórios claros.</dd>
<dt>Marketing</dt><dd>Analisar o desempenho de campanhas; adaptar um mesmo conteúdo para vários canais e públicos.</dd>
<dt>Finanças</dt><dd>Construir e refinar modelos e projeções; rascunhar memorandos de investimento; entender e estender uma planilha herdada de outra pessoa.</dd>
<dt>RH</dt><dd>Criar guias de integração para cada função.</dd>
<dt>Jurídico</dt><dd>Organizar linhas do tempo de um caso e achar padrões em documentos.</dd>
<dt>Pesquisa</dt><dd>Planejar uma revisão de literatura; conferir estatísticas a partir dos dados brutos.</dd>
</dl>`,
        },
        {
          h: "E na vida pessoal",
          html: `
<p>Como este curso é de uso pessoal, alguns casos que não estão no original mas seguem a mesma lógica:</p>
<ul class="pontos">
<li><b>Estudos.</b> Um projeto por matéria, o modo de aprendizado para praticar, e resumos das apostilas antes da prova.</li>
<li><b>Casa e finanças.</b> Um artefato de controle de gastos, uma planilha com fórmulas para o orçamento do mês, Research antes de uma compra grande.</li>
<li><b>Burocracia.</b> Anexar um contrato, um boleto ou uma carta e perguntar "o que isso significa e o que eu preciso fazer?"</li>
<li><b>Saúde e rotina.</b> Montar um plano de treino ou um cardápio a partir das suas restrições, sempre conferindo com um profissional.</li>
<li><b>Viagens e eventos.</b> Roteiro com orçamento, lista de compras de uma festa, mensagem para o grupo.</li>
</ul>
<p>A <b>galeria de casos de uso</b> da Anthropic, em <b>claude.com/resources/use-cases</b>, tem guias passo a passo com prompts prontos. Vale visitar quando faltar ideia.</p>`,
        },
      ],
      pratica: {
        titulo: "Escolha dois, faça um",
        intro: "Escolha dois casos de uso desta aula que combinem com você. Faça um agora, do começo ao fim.",
        passos: [
          "Anote dois casos de uso que fariam diferença na sua semana.",
          "Escolha o mais simples e faça agora, com um prompt completo (cenário, tarefa, regras).",
          "Guarde o resultado: num projeto, num artefato ou num arquivo.",
          "Visite a galeria de casos de uso e marque um para depois.",
        ],
        prompt: "Estou com [situação real: uma conta que não entendi, um evento para organizar, uma matéria para estudar]. Me ajude a [resultado esperado]. Antes de começar, me faça as perguntas que precisar para não supor nada importante.",
        reflexao: [
          "Qual caso de uso você faria toda semana se fosse fácil?",
          "Que tarefa sua ninguém listou aqui, mas que segue a mesma lógica?",
        ],
      },
      quiz: [
        {
          p: "Onde encontrar guias passo a passo com prompts prontos para casos de uso?",
          o: ["Na aba Personalizar", "Na galeria de casos de uso da Anthropic", "Nas configurações de conta", "No menu de modelos"],
          r: 1,
          e: "A galeria reúne guias detalhados por área, com prompts para copiar.",
        },
        {
          p: "Qual destas é uma aplicação típica do Claude em Finanças, segundo o curso?",
          o: [
            "Executar transferências bancárias",
            "Entender e estender uma planilha herdada de outra pessoa",
            "Abrir contas em bancos",
            "Aprovar empréstimos",
          ],
          r: 1,
          e: "Modelos, memorandos e planilhas herdadas são os exemplos. O Claude analisa e constrói; decisões financeiras continuam com você.",
        },
        {
          p: "Um caso de uso pessoal citado na aula combina um projeto por matéria com qual outro recurso?",
          o: ["Claude Code", "Busca corporativa", "O modo de aprendizado", "Claude Tag"],
          r: 2,
          e: "Projeto para guardar as apostilas, modo de aprendizado para praticar sem receber a resposta pronta.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    12: {
      titulo: "Outras formas de trabalhar com o Claude",
      duracao: "15 min",
      resumo: "Claude Code, Claude Tag, Claude Design, Claude para Microsoft 365 e Claude no Chrome: o mesmo Claude, onde o trabalho acontece.",
      objetivos: [
        "Saber quando usar Claude Code, Claude Tag, Claude Design, Claude para Microsoft 365 e Claude no Chrome",
      ],
      secoes: [
        {
          h: "O Claude é uma inteligência",
          html: `
<p>Como vimos na aula 1, claude.ai é só um dos jeitos de trabalhar com o Claude. Ele também aparece em ferramentas especializadas, feitas para encontrar você onde já trabalha.</p>`,
        },
        {
          h: "Claude Code",
          html: `
<p>Ferramenta de programação que trabalha onde você trabalha: terminal, editor, navegador e até Slack. Entende a sua base de código, executa comandos e toca fluxos inteiros de desenvolvimento a partir de linguagem natural. <b>Use quando</b> quiser construir funcionalidades descrevendo em português e deixar o Claude escrever, testar e fazer commit; depurar colando a mensagem de erro; entender um código desconhecido; automatizar tarefas chatas (avisos de lint, conflitos de merge, notas de versão); ou preferir o terminal ao lado das suas ferramentas.</p>`,
        },
        {
          h: "Claude Tag",
          html: `
<p>O Claude dentro do Slack. Ajuda em canais e conversas, ou traz contexto do Slack para as suas conversas: é só marcar o Claude numa thread. <b>Use quando</b> quiser rascunhar respostas, resumir threads longas, preparar reuniões juntando conversas e documentos do espaço, entender projetos em andamento ao entrar num time, ou disparar uma sessão de Claude Code a partir de um relato de bug.</p>`,
        },
        {
          h: "Claude Design",
          html: `
<p>Transforma ideias em interfaces que funcionam. Descreva em palavras, ou parta de um rabisco ou captura de tela, e o Claude monta um protótipo interativo como artefato, editável na tela, compartilhável e pronto para o Claude Code construir. Funciona em qualquer conversa, na aba Artefatos e num espaço dedicado em claude.ai/design. <b>Use quando</b> quiser sair de um briefing para um protótipo sem código; explorar e comparar variações; ajustar layout, texto ou interações sem mexer em marcação; ou um protótipo que já use o seu sistema de design.</p>
<p class="nota">Em beta nos planos pagos. No Pro e no Max vem ligado; no Team, um administrador pode desligar; no Enterprise, precisa ativar.</p>`,
        },
        {
          h: "Claude para Microsoft 365",
          html: `
<dl class="lista-def">
<dt>Claude para Excel</dt><dd>Barra lateral no Excel. Entender fórmulas e fluxos de cálculo entre abas; atualizar premissas mantendo as dependências; rastrear erros como #REF! e #VALOR!; criar planilhas ou preencher modelos; montar tabelas dinâmicas e gráficos.</dd>
<dt>Claude para PowerPoint</dt><dd>Transformar um roteiro em rascunho de apresentação; encurtar textos, adicionar notas do apresentador, ajustar o tom; reorganizar, dividir ou fundir slides; padronizar a formatação; sugerir layouts e tipos de gráfico.</dd>
<dt>Claude para Word</dt><dd>Transformar anotações num rascunho estruturado no seu modelo; revisar uma seção sem sair do documento; trabalhar com controle de alterações e comentários; ancorar o texto em fontes conectadas.</dd>
<dt>Claude para Outlook</dt><dd>Triar a caixa de entrada, rascunhar respostas com contexto de threads e da agenda, transformar uma conversa longa em resumo e próximos passos. Em beta, instalado à parte.</dd>
</dl>`,
        },
        {
          h: "Claude no Chrome",
          html: `
<p>Extensão que coloca o Claude como barra lateral no Google Chrome. Ele observa o que você está fazendo e age direto no navegador. <b>Use quando</b> quiser resumir artigos e páginas enquanto navega; ajuda com e-mails; preencher formulários repetitivos; testar um site ou percorrer um fluxo de vários passos sem clicar em tudo; ou um assistente que mantém o contexto entre abas, ótimo para puxar informação de sistemas internos e painéis.</p>
<p class="nota">Disponível nos planos pagos (não no Free). A Anthropic recomenda usar em tarefas de baixo risco em sites confiáveis. A extensão pede permissão antes de ações de risco, como comprar ou compartilhar dados pessoais, e bloqueia por padrão categorias como serviços financeiros e conteúdo adulto.</p>`,
        },
        {
          h: "Resumo",
          html: `
<div class="tabela-wrap"><table class="tabela">
<thead><tr><th>Ferramenta</th><th>Melhor para</th><th>Onde roda</th></tr></thead>
<tbody>
<tr><td>Claude.ai</td><td>Tarefas gerais, pesquisa, escrita, análise, criação de arquivos</td><td>Web, computador e celular</td></tr>
<tr><td>Claude Code</td><td>Desenvolvimento de software, navegação em código, git</td><td>Terminal, editor ou navegador</td></tr>
<tr><td>Cowork</td><td>Tarefas de vários passos: briefings, documentos, organização de arquivos, análise</td><td>App de computador (e web e celular, em beta)</td></tr>
<tr><td>Claude Tag</td><td>Colaboração em time, preparação de reuniões, respostas em contexto</td><td>Slack</td></tr>
<tr><td>Claude Design</td><td>Protótipos de interface, exploração de design</td><td>Qualquer conversa (planos pagos) e claude.ai/design</td></tr>
<tr><td>Claude para Microsoft 365</td><td>Editar no lugar e levar contexto entre documentos</td><td>Excel, PowerPoint, Word e Outlook</td></tr>
<tr><td>Claude no Chrome</td><td>Pesquisa na web, e-mail, automação do navegador</td><td>Barra lateral do Chrome</td></tr>
</tbody></table></div>`,
        },
      ],
      pratica: {
        titulo: "Experimente uma ferramenta nova",
        intro: "Escolha uma das ferramentas desta aula que você ainda não usou e faça uma tarefa pequena nela.",
        passos: [
          "Se você tem plano pago: instale o Claude no Chrome e peça o resumo de uma página que esteja lendo; ou abra claude.ai/design e peça um protótipo simples.",
          "Se usa Excel ou Word: instale o complemento e peça para explicar uma planilha ou revisar um parágrafo.",
          "Se está no plano Free: abra a aba Artefatos e peça um fluxograma de um processo seu.",
          "Anote em que situação essa ferramenta seria melhor que o claude.ai.",
        ],
        prompt: "Desenhe um protótipo de tela de celular para [ideia de app simples: lista de compras da família, controle de remédios, agenda de treinos]. Uma tela inicial e uma tela de detalhe, visual limpo, em português.",
        reflexao: [
          "Em qual programa você passa mais tempo? Existe uma versão do Claude para ele?",
          "Que tarefa no navegador você repetiria menos com o Claude no Chrome?",
        ],
      },
      quiz: [
        {
          p: "Você está numa thread do Slack com 80 mensagens e precisa do resumo. Qual ferramenta?",
          o: ["Claude Code", "Claude Tag", "Claude para Outlook", "Claude Design"],
          r: 1,
          e: "Claude Tag vive no Slack: marque o Claude na thread e peça o resumo.",
        },
        {
          p: "Qual ferramenta transforma um rabisco ou captura de tela num protótipo de interface editável?",
          o: ["Claude para PowerPoint", "Claude no Chrome", "Claude Design", "Cowork"],
          r: 2,
          e: "Claude Design gera o protótipo como artefato, editável na tela e pronto para o Claude Code construir.",
        },
        {
          p: "Sobre o Claude no Chrome, qual afirmação é verdadeira?",
          o: [
            "Está disponível no plano Free",
            "Ele compra e compartilha dados sem perguntar",
            "Ele pede permissão antes de ações de risco e bloqueia por padrão sites financeiros e de conteúdo adulto",
            "Só funciona no Safari",
          ],
          r: 2,
          e: "É dos planos pagos, recomendado para tarefas de baixo risco em sites confiáveis, com pedido de permissão antes de ações sensíveis.",
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    13: {
      titulo: "E agora?",
      duracao: "2 min",
      resumo: "Parabéns por chegar até aqui. Uma recapitulação do que você aprendeu, recursos para continuar e um empurrão para começar.",
      objetivos: [
        "Recapitular os pontos principais do curso",
        "Saber onde continuar aprendendo",
        "Escolher a primeira tarefa real para fazer com o Claude esta semana",
      ],
      secoes: [
        {
          h: "O que você aprendeu",
          html: `
<dl class="lista-def">
<dt>Começando com o Claude</dt><dd>O Claude é um assistente construído para ser útil, honesto e seguro: mais que um chatbot, um parceiro de raciocínio. Está na web, no computador e no celular, com tudo sincronizado. Um bom prompt define o cenário, a tarefa e as regras.</dd>
<dt>Resultados melhores</dt><dd>Iterar é a chave: a primeira resposta é um ponto de partida. Resposta genérica ou tom errado se resolvem com mais contexto. Fluência em IA são quatro competências: Delegação, Descrição, Discernimento e Diligência. E no computador há três formas de trabalho: turno a turno, entregar a tarefa e construir software.</dd>
<dt>Organizando o trabalho</dt><dd>Projetos são espaços com conhecimento permanente e instruções próprias. Artefatos (designs, decks, docs vivos, código, painéis) são o que você cria, salvos na aba Artefatos nos planos pagos. Skills são pacotes de instruções que ensinam fluxos ao Claude.</dd>
<dt>Ampliando o alcance</dt><dd>Conectores ligam o Claude às suas ferramentas. A busca corporativa é um projeto pronto para o conhecimento da organização. Research faz investigações sistemáticas em várias fontes, com citações.</dd>
<dt>Juntando tudo</dt><dd>O Claude se aplica a vendas, marketing, finanças, RH, jurídico, pesquisa e à vida pessoal. Além do claude.ai, há Claude Code, Claude Tag, Claude Design, Claude para Microsoft 365 e Claude no Chrome.</dd>
</dl>`,
        },
        {
          h: "Para continuar",
          html: `
<ul class="pontos">
<li><b>Anthropic Academy</b> (academy.claude.com): cursos gratuitos, entre eles o Claude 101 original em inglês, o de Fluência em IA e o de capacidades e limites da IA.</li>
<li><b>Galeria de casos de uso</b> (claude.com/resources/use-cases): guias passo a passo com prompts.</li>
<li><b>Central de ajuda da Anthropic</b> (support.claude.com): documentação detalhada de cada recurso.</li>
<li><b>Diretório de conectores</b> (claude.ai/directory): para ligar as suas ferramentas.</li>
<li><b>Cursos de produto:</b> "Claude Code in Action" e "Introduction to Claude Cowork", também na Academy.</li>
</ul>`,
        },
        {
          h: "Uma palavra de incentivo",
          html: `
<p>O mais importante agora é começar. As habilidades deste curso ficam afiadas com a prática, e a intuição de quando e como o Claude ajuda vem do uso.</p>
<p>Comece simples. Escolha uma tarefa recorrente da sua semana e faça com o Claude. Pode ser um e-mail, o resumo de uma reunião, uma planilha. Veja o que acontece. Ajuste. Descubra o que funciona para você.</p>
<p>Lembre: o Claude é um colaborador, não um substituto. Os melhores resultados vêm quando você traz a sua experiência, o seu contexto e o seu julgamento para a conversa. Você já tem a base. O resto vem de fazer.</p>`,
        },
      ],
      pratica: {
        titulo: "A tarefa desta semana",
        intro: "Escolha uma tarefa recorrente e comprometa-se a fazê-la com o Claude nesta semana. Anote aqui qual é.",
        passos: [
          "Escreva no campo de anotações abaixo a tarefa escolhida e quando vai fazer.",
          "Decida qual recurso do curso ela pede: um projeto, um artefato, um conector, Research.",
          "Faça. Depois volte aqui e anote como foi.",
          "Faça o quiz final para ganhar o certificado.",
        ],
        prompt: "Esta semana quero fazer [tarefa recorrente] com a sua ajuda. Me diga qual seria o melhor jeito de organizar isso (uma conversa simples, um projeto, um artefato ou uma tarefa entregue), e me proponha o primeiro prompt.",
        reflexao: [
          "Qual foi a aula que mais mudou o jeito como você pensa em usar o Claude?",
          "O que você vai fazer diferente a partir de amanhã?",
        ],
      },
      quiz: [
        {
          p: "Segundo a aula final, qual é a atitude mais importante depois do curso?",
          o: [
            "Assinar o plano mais caro",
            "Começar simples, com uma tarefa recorrente da semana, e ir ajustando",
            "Ler toda a documentação antes de usar",
            "Esperar a próxima versão do modelo",
          ],
          r: 1,
          e: "A intuição vem do uso. Escolha uma tarefa real, faça, ajuste.",
        },
        {
          p: "Qual é o papel do Claude na relação com você, segundo o curso?",
          o: ["Substituto", "Colaborador: você traz experiência, contexto e julgamento", "Supervisor", "Ferramenta que dispensa revisão"],
          r: 1,
          e: "Os melhores resultados vêm quando você traz a sua parte para a conversa.",
        },
        {
          p: "Onde estão os cursos gratuitos da Anthropic, incluindo o Claude 101 original?",
          o: ["claude.ai/directory", "academy.claude.com", "claude.ai/design", "Na aba Personalizar"],
          r: 1,
          e: "A Anthropic Academy reúne os cursos; a galeria de casos de uso e a central de ajuda são outros dois lugares para continuar.",
        },
      ],
    },
  },

  /* ---------------------------------------------------------------------- */
  quizFinal: {
    minimo: 0.7,
    perguntas: [
      {
        p: "O que diferencia o Claude de um chatbot simples?",
        o: [
          "Ele só responde perguntas curtas",
          "Ele atua como parceiro de raciocínio em tarefas variadas: escrita, análise, código, decisões",
          "Ele não precisa de contexto",
          "Ele substitui o seu julgamento",
        ],
        r: 1,
      },
      {
        p: "Um prompt tem cenário, tarefa e regras. O que vai em \"regras\"?",
        o: ["Quem você é e o seu objetivo", "A ação que o Claude deve fazer", "Tom, formato, tamanho e exemplos", "O modelo escolhido"],
        r: 2,
      },
      {
        p: "A resposta veio com um dado errado dito com confiança. O que fazer?",
        o: [
          "Confiar, porque o Claude não erra",
          "Conferir de forma independente, pedir fontes e ligar a busca na web",
          "Desligar o Thinking",
          "Trocar de aba",
        ],
        r: 1,
      },
      {
        p: "No Framework 4D, avaliar criticamente o que a IA produziu é qual competência?",
        o: ["Delegação", "Descrição", "Discernimento", "Diligência"],
        r: 2,
      },
      {
        p: "Uma tarefa que roda toda segunda de manhã e cruza agenda, e-mail e uma planilha é qual forma de trabalho?",
        o: ["Turno a turno (Chat)", "Entregar o trabalho (Cowork)", "Construir software (Code)", "Busca corporativa"],
        r: 1,
      },
      {
        p: "Para que servem as instruções de um projeto?",
        o: [
          "Descrever o projeto para outras pessoas",
          "Orientar o Claude em todas as conversas do projeto: tom, formato, regras",
          "Escolher quem pode ver o projeto",
          "Limitar o tamanho dos arquivos",
        ],
        r: 1,
      },
      {
        p: "Nos planos pagos, onde ficam guardadas as coisas que você cria com o Claude?",
        o: ["Só na conversa em que foram criadas", "Na aba Artefatos, para editar e compartilhar depois", "No Google Drive automaticamente", "No e-mail"],
        r: 1,
      },
      {
        p: "Qual frase está correta sobre Projetos e Skills?",
        o: [
          "Projetos executam tarefas; Skills guardam conhecimento",
          "Projetos guardam conhecimento; Skills executam tarefas",
          "Os dois são a mesma coisa",
          "Skills só existem no Enterprise",
        ],
        r: 1,
      },
      {
        p: "O que é o MCP?",
        o: [
          "Um modelo do Claude",
          "Um padrão aberto pelo qual o Claude se conecta a aplicativos, como um USB-C da IA",
          "Um tipo de artefato",
          "Uma configuração de privacidade",
        ],
        r: 1,
      },
      {
        p: "Quem consegue usar a busca corporativa?",
        o: ["Qualquer pessoa no plano Free", "Usuários dos planos Team e Enterprise, depois que um administrador ativa", "Só programadores", "Só quem tem Claude no Chrome"],
        r: 1,
      },
      {
        p: "Quando o Research é a melhor escolha?",
        o: [
          "Para saber a hora atual",
          "Para um problema de matemática sem informação externa",
          "Para uma investigação que junta várias fontes, com citações, como comparar fornecedores",
          "Para resumir um PDF anexado",
        ],
        r: 2,
      },
      {
        p: "O Research precisa de qual recurso ligado para funcionar?",
        o: ["Busca na web", "Um conector do Slack", "O modo de aprendizado", "A extensão do Chrome"],
        r: 0,
      },
      {
        p: "Você quer entender as fórmulas de uma planilha complexa sem sair do Excel. Qual ferramenta?",
        o: ["Claude Tag", "Claude para Excel", "Claude Design", "Claude Code"],
        r: 1,
      },
      {
        p: "Sobre o Claude no Chrome, o que é verdadeiro?",
        o: [
          "Faz compras sem perguntar",
          "Está no plano Free",
          "Pede permissão antes de ações de risco e bloqueia categorias sensíveis por padrão",
          "Só resume páginas, sem agir",
        ],
        r: 2,
      },
      {
        p: "Qual é o melhor primeiro passo depois do curso?",
        o: [
          "Esperar dominar tudo antes de usar",
          "Escolher uma tarefa recorrente da semana, fazer com o Claude e ajustar",
          "Criar dez projetos de uma vez",
          "Conectar todas as ferramentas antes de qualquer conversa",
        ],
        r: 1,
      },
    ],
  },
};
