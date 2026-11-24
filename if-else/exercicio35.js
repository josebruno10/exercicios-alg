//Escreva um algoritmo que leia três segmentos de reta e informe se eles podem formar um triângulo, considerando que a soma de dois lados deve ser sempre maior que o terceiro.
const prompt = require("prompt-sync")();

const l1 = Number(prompt("Segmento 1: "));
const l2 = Number(prompt("Segmento 2: "));
const l3 = Number(prompt("Segmento 3: "));

if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
  console.log("Os segmentos podem formar um triângulo.");
} else {
  console.log("Os segmentos NÃO podem formar um triângulo.");
}
