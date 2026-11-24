// 13. Escreva um algoritmo de controle de funcionários que leia nome, salário e sexo até que o usuário decida encerrar, exibindo estatísticas salariais gerais e por gênero ao final.
const prompt = require("prompt-sync")();

let sGeral = 0,
  sH = 0,
  sM = 0,
  qGeral = 0,
  qH = 0,
  qM = 0,
  continuar = "S";

while (continuar === "S") {
  let nome = prompt("Nome: ");
  let salario = Number(prompt("Salário: "));
  let sexo = prompt("Sexo (M/F): ").toUpperCase();

  sGeral += salario;
  qGeral++;

  if (sexo === "M") {
    sH += salario;
    qH++;
  } else if (sexo === "F") {
    sM += salario;
    qM++;
  }

  continuar = prompt("Deseja continuar? (S/N): ").toUpperCase();
}

console.log("\\n--- ESTATÍSTICAS SALARIAIS ---");
console.log("Média Geral: R$", (sGeral / qGeral).toFixed(2));
if (qH > 0) {
  console.log("Média Masculina: R$", (sH / qH).toFixed(2));
}
if (qM > 0) {
  console.log("Média Feminina: R$", (sM / qM).toFixed(2));
}
console.log("Total de funcionários:", qGeral);
