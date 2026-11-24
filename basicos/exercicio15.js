// 15. Escreva um algoritmo que leia um número inteiro e calcule a soma entre o número informado, seu primeiro sucessor e seu segundo sucessor.
const prompt = require("prompt-sync")();

const n = Number(prompt("Digite um número: "));
const s1 = n + 1;
const s2 = n + 2;
const soma = n + s1 + s2;

console.log("A soma de", n, "+", s1, "+", s2, "é igual a", soma, ".");
