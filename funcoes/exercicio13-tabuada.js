// enunciado para esse exercicio:
// 1) Crie uma função chamada multiplicar que receba dois números e retorne a multiplicação.
// 2) Leia um número e, usando um for de 1 a 10, exiba a tabuada desse número.
// 3) A conta de cada linha deve ser feita chamando a função multiplicar.

const prompt = require('prompt-sync')();   // habilita o prompt()

function multiplicar(a, b) {
  return a * b;
}

let numero = Number(prompt('Digite um número: '));

for (let i = 1; i <= 10; i++) {            // a mesma função é chamada 10 vezes
  console.log(numero + ' x ' + i + ' = ' + multiplicar(numero, i)); // cada vez com um i diferente
}
