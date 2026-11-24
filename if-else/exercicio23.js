//Escreva um algoritmo que leia o nome do aluno e duas notas, calcule a média e exiba se o aluno teve um "bom aproveitamento" (média superior a 7,0) ou se "não foi satisfatório".
const prompt = require("prompt-sync")();

const nome = prompt("Nome do aluno: ");
const n1 = Number(prompt("Primeira nota: "));
const n2 = Number(prompt("Segunda nota: "));

const media = (n1 + n2) / 2;

if (media > 7) {
  console.log(nome, "teve um bom aproveitamento com média", media.toFixed(1), ".");
} else {
  console.log(nome, "não teve um aproveitamento satisfatório. Média:", media.toFixed(1), ".");
}
