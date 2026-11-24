// enunciado para esse exercicio:
// 1) Crie uma função chamada dobro que receba um número por parâmetro.
// 2) A função deve retornar o dobro desse número usando return.
// 3) Peça um número ao usuário, chame a função e exiba o resultado.

const prompt = require('prompt-sync')();   // habilita o prompt()

function dobro(numero) {                   // numero é o parâmetro: o valor que a função recebe
  return numero * 2;                       // return devolve o resultado para quem chamou
}

let valor = Number(prompt('Digite um número: ')); // lê o número
let resultado = dobro(valor);              // chama a função passando valor; o return cai em resultado

console.log('O dobro de ' + valor + ' é ' + resultado);
