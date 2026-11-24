// enunciado para esse exercicio (questão de prova):

// 1) Peça o valor que o cliente deseja sacar.
// 2) O valor só é válido se for positivo e múltiplo de 10. Se não for válido, mostre uma
//    mensagem de erro.
// 3) Para cada saque válido, mostre quantas notas de 100, 50, 20 e 10 reais são necessárias
//    para formar o valor.
// 4) Continue permitindo novos saques até o usuário digitar 0.
// 5) Ao final, mostre a quantidade de saques válidos realizados e o valor total sacado.



const prompt = require('prompt-sync')();   

let saquesValidos = 0;             // quantos saques deram certo
let totalSacado = 0;                          // soma dos valores sacados
let valor = Number(prompt('Digite o valor do saque (0 para sair): ')); // 1º saque, antes do while

while (valor !== 0) {                         // repete enquanto o valor não for 0
  if (valor > 0 && valor % 10 === 0) {        // && quer dizer E: positivo E múltiplo de 10
    let notas100 = Math.floor(valor / 100);   // quantas notas de 100 cabem, sem a parte quebrada
    let resto = valor % 100;                  // o que sobrou depois das notas de 100

    let notas50 = Math.floor(resto / 50);     // quantas notas de 50 cabem no que sobrou
    resto = resto % 50;                       // o que sobrou depois das notas de 50

    let notas20 = Math.floor(resto / 20);     // quantas notas de 20 cabem
    resto = resto % 20;                       // o que sobrou depois das notas de 20

    let notas10 = resto / 10;                 // o que sobrou é 0 ou 10: divide direto

    console.log('Notas de 100: ' +  notas100); // mostra a divisão em notas
    console.log('Notas de 50: ' + notas50);
    console.log('Notas de 20: ' + notas20);
    console.log('Notas de 10: ' + notas10);

    saquesValidos++     // conta o saque válido
    totalSacado = totalSacado + valor;        // soma o valor pedido
  } else {                                    // aqui o valor nunca é 0: o while já parou antes
    console.log('Valor inválido! Digite um valor positivo e múltiplo de 10.');
  }

  valor = Number(prompt('Digite o valor do saque (0 para sair): ')); // próximo saque, no FIM
}

console.log('Saques válidos realizados: ' + saquesValidos); // resultados finais
console.log('Valor total sacado: R$ ' + totalSacado);
