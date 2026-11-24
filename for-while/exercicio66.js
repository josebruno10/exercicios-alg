// 66. Escreva um algoritmo que leia o nome e a idade de 10 pessoas e informe o nome da pessoa mais velha.
const prompt = require("prompt-sync")();

let nomeMaisVelho = "";
let maiorIdade = -1;

for (let i = 1; i <= 10; i++) {
  console.log("--- Pessoa", i, "---");
  let nome = prompt("Nome: ");
  let idade = Number(prompt("Idade: "));

  if (idade > maiorIdade) {
    maiorIdade = idade;
    nomeMaisVelho = nome;
  }
}

console.log("A pessoa mais velha é", nomeMaisVelho, "com", maiorIdade, "anos.");
