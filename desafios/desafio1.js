// 1. Escreva um algoritmo que leia 10 números inteiros e exiba apenas os números positivos que foram digitados.
const prompt = require("prompt-sync")();

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num > 0) {
    console.log(num);
  }
}
