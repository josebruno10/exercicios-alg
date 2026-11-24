// 77. Escreva um algoritmo que leia números continuamente e encerre o programa apenas quando for digitado um múltiplo de 7.
const prompt = require("prompt-sync")();

let num = 1;

while (num % 7 !== 0 || num === 0) {
  num = Number(prompt("Digite um número: "));
}

console.log("Encerrado! O número", num, "é múltiplo de 7.");
