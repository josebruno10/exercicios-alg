// 46. Escreva um algoritmo que leia um nome e o exiba 10 vezes na tela.
const prompt = require("prompt-sync")();

const nome = prompt("Digite um nome: ");

for (let i = 1; i <= 10; i++) {
  console.log(i, ".", nome);
}
