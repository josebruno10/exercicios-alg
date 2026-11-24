// 7. Escreva um algoritmo que leia o nome e a nota de 10 alunos e informe o nome do aluno que obteve a menor nota.
const prompt = require("prompt-sync")();

let piorAluno = "";
let menorNota = 11;

for (let i = 1; i <= 10; i++) {
  console.log("--- Aluno", i, "---");
  let nome = prompt("Nome: ");
  let nota = Number(prompt("Nota: "));

  if (nota < menorNota) {
    menorNota = nota;
    piorAluno = nome;
  }
}

console.log("O aluno com a menor nota foi", piorAluno, "(Nota:", menorNota.toFixed(1), ")");
