// 13. Escreva um algoritmo que leia o salário de um funcionario, aplique um aumento de 15% e exiba o salário original, o valor do aumento e o novo salário.
const prompt = require("prompt-sync")();

const salarioOriginal = Number(prompt("Salário atual: R$ "));
const aumento = salarioOriginal * 0.15;
const novoSalario = salarioOriginal + aumento;

console.log("Salário Original: R$", salarioOriginal.toFixed(2));
console.log("Aumento (15%): R$", aumento.toFixed(2));
console.log("Novo Salário: R$", novoSalario.toFixed(2));
