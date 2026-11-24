// enunciado para esse exercicio:
// 1) Leia 5 números inteiros para o vetorA e 5 números inteiros para o vetorB.
// 2) Monte um terceiro vetor, chamado vetorC, com 10 posições, preenchendo-o de forma
//    intercalada: posição 0 com o elemento 0 do A, posição 1 com o elemento 0 do B, posição 2
//    com o elemento 1 do A, e assim por diante.
// 3) Ao final, exiba o vetorC completo.
// Exemplo: com vetor A [1, 3, 5, 7, 9] e vetor B [2, 4, 6, 8, 10], a saída é [1, 2, 3, 4, 5,
//    6, 7, 8, 9, 10].

const prompt = require('prompt-sync')();  // habilita o prompt()

let vetorA = [];                          // primeiro vetor
let vetorB = [];                          // segundo vetor
let vetorC = [];                          // vai receber os 10 números intercalados

for (let i = 0; i < 5; i++) {             // lê os 5 números do vetor A
  vetorA[i] = Number(prompt('Digite o ' + (i + 1) + 'º número do vetor A: '));
}

for (let i = 0; i < 5; i++) {             // lê os 5 números do vetor B
  vetorB[i] = Number(prompt('Digite o ' + (i + 1) + 'º número do vetor B: '));
}

let pos = 0;                              // próxima posição livre do vetor C

for (let i = 0; i < 5; i++) {             // cada volta coloca um do A e um do B
  vetorC[pos] = vetorA[i];                // primeiro o do A
  pos = pos + 1;                          // a vaga anda uma casa
  vetorC[pos] = vetorB[i];                // logo depois o do B
  pos = pos + 1;                          // a vaga anda de novo
}

let texto = vetorC[0];                    // o primeiro número entra sem vírgula na frente
for (let i = 1; i < vetorC.length; i++) { // do segundo em diante
  texto = texto + ', ' + vetorC[i];       // cola vírgula + número no que já tinha
}

console.log('Vetor C: [' + texto + ']');  // exibe o vetor completo entre colchetes
