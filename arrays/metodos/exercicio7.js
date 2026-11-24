//enunciado para esse exercicio:
// 1) Crie um array com 3 filmes favoritos.
// 2) Verifique se um filme específico (por exemplo, "Shrek") está na lista usando includes().
// 3) Adicione dois filmes ao final do array usando push().
// 4) Remova o último filme do array usando pop().
// 5) Exiba o tamanho da lista usando length.
// 6) Descubra em qual índice está “Avatar” usando indexOf().
let filmes = ["Matrix", "Avatar", "Shrek"];
console.log("Filmes iniciais:", filmes);

// 1) Verificar se "Shrek" está na lista
if (filmes.includes("Shrek")) {
  console.log("Shrek está na lista!");
}

// 2) Adicionar dois filmes
filmes.push("Interestelar");
filmes.push("Homem-Aranha");

// 3) Remover o último filme
let removidoFilme = filmes.pop();
console.log("Último removido:", removidoFilme);

// 4) Exibir o tamanho da lista
console.log("A lista tem", filmes.length, "filmes.");

// 5) Descobrir em qual índice está “Avatar”
let posAvatar = filmes.indexOf("Avatar");
console.log("Avatar está no índice:", posAvatar);
