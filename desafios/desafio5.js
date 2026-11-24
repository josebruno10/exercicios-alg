// 5. Escreva um algoritmo que leia 10 números inteiros e informe quantos deles são múltiplos de 3.
const prompt = require("prompt-sync")();

let contador = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num % 3 === 0) {
    contador++;
  }
}

console.log("Quantidade de múltiplos de 3:", contador);
