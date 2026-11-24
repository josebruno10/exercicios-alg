// 5. Escreva um algoritmo que leia o nome e a idade de uma tartaruga e, ao final, exiba as informações cadastradas.
const prompt = require("prompt-sync")();

const nome = prompt("Nome da tartaruga: ");
const idade = prompt("Idade da tartaruga: ");

console.log("Tartaruga cadastrada:", nome, ", com", idade, "anos.");
