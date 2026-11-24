// 12. Escreva um algoritmo que leia o preço de um produto e exiba o preço original, o valor do desconto de 5% e o preço final com desconto.
const prompt = require("prompt-sync")();

const precoOriginal = Number(prompt("Qual o preço do produto? R$ "));
const desconto = precoOriginal * 0.05;
const precoFinal = precoOriginal - desconto;

console.log("Preço Original: R$", precoOriginal.toFixed(2));
console.log("Valor do desconto (5%): R$", desconto.toFixed(2));
console.log("Preço Final: R$", precoFinal.toFixed(2));
