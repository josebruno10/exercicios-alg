// 54. Escreva um algoritmo que leia 10 números e informe quantos deles são ímpares.
const prompt = require("prompt-sync")();

let impares = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num % 2 !== 0) {
    impares++;
  }
}

console.log("Quantidade de ímpares:", impares);