// enunciado para esse exercicio:
// 1) Crie uma função chamada boasVindas que receba um nome por parâmetro.
// 2) A função deve retornar a frase: Olá, NOME! Seja bem-vindo(a)!
// 3) Leia o nome do usuário e exiba a frase retornada pela função.

const prompt = require('prompt-sync')();   // habilita o prompt()

function boasVindas(nome) {                // o parâmetro pode ser texto também
  return 'Olá, ' + nome + '! Seja bem-vindo(a)!'; // monta e devolve a frase
}

let nome = prompt('Digite seu nome: ');    // texto: não precisa de Number()

console.log(boasVindas(nome));             // dá para chamar a função direto dentro do console.log
