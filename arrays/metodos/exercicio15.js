//enunciado para esse exercicio:
// 1) Crie um array com vários nomes, incluindo repetições.
// 2) Use um loop para criar um novo array que remova todas as ocorrências de um nome específico (por exemplo, "Ana").
// 3) Exiba o novo array no console.

let nomes = ["Ana", "João", "Ana", "Pedro", "Ana"];
let resultado = [];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i] !== "Ana") {
    resultado.push(nomes[i]);
  }
}

console.log(resultado);
