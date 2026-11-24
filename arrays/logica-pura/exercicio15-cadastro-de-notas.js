// enunciado para esse exercicio (questão de prova):
// 1) Leia as notas de vários alunos, até ser digitada uma nota negativa.
// 2) Notas iguais a 0 devem ser ignoradas: não mostram mensagem e só contam como nota
//    ignorada.
// 3) Para as outras notas, mostre Aprovado! (nota 6 ou mais) ou Reprovado! (nota menor que 6).
// 4) Ao final, mostre quantos alunos foram aprovados, quantos foram reprovados e quantas notas
//    foram ignoradas.
// Exemplo: digitando 8, 5, 0, 7, 3 e -1, o programa mostra Aprovados: 2, Reprovados: 2 e Notas
//    ignoradas: 1.

const prompt = require('prompt-sync')();      // habilita o prompt()

let aprovados = 0;                            // conta as notas 6 ou mais
let reprovados = 0;                           // conta as notas abaixo de 6
let ignoradas = 0;                            // conta as notas 0
let nota = Number(prompt('Digite a nota: ')); // 1ª nota, antes do while

while (nota >= 0) {                           // uma nota negativa faz parar
  if (nota === 0) {                           // nota 0: só conta como ignorada
    ignoradas = ignoradas + 1;
  } else if (nota >= 6) {                     // 6 ou mais
    console.log('Aprovado!');                 // mostra na hora
    aprovados = aprovados + 1;                // e conta
  } else {                                    // sobrou: maior que 0 e menor que 6
    console.log('Reprovado!');                // mostra na hora
    reprovados = reprovados + 1;              // e conta
  }

  nota = Number(prompt('Digite a nota: '));   // próxima nota, no FIM
}

console.log('Aprovados: ' + aprovados);       // resultados finais
console.log('Reprovados: ' + reprovados);
console.log('Notas ignoradas: ' + ignoradas);
