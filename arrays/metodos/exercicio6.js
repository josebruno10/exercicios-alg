//enunciado para esse exercicio:
// 1) Crie um array com 3 carros favoritos.
// 2) Descubra a posição de um carro específico (por exemplo, "Celta") usando indexOf().
// 3) Troque esse carro por outro (por exemplo, "Civic").
// 4) Adicione um novo carro ao final do array usando push().
// 5) Exiba todos os carros no console usando um loop for.

let carros = ["Gol", "Celta", "Uno"];
console.log("Carros:", carros);

// 1) Descobrir a posição de "Celta"
let indice = carros.indexOf("Celta");
console.log("Índice do Celta:", indice);

// 2) Trocar "Celta" por "Civic"
if (indice !== -1) {
  carros[indice] = "Civic";
}
console.log("Depois da troca:", carros);

// 3) Adicionar "Corolla" ao final
carros.push("Corolla");

// 4) Exibir todos os carros com for
for (let i = 0; i < carros.length; i++) {
  console.log(i + 1 + "º carro:", carros[i]);
}
