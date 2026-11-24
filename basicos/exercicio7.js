// 7. Escreva um algoritmo que leia um número inteiro e exiba seu antecessor, o próprio número e seu sucessor.
const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um número: "));

console.log("Sequência:", numero - 1, ",", numero, ",", numero + 1);
