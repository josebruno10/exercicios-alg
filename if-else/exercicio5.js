//Escreva um algoritmo que leia dois números inteiros e os exiba em ordem crescente.
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));

if (n1 < n2) {
  console.log("Ordem crescente:", n1, ",", n2);
} else {
  console.log("Ordem crescente:", n2, ",", n1);
}
