// 2. Escreva um algoritmo que leia o nome de uma pessoa e exiba uma mensagem de boas-vindas contendo o nome informado.
const prompt = require("prompt-sync")();

const nome = prompt("Qual é o seu nome? ");

console.log("Olá", nome, ", seja bem-vindo(a)!");
