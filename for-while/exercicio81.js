// 81. Escreva um algoritmo que leia a idade de 10 pessoas e apresente a média das idades, a maior e a menor idade, e a quantidade de maiores de idade.
const prompt = require("prompt-sync")();

let somaIdades = 0;
let maiorIdade, menorIdade;
let totalMaiores = 0;

for (let i = 1; i <= 10; i++) {
  let idade = Number(prompt("Digite a idade: "));
  somaIdades += idade;
  if (idade >= 18) totalMaiores++;

  if (i === 1) {
    maiorIdade = menorIdade = idade;
  } else {
    if (idade > maiorIdade) {
      maiorIdade = idade;
    } else if (idade < menorIdade) {
      menorIdade = idade;
    }
  }
}

console.log("Média das idades:", (somaIdades / 10).toFixed(1));
console.log("Maior idade:", maiorIdade);
console.log("Menor idade:", menorIdade);
console.log("Total de maiores de idade:", totalMaiores);
