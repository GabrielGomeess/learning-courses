// EXERCICIO 01
console.log('EXERCICIO - 01')
function calculaIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    return imc
}

console.log('IMC(Índice de Massa Corporal):', calculaIMC(85, 1.78))


// EXERCICIO 02
console.log('EXERCICIO - 02')
function calculaFatorial(numero) { 
    let fatorial = 1 
    for (let contador = numero; contador > 1; contador--) {
        fatorial = fatorial * contador //fatorial *= contador
    }
    return fatorial
}

console.log('Fatorial de 3:', calculaFatorial(3))


// EXERCICIO 03
console.log('EXERCICIO - 03')
function converteValor(valorDolar) {
    let cotacaoDolar = 5.20;
    let valorReais = valorDolar * cotacaoDolar; 

    return valorReais.toFixed(2);
}

let valorDolar = 1
let valorReais = converteValor(valorDolar)
console.log(`${valorDolar}$(em dólares) valem ${valorReais}$$(em reais)`)


// EXERCICIO 04
console.log('EXERCICIO - 04')
function calculaAreaRetangulo(base, altura) {
    let areaRetangulo = base * altura
    return areaRetangulo
}

console.log('A área de um retângulo 6 por 7 é:', calculaAreaRetangulo(6, 7))


// EXERCICIO 05
console.log('EXERCICIO - 05')
function calculaAreaCirculo(raio) {
    let areaCirculo = 3.14 * (raio**2)
    return areaCirculo.toFixed(2)
}

console.log('A área de um circulo com raio 3 é:', calculaAreaRetangulo(3))

// EXERCICIO 06
console.log('EXERCICIO - 06')

function tabuada(number) {
    for (let contador = 0; contador <= 10; contador++) {
        let resultadoTabuada = number * contador
        console.log(`${number} x ${contador} = ${resultadoTabuada}`)
    }
    
}

tabuada(8)
