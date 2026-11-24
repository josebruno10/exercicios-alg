// enunciado para esse exercicio:
// 1) Crie uma função chamada calcularMedia que receba três notas por parâmetro.
// 2) A função deve retornar a média das três notas.
// 3) Leia as três notas, chame a função e exiba a média.

const prompt = require('prompt-sync')();   // habilita o prompt()

function calcularMedia(nota1, nota2, nota3) { // três parâmetros
  return (nota1 + nota2 + nota3) / 3;      // parênteses: primeiro soma, depois divide
}

let n1 = Number(prompt('Digite a 1ª nota: '));
let n2 = Number(prompt('Digite a 2ª nota: '));
let n3 = Number(prompt('Digite a 3ª nota: '));

let media = calcularMedia(n1, n2, n3);     // a função faz a conta e devolve

console.log('Média: ' + media.toFixed(1)); // toFixed(1) mostra com 1 casa decimal
