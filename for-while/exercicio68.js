// 68. Escreva um algoritmo que leia o nome e o salário de 10 funcionários e identifique quem possui o maior salário.
const prompt = require("prompt-sync")();

let nomeMaiorSalario = "";
let maiorSalario = -1;

for (let i = 1; i <= 10; i++) {
  console.log("--- Funcionário", i, "---");
  let nome = prompt("Nome: ");
  let salario = Number(prompt("Salário: "));

  if (salario > maiorSalario) {
    maiorSalario = salario;
    nomeMaiorSalario = nome;
  }
}

console.log("Maior salário:", nomeMaiorSalario, "(R$", maiorSalario.toFixed(2), ")");
