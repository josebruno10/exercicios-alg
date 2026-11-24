// 42. Escreva um algoritmo que exiba todos os números ímpares compreendidos entre 1 e 100.
const prompt = require("prompt-sync")();

console.log("Números ímpares entre 1 e 100:");
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
