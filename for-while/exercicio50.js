// 50. Escreva um algoritmo que leia um valor inicial, um valor final e um incremento, exibindo a sequência numérica respeitando o intervalo informado.
const prompt = require("prompt-sync")();

const inicio = Number(prompt("Início: "));
const fim = Number(prompt("Fim: "));
const incremento = Number(prompt("Incremento: "));

console.log("Sequência:");
for (let i = inicio; i <= fim; i += incremento) {
  console.log(i);
}
