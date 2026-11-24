//Escreva um algoritmo que leia o nome, o salário e o tempo de empresa de um funcionário, aplicando reajustes de 3% (até 3 anos), 12,5% (4 a 10 anos) ou 20% (acima de 10 anos).
const prompt = require("prompt-sync")();

const nome = prompt("Nome do funcionário: ");
const salario = Number(prompt("Salário atual: R$ "));
const anosEmpresa = Number(prompt("Anos de empresa: "));
let reajuste;

if (anosEmpresa <= 3) {
  reajuste = 0.03;
} else if (anosEmpresa <= 10) {
  reajuste = 0.125;
} else {
  reajuste = 0.2;
}

const novoSalario = salario * (1 + reajuste);
console.log("Funcionário:", nome);
console.log("Novo salário com reajuste: R$", novoSalario.toFixed(2));
