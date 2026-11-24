//Escreva um algoritmo que leia duas notas de um aluno, calcule a média e informe a situação final: "APROVADO" (média ≥ 7,0), "RECUPERAÇÃO" (entre 5,0 e 6,9) ou "REPROVADO" (baixo de 5,0).
const prompt = require("prompt-sync")();

const n1 = Number(prompt("Nota 1: "));
const n2 = Number(prompt("Nota 2: "));
const media = (n1 + n2) / 2;

if (media >= 7) {
  console.log("Média:", media.toFixed(1), "- APROVADO");
} else if (media >= 5) {
  console.log("Média:", media.toFixed(1), "- RECUPERAÇÃO");
} else {
  console.log("Média:", media.toFixed(1), "- REPROVADO");
}
