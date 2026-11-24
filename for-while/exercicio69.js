// 69. Escreva um algoritmo que leia o nome e o salário de 10 funcionários e identifique quem possui o menor salário.
const prompt = require("prompt-sync")();

let nomeMenorSalario = "";
let menorSalario = 9999999;

for (let i = 1; i <= 10; i++) {
  console.log("--- Funcionário", i, "---");
  let nome = prompt("Nome: ");
  let salario = Number(prompt("Salário: "));

  if (salario < menorSalario) {
    menorSalario = salario;
    nomeMenorSalario = nome;
  }
}

console.log("Menor salário:", nomeMenorSalario, "(R$", menorSalario.toFixed(2), ")");
