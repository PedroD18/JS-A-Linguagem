const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntas = [
  {
    pergunta: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
    alternativas: ["A) 1917", "B) Parasita", "C) Jojo Rabbit", "D) Coringa"],
    correta: "B",
    dica: "É um filme sul-coreano dirigido por Bong Joon-ho."
  },
  {
    pergunta: "Quem é o vocalista principal da banda Queen?",
    alternativas: ["A) Mick Jagger", "B) Freddie Mercury", "C) David Bowie", "D) Elton John"],
    correta: "B",
    dica: "Conhecido por sua voz poderosa e pelo hit Bohemian Rhapsody."
  },
  {
    pergunta: "Qual empresa criou o iPhone?",
    alternativas: ["A) Samsung", "B) Google", "C) Apple", "D) Microsoft"],
    correta: "C",
    dica: "A empresa também é famosa pelo MacBook e iPad."
  },
  {
    pergunta: "Qual é o nome do super-herói interpretado por Robert Downey Jr. no Universo Marvel?",
    alternativas: ["A) Thor", "B) Capitão América", "C) Homem de Ferro", "D) Hulk"],
    correta: "C",
    dica: "Ele é conhecido por sua armadura high-tech."
  },
  {
    pergunta: "Qual série é famosa pelo bordão Winter is Coming?",
    alternativas: ["A) The Witcher", "B) Game of Thrones", "C) Vikings", "D) Stranger Things"],
    correta: "B",
    dica: "Baseada nos livros de George R.R. Martin."
  },
  {
    pergunta: "Quem cantou Shape of You?",
    alternativas: ["A) Justin Bieber", "B) Ed Sheeran", "C) Shawn Mendes", "D) Bruno Mars"],
    correta: "B",
    dica: "Ele é um cantor britânico ruivo."
  },
  {
    pergunta: "Qual é o nome do assistente virtual da Amazon?",
    alternativas: ["A) Siri", "B) Cortana", "C) Alexa", "D) Google Assistant"],
    correta: "C",
    dica: "Usado em dispositivos como o Echo."
  },
  {
    pergunta: "Qual filme da Pixar apresenta um ratinho que sonha ser chef?",
    alternativas: ["A) Toy Story", "B) Ratatouille", "C) Up", "D) Wall-E"],
    correta: "B",
    dica: "A história se passa em Paris."
  },
  {
    pergunta: "Quem dirigiu O Senhor dos Anéis?",
    alternativas: ["A) Steven Spielberg", "B) Peter Jackson", "C) Christopher Nolan", "D) Quentin Tarantino"],
    correta: "B",
    dica: "Ele também dirigiu O Hobbit."
  },
  {
    pergunta: "Qual é a rede social mais usada no mundo em 2025?",
    alternativas: ["A) Instagram", "B) Facebook", "C) TikTok", "D) X"],
    correta: "B",
    dica: "Pertence à Meta."
  },
  {
    pergunta: "Qual banda lançou o álbum Abbey Road?",
    alternativas: ["A) The Rolling Stones", "B) The Beatles", "C) Pink Floyd", "D) Led Zeppelin"],
    correta: "B",
    dica: "A capa do álbum mostra uma faixa de pedestres."
  },
  {
    pergunta: "Qual jogo foi o mais vendido de todos os tempos até 2025?",
    alternativas: ["A) Minecraft", "B) GTA V", "C) Tetris", "D) Fortnite"],
    correta: "C",
    dica: "É um jogo clássico de blocos que se encaixam."
  },
  {
    pergunta: "Qual é o nome do vilão principal de Star Wars: Episódio V?",
    alternativas: ["A) Darth Vader", "B) Palpatine", "C) Kylo Ren", "D) Darth Maul"],
    correta: "A",
    dica: "Ele é conhecido pela frase Eu sou seu pai."
  },
  {
    pergunta: "Quem criou o sistema operacional Linux?",
    alternativas: ["A) Bill Gates", "B) Linus Torvalds", "C) Steve Jobs", "D) Mark Zuckerberg"],
    correta: "B",
    dica: "Ele é um programador finlandês."
  },
  {
    pergunta: "Qual é o nome da nave espacial em Firefly?",
    alternativas: ["A) Enterprise", "B) Serenity", "C) Millennium Falcon", "D) Nostromo"],
    correta: "B",
    dica: "A série é um faroeste espacial."
  }
];

const premiacao = [
  { rodada: 1, acertar: 2000, errar: 0, parar: 1000 },
  { rodada: 2, acertar: 10000, errar: 1000, parar: 5000 },
  { rodada: 3, acertar: 25000, errar: 5000, parar: 12500 },
  { rodada: 4, acertar: 75000, errar: 12500, parar: 37500 },
  { rodada: 5, acertar: 150000, errar: 37500, parar: 75000, bonus: 50000 }
];

// Função para embaralhar perguntas
function embaralharPerguntas(array) {
  return array.sort(() => Math.random() - 0.5).slice(0, 5);
}

// Função para exibir pergunta e alternativas
function exibirPergunta(pergunta, premio, rodada) {
  console.log(`\nRodada ${rodada}`);
  console.log(`Premiação: Acertar: R$${premio.acertar} | Errar: R$${premio.errar} | Parar: R$${premio.parar}`);
  console.log(`\n${pergunta.pergunta}`);
  pergunta.alternativas.forEach(alt => console.log(alt));
}

// Função para exibir dica
function exibirDica(pergunta) {
  console.log(`Dica: ${pergunta.dica}`);
}

// Função principal 
function iniciarJogo() {
  rl.question("Digite seu nome: ", (nome) => {
    console.log(`\nBem-vindo ao Show do Milhão, ${nome}! `);
    let rodadaAtual = 0;
    let premioAcumulado = 0;
    const perguntasJogo = embaralharPerguntas([...perguntas]);

    function processarRodada() {
      if (rodadaAtual >= 5) {
        premioAcumulado += premiacao[4].bonus;
        console.log(`\nParabéns, ${nome}! Você venceu o Show do Milhão! `);
        console.log(`Premiação Final: R$${premioAcumulado} (inclui bônus de R$50.000)`);
        jogarNovamente(nome, rodadaAtual, premioAcumulado, null);
        return;
      }

      const perguntaAtual = perguntasJogo[rodadaAtual];
      const premio = premiacao[rodadaAtual];

      exibirPergunta(perguntaAtual, premio, rodadaAtual + 1);
      rl.question("Quer uma dica? (s/n): ", (querDica) => {
        if (querDica.toLowerCase() === 's') {
          exibirDica(perguntaAtual);
        }
        rl.question("Sua resposta (A, B, C, D ou 'parar'): ", (resposta) => {
          if (resposta.toLowerCase() === 'parar') {
            console.log(`\n${nome}, você escolheu parar.`);
            console.log(`Premiação Final: R$${premio.parar}`);
            console.log(`Rodada: ${rodadaAtual + 1} (faltavam ${5 - (rodadaAtual + 1)} rodadas)`);
            console.log(`Resposta correta: ${perguntaAtual.alternativas.find(alt => alt.startsWith(perguntaAtual.correta))}`);
            jogarNovamente(nome, rodadaAtual + 1, premio.parar, perguntaAtual);
            return;
          }

          if (resposta.toUpperCase() === perguntaAtual.correta) {
            console.log("Resposta correta!");
            premioAcumulado = premio.acertar;
            rodadaAtual++;
            processarRodada();
          } else {
            console.log(`\nResposta errada! A correta era: ${perguntaAtual.alternativas.find(alt => alt.startsWith(perguntaAtual.correta))}`);
            console.log(`Premiação Final: R$${premio.errar}`);
            console.log(`Rodada: ${rodadaAtual + 1} (faltavam ${5 - (rodadaAtual + 1)} rodadas)`);
            jogarNovamente(nome, rodadaAtual + 1, premio.errar, perguntaAtual);
          }
        });
      });
    }

    function jogarNovamente(nome, rodada, premioFinal, ultimaPergunta) {
      rl.question("\nQuer jogar novamente? (s/n): ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
          iniciarJogo();
        } else {
          console.log(`\nObrigado por jogar, ${nome}! Até a próxima!`);
          if (ultimaPergunta) {
            console.log(`Resposta correta da última pergunta: ${ultimaPergunta.alternativas.find(alt => alt.startsWith(ultimaPergunta.correta))}`);
          }
          console.log(`Premiação Final: R$${premioFinal}`);
          rl.close();
        }
      });
    }

    processarRodada();
  });
}
// Iniciando o jogo
console.log("Show do Milhão");
iniciarJogo();