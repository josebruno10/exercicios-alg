// 72. Escreva um algoritmo que leia números indeterminadamente até que o usuário digite 0, informando ao final a quantidade total de números digitados.
const prompt = require("prompt-sync")();

let total = 0;
let num;

do {
  num = Number(prompt("Digite um número (0 para sair): "));
  if (num !== 0) total++;
} while (num !== 0);

console.log("Foram digitados", total, "números.");
