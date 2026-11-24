// 43. Escreva um algoritmo que leia um número inteiro N e exiba todos os números pares de 1 até N.
const prompt = require("prompt-sync")();

const n = Number(prompt("Digite o valor de N: "));

console.log("Números pares de 1 até", n, ":");
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
