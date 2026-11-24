// enunciado para esse exercicio:
// 1) Leia o nome e o preço de 5 produtos, guardando os nomes em um vetor e os preços em outro
//    — mesma posição, mesmo produto.
// 2) Exiba a lista com nome e preço de cada produto.
// 3) Exiba o total da compra e o nome do produto mais caro.

const prompt = require('prompt-sync')();     // habilita o prompt()

let produtos = [];                           // vetor dos nomes
let precos = [];                             // vetor dos preços, na mesma ordem
let total = 0;                               // acumulador do valor da compra

for (let i = 0; i < 5; i++) {                // lê os 5 produtos
  produtos[i] = prompt('Digite o nome do ' + (i + 1) + 'º produto: '); // nome na posição i
  precos[i] = Number(prompt('Digite o preço de ' + produtos[i] + ': ')); // preço na MESMA posição
  total = total + precos[i];                 // já vai somando
}

console.log('Lista de compras:');            // título
for (let i = 0; i < produtos.length; i++) {  // o mesmo i serve para os dois vetores
  console.log(produtos[i] + ' - R$ ' + precos[i]);
}

let posicaoMaior = 0;                        // guarda a POSIÇÃO do campeão, não o preço

for (let i = 1; i < precos.length; i++) {    // procura o preço mais alto
  if (precos[i] > precos[posicaoMaior]) {    // compara com o preço do campeão atual
    posicaoMaior = i;                        // troca a posição guardada
  }
}

console.log('Total da compra: R$ ' + total); // soma de tudo
console.log('Produto mais caro: ' + produtos[posicaoMaior]); // a posição dá o nome no outro vetor
