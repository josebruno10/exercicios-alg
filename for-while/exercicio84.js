// 84. Escreva um algoritmo que leia 20 números e informe a quantidade e a soma dos valores pares e ímpares separadamente.
const prompt = require("prompt-sync")();

let qPares = 0,
  sPares = 0;
let qImpares = 0,
  sImpares = 0;

for (let i = 1; i <= 20; i++) {
  let num = Number(prompt("Digite um número: "));

  if (num % 2 === 0) {
    qPares++;
    sPares += num;
  } else {
    qImpares++;
    sImpares += num;
  }
}

console.log("Pares: Quantidade =", qPares, ", Soma =", sPares);
console.log("Ímpares: Quantidade =", qImpares, ", Soma =", sImpares);
