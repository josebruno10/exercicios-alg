// 14. Escreva um algoritmo que leia a quantidade de dias alugados e a quantidade de quilômetros percorridos por um veículo, calculando o valor total a ser pago considerando R$ 90,00 por dia e R$ 0,20 por km.
const prompt = require("prompt-sync")();

const dias = Number(prompt("Quantidade de dias alugados: "));
const km = Number(prompt("Quantidade de Km percorridos: "));

const total = dias * 90 + km * 0.2;

console.log("O valor total do aluguel é R$", total.toFixed(2));
