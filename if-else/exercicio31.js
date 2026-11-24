//Escreva um algoritmo que leia o salário de um funcionário e aplique um aumento de 10% para salários superiores a R$ 1.000,00 ou 15% para os demais, exibindo o salário original e o novo valor.
const prompt = require("prompt-sync")();

const salarioOriginal = Number(prompt("Digite o salário atual: R$ "));
let aumento;

if (salarioOriginal > 1000) {
  aumento = 0.1;
} else {
  aumento = 0.15;
}

const novoSalario = salarioOriginal * (1 + aumento);
console.log("Salário Original: R$", salarioOriginal.toFixed(2), "| Novo Salário: R$", novoSalario.toFixed(2));