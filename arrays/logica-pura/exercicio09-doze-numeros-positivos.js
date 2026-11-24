// enunciado para esse exercicio:
// 1) Leia 12 números inteiros, convertendo eventuais negativos para positivos.
// 2) Armazene os números em um vetor.
// 3) Ao final, exiba todos os elementos utilizando o laço for.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio

for (let i = 0; i < 12; i++) {             // 12 voltas: posições 0 a 11
  let num = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda temporariamente

  if (num < 0) {                           // é negativo?
    num = num * -1;                        // multiplicar por -1 vira o sinal
  }

  numeros[i] = num;                        // só depois de consertado vai para o vetor
}

for (let i = 0; i < numeros.length; i++) { // exibe todos com o laço for
  console.log(numeros[i]);
}
