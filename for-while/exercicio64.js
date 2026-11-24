// 64. Escreva um algoritmo que leia 8 números inteiros e identifique qual foi o menor número digitado.
const prompt = require("prompt-sync")();

let menor;

for (let i = 1; i <= 8; i++) {
  let num = Number(prompt("Digite um número: "));
  if (i === 1) {
    menor = num;
  } else if (num < menor) {
    menor = num;
  }
}

console.log("O menor número digitado foi:", menor);
