//Escreva um algoritmo que leia um número inteiro e informe se ele é par ou ímpar.
const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número inteiro: ")); // Solicita ao usuário que digite um número inteiro

if (numero % 2 === 0) {
  console.log("O número é par."); // Se o número for divisível por 2, é par
} else {
  console.log("O número é ímpar."); // Se o número não for divisível por 2, é ímpar
}
