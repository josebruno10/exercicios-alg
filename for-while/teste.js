//pedir um salario pro usuario e reajustar esse salario, com um aumento de 15%, ate que esse salario chegue em mil 
const prompt=require('prompt-sync')();

let sal=Number(prompt('Digite o seu salaŕio:'))

while(sal<1000){       
  let total=sal*0.15
  sal=sal+total
  if(sal<1000){
    console.log('Faça novamemte!')
  }
}