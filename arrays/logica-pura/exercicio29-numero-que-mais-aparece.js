// enunciado para esse exercicio:
// 1) Leia 8 números e guarde em um vetor.
// 2) Descubra qual número aparece o maior número de vezes.
// 3) Exiba o número e quantas vezes ele apareceu.

const prompt = require('prompt-sync')();     // habilita o prompt()

let numeros = [];                            // vetor vazio

for (let i = 0; i < 8; i++) {                // lê 8 números
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

let maisRepetido = numeros[0];               // campeão: chuta o primeiro
let maiorContagem = 0;                       // recorde de aparições até agora

for (let i = 0; i < numeros.length; i++) {   // laço de fora: escolhe quem vai ser contado
  let contagem = 0;                          // zera a contagem para este número

  for (let j = 0; j < numeros.length; j++) { // laço de dentro: varre o vetor inteiro
    if (numeros[j] === numeros[i]) {         // é igual ao número escolhido?
      contagem = contagem + 1;               // conta mais uma aparição
    }
  }

  if (contagem > maiorContagem) {            // este apareceu mais que o recorde?
    maiorContagem = contagem;                // atualiza o recorde
    maisRepetido = numeros[i];               // e guarda quem fez o recorde
  }
}

console.log('O número ' + maisRepetido + ' apareceu ' + maiorContagem + ' vez(es).'); // resultado
