// enunciado para esse exercicio (questão de prova):
// 1) Leia a idade de várias pessoas, até ser digitada uma idade negativa.
// 2) Se a idade digitada for 0, ignore essa entrada: ela não conta como maior nem como menor.
// 3) Conte quantas pessoas são maiores de idade (18 anos ou mais) e quantas são menores de
//    idade (de 1 a 17 anos).
// 4) Ao final, mostre a quantidade de maiores e de menores de idade.
// Exemplo: digitando 25, 12, 0, 40, 15 e -1, o programa mostra Maiores de idade: 2 e Menores
//    de idade: 2.

const prompt = require('prompt-sync')();      // habilita o prompt()

let maiores = 0;                              // conta quem tem 18 anos ou mais
let menores = 0;                              // conta quem tem de 1 a 17 anos
let idade = Number(prompt('Digite a idade: ')); // 1ª idade, antes do while

while (idade >= 0) {                          // uma idade negativa faz parar
  if (idade >= 18) {                          // 18 ou mais
    maiores = maiores + 1;                    // mais um maior de idade
  } else if (idade > 0) {                     // de 1 a 17: o 0 não entra em nenhum dos dois
    menores = menores + 1;                    // mais um menor de idade
  }

  idade = Number(prompt('Digite a idade: ')); // próxima idade, no FIM
}

console.log('Maiores de idade: ' + maiores);  // primeiro resultado
console.log('Menores de idade: ' + menores);  // segundo resultado
