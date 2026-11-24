// 14. Escreva um algoritmo que leia nome, idade e salário de 20 pessoas e apresente um relatório completo contendo extremos de idade e salário, médias, contagem de maioridade e a soma total da folha de pagamento.
const prompt = require("prompt-sync")();

let somaSalarios = 0,
  somaIdades = 0,
  qAdultos = 0;
let maiorIdade, menorIdade, maiorSalario, menorSalario;

for (let i = 1; i <= 20; i++) {
  console.log("--- Dados da Pessoa", i, "---");
  let nome = prompt("Nome: ");
  let idade = Number(prompt("Idade: "));
  let salario = Number(prompt("Salário: "));

  somaIdades += idade;
  somaSalarios += salario;
  if (idade >= 18) {
    qAdultos++;
  }

  if (i === 1) {
    maiorIdade = menorIdade = idade;
    maiorSalario = menorSalario = salario;
  } else {
    if (idade > maiorIdade) {
      maiorIdade = idade;
    } else if (idade < menorIdade) {
      menorIdade = idade;
    }

    if (salario > maiorSalario) {
      maiorSalario = salario;
    } else if (salario < menorSalario) {
      menorSalario = salario;
    }
  }
}

console.log("\\n--- RELATÓRIO COMPLETO ---");
console.log("Folha de Pagamento Total: R$", somaSalarios.toFixed(2));
console.log("Média Salarial: R$", (somaSalarios / 20).toFixed(2));
console.log("Média de Idade:", (somaIdades / 20).toFixed(1), "anos");
console.log("Maior Idade:", maiorIdade, "| Menor Idade:", menorIdade);
console.log("Maior Salário: R$", maiorSalario.toFixed(2));
console.log("Menor Salário: R$", menorSalario.toFixed(2));
console.log("Total de Maiores de Idade:", qAdultos);
