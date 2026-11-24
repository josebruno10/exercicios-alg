// 76. Escreva um algoritmo que leia idades sucessivamente até que o valor 0 seja informado, exibindo quantas pessoas são maiores de idade.
const prompt = require("prompt-sync")();

let totalMaiores = 0;
let idade = -1;

while (idade !== 0) {
  idade = Number(prompt("Idade (0 para sair): "));
  if (idade !== 0 && idade >= 18) {
    totalMaiores++;
  }
}

console.log("Total de pessoas maiores de idade:", totalMaiores);
