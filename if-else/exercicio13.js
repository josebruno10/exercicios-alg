//Escreva um algoritmo que calcule o valor total da compra de maçãs, considerando R$ 0,30 por unidade para menos de 12 maçãs e R$ 0,25 para 12 unidades ou mais.
const prompt = require("prompt-sync")();

const quantidade = Number(prompt("Quantas maçãs deseja comprar? "));
let precoUnitario;

if (quantidade < 12) {
  precoUnitario = 0.3;
} else {
  precoUnitario = 0.25;
}

const total = quantidade * precoUnitario;
console.log("Total da compra: R$", total.toFixed(2));
