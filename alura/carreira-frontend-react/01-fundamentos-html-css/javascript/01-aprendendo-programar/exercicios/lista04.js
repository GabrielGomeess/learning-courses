// Exercicio 01 - Boas Vindas
console.log('Exercicio - 01')
 
let nome = 'Gabriel Gomes Lopes!'

console.log('Olá,', nome,'Seja bem vindo ao curso de JavaScript')

//Exercicio 02 - Idade Atual
console.log("---------------------")
console.log('Exercicio - 02')

const anoNascimento = 2003

let anoAtual = 2026
let idadeAtual = anoAtual - anoNascimento

console.log("Você tem", idadeAtual, "anos")

// Exercicio 03 - Localização Atual
console.log("---------------------")
console.log('Exercicio - 03')

let cidade = "São Paulo"
let estado = 'SP'
let pais = 'Brasil'

console.log("Você está em", cidade,"/", estado,"/", pais)

// Exercicio 04 - TypeOf
console.log("---------------------")
console.log('Exercicio - 04')

let temCarteira = false

console.log(typeof temCarteira)

// Exercicio 05 - Saldo Bancário
console.log("---------------------")
console.log('Exercicio - 05')

let saldoInicial = 0
let deposito = 200
let saque = 50

let saldoFinal = saldoInicial + deposito - saque

console.log("Saldo Final (após depósito de R$200 e saque de R$50): R$", saldoFinal)

// Exercicio 06 - Média de Notas
console.log("---------------------")
console.log('Exercicio - 06')

const matematica = 9
const portugues = 8
const ciencias = 10

const mediaFinal = (matematica + portugues + ciencias) / 3

console.log("Média Final: ", mediaFinal)

// Exercicio 07
console.log("---------------------")
console.log('Exercicio - 07')

let salario = 3000
let salarioFinal = salario + (salario * 0.1)

console.log('Salário (após aumento de 10%): R$',salarioFinal)

// Exercicio 08
console.log("---------------------")
console.log('Exercicio - 08')

let cliques = 0

cliques ++
cliques ++
cliques ++

console.log("Tiveram", cliques, "cliques")

// Exercicio 09
console.log("---------------------")
console.log('Exercicio - 09')

const PI = 3.14

console.log("Não é possível declarar novamente a variável de escopo de bloco 'PI'.", PI)

// Exercicio 10
console.log("---------------------")
console.log('Exercicio - 10')

const nomeJovem = 'Gabrie tem '
const idadeJovem = 22
const dadosJovem = nomeJovem + idadeJovem

console.log(dadosJovem, "anos")
console.log(typeof dadosJovem)



