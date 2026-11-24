// enunciado para esse exercicio:
// 1) Leia 4 idades e guarde em um vetor.
// 2) Some todas as idades com o laço.
// 3) Calcule a média e exiba soma e média.

const prompt = require('prompt-sync')(); // habilita o prompt()

let idades = [];                         // vetor vazio
let soma = 0;                            // acumulador zerado, fora do laço

for (let i = 0; i < 4; i++) {            // 4 idades
  idades[i] = Number(prompt('Digite a ' + (i + 1) + 'ª idade: ')); // guarda no vetor
  soma = soma + idades[i];               // aproveita a mesma volta para somar
}

let media = soma / idades.length;        // divide pela quantidade real de idades

console.log('Soma: ' + soma);            // total
console.log('Média: ' + media);          // média
