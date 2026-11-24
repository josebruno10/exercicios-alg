// 52. Escreva um algoritmo que leia 10 números e informe quantos deles são negativos.
const prompt = require("prompt-sync")();

let negativos = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num < 0) {
    negativos++;
  }
}

console.log("Quantidade de negativos:", negativos);