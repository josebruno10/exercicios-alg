// 83. Escreva um algoritmo que leia nome e salário de 10 funcionários e apresente o maior salário, o menor salário e a média salarial do grupo.
const prompt = require("prompt-sync")();

let somaSalarios = 0;
let maiorSalario, menorSalario;

for (let i = 1; i <= 10; i++) {
  console.log("--- Funcionário", i, "---");
  let nome = prompt("Nome: ");
  let salario = Number(prompt("Salário: "));

  somaSalarios += salario;

  if (i === 1) {
    maiorSalario = menorSalario = salario;
  } else {
    if (salario > maiorSalario) {
      maiorSalario = salario;
    } else if (salario < menorSalario) {
      menorSalario = salario;
    }
  }
}

let media = somaSalarios / 10;
console.log("Maior salário: R$", maiorSalario.toFixed(2));
console.log("Menor salário: R$", menorSalario.toFixed(2));
console.log("Média salarial: R$", media.toFixed(2));
