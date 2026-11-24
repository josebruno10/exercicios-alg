// enunciado para esse exercicio:
// 1) Peça um número ao usuário.
// 2) Preencha um vetor de 10 posições com a tabuada desse número.
// 3) Exiba no formato 7 x 3 = 21, uma linha por posição.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numero = Number(prompt('Digite um número: ')); // o único prompt do programa
let tabuada = [];                          // vetor vazio

for (let i = 0; i < 10; i++) {             // 10 posições: índices 0 a 9
  tabuada[i] = numero * (i + 1);           // o valor é calculado, não digitado
}

for (let i = 0; i < tabuada.length; i++) { // percorre o resultado
  console.log(numero + ' x ' + (i + 1) + ' = ' + tabuada[i]); // i + 1 é o multiplicador
}
