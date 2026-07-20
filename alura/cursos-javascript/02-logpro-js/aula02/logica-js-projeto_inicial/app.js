alert('Bem vindo ao jogo do Número Secreto!');

let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 01 e 10');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto!!! ${numeroSecreto} `);
} else {
    alert('Você errou :(')
}