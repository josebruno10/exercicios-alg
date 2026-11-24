// enunciado para esse exercicio:
// 1) Crie uma função calcularIMC que receba o peso (kg) e a altura (m) e retorne o IMC
//    (peso / (altura * altura)).
// 2) Crie uma função classificarIMC que receba o IMC e retorne a classificação:
//    menor que 18.5: 'Abaixo do peso'
//    de 18.5 até 24.9: 'Peso normal'
//    de 25 até 29.9: 'Sobrepeso'
//    30 ou mais: 'Obesidade'
// 3) Leia o peso e a altura, use as duas funções e exiba o IMC e a classificação.

const prompt = require('prompt-sync')();   // habilita o prompt()

function calcularIMC(peso, altura) {
  return peso / (altura * altura);         // parênteses: primeiro altura ao quadrado
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc < 25) {                   // já sabemos que é 18.5 ou mais
    return 'Peso normal';
  } else if (imc < 30) {                   // já sabemos que é 25 ou mais
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
}

let peso = Number(prompt('Digite seu peso (kg): '));
let altura = Number(prompt('Digite sua altura (m), ex: 1.75: '));

let imc = calcularIMC(peso, altura);

console.log('IMC: ' + imc.toFixed(1));
console.log('Classificação: ' + classificarIMC(imc));
