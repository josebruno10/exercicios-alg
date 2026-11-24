// enunciado para esse exercicio (questão de prova):
// 1) Leia a idade de várias pessoas, uma de cada vez.
// 2) O programa deve parar quando for digitada uma idade menor que 18.
// 3) Durante a leitura, conte quantas pessoas são da terceira idade (60 anos ou mais) e some
//    as idades das pessoas maiores de idade (18 anos ou mais).
// 4) Ao final, exiba a quantidade de pessoas da terceira idade e a soma das idades dos maiores
//    de idade.













const prompt = require('prompt-sync')();      // habilita o prompt()

let terceiraIdade = 0;                        // conta quem tem 60 anos ou mais
let somaIdades = 0;                           // acumula as idades de quem tem 18 ou mais
let idade = Number(prompt('Digite a idade: ')); // 1ª pessoa, antes do while

while (idade >= 18) {                         // só entra se for maior de idade
  somaIdades = somaIdades + idade;            // aqui dentro todos têm 18 ou mais: soma direto

  if (idade >= 60) {                          // entre os maiores, quem tem 60 ou mais
    terceiraIdade = terceiraIdade + 1;        // mais uma pessoa da terceira idade
  }

  idade = Number(prompt('Digite a idade: ')); // próxima pessoa, no FIM
}                                             // uma idade menor que 18 faz o while parar

console.log('Quantidade de pessoas da terceira idade: ' + terceiraIdade); // primeiro resultado
console.log('Soma das idades dos maiores de idade: ' + somaIdades); // segundo resultado
