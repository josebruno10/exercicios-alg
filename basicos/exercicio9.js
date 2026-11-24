// 9. Escreva um algoritmo que leia duas notas de um aluno, calcule sua média aritmética e exiba o resultado final.
const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Primeira nota: "));
const nota2 = Number(prompt("Segunda nota: "));
const media = (nota1 + nota2) / 2;

console.log("A média entre", nota1, "e", nota2, "é", media.toFixed(1));
