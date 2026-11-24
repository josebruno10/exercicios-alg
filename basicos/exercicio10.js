// 10. Escreva um algoritmo que leia três notas de um aluno, calcule a média aritmética das notas e exiba o resultado.
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Nota 1: "));
const n2 = Number(prompt("Nota 2: "));
const n3 = Number(prompt("Nota 3: "));
const media = (n1 + n2 + n3) / 3;

console.log("A média aritmética final é", media.toFixed(1));
