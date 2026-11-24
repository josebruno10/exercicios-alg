// 55. Escreva um algoritmo que leia a idade de 10 pessoas e informe quantas possuem 18 anos ou mais.
const prompt = require("prompt-sync")();

let maiores = 0;

for (let i = 1; i <= 10; i++) {
  let idade = Number(prompt("Idade: "));
  if (idade >= 18) {
    maiores++;
  }
}

console.log("Total de pessoas com 18 anos ou mais:", maiores);
