//Escreva um algoritmo que leia uma senha digitada pelo usuário e informe se o acesso foi permitido ou negado com base na senha correta.
const prompt = require('prompt-sync')();

const senhaCorreta = "12345"; // Defina a senha correta
const senhaDigitada = prompt("Digite a senha: "); // Solicita ao usuário que digite a senha

if (senhaDigitada === senhaCorreta) {
    console.log("Acesso permitido!"); // Se a senha estiver correta, permite o acesso
} else {
    console.log("Acesso negado!"); // Se a senha estiver incorreta, nega o acesso
}
