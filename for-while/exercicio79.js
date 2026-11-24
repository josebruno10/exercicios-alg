// 79. Escreva um algoritmo que leia um salário e aplique aumentos sucessivos de 15% enquanto o valor for inferior a R$ 1.000,00, exibindo todos os reajustes.
const prompt = require("prompt-sync")();

let salario = Number(prompt("Digite o salário: "));

while (salario < 1000) {
  salario = salario * 1.15;
  console.log("Reajuste: R$", salario.toFixed(2));
}

console.log("Salário final: R$", salario.toFixed(2));
