// 53. Escreva um algoritmo que leia 10 números e informe quantos deles são pares.
const prompt = require("prompt-sync")();

let pares = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num % 2 === 0) {
    pares++;
  }
}

console.log("Quantidade de pares:", pares);
