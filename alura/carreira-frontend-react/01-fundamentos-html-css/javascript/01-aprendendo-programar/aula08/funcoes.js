// function saudacao(nome) { //saudacao é o nome da função e nome é o parâmetro dela
//     console.log('Olá,', nome) //bloco de código a ser executado
// }

// const saudacao = (nome) => {
//     console.log('Vida Longa,', nome)
// }

const saudacao = nome => console.log('Olá,', nome)

saudacao('Gabriel') //saudacao aqui fora, significa que a função está sendo chamada e 'Gabriel' é o argumento
saudacao('Vinicios')
saudacao('Fatima')

// function calcularDobroDeUm(numero){
//     return numero * 2
// }

// const calculaDobro = (numero) => {
//     return numero * 2     
// }

const calculaDobro = (numero) => numero * 2

const numeroDobrado = calculaDobro(4)
console.log(`O dobro de 4 é:`,numeroDobrado)

console.log('O console.log também é uma função que recebe diversos parâmetros e imprime no terminal')