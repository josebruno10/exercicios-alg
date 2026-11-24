// enunciado para esse exercicio:
// 1) Crie um vetor vazio e preencha com 3 nomes digitados pelo usuário, usando for.
// 2) Percorra o vetor e exiba Olá, [nome]! para cada um.

const prompt = require('prompt-sync')(); // liga o teclado: habilita o prompt()

let nomes = [];                          // cria o vetor vazio, sem nenhuma posição ainda

for (let i = 0; i < 3; i++) {            // repete 3 vezes: i vale 0, depois 1, depois 2
  nomes[i] = prompt('Digite o ' + (i + 1) + 'º nome: '); // guarda o nome na posição i
}                                        // fim do laço que preenche

for (let i = 0; i < nomes.length; i++) { // percorre o vetor do início ao fim
  console.log('Olá, ' + nomes[i] + '!'); // monta a frase e mostra na tela
}                                        // fim do laço que exibe
