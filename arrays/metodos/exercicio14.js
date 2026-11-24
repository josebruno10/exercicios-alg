//enunciado para esse exercicio:
// 1) Crie um array com números positivos e negativos.
// 2) Crie um novo array contendo apenas os números positivos do array original.

let numeros = [10, -2, 5, -8, 20, -1];
let positivos = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    positivos.push(numeros[i]);
  }
}

console.log(positivos);
