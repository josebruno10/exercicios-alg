// 71. Escreva um algoritmo que leia o nome e o preço de 10 produtos e informe qual é o produto mais barato.
const prompt = require("prompt-sync")();

let produtoMaisBarato = "";
let menorPreco = 9999999;

for (let i = 1; i <= 10; i++) {
  console.log("--- Produto", i, "---");
  let nome = prompt("Produto: ");
  let preco = Number(prompt("Preço: "));

  if (preco < menorPreco) {
    menorPreco = preco;
    produtoMaisBarato = nome;
  }
}

console.log("O produto mais barato é:", produtoMaisBarato);
