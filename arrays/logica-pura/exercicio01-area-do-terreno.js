// enunciado para esse exercicio:
// 1) Crie um vetor do tipo número com 3 posições.
// 2) Leia a base (armazene no índice 0) e a altura (armazene no índice 1).
// 3) Calcule a área (base * altura) e guarde no índice 2.
// 4) Exiba as 3 posições.

const prompt = require('prompt-sync')(); // habilita o prompt()

let terreno = [];                        // vetor vazio que vai ter 3 posições

terreno[0] = Number(prompt('Digite a base do terreno: ')); // índice 0 guarda a base
terreno[1] = Number(prompt('Digite a altura do terreno: ')); // índice 1 guarda a altura
terreno[2] = terreno[0] * terreno[1];    // índice 2 guarda a área: base * altura

console.log('Base: ' + terreno[0]);      // exibe as 3 posições
console.log('Altura: ' + terreno[1]);
console.log('Área: ' + terreno[2]);
