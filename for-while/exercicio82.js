// 82. Escreva um algoritmo que leia o nome e duas notas de 10 alunos, exibindo a maior e a menor média da turma e a quantidade de alunos aprovados (media >= 7).
const prompt = require("prompt-sync")();

let maiorMedia, menorMedia;
let aprovados = 0;

for (let i = 1; i <= 10; i++) {
  console.log("--- Aluno", i, "---");
  let nome = prompt("Nome: ");
  let n1 = Number(prompt("Nota 1: "));
  let n2 = Number(prompt("Nota 2: "));

  let media = (n1 + n2) / 2;
  if (media >= 7) {
    aprovados++;
  }

  if (i === 1) {
    maiorMedia = menorMedia = media;
  } else if (media > maiorMedia) {
    maiorMedia = media;
  } else if (media < menorMedia) {
    menorMedia = media;
  }

  console.log("Média do aluno", nome, ":", media.toFixed(1));
}

console.log("----------------------------");
console.log("Maior média da turma:", maiorMedia.toFixed(1));
console.log("Menor média da turma:", menorMedia.toFixed(1));
console.log("Quantidade de alunos aprovados:", aprovados);
