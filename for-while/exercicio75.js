// 75. Escreva um algoritmo que funcione como um contador de entradas, parando apenas quando o usuário digitar 0.
const prompt = require("prompt-sync")();

let entradas = 0;
let dado = "";

while (dado !== "0") {
  dado = prompt("Digite algo (0 para parar): ");
  if (dado !== "0") {
    entradas++;
  }
}

console.log("Total de entradas recebidas:", entradas);
