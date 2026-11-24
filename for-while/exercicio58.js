// 58. Escreva um algoritmo que leia 10 números e exiba o valor total da soma entre eles.
const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  soma += num;
}

console.log("Soma total:", soma);
