// 51. Escreva um algoritmo que leia 10 números e informe quantos deles são positivos.
const prompt = require("prompt-sync")();

let positivos = 0;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  if (num > 0) {
    positivos++;
  }
}

console.log("Quantidade de positivos:", positivos);
