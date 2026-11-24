//enunciado para esse exercicio: Pares e Ímpares
// 1) Leia 10 números inteiros e armazene em um vetor.
// 2) Percorra o vetor e separe os números em dois novos vetores:
//    um só com os pares e outro só com os ímpares.
// 3) Exiba os dois vetores e a quantidade de números de cada um.

const prompt = require('prompt-sync')();

let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 10; i++) {
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: '));
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) { // resto zero na divisao por 2 = par
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log('Pares:', pares, '- total:', pares.length);
console.log('Ímpares:', impares, '- total:', impares.length);
