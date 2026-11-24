// 73. Escreva um algoritmo que leia números até que o valor 0 seja digitado e exiba a soma de todos os números informados.
const prompt = require("prompt-sync")();

let soma=0;
let num=Number(prompt('Digite um número:'))

while(num !== 0){
num=Number(prompt('Digite um número:'))
soma= soma+num


  i++
}

console.log('A soma é:', soma)


