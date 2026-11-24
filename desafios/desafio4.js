// 4. Escreva um algoritmo que leia 10 números inteiros e informe quantos deles são maiores que 100.
const prompt = require("prompt-sync")();

let contador = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num > 100) {
    contador++;
  }
}

console.log("Quantidade de números maiores que 100:", contador);
