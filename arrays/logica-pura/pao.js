const prompt = require('prompt-sync')();

let soma = 0;
let contPositiva = 0;
let contNeg = 0;
let validas = 0;

while (true) {
  let entrada = Number(prompt('Digite sua avaliação: '));
  if (entrada === -1) {
    break;
  }

  if (entrada <= 0 || entrada > 5) {
    continue;
  }

  if (entrada > 3) {
    contPositiva++;
  }

  if (entrada < 3) {
    contNeg++;
  }

  soma = soma + validas;
  
}