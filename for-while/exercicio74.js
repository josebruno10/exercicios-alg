// 74. Escreva um algoritmo que leia números até que o valor 0 seja digitado e some apenas os números positivos informados.
const prompt = require("prompt-sync")();

let somaPositivos = 0;
let num = -1;

while (num !== 0) {
  num = Number(prompt("Digite um número (0 para sair): "));
  if (num !== 0 && num > 0) {
    somaPositivos += num;
  }
}

console.log("A soma dos números positivos é:", somaPositivos);
