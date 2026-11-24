// 6. Escreva um algoritmo que leia o nome e a nota de 10 alunos e informe o nome do aluno que obteve a maior nota.
const prompt = require("prompt-sync")();

let melhorAluno = "";
let maiorNota = -1;

for (let i = 1; i <= 10; i++) {
  console.log("--- Aluno", i, "---");
  let nome = prompt("Nome: ");
  let nota = Number(prompt("Nota: "));

  if (nota > maiorNota) {
    maiorNota = nota;
    melhorAluno = nome;
  }
}

console.log("O aluno com a maior nota foi", melhorAluno, "(Nota:", maiorNota.toFixed(1), ")");
