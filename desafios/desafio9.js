// 9. Escreva um algoritmo que leia 15 números inteiros e informe o maior valor, o menor valor, a média dos números e a quantidade de números pares e ímpares.
const prompt = require("prompt-sync")();

let soma = 0,
  qPares = 0,
  qImpares = 0,
  maior,
  menor;

for (let i = 1; i <= 15; i++) {
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

  if (num % 2 === 0) {
    qPares++;
  } else {
    qImpares++;
  }
}

console.log("--- Resultados ---");
console.log("Maior:", maior, "| Menor:", menor);
console.log("Média:", (soma / 15).toFixed(2));
console.log("Pares:", qPares, "| Ímpares:", qImpares);
