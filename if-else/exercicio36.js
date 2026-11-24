//Escreva um algoritmo que leia três números inteiros e exiba qual é o maior e qual é o menor valor entre eles.
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Número 1: "));
const n2 = Number(prompt("Número 2: "));
const n3 = Number(prompt("Número 3: "));

let maior;
let menor;

if (n1 >= n2 && n1 >= n3) {
  maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
  maior = n2;
} else {
  maior = n3;
}

if (n1 <= n2 && n1 <= n3) {
  menor = n1;
} else if (n2 <= n1 && n2 <= n3) {
  menor = n2;
} else {
  menor = n3;
}

console.log("O maior valor é:", maior);
console.log("O menor valor é:", menor);
