// EXERCICIO 01
console.log('EXERCICIO - 01')
function saudacaoGlobal() {
    console.log('Olá, Mundo!')
}

saudacaoGlobal()


// EXERCICIO 02
console.log('EXERCICIO - 02')
function saudacao(nome) {
    console.log(`Olá, ${nome}`)
}

saudacao('Gabriel')

// EXERCICIO 03
console.log('EXERCICIO - 03')
function dobroNumero(numero) {
    return numero * 2
}

console.log(`Dobro de 8:`, dobroNumero(8))

// EXERCICIO 04
console.log('EXERCICIO - 04')
function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

console.log('Média:', media(8, 6, 10))

// EXERCICIO 05
console.log('EXERCICIO - 04')
function numeroMaior(numA, numB) {
    if (numA >= numB) {
        return numA
    } else {
        return numB
    }
}

console.log('O maior número é:', numeroMaior(7, 3))

// EXERCICIO 06
console.log('EXERCICIO - 05')
function multiplicaNumero(num) {
    return num * num
}

console.log(multiplicaNumero(4))