# JS-A-Linguagem

Nome Completo: Pedro Daniel Souza Leal

Regras do Jogo
O "Show do Milhão" é um jogo de perguntas e respostas onde o jogador deve responder corretamente a uma série de perguntas de múltipla escolha para acumular prêmios. O jogo possui 5 rodadas, cada uma com uma pergunta de 4 alternativas (A, B, C, D). O jogador pode:
- Acertar: Avança para a próxima rodada e acumula o prêmio correspondente.
- Errar: O jogo termina, e o jogador recebe o prêmio de erro da rodada atual.
- Parar: O jogador encerra o jogo e recebe o prêmio de parar da rodada atual.

 Premiações
- Rodada 1: Acertar: R$1.000 | Errar: R$0 | Parar: R$500
- Rodada 2: Acertar: R$5.000 | Errar: R$500 | Parar: R$2.500
- Rodada 3: Acertar: R$10.000 | Errar: R$2.500 | Parar: R$5.000
- Rodada 4: Acertar: R$50.000 | Errar: R$5.000 | Parar: R$25.000
- Rodada 5: Acertar: R$100.000 | Errar: R$25.000 | Parar: R$50.000

Como Jogar
1. No início, o jogador informa seu nome.
2. Em cada uma das 5 rodadas, uma pergunta é apresentada com 4 alternativas (A, B, C, D).
3. O jogador escolhe uma alternativa (digitando A, B, C ou D) ou digita "parar" para encerrar o jogo.
4. Após cada resposta, o jogo informa se a resposta está correta ou errada.
5. Ao final do jogo (seja por erro, parar ou completar as 5 rodadas), são exibidos:
   - Nome do jogador.
   - Rodada em que parou e quantas rodadas faltavam.
   - Resposta correta da última pergunta.
   - Premiação final.
6. O jogador pode optar por jogar novamente (digitando s para sim ou n para não).

Como Executar
O projeto foi desenvolvido e testado no GitHub Codespaces, mas também pode ser executado localmente com Node.js.

Usando GitHub Codespaces
1. Acesse o repositório público no GitHub: 
2. Clique em Code > Codespaces > Create codespace on main.
3. Aguarde o ambiente carregar (Node.js e npm já estão pré-instalados).
4. No terminal do Codespaces, execute:
   npm start

Variações
Aleatoriedade das perguntas: As 15 perguntas disponíveis são embaralhadas aleatoriamente a cada jogo, garantindo que as 5 rodadas tenham perguntas diferentes em cada partida.
Rejogar: O jogo permite reiniciar sem sair do programa.
Temas variados: As perguntas abrangem temas de conhecimento geral, como geografia, história, literatura e ciência.

Créditos
Fontes de Referência:
Node.js Documentation
JavaScript MDN Web Docs
Aula de JavaScript do repositório Notion: https://arthurporto.notion.site/07-Javascript-cb539285c3b9410485790ff0743095f0

Licença do projeto
Licença MIT
