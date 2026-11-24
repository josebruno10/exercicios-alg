//Escreva um algoritmo que leia três números inteiros e exiba qual deles é o maior.
const prompt = require("prompt-sync")();

const a = Number(prompt("Digite o primeiro número: "));
const b = Number(prompt("Digite o segundo número: "));
const c = Number(prompt("Digite o terceiro número: "));

let maior;

if (a >= b && a >= c) {
  maior = a;
} else if (b >= a && b >= c) {
  maior = b;
} else {
  maior = c;
}

console.log("O maior número digitado foi:", maior);
