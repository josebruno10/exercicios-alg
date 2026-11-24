// enunciado para esse exercicio (questão de prova):
// 1) Leia 6 temperaturas (números reais) e guarde em um vetor. Digite as casas decimais com
//    ponto, como 22.5.
// 2) Calcule e exiba a média de todas as temperaturas registradas.
// 3) Percorra o vetor novamente e exiba apenas as temperaturas que ficaram estritamente acima
//    da média calculada.
// Exemplo: com a entrada [22.5, 30.0, 18.0, 25.5, 32.0, 20.0], a saída é Média: 24.67 e
//    Temperaturas acima da média: 30.0, 25.5, 32.0.

const prompt = require('prompt-sync')();   // habilita o prompt()

let temperaturas = [];                     // vetor vazio
let soma = 0;                              // acumulador

for (let i = 0; i < 6; i++) {              // lê as 6 temperaturas
  temperaturas[i] = Number(prompt('Digite a ' + (i + 1) + 'ª temperatura: ')); // guarda
  soma = soma + temperaturas[i];           // e soma na mesma volta
}

let media = soma / temperaturas.length;    // só aqui a média fica pronta
console.log('Média: ' + media.toFixed(2)); // toFixed(2): 2 casas decimais

let texto = '';                            // começa vazio: junta as que ficarem acima

for (let i = 0; i < temperaturas.length; i++) { // segunda passada, agora comparando
  if (temperaturas[i] > media) {           // estritamente acima: > e não >=
    if (texto !== '') {                    // já tem alguma temperatura no texto?
      texto = texto + ', ';                // então põe a vírgula antes da próxima
    }
    texto = texto + temperaturas[i].toFixed(1); // toFixed(1): 30 aparece como 30.0
  }
}

console.log('Temperaturas acima da média: ' + texto); // tudo numa linha só
