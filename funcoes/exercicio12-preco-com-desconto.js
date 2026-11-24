// enunciado para esse exercicio:
// 1) Crie uma função chamada aplicarDesconto que receba o preço de um produto e a
//    porcentagem de desconto.
// 2) A função deve retornar o preço final, já com o desconto.
// 3) Leia o preço e a porcentagem, chame a função e exiba o preço final.
// Exemplo: preço 200 com 10% de desconto -> preço final 180.

const prompt = require('prompt-sync')();   // habilita o prompt()

function aplicarDesconto(preco, porcentagem) {
  let desconto = preco * porcentagem / 100; // quanto vai sair do preço
  return preco - desconto;                 // devolve o preço já descontado
}

let preco = Number(prompt('Digite o preço do produto: '));
let porcentagem = Number(prompt('Digite a porcentagem de desconto: '));

let precoFinal = aplicarDesconto(preco, porcentagem);

console.log('Preço final: R$ ' + precoFinal.toFixed(2)); // 2 casas, como dinheiro
