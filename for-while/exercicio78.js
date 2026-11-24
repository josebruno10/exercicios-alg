// 78. Escreva um algoritmo que leia números inteiros e encerre a execução ao receber o valor 1111, exibindo a soma de todos os números anteriores. faça sem break
const prompt = require("prompt-sync")();

let soma = 0;
let num;

while (num !== 1111) {
  num = Number(prompt("Digite um número (1111 para parar): "));
  if (num !== 1111) {
    soma += num;
  }
}

console.log("A soma dos números informados foi:", soma);
