// enunciado para esse exercicio:
// 1) Leia 6 números diferentes entre si e guarde em um vetor.
// 2) Descubra o maior e o segundo maior de uma vez só.
// 3) Exiba os dois.

const prompt = require('prompt-sync')();   // habilita o prompt()

let numeros = [];                          // vetor vazio

for (let i = 0; i < 6; i++) {              // lê 6 números diferentes
  numeros[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: ')); // guarda no vetor
}

let maior = numeros[0];                    // supõe que o primeiro é o maior
let segundo = numeros[1];                  // e que o segundo digitado é o vice

if (numeros[1] > numeros[0]) {             // se o chute estava invertido, corrige
  maior = numeros[1];                      // o segundo digitado era o maior
  segundo = numeros[0];                    // e o primeiro é o vice
}

for (let i = 2; i < numeros.length; i++) { // começa em 2: os dois primeiros já entraram
  if (numeros[i] > maior) {                // bateu o campeão?
    segundo = maior;                       // o campeão antigo não some: vira o vice
    maior = numeros[i];                    // e o novo assume o topo
  } else if (numeros[i] > segundo) {       // não bateu o campeão, mas bateu o vice?
    segundo = numeros[i];                  // então só o vice muda
  }
}

console.log('Maior: ' + maior);            // primeiro lugar
console.log('Segundo maior: ' + segundo);  // segundo lugar
