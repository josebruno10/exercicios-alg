//Escreva um algoritmo que leia a idade de duas pessoas e informe quem é mais velho ou se ambos possuem a mesma idade.
const prompt = require("prompt-sync")();

const idade1 = Number(prompt("Idade da primeira pessoa: "));
const idade2 = Number(prompt("Idade da segunda pessoa: "));

if (idade1 > idade2) {
  console.log("A primeira pessoa é mais velha.");
} else if (idade2 > idade1) {
  console.log("A segunda pessoa é mais velha.");
} else {
  console.log("Ambas possuem a mesma idade.");
}
