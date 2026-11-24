//Escreva um algoritmo que calcule o reajuste salarial com base no gênero e tempo de empresa: para mulheres, 5% (até 15 anos) ou 12% (mais de 15 anos); para homens, 3% (até 20 anos) ou 13% (mais de 20 anos).
const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário atual: "));
const genero = prompt("Gênero (M/F): ").toUpperCase();
const tempo = Number(prompt("Anos de empresa: "));
let aumento;

if (genero === "F" && tempo <= 15) {
  aumento = 0.05;
} else if (genero === "F" && tempo > 15) {
  aumento = 0.12;
} else if (tempo <= 20) {
  aumento = 0.03;
} else {
  aumento = 0.13;
}

const novoSalario = salario * (1 + aumento);
console.log("O novo salário será: R$", novoSalario.toFixed(2));
