// enunciado para esse exercicio:
// 1) Crie uma função chamada maiorNumero que receba dois números por parâmetro.
// 2) A função deve retornar o maior dos dois. Se forem iguais, retorne qualquer um deles.
// 3) Leia dois números, chame a função e exiba o maior.

const prompt = require('prompt-sync')();   // habilita o prompt()

function maiorNumero(a, b) {
  if (a > b) {                             // a ganhou
    return a;
  } else {                                 // b ganhou ou empatou: tanto faz devolver b
    return b;
  }
}

let n1 = Number(prompt('Digite o 1º número: '));
let n2 = Number(prompt('Digite o 2º número: '));

console.log('O maior número é ' + maiorNumero(n1, n2));
