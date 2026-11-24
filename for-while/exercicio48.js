// 48. Escreva um algoritmo que leia um número inteiro e exiba a sua tabuada completa de 1 a 10.
const prompt = require("prompt-sync")();

const num = Number(prompt("Ver tabuada do número: "));

console.log("Tabuada de", num, ":");
for (let i = 1; i <= 10; i++) {
  console.log(num, "x", i, "=", num * i);
}
