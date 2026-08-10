// Exercicio 01
console.log("--------------");
console.log("Exercicio - 01");

function saudacao(){
    console.log('Olá! Seja bem-vindo(a)!')
}

saudacao()


// Exercicio 02
console.log("--------------");
console.log("Exercicio - 02");

function apresentaPessoa(nome, idade) {
    console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`)
}

apresentaPessoa("Gabriel", 22)


// Exercicio 03
console.log("--------------");
console.log("Exercicio - 03");

function calcularIMC(peso, altura){
    let resultado = peso / (altura * altura)
    return console.log('IMC: ', resultado)
}

calcularIMC(85, 1.78)


// Exercicio 04
console.log("--------------");
console.log("Exercicio - 04");

function verificarAprovacao(nota) {

    if (nota >= 7) {
       return console.log('Aprovado - Nota:', nota)
    } else {
       return console.log('Reprovado - Nota:', nota)
    }

}

verificarAprovacao(6)


// Exercicio 05
console.log("--------------");
console.log("Exercicio - 05");

function ehPar(numero) {
    if (numero % 2 == 0){
        return console.log("True")
    } else {
        return console.log("False")
    }
}

ehPar(5)


// Exercicio 06
console.log("--------------");
console.log("Exercicio - 06");

function soma(num1, num2) {
    return num1 + num2
}

console.log('Resultado de 5 + 7=', soma(5,7))


// Exercicio 07
console.log("--------------");
console.log("Exercicio - 07");

function calcularTroco(valorCompra, valorPago) {
    let valorTroco = valorPago - valorCompra
    return valorTroco
}

console.log("O Valor do Troco é:", calcularTroco(10, 20))


// Exercicio 08
console.log("--------------");
console.log("Exercicio - 08");

const arrowSoma = (num1, num2)=> {
    return num1 + num2
}

console.log('ArrowFunction: Soma de 7 + 7 =', arrowSoma(7, 7))


// Exercicio 09
console.log("--------------");
console.log("Exercicio - 09");

function executandoAcao(acao) {
    acao()
}

executandoAcao(function() {
    console.log('Executando Ação!!!')
})


// Exercicio 10
console.log("--------------");
console.log("Exercicio - 10");

function fazerPergunta(pergunta, respostaCorreta) {
    console.log(pergunta)

    let respostaUsuario = respostaCorreta

     if (respostaUsuario === respostaCorreta) {
        return console.log("Resposta Correta!")
        
    } else {
        return console.log("Resposta Errada!")
    }
     
}

fazerPergunta(2 + 2, 4)