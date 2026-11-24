// 4. Escreva um algoritmo que leia o endereço de e-mail e o número de telefone de uma pessoa e, ao final, exiba os dados informados.
const prompt = require("prompt-sync")();

const email = prompt("Digite seu e-mail: ");
const telefone = prompt("Digite seu telefone: ");

console.log("Dados cadastrados - E-mail:", email, "| Telefone:", telefone);
