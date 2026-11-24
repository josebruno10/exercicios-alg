// enunciado para esse exercicio:
// 1) Crie uma função chamada parOuImpar que receba um número por parâmetro.
// 2) A função deve retornar o texto 'Par' ou 'Ímpar'.
// 3) Leia um número, chame a função e exiba o resultado.

const prompt = require('prompt-sync')();   // habilita o prompt()

function parOuImpar(numero) {
  if (numero % 2 === 0) {                  // resto da divisão por 2 é 0? então é par
    return 'Par';                          // o return encerra a função aqui
  } else {
    return 'Ímpar';
  }
}

let numero = Number(prompt('Digite um número: '));

console.log(numero + ' é ' + parOuImpar(numero));
