// enunciado para esse exercicio:
// 1) Leia 8 números e guarde em um vetor.
// 2) Copie os positivos para um vetor e os negativos para outro.
// 3) Exiba os dois vetores novos, cada um com o seu total.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor de entrada
let positivos = [];                        // vetor de saída 1
let negativos = [];                        // vetor de saída 2
let qtdPositivos = 0;                      // contador e vaga livre do vetor positivos
let qtdNegativos = 0;                      // contador e vaga livre do vetor negativos

for (let i = 0; i < 8; i++) {              // lê os 8 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

for (let i = 0; i < numeros.length; i++) { // percorre a entrada
  if (numeros[i] > 0) {                    // é positivo?
    positivos[qtdPositivos] = numeros[i];  // grava na vaga livre desse vetor
    qtdPositivos = qtdPositivos + 1;       // a vaga anda só neste vetor
  } else if (numeros[i] < 0) {             // é negativo?
    negativos[qtdNegativos] = numeros[i];  // grava na vaga do outro vetor
    qtdNegativos = qtdNegativos + 1;       // cada vetor tem o seu ritmo
  }
}

console.log('Positivos (' + qtdPositivos + '):'); // título com o total
for (let i = 0; i < positivos.length; i++) {
  console.log(positivos[i]);
}

console.log('Negativos (' + qtdNegativos + '):'); // título com o total
for (let i = 0; i < negativos.length; i++) {
  console.log(negativos[i]);
}
