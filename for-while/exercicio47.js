// 47. Escreva um algoritmo que leia uma frase e um número inteiro, exibindo a frase na tela a quantidade de vezes informada.
const prompt = require("prompt-sync")();

const frase = prompt("Digite uma frase: ");
const n = Number(prompt("Quantas vezes repetir? "));

for (let i = 1; i <= n; i++) {
  console.log(frase);
}
