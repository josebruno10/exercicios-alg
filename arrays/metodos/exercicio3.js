//enunciado para esse exercicio:
// 1) Crie um array com 4 nomes.
// 2) Remova o último nome do array usando pop().
// 3) Adicione um nome no início do array usando unshift().
// 4) Use forEach() para exibir uma mensagem personalizada para cada nome.

let nomes = ["Larissa", "Pedro", "Rafael", "Joana"];

// 1) Remover o último nome com pop()
let ultimo = nomes.pop();
console.log("Removido com pop():", ultimo);

// 2) Adicionar um nome no início com unshift()
nomes.unshift("Marcos");
console.log("Após unshift:", nomes);

// 3) Usar forEach para exibir mensagem personalizada

nomes.forEach((batata) => console.log("Bem-vindo(a) ", batata))
