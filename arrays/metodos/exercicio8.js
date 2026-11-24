//enunciado para esse exercicio:
// 1) Crie um array com 5 nomes de convidados para uma festa.
// 2) Verifique se um nome específico (por exemplo, "Maria") está na lista usando includes().
// 3) Remova o último nome da lista usando pop().
// 4) Use forEach() para exibir uma mensagem de boas-vindas personalizada para cada convidado restante.

let convidados = ["Carlos", "Maria", "Beatriz", "João", "Fernanda"];
console.log("Convidados iniciais:", convidados);
if (convidados.includes("Maria")) {
  console.log("Maria está convidada!");
} else {
  console.log("Maria não foi convidada.");
}
let removido = convidados.pop();
console.log(removido, " foi removido(a).");

console.log("Convidados após remoção:", convidados);
convidados.forEach((nome) => console.log("Bem-vindo(a) à festa, ", nome));
