// 10. Escreva um algoritmo que leia 20 números inteiros e apresente um relatório contendo: o maior e o menor valor, a soma e a média de todos os números, além da contagem de positivos, negativos, pares e ímpares.
const prompt = require("prompt-sync")();

let soma = 0,
  qPos = 0,
  qNeg = 0,
  qPares = 0,
  qImpares = 0,
  maior,
  menor;

for (let i = 1; i <= 20; i++) {
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

  if (num > 0) {
    qPos++;
  } else if (num < 0) {
    qNeg++;
  }

  if (num % 2 === 0) {
    qPares++;
  } else {
    qImpares++;
  }
}

console.log("\\n--- RELATÓRIO COMPLETO ---");
console.log("Soma:", soma, "| Média:", (soma / 20).toFixed(2));
console.log("Maior:", maior, "| Menor:", menor);
console.log("Positivos:", qPos, "| Negativos:", qNeg);
console.log("Pares:", qPares, "| Ímpares:", qImpares);
