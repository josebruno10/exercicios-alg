// 49. Escreva um algoritmo que leia um valor inicial e um valor final, exibindo todos os números contidos nesse intervalo.
// const prompt = require("prompt-sync")();

// for(let i=1;i<=100; i++){
//   console.log(i)
// }
// const prompt=require('prompt-sync')();

// let i=1;

// while(i<=100){
//   console.log(i)
//   i++
// }

const prompt=require('prompt-sync')();

let valorinicial=Number(prompt('Digite o valor inicial:')) //1
let valorfinal=Number(prompt('Digite o valor final:'))//100

let i=valorinicial;

while(i<=valorfinal){
  console.log(i);

  i++
}

valorinicial=Number(prompt('Digite o valore inicial:'))
valorfinal=Number(prompt('Digite o valore final:'))

  for(let i=valorinicial; i<=valorfinal; i++){
    console.log('esses todos os números contidos nesse intervalo.', i)

}
