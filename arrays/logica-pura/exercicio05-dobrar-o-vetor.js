// enunciado para esse exercicio:
// 1) Leia 5 números e guarde em um vetor.
// 2) Percorra o vetor trocando cada valor pelo seu dobro.
// 3) Exiba o vetor já modificado.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio

for (let i = 0; i < 5; i++) {              // lê 5 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

for (let i = 0; i < numeros.length; i++) { // segunda passada: agora modifica
  numeros[i] = numeros[i] * 2;             // o resultado volta para a mesma posição
}

for (let i = 0; i < numeros.length; i++) { // terceira passada: só exibe
  console.log(numeros[i]);                 // mostra o valor já dobrado
}
