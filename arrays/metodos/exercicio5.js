//enunciado para esse exercicio:
// 1) Crie um array com 3 jogos favoritos.
// 2) Adicione um jogo ao final do array usando push().
// 3) Remova o primeiro jogo do array usando shift().
// 4) Verifique se um jogo específico (por exemplo, "FIFA") está na lista usando includes().
// 5) Exiba todos os jogos no console usando forEach().

let jogos = ["Minecraft", "FIFA", "Valorant"];
console.log("Lista inicial:", jogos);

// 1) Adicionar um jogo ao final com push()
jogos.push("GTA V");
console.log("Depois do push:", jogos);

// 2) Remover o primeiro com shift()
let removido = jogos.shift();
console.log("Removido com shift():", removido);
console.log("Lista atual:", jogos);

// 3) Verificar se "FIFA" está na lista com includes()
if (jogos.includes("FIFA")) {
  console.log("FIFA está na lista!");
} else {
  console.log("FIFA não está na lista.");
}
// 4) Exibir todos os jogos com forEach()
jogos.forEach((jogo) => console.log("Jogo:", jogo));
