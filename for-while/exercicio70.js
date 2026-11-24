// 70. Escreva um algoritmo que leia o nome e o preço de 10 produtos e informe qual é o produto mais caro.
const prompt = require("prompt-sync")();

let produtoMaisCaro = "";
let maiorPreco = -1;

for (let i = 1; i <= 10; i++) {
  console.log("--- Produto", i, "---");
  let nome = prompt("Produto: ");
  let preco = Number(prompt("Preço: "));

  if (preco > maiorPreco) {
    maiorPreco = preco;
    produtoMaisCaro = nome;
  }
}

console.log("O produto mais caro é:", produtoMaisCaro);
