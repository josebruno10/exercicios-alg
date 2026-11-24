// 3. Escreva um algoritmo que leia a cidade natal e a cidade atual de uma pessoa e, ao final, exiba as duas informações de forma organizada.
const prompt = require("prompt-sync")();

const cidadeNatal = prompt("Qual é a sua cidade natal? ");
const cidadeAtual = prompt("Qual é a sua cidade atual? ");

console.log("Você nasceu em", cidadeNatal, "e atualmente mora em", cidadeAtual, ".");
