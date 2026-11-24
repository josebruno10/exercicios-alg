// enunciado para esse exercicio:
// 1) Leia 4 números inteiros.
// 2) Se o número for negativo, converta para positivo antes de guardar no vetor.
// 3) Exiba todas as posições com seus valores.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio

for (let i = 0; i < 4; i++) {              // 4 números
  let num = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda temporariamente

  if (num < 0) {                           // pergunta se é negativo
    num = num * -1;                        // multiplicar por -1 vira o sinal
  }

  numeros[i] = num;                        // só depois de consertado vai para o vetor
}

for (let i = 0; i < numeros.length; i++) { // percorre o vetor
  console.log('Posição ' + i + ': ' + numeros[i]); // mostra índice e valor
}
