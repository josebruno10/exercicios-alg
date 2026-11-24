//enunciado para esse exercicio:
// 1) Crie um array com 3 comidas favoritas.
// 2) Modifique o segundo item do array para uma comida diferente.
// 3) Adicione uma comida no início do array usando unshift().
// 4) Exiba no console o último elemento do array sem removê-lo.

// 1) Crie um array com 3 comidas.
let comidas = ["Pizza", "Hambúrguer", "Sushi"];
console.log("Comidas iniciais:", comidas);

// 2) Modifique o segundo item do array.
comidas[1] = "Lasanha"; // troca "Hambúrguer" por "Lasanha"
console.log("Depois da troca:", comidas);

// 3) Adicione uma comida no início usando unshift()
comidas.unshift("Salada");
console.log("Com unshift:", comidas);

// 4) Exiba no console o último elemento sem remover
console.log("Última comida:", comidas[3]);
