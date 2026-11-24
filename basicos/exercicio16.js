// 16. Escreva um algoritmo que leia o nome de uma pessoa e seu ano de nascimento, calcule e exiba a idade atual com base no ano de 2026
const prompt = require("prompt-sync")();

const nome = prompt("Nome da pessoa: ");
const anoNascimento = Number(prompt("Ano de nascimento: "));
const anoReferencia = 2026;
const idade = anoReferencia - anoNascimento;

console.log(nome, "terá", idade, "anos em 2026.");
