export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        name: "Documentações",
        description: "Documentações pessoal, onde sempre deixo escrito tudo que vou aprendendo no mundo da tecnologia.<br><br> Sendo um fonte de estudo.",
        link: "https://pt-docs.daviny.dev",
        github: "",
        image: "./images/docs.png"
      },
      {
        id: 2,
        name: "Commands Views Page",
        description: "<ul><li>Site com comandos auto-explicativo</li> <li>git</li><li> bash</li></ul>",
        link: "https://commands.views.page",
        github: "",
        image: "./images/commandsviewspage.png"
      },
      {
        id: 3,
        name: "Teste Proz Educação",
        description: "<ul><li>Sistema de notificação</li><li>usando Reactjs</li><li>Axios</li><li>UseContextAPI</li></ul>",
        link: "https://teste-proz.daviny.dev/",
        github: "https://github.com/davinyleticia/teste-reactjs-docker",
        image: "https://raw.githubusercontent.com/davinyleticia/teste-reactjs-docker/master/captura.png"
      },
      {
        id: 4,
        name: 'CRA Template Dnys',
        description: '<ul><li>Template com CRA:</li><li>Docker</li> <li>Axios pre-configurado</li> <li>pronto para começar um projeto Reactjs</li></ul>',
        link: 'https://www.npmjs.com/package/cra-template-dnys',
        github: "https://github.com/davinyleticia/cra-template-dnys",
        image: "./images/cra-reactjs.png"
      },
      {
        id: 5,
        name: 'Sistema de biblioteca',
        description: '<ul><li>Sistema feito usando HTML5</li><li>Javascript Puro EMACScript 6</li> <li>Para cursos da reprograma</li> <li>Sem persistir em banco de dados</li></ul>',
        link: 'https://davinyleticia.github.io/sistema-de-biblioteca-js/',
        github: "https://github.com/davinyleticia/sistema-de-biblioteca-js",
        image: "./images/sistema_de_biblioteca.png"
      },
      {
        id: 6,
        name: 'Website de exercício POO em Python',
        description: '<ul><li>Exercícios resolvidos</li><li>Classe, Atributo e Método</li> <li>Herança</li> <li>Encapsulamento</li><li>Abstração</li></ul>',
        link: 'https://davinyleticia.github.io/exercicio_poo_python/',
        github: "https://github.com/davinyleticia/exercicio_poo_python",
        image: "./images/poo-website-python.png"
      },
      {
        id: 7,
        name: 'Transcrição de Áudio com ChatGPT',
        description: '<ul><li>Legenda</li><li>Python</li> <li>ChatGPT</li> <li>mp3</li></ul><br>Script de transcrição de audio mp3 para texto txt',
        link: 'https://davinyleticia.github.io/audio-transcription-used-chatgpt/',
        github: "https://github.com/davinyleticia/audio-transcription-used-chatgpt",
        image: "./images/poo-website-python.png"
      },
      {
        id: 8,
        name: 'Google Apps Script para Importar Dados da API de Intimação da AASP',
        description: '<ul><li>AppsScript</li></ul><br>Google Apps Script foi desenvolvido para importar dados da API de intimação da AASP (Associação dos Advogados de São Paulo) para uma planilha.',
        link: 'https://davinyleticia.github.io/App-Script-para-automacao-da-AASP',
        github: "https://github.com/davinyleticia/App-Script-para-automacao-da-AASP",
        image: "./images/poo-website-python.png"
      },
      {
        id: 9,
        name: 'Projeto Ecoleta - Next Level Week',
        description: '<ul><li>Legenda</li><li>JavaScript</li><li>HTML</li><li>API do IBGE</li><li>Node.js</li><li>Sqlite3</li></ul><br>Um sistema para coleta de resíduos orgânicos e inorgânicos',
        link: 'https://davinyleticia.github.io/nlw-starter',
        github: "https://github.com/davinyleticia/nlw-starter",
        image: "./images/ecoleta_projects.png"
      }
  ]);
  }