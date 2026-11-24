// enunciado para esse exercicio:
// 1) Leia o status de 8 pedidos de uma loja (por exemplo: "Entregue", "Pendente" ou
//    "Cancelado") e guarde em um vetor.
// 2) Em seguida, pergunte ao usuário qual status ele deseja consultar.
// 3) Conte a quantidade total de vezes que esse status aparece no vetor.
// 4) Armazene e exiba todos os índices (posições) onde ele foi encontrado.
// 5) Se o status buscado não existir no vetor, exiba Nenhum pedido encontrado com esse status.
// Exemplo: com os pedidos Entregue, Pendente, Entregue, Cancelado, Pendente, Entregue,
//    Cancelado, Pendente e busca Entregue, a saída é O status "Entregue" foi encontrado 3
//    vez(es). e Índices encontrados: 0, 2, 5.






const prompt = require('prompt-sync')();     // habilita o prompt()

let pedidos = [];                            // vetor dos status

for (let i = 0; i < 8; i++) {                // lê os 8 status: i vai de 0 até 7
  pedidos[i] = prompt('Digite o status do ' + (i + 1) + 'º pedido: '); // texto: sem Number
}

let buscado = prompt('Qual status você quer consultar? '); // o status procurado
let indices = [];                            // segundo vetor: guarda as posições encontradas
let contador = 0;                            // conta e aponta a próxima vaga livre

for (let i = 0; i < pedidos.length; i++) {   // percorre os pedidos
  if (pedidos[i] === buscado) {              // o status bate com o procurado?
    indices[contador] = i;                   // grava ANTES de somar: a primeira vaga é a 0
    contador = contador + 1;                 // agora sim, a vaga anda uma casa
  }
}

if (contador === 0) {                        // não achou nenhum
  console.log('Nenhum pedido encontrado com esse status.');
} else {                                     // achou pelo menos um
  let lista = indices[0];                    // o primeiro índice entra sem vírgula na frente
  for (let i = 1; i < indices.length; i++) { // do segundo em diante
    lista = lista + ', ' + indices[i];       // cola vírgula + índice no que já tinha
  }
  console.log('O status "' + buscado + '" foi encontrado ' + contador + ' vez(es).');
  console.log('Índices encontrados: ' + lista); // onde apareceu
}
