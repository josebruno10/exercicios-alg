// enunciado para esse exercicio:
// 1) Leia 3 números com for e guarde em um vetor.
// 2) Some os três valores.
// 3) Exiba os três números e a soma.

const prompt = require('prompt-sync')(); // habilita o prompt()

let numeros = [];                        // vetor vazio

for (let i = 0; i < 3; i++) {            // 3 voltas: posições 0, 1 e 2
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // Number: para o + somar
}

let soma = numeros[0] + numeros[1] + numeros[2]; // são só três: soma cada posição direto

console.log('Números: ' + numeros[0] + ', ' + numeros[1] + ', ' + numeros[2]); // mostra os três
console.log('Soma: ' + soma);            // mostra o resultado
