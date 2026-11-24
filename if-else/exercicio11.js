//Escreva um algoritmo que leia a idade de uma pessoa e a classifique como criança (até 12 anos), adolescente (13 a 17 anos), adulto (18 a 59 anos) ou idoso (60 anos ou mais).
const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite a idade: "));

if (idade <= 12) {
  console.log("Classificação: Criança");
} else if (idade <= 17) {
  console.log("Classificação: Adolescente");
} else if (idade <= 59) {
  console.log("Classificação: Adulto");
} else {
  console.log("Classificação: Idoso");
}
