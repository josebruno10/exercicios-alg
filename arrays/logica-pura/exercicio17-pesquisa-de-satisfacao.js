// enunciado para esse exercicio:
// 1) Leia a avaliação de vários clientes em uma pesquisa de satisfação, usando uma escala de
//    1 a 5: 1 = Muito insatisfeito, 2 = Insatisfeito, 3 = Regular, 4 = Satisfeito e
//    5 = Muito satisfeito.
// 2) Se o usuário digitar -1, a pesquisa deverá ser encerrada. Utilize break para sair do laço.
// 3) Se digitar 0 ou um número maior que 5, a avaliação deverá ser considerada inválida.
//    Utilize continue para ignorar essa entrada.
// 4) Conte quantos clientes avaliaram com notas 4 ou 5 (avaliações positivas) e quantos
//    avaliaram com notas 1 ou 2 (avaliações negativas).
// 5) Calcule a soma de todas as avaliações válidas.
// 6) Ao final, apresente a quantidade de avaliações positivas, a quantidade de avaliações
//    negativas e a média geral das avaliações.
// Exemplo: digitando 5, 2, 0, 4, 6, 3 e -1, o programa mostra Avaliações positivas: 2,
//    Avaliações negativas: 1 e Média geral: 3.5.

const prompt = require('prompt-sync')();       // habilita o prompt()

let positivas = 0;                             // conta as notas 4 e 5
let negativas = 0;                             // conta as notas 1 e 2
let soma = 0;                                  // soma das avaliações válidas
let validas = 0;                               // quantas avaliações válidas (para a média)

while (true) {                                 // repete sem parar: quem faz parar é o break
  let avaliacao = Number(prompt('Digite a avaliação: ')); // lê no COMEÇO do laço

  if (avaliacao === -1) {                      // -1 encerra a pesquisa
    break;                                     // sai do while na hora
  }

  if (avaliacao < 1 || avaliacao > 5) {        // || quer dizer OU: pega o 0 e o que passa de         // avisa que não vai contar
    continue;                                  // pula o resto e volta para o começo do while
  }

  soma = soma + avaliacao;                     // daqui pra baixo só chegam notas de 1 a 5
  validas = validas + 1;                       // mais uma avaliação válida

  if (avaliacao >= 4) {                        // 4 ou 5
    positivas = positivas + 1;                 // mais uma positiva
  } else if (avaliacao <= 2) {                 // 1 ou 2 (o 3 não entra em nenhum dos dois)
    negativas = negativas + 1;                 // mais uma negativa
  }
}

console.log('Avaliações positivas: ' + positivas); // resultados finais
console.log('Avaliações negativas: ' + negativas);

if (validas > 0) {                             // só divide se teve pelo menos uma válida
  console.log('Média geral: ' + soma / validas); // média = soma dividida pela quantidade
} else {                                       // ninguém avaliou: dividir por 0 daria NaN
  console.log('Nenhuma avaliação válida.');
}
