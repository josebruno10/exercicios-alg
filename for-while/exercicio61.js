// 61. Escreva um algoritmo que leia 10 números e realize a soma apenas dos valores que forem pares.
const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num % 2 === 0) {
    soma += num;
  }
}

console.log("Soma dos números pares:", soma);
