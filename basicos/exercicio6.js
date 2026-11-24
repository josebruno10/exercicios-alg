// 6. Escreva um algoritmo que leia dois números inteiros e exiba a soma entre eles.
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
const soma = n1 + n2;

console.log("A soma entre", n1, "e", n2, "é igual a", soma, ".");
