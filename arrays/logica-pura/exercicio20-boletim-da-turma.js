// enunciado para esse exercicio:
// 1) Leia 8 notas de alunos (de 0 a 10) e guarde em um vetor.
// 2) Conte quantos alunos foram aprovados (nota 6 ou mais) e quantos foram reprovados.
// 3) Exiba a quantidade de aprovados e a de reprovados, e depois liste só as notas dos
//    reprovados, dizendo o número do aluno.

const prompt = require('prompt-sync')(); // habilita o prompt()

let notas = [];                          // vetor vazio
let aprovados = 0;                       // contador de aprovados
let reprovados = 0;                      // contador de reprovados

for (let i = 0; i < 8; i++) {            // lê as 8 notas
  notas[i] = Number(prompt('Digite a nota do ' + (i + 1) + 'º aluno: ')); // guarda no vetor
}

for (let i = 0; i < notas.length; i++) { // primeira passada: contar
  if (notas[i] >= 6) {                   // 6 ou mais é aprovado
    aprovados = aprovados + 1;
  } else {                               // abaixo de 6 é reprovado
    reprovados = reprovados + 1;
  }
}

console.log('Aprovados: ' + aprovados);  // resultado da contagem
console.log('Reprovados: ' + reprovados);

console.log('Notas dos reprovados:');    // título da listagem
for (let i = 0; i < notas.length; i++) { // segunda passada: listar
  if (notas[i] < 6) {                    // filtra só os reprovados
    console.log('Aluno ' + (i + 1) + ' - nota ' + notas[i]); // i + 1 é o número do aluno
  }
}
