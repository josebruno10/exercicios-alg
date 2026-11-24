// 59. Escreva um algoritmo que leia 10 números e calcule a média aritmética dos valores informados.
const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  soma += num;
}

let media = soma / 10;
console.log("Média aritmética:", media.toFixed(2));
