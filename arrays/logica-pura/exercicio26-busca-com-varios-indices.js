// enunciado para esse exercicio (questão de prova):
// 1) Leia 8 números inteiros e guarde em um vetor.
// 2) Depois de preencher o vetor, peça um número de busca.
// 3) Exiba quantas vezes esse número foi encontrado e todas as posições (índices) onde ele
//    aparece.
// 4) Se o número não estiver no vetor, exiba Número não encontrado.
// Exemplo: com 5, 12, 7, 12, 3, 12, 9, 1 e busca 12, exiba O número 12 foi encontrado 3
//    vez(es) no(s) índice(s): 1, 3, 5.

const prompt = require('prompt-sync')();     // habilita o prompt()

let numeros = [];                            // vetor vazio

for (let i = 0; i < 8; i++) {                // lê os 8 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda na posição i
}

let buscado = Number(prompt('Digite o número de busca: ')); // o número procurado
let indices = [];                            // segundo vetor: guarda as posições encontradas
let contador = 0;                           // conta e aponta a próxima vaga livre

for (let i = 0; i < numeros.length; i++) {   // percorre o vetor
  if (numeros[i] === buscado) {              // achou o número nesta posição?
    indices[contador] = i;                   // grava a posição na próxima vaga livre
    contador = contador + 1;                 // a vaga anda uma casa
  }
}

if (contador === 0) {                        // não achou nenhuma vez
  console.log('Número não encontrado');
} else {                                     // achou pelo menos uma vez
  let lista = indices[0];                    // o primeiro índice entra sem vírgula na frente
  for (let i = 1; i < indices.length; i++) { // do segundo em diante
    lista = lista + ', ' + indices[i];       // cola vírgula + índice no que já tinha
  }
  let frase = 'O número ' + buscado + ' foi encontrado ' + contador + ' vez(es)'; // começo da frase
  console.log(frase + ' no(s) índice(s): ' + lista); // frase completa
}
