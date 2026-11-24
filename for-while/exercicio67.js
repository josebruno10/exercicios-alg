// 67. Escreva um algoritmo que leia o nome e a idade de 10 pessoas e informe o nome da pessoa mais nova.
const prompt = require("prompt-sync")();

let nomeMaisNovo = "";
let menorIdade = 999;

for (let i = 1; i <= 10; i++) {
  console.log("--- Pessoa", i, "---");
  let nome = prompt("Nome: ");
  let idade = Number(prompt("Idade: "));

  if (idade < menorIdade) {
    menorIdade = idade;
    nomeMaisNovo = nome;
  }
}

console.log("A pessoa mais nova é", nomeMaisNovo, "com", menorIdade, "anos.");
