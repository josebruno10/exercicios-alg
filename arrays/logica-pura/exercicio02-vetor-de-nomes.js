// enunciado para esse exercicio:
// 1) Leia 10 nomes de pessoas e armazene-os em um vetor.
// 2) Em seguida, escreva todos os nomes na tela.

const prompt = require('prompt-sync')(); // habilita o prompt()

let nomes = [];                          // vetor vazio

for (let i = 0; i < 10; i++) {           // 10 voltas: posições 0 a 9
  nomes[i] = prompt('Digite o ' + (i + 1) + 'º nome: '); // nome é texto: sem Number
}

for (let i = 0; i < nomes.length; i++) { // percorre o vetor inteiro
  console.log(nomes[i]);                 // escreve um nome por linha
}
