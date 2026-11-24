// enunciado para esse exercicio:
// 1) Leia 5 notas e guarde em um vetor.
// 2) Descubra a maior e a menor nota em uma única passada.
// 3) Exiba a maior, a menor e a diferença entre elas.

const prompt = require('prompt-sync')();      // habilita o prompt()

let notas = [];                               // vetor vazio

for (let i = 0; i < 5; i++) {                 // lê 5 notas
  notas[i] = Number(prompt('Digite a ' + (i + 1) + 'ª nota: ')); // guarda no vetor
}

let maior = notas[0];                         // os dois começam valendo a primeira nota
let menor = notas[0];                         // assim os dois já têm um valor real para comparar

for (let i = 1; i < notas.length; i++) {      // começa em 1: a posição 0 já está guardada
  if (notas[i] > maior) {                     // achou uma nota maior?
    maior = notas[i];                         // ela vira a nova maior
  }
  if (notas[i] < menor) {                     // if separado, não else: os dois testes valem
    menor = notas[i];                         // ela vira a nova menor
  }
}

console.log('Maior nota: ' + maior);          // campeão de cima
console.log('Menor nota: ' + menor);          // campeão de baixo
console.log('Diferença: ' + (maior - menor)); // a distância entre as duas
