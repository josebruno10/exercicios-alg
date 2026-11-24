// 12. Escreva um algoritmo que realize o cadastro de 10 pessoas (nome, idade e sexo) e informe a pessoa mais velha, a mais nova, a média de idade e o total de homens, mulheres e maiores de idade.
const prompt = require("prompt-sync")();

let somaIdade = 0,
  qH = 0,
  qM = 0,
  qAdultos = 0,
  maiorIdade = -1,
  menorIdade = 999;
let nomeMaisVelho = "",
  nomeMaisNovo = "";

for (let i = 1; i <= 10; i++) {
  console.log("--- Cadastro", i, "---");
  let nome = prompt("Nome: ");
  let idade = Number(prompt("Idade: "));
  let sexo = prompt("Sexo (M/F): ").toUpperCase();

  somaIdade += idade;
  if (idade >= 18) {
    qAdultos++;
  }

  if (sexo === "M") {
    qH++;
  } else if (sexo === "F") {
    qM++;
  }

  if (i === 1) {
    maiorIdade = menorIdade = idade;
    nomeMaisVelho = nomeMaisNovo = nome;
  } else if (idade > maiorIdade) {
    maiorIdade = idade;
    nomeMaisVelho = nome;
  } else if (idade < menorIdade) {
    menorIdade = idade;
    nomeMaisNovo = nome;
  }
}

console.log("\\n--- DADOS DE CADASTRO ---");
console.log("Média de Idade:", (somaIdade / 10).toFixed(1));
console.log("Mais velho(a):", nomeMaisVelho, "(", maiorIdade, "anos)");
console.log("Mais novo(a):", nomeMaisNovo, "(", menorIdade, "anos)");
console.log("Homens:", qH, "| Mulheres:", qM);
console.log("Maiores de idade:", qAdultos);
