// enunciado para esse exercicio:
// 1) Crie uma função chamada verificarSinal que receba um número por parâmetro.
// 2) A função deve retornar 'Positivo', 'Negativo' ou 'Zero'.
// 3) Leia um número, chame a função e exiba o resultado.

const prompt = require('prompt-sync')();   // habilita o prompt()

function verificarSinal(numero) {
  if (numero > 0) {
    return 'Positivo';
  } else if (numero < 0) {
    return 'Negativo';
  } else {                                 // não é maior nem menor que 0: só pode ser 0
    return 'Zero';
  }
}

let numero = Number(prompt('Digite um número: '));

console.log('O número é: ' + verificarSinal(numero));
