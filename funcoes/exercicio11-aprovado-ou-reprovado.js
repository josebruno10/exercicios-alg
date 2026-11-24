// enunciado para esse exercicio:
// 1) Crie uma função calcularMedia que receba duas notas e retorne a média.
// 2) Crie uma função verificarSituacao que receba a média e retorne:
//    'Aprovado' (média 7 ou mais), 'Recuperação' (média 5 até 6.9) ou 'Reprovado' (menor que 5).
// 3) Leia as duas notas, use as funções e exiba a média e a situação do aluno.

const prompt = require('prompt-sync')();   // habilita o prompt()

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarSituacao(media) {
  if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 5) {                 // se chegou aqui, já é menor que 7
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
}

let nota1 = Number(prompt('Digite a 1ª nota: '));
let nota2 = Number(prompt('Digite a 2ª nota: '));

let media = calcularMedia(nota1, nota2);   // 1ª função: faz a conta
let situacao = verificarSituacao(media);   // 2ª função: recebe o resultado da 1ª

console.log('Média: ' + media);
console.log('Situação: ' + situacao);
