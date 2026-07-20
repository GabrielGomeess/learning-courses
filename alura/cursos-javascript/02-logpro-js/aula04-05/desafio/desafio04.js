//Exercicio 01
console.log('--------------')
console.log('EXERCICIO - 01')

console.log('Seja bem vindo!!!')


//Exercicio 02
console.log('--------------')
console.log('EXERCICIO - 02')

let nome = 'Gabriel'

console.log(`Olá, ${nome}`)


//Exercicio 03
console.log('--------------')
console.log('EXERCICIO - 03')

alert(`Olá, ${nome}`)


//Exercicio 04
console.log('--------------')
console.log('EXERCICIO - 04')

let respostaUsuario = prompt('Qual linguagem de programação você mais gosta?')

console.log(respostaUsuario)


//Exercicio 05
console.log('--------------')
console.log('EXERCICIO - 05')

let valor1 = 7
let valor2 = 3
let resultadoSoma = valor1 + valor2

console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`)


//Exercicio 06
console.log('--------------')
console.log('EXERCICIO - 06')

let valor3 = 8
let valor4 = 4
let resultadoSubtracao = valor1 + valor2

console.log(`A subtração de ${valor3} e ${valor4} é ${resultadoSubtracao}`)


//Exercicio 07
console.log('--------------')
console.log('EXERCICIO - 07')

let idadeUsuario = prompt('Qual a sua idade?')

if (idadeUsuario >= 18) {
    console.log('Você é maior de idade!!')
} else {
    console.log('Você é menor de idade.')
}


//Exercicio 08
console.log('--------------')
console.log('EXERCICIO - 08')

let numero = prompt('Digite um número:')

if (numero > 0) {
    console.log('Este número é POSITIVO')
} else if (numero == 0) {
    console.log('Este número é NEUTRO')
} else {
    console.log('Este número é NEGATIVO')
}


//Exercicio 09
console.log('--------------')
console.log('EXERCICIO - 09')

let contador = 1;

while (contador <= 10) {
    console.log('Contagem -', contador)
    contador++
}


//Exercicio 10
console.log('--------------')
console.log('EXERCICIO - 10')

let nota = 8

if (nota >= 7) {
    console.log('APROVADO')
} else {
    console.log('REPROVADO')
}

//Exercicio 11
console.log('--------------')
console.log('EXERCICIO - 11')

let numeroAleatorio = Math.random()

console.log(numeroAleatorio)


//Exercicio 11
console.log('--------------')
console.log('EXERCICIO - 11')

let numeroAleatorio1a10 = parseInt(Math.random() * 10 + 1)

console.log(numeroAleatorio1a10)


//Exercicio 12
console.log('--------------')
console.log('EXERCICIO - 12')

let numeroAleatorio1a100 = parseInt(Math.random() * 100 + 1)

console.log(numeroAleatorio1a100)