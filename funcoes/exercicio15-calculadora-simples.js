// enunciado para esse exercicio (Etapa 5 - Desenvolvendo um pequeno programa):
// 27) Desenvolva um programa em JS que utilize pelo menos três funções diferentes.
//     O programa deverá simular uma calculadora simples, oferecendo as operações:
//     somar, subtrair, multiplicar e dividir dois números.
// Requisitos:
// - Cada operação matemática deverá ser implementada em uma função própria.
// - As funções deverão receber os valores necessários por meio de parâmetros.
// - As funções deverão retornar os resultados utilizando return.
// - O programa deverá permitir que o usuário escolha a operação desejada.
// - O programa deverá utilizar estrutura de decisão para identificar a operação escolhida.
// - O programa deverá verificar se o usuário está tentando realizar uma divisão por zero.
// Desafio adicional: crie uma quinta função para apresentar o resultado da operação escolhida.

const prompt = require('prompt-sync')();   // habilita o prompt()

function somar(a, b) {                     // 1 função para cada operação
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;                            // a checagem do zero é feita antes de chamar
}

function mostrarResultado(operacao, resultado) { // desafio adicional: 5ª função
  console.log('Resultado da ' + operacao + ': ' + resultado); // essa não precisa de return: só mostra
}

console.log('=== CALCULADORA ===');
console.log('1 - Somar');
console.log('2 - Subtrair');
console.log('3 - Multiplicar');
console.log('4 - Dividir');

let opcao = Number(prompt('Escolha a operação: '));
let n1 = Number(prompt('Digite o 1º número: '));
let n2 = Number(prompt('Digite o 2º número: '));

if (opcao === 1) {                         // estrutura de decisão: qual operação foi escolhida?
  mostrarResultado('soma', somar(n1, n2)); // o return de somar vira o 2º parâmetro de mostrarResultado
} else if (opcao === 2) {
  mostrarResultado('subtração', subtrair(n1, n2));
} else if (opcao === 3) {
  mostrarResultado('multiplicação', multiplicar(n1, n2));
} else if (opcao === 4) {
  if (n2 === 0) {                          // não existe divisão por zero
    console.log('Erro: não é possível dividir por zero!');
  } else {
    mostrarResultado('divisão', dividir(n1, n2));
  }
} else {                                   // digitou algo diferente de 1, 2, 3 ou 4
  console.log('Opção inválida!');
}
