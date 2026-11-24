// enunciado para esse exercicio (questão de prova):
// 1) Leia a quantidade de produtos comprados por vários clientes, um cliente de cada vez.
// 2) O programa deve parar no primeiro cliente que comprar menos de 5 produtos.
// 3) Ao final, mostre quantos clientes compraram 5 produtos ou mais.













const prompt = require('prompt-sync')(); // habilita o prompt()

let clientes = 0;                        // conta quem comprou 5 produtos ou mais
let produtos = Number(prompt('Quantos produtos o cliente comprou? ')); // 1º cliente, antes do while

while (produtos >= 5) {                  // só entra se comprou 5 ou mais
  clientes = clientes + 1;               // aqui dentro sempre é 5 ou mais: já pode contar
  produtos = Number(prompt('Quantos produtos o cliente comprou? ')); // próximo cliente, no FIM
}                                        // quem comprar menos de 5 faz o while parar

console.log('Clientes que compraram 5 produtos ou mais: ' + clientes); //resultado final

