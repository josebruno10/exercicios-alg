// 57. Escreva um algoritmo que calcule e exiba o resultado da soma de todos os números de 1 até 100.
const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("Soma de 1 a 100:", soma);
