// 80. Escreva um algoritmo que leia 10 números e apresente a soma, a média, o maior e o menor valor digitado.
const prompt = require("prompt-sync")();

let soma = 0;
let maior, menor;

for (let i = 1; i <= 10; i++) {
  let num = Number(prompt("Digite um número: "));
  soma += num;
  if (i === 1) {
    maior = menor = num;
  } else {
    if (num > maior) {
      maior = num;
    } else if (num < menor) {
      menor = num;
    }
  }
}

let media = soma / 10;
console.log("Soma:", soma);
console.log("Média:", media.toFixed(2));
console.log("Maior:", maior);
console.log("Menor:", menor);
