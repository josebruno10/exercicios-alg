// 65. Escreva um algoritmo que leia 8 números inteiros e exiba, ao final, o maior e o menor valor informados.
const prompt = require("prompt-sync")();

let maior, menor;

for (let i = 1; i <= 8; i++) {
  let num = Number(prompt("Digite um número: "));
  if (i === 1) {
    maior = num;
    menor = num;
  } else {
    if (num > maior) {
      maior = num;
    }
    if (num < menor) {
      menor = num;
    }
  }
}

console.log("Maior:", maior, "| Menor:", menor);