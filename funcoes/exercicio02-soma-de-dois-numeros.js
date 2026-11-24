// enunciado para esse exercicio:
// 1) Crie uma função chamada somar que receba dois números por parâmetro.
// 2) A função deve retornar a soma dos dois.
// 3) Leia dois números, chame a função e exiba o resultado.

const prompt = require('prompt-sync')();   // habilita o prompt()

function somar(a, b) {                     // dois parâmetros, separados por vírgula
  return a + b;                            // devolve a soma
}

let n1 = Number(prompt('Digite o 1º número: '));
let n2 = Number(prompt('Digite o 2º número: '));

let soma = somar(n1, n2);                  // n1 vai para a, n2 vai para b (a ordem importa)

console.log('Soma: ' + soma);
