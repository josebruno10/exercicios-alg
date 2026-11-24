//Escreva um algoritmo que leia dois números inteiros e informe qual é o maior número ou se os dois são iguais.
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

if (n1 > n2) {
  console.log("O primeiro número é maior.");
} else if (n2 > n1) {
  console.log("O segundo número é maior.");
} else {
  console.log("Os dois números são iguais.");
}
