//Escreva um algoritmo que leia a idade de um atleta e o classifique nas categorias: Infantil (até 12 anos), Juvenil (13 a 17 anos) ou Adulto (18 anos ou mais).
const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite a idade do atleta: "));

if (idade <= 12) {
  console.log("Categoria: Infantil");
} else if (idade <= 17) {
  console.log("Categoria: Juvenil");
} else {
  console.log("Categoria: Adulto");
}
