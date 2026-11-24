// 8. Escreva um algoritmo que leia números inteiros até que o usuário digite 0 e, ao final, calcule e informe a média aritmética de todos os valores digitados.
const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let num = -1;

while (num !== 0) {
  num = Number(prompt("Digite um número (0 para sair): "));
  if (num !== 0) {
    soma += num;
    contador++;
  }
}

if (contador > 0) {
  let media = soma / contador;
  console.log("Média aritmética:", media.toFixed(2));
} else console.log("Nenhum valor foi digitado.");
