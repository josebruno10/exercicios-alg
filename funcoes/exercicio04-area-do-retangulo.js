// enunciado para esse exercicio:
// 1) Crie uma função chamada calcularArea que receba a base e a altura de um retângulo.
// 2) A função deve retornar a área (base * altura).
// 3) Leia a base e a altura, chame a função e exiba a área.

const prompt = require('prompt-sync')();   // habilita o prompt()

function calcularArea(base, altura) {      // recebe as duas medidas
  return base * altura;                    // devolve a área
}

let base = Number(prompt('Digite a base: '));
let altura = Number(prompt('Digite a altura: '));

let area = calcularArea(base, altura);     // guarda o valor retornado

console.log('Área do retângulo: ' + area);
