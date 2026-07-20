// Exercicio 01
console.log("--------------");
console.log("Exercicio - 01");

let idade = 16

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica");
} else {
  console.log("Venda proibida para menores de 18 anos");
}


// Exercicio 02
console.log("--------------");
console.log("Exercicio - 02");

const horaAtual = 19

if (horaAtual <= 12) {
  console.log("Bom dia!");
}else if(horaAtual <= 18){
    console.log("Boa tarde!")
}else{
    console.log('Boa noite!')
}


// Exercicio 03
console.log("--------------");
console.log("Exercicio - 03");

let number = 0

if (number > 0){
    console.log(number,': Número Positivo')
}else if (number < 0){
    console.log(number, ': Número Negativo')
}else{
    console.log(number, ': Número igual a zero')
}


// Exercicio 04
console.log("--------------");
console.log("Exercicio - 04");

const nota = 10

if (nota >= 9){
    console.log(nota, ': Nota A')
}else if(nota >=8){
    console.log(nota, ': Nota B')
}else if(nota >= 6){
    console.log(nota, ': Nota C')
}else if(nota >= 4){
    console.log(nota, ': Nota D')
}else {
    console.log(nota, ': Nota E')
}


// Exercicio 05
console.log("--------------");
console.log("Exercicio - 05");

const numero = 5

numero % 2 === 0 ? console.log('Número Par') : console.log("Número Ímpar")


// Exercicio 06
console.log("--------------");
console.log("Exercicio - 06");

const opcao = 3

switch (opcao){
    case 1:
        console.log(opcao, ': Cadastrar')
        break

    case 2:
        console.log(opcao, ': Listar')
        break

    case 3:
        console.log(opcao, ': Sair')
        break
}


// Exercicio 07
console.log("--------------");
console.log("Exercicio - 07");

const email = "gavonrim"
if (email === ""){

    console.log('Preecha o campo de e-mail')
}else{
    console.log('E-mail válido')
}


// Exercicio 08
console.log("--------------");
console.log("Exercicio - 08");

const senha = "aabbcc"
const senhaValida = false

if (senhaValida){
    console.log('Senha Válida')
}else  {
    console.log('Senha muito curta')
}


// Exercicio 09
console.log("--------------");
console.log("Exercicio - 09");

const saldoDisponivel = 150
const valorCompra = 150

if (saldoDisponivel >= valorCompra){
    console.log('Compra aprovada de ', valorCompra)
} else {
    console.log('Saldo Insuficiente')
}


// Exercicio 10
console.log("--------------");
console.log("Exercicio - 10");

const nome = 'Gabriel'
const emailForm = "fdmovmao"
const idadeForm = 22

const formularioValido = false

if (formularioValido){
    console.log("Formulário enviado com sucesso")
} else {
    console.log("Por favor, preencha todos os campos corretamente")
}
