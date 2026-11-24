//Escreva um algoritmo que leia três números inteiros (A, B e C), calcule a soma de A + B e informe se essa soma é menor que C.
const prompt = require("prompt-sync")();

const a = Number(prompt("Digite o valor de A: "));
const b = Number(prompt("Digite o valor de B: "));
const c = Number(prompt("Digite o valor de C: "));

const soma = a + b;

if (soma < c) {
  console.log("A soma de A + B (", soma, ") é menor que C (", c, ").");
} else {
  console.log("A soma de A + B (", soma, ") não é menor que C (", c, ").");
}
