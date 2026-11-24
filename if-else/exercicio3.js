//Escreva um algoritmo que leia o ano de nascimento de uma pessoa, calcule a idade com base no ano de 2026 e informe se ela possui idade suficiente para votar.
const prompt = require("prompt-sync")();

const anoNascimento = Number(prompt("Digite o ano de seu nascimento: "));
const anoAtual = 2026;
const idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Com", idade, "anos, você já tem idade para votar.");
  console.log("Com ", idade, " anos, você já tem idade para votar.");
} else {
  console.log("Com", idade, "anos, você ainda não possui idade para votar.");
  console.log("Com ", idade, " anos, você ainda não possui idade para votar.");
}
