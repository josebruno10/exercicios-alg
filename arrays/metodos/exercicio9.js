//enunciado para esse exercicio:
// 1) Crie um array com 3 frutas.
// 2) Adicione uma fruta no início e outra no fim do array.
// 3) Remova a primeira e a última fruta do array.
// 4) Verifique se uma fruta específica (por exemplo, "Uva") está presente no array.
// 5) Descubra em qual posição está a “Pera”.
// 6) Mostre a quantidade atual de frutas no array.
// 7) Use forEach() para exibir todas as frutas no console.

let lista = ["Maçã", "Pera", "Uva"];

// 1) Adicionar no início e no fim
lista.unshift("Laranja");
lista.push("Banana");

// 2) Remover primeiro e último
let r1 = lista.shift();
let r2 = lista.pop();
console.log("Removidos:", r1, "e", r2);

// 3) Verificar se "Uva" está presente
if (lista.includes("Uva")) {
  console.log("Uva está na lista!");
}

// 4) Ver posição da “Pera”
console.log("Índice da Pera:", lista.indexOf("Pera"));

// 5) Mostrar a quantidade atual
console.log("A lista agora tem", lista.length, "itens");

// 6) Mostrar todos os itens com forEach
lista.forEach(function (item) {
  console.log("Item:", item);
});
