// 11. Escreva um algoritmo que leia a base e a altura de um retângulo, calcule sua área e exiba o valor calculado.
const prompt = require("prompt-sync")();

const base = Number(prompt("Base do retângulo: "));
const altura = Number(prompt("Altura do retângulo: "));
const area = base * altura;

console.log("A área do retângulo é", area.toFixed(2));
