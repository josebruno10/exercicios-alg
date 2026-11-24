// 63. Escreva um algoritmo que leia 8 números inteiros e identifique qual foi o maior número digitado.
const prompt = require("prompt-sync")();

let maior;

for (let i = 1; i <= 8; i++) {
  let num = Number(prompt("Digite um número: "));
  if (i === 1) {
    maior = num;
  } else if (num > maior) {
    maior = num;
  }
}

console.log("O maior número digitado foi:", maior);
