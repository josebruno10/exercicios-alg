//Escreva um algoritmo que leia a velocidade de um veículo e, caso ultrapasse 80 km/h, calcule e exiba uma multa de R$ 5,00 por cada quilômetro excedente.
const prompt = require("prompt-sync")();

const velocidade = Number(prompt("Velocidade do veículo (km/h): "));

if (velocidade > 80) {
  const excesso = velocidade - 80;
  const multa = excesso * 5;
  console.log("Você foi multado! Velocidade acima do permitido. Valor da multa: R$", multa.toFixed(2));
} else {
  console.log("Velocidade dentro do limite permitido.");
}
