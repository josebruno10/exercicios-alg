// 8. Escreva um algoritmo que leia um número real e exiba seu dobro e sua terça parte.
const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número real: "));

console.log("O dobro de", numero, "é", numero * 2);
console.log("A terça parte de", numero, "é", (numero / 3).toFixed(2));
