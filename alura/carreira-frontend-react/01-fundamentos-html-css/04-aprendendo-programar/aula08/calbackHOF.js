// Callback HOF - Higher-Order Function

function calcular(num1, num2, operacao) {
    return operacao(num1, num2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma) //Soma aqui é um callback
console.log('Resultado da Soma:', resultadoSoma)

const resultadoDivisao = calcular(32, 8, divisao) //Divisão aqui é um callback
console.log('Resultado da Divisão:', resultadoDivisao)