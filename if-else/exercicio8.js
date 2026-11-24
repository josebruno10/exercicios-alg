//Escreva um algoritmo que leia duas notas de um aluno, calcule sua média e exiba "APROVADO" para médias iguais ou superiores a 5,0 ou "REPROVADO" para médias inferiores.
const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));
const media = (nota1 + nota2) / 2;

if (media >= 5) {
  console.log("Média:", media.toFixed(1), "- APROVADO");
} else {
  console.log("Média:", media.toFixed(1), "- REPROVADO");
}
