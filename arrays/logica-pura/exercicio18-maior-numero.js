// enunciado para esse exercicio:
// 1) Leia 6 números e guarde em um vetor.
// 2) Percorra o vetor procurando o maior.
// 3) Exiba o maior número.

const prompt = require('prompt-sync')();   // habilita o prompt()

let valores = [];                          // vetor vazio

for (let i = 0; i < 6; i++) {              // lê 6 números
  valores[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

let maior = valores[0];                    // chuta que o primeiro é o maior (nunca comece com 0)

for (let i = 1; i < valores.length; i++) { // começa em 1: a posição 0 já é o campeão
  if (valores[i] > maior) {                // apareceu alguém maior?
    maior = valores[i];                    // então ele vira o novo campeão
  }
}

console.log('Maior número: ' + maior);     // o campeão que sobrou no fim
