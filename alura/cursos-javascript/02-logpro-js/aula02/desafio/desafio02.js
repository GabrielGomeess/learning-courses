//Exercicio 01

let diaSemana = prompt('Qual é o dia da semana?')

if (diaSemana == 'Sabado' || diaSemana == 'Domingo') {
    alert('Bom final de semana!')
} else {
    alert('Boa semana!')
}


//Exercicio 02
let numeroDigitado = prompt('Digite um número:')

if (numeroDigitado > 0) {
    alert('Este número é positivo!')
} else if (numeroDigitado == 0) {
    alert('Este número é neutro!')
} else {
    alert('Este número é negativo!')
}


//Exercicio 03

let numeroDePontos = prompt('Digite um número entre 0 e 200:')

if (numeroDePontos >= 100) {
    alert('Parábens, você ganhou!!!')
} else {
    alert('Tente novamente para ganhar')
}


//Exercicio 04

let saldoConta = 1000
alert('O saldo da sua conta é de:', saldoConta)


//Exercicio 05

let nome = promp('Qual é o seu nome?')

alert('Boas Vindas,', nome)