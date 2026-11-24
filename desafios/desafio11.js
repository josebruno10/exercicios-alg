// 11. Escreva um algoritmo que processe dados escolares de 10 alunos, informando quem obteve a maior e a menor média, além do total de aprovados, reprovados e alunos em recuperação.
const prompt = require("prompt-sync")();

let maiorMedia = -1,
  menorMedia = 11,
  aprovados = 0,
  reprovados = 0,
  recuperacao = 0;
let nomeMaior = "",
  nomeMenor = "";

for (let i = 1; i <= 10; i++) {
  console.log("--- Aluno", i, "---");
  let nome = prompt("Nome: ");
  let m = Number(prompt("Média: "));

  if (m > maiorMedia) {
    maiorMedia = m;
    nomeMaior = nome;
  }
  if (m < menorMedia) {
    menorMedia = m;
    nomeMenor = nome;
  }

  if (m >= 7) aprovados++;
  else if (m >= 5) recuperacao++;
  else reprovados++;
}

console.log("\\n--- ESTATÍSTICAS ESCOLARES ---");
console.log("Maior média:", nomeMaior, "(", maiorMedia.toFixed(1), ")");
console.log("Menor média:", nomeMenor, "(", menorMedia.toFixed(1), ")");
console.log("Aprovados:", aprovados);
console.log("Recuperação:", recuperacao);
console.log("Reprovados:", reprovados);
