// enunciado para esse exercicio:
// 1) Crie uma função chamada calcularIdade que receba o ano de nascimento e o ano atual
//    e retorne a idade.
// 2) Crie uma função chamada ehMaiorDeIdade que receba a idade e retorne true (18 ou mais)
//    ou false.
// 3) Leia o ano de nascimento e o ano atual, use as duas funções e exiba se a pessoa é
//    maior ou menor de idade.

const prompt = require('prompt-sync')();   // habilita o prompt()

function calcularIdade(anoNascimento, anoAtual) {
  return anoAtual - anoNascimento;         // a idade é a diferença entre os anos
}

function ehMaiorDeIdade(idade) {
  return idade >= 18;                      // a comparação já vale true ou false
}

let anoNascimento = Number(prompt('Digite o ano em que você nasceu: '));
let anoAtual = Number(prompt('Digite o ano atual: '));

let idade = calcularIdade(anoNascimento, anoAtual); // o resultado de uma função...

console.log('Idade: ' + idade);

if (ehMaiorDeIdade(idade)) {               // ...vira o valor passado para a outra
  console.log('Você é maior de idade.');
} else {
  console.log('Você é menor de idade.');
}
