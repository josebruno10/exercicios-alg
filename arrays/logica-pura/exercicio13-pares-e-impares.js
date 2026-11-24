// enunciado para esse exercicio:
// 1) Leia 6 números inteiros e guarde em um vetor.
// 2) Conte quantos são pares e quantos são ímpares.
// 3) Exiba as duas quantidades e depois liste só os pares.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio
let pares = 0;                             // contador de pares
let impares = 0;                           // contador de ímpares

for (let i = 0; i < 6; i++) {              // lê 6 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

for (let i = 0; i < numeros.length; i++) { // percorre o vetor
  if (numeros[i] % 2 === 0) {              // % devolve o resto: resto 0 significa par
    pares = pares + 1;
  } else {                                 // qualquer outro resto é ímpar
    impares = impares + 1;
  }
}

console.log('Pares: ' + pares);            // quantidade de pares
console.log('Ímpares: ' + impares);        // quantidade de ímpares

console.log('Os pares são:');              // título da listagem
for (let i = 0; i < numeros.length; i++) { // nova passada, agora para listar
  if (numeros[i] % 2 === 0) {              // mesmo teste de antes
    console.log(numeros[i]);               // mostra só quem passou
  }
}
