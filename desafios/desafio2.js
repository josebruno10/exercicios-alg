// 2. Escreva um algoritmo que leia 10 números inteiros e exiba apenas os números pares que foram digitados.
const prompt = require("prompt-sync")();

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num % 2 === 0) {
    console.log(num);
  }
}
