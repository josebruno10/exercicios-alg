// enunciado para esse exercicio:
// 1) Leia 6 números e guarde em um vetor.
// 2) Conte quantos são maiores que 10.
// 3) Exiba a quantidade.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio
let contador = 0;                          // contador zerado, fora do laço

for (let i = 0; i < 6; i++) {              // lê 6 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

for (let i = 0; i < numeros.length; i++) { // percorre o vetor
  if (numeros[i] > 10) {                   // testa um número por vez
    contador = contador + 1;               // aqui soma 1, não o valor
  }
}

console.log('Quantidade maior que 10: ' + contador); // mostra quantos passaram no teste
