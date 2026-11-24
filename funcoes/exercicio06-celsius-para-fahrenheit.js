// enunciado para esse exercicio:
// 1) Crie uma função chamada converterParaFahrenheit que receba uma temperatura em Celsius.
// 2) A função deve retornar a temperatura em Fahrenheit (F = C * 1.8 + 32).
// 3) Leia a temperatura em Celsius e exiba o valor convertido.

const prompt = require('prompt-sync')();   // habilita o prompt()

function converterParaFahrenheit(celsius) {
  return celsius * 1.8 + 32;               // fórmula da conversão
}

let celsius = Number(prompt('Digite a temperatura em °C: '));
let fahrenheit = converterParaFahrenheit(celsius);

console.log(celsius + ' °C = ' + fahrenheit + ' °F');
