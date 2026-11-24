// enunciado para esse exercicio (questão de prova):
// 1) Para cada aluno, leia duas notas e calcule a média.
// 2) Informe se o aluno foi aprovado (média 7 ou mais), ficou em recuperação (média de 5 até
//    6,9) ou foi reprovado (média menor que 5).
// 3) Continue pedindo alunos até que a primeira nota digitada seja -1.
// 4) Ao final, mostre quantos alunos foram aprovados, quantos ficaram em recuperação e quantos
//    foram reprovados.

const prompt = require('prompt-sync')(); // habilita o prompt()

let aprovados = 0;                       // média 7 ou mais
let recuperacao = 0;                     // média de 5 até abaixo de 7
let reprovados = 0;                      // média abaixo de 5
let nota1 = Number(prompt('Digite a primeira nota (-1 para sair): ')); // 1º aluno, antes do while

while (nota1 !== -1) {                   // !== quer dizer diferente: repete até digitar -1
  let nota2 = Number(prompt('Digite a segunda nota: ')); // lê a 2ª nota
  let media = (nota1 + nota2) / 2;       // parênteses: soma primeiro, divide depois

  if (media >= 7) {                      // 7 ou mais
    console.log('Média ' + media + ': aprovado');
    aprovados = aprovados + 1;
  } else if (media >= 5) {               // não chegou a 7, mas tem 5 ou mais
    console.log('Média ' + media + ': recuperação');
    recuperacao = recuperacao + 1;
  } else {                               // abaixo de 5
    console.log('Média ' + media + ': reprovado');
    reprovados = reprovados + 1;
  }

  nota1 = Number(prompt('Digite a primeira nota (-1 para sair): ')); // próximo aluno, no FIM
}

console.log('Aprovados: ' + aprovados);  // resultados finais
console.log('Em recuperação: ' + recuperacao);
console.log('Reprovados: ' + reprovados);
