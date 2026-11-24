//Escreva um algoritmo que leia a distância de uma viagem em quilômetros e calcule o valor da passagem: R$ 0,50 por km para viagens até 200 km e R$ 0,45 por km para viagens mais longas.
const prompt = require("prompt-sync")();

const distancia = Number(prompt("Distância da viagem (km): "));
let precoKm;

if (distancia <= 200) {
  precoKm = 0.5;
} else {
  precoKm = 0.45;
}

const precoPassagem = distancia * precoKm;
console.log("O valor da passagem é: R$", precoPassagem.toFixed(2));
