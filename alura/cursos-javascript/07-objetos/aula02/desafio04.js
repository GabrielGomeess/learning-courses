function soma(numA, numB) {
    return numA + numB;
}

function subtracao(numA, numB) {
    return numB - numA;
}

function multiplicacao(numA, numB) {
    return numA * numB;
}

function divisao(numA, numB) {
    if (numA == 0 || numB == 0) {
        return `Não existe divisão por zero`
    } else {
        return numA / numB
    }
}

const numerosPraMedia = [2, 4, 6, 8]

function calculaMedia(numerosPraMedia) {
    let somaTotal = 0

    for(numero in numerosPraMedia){
        somaTotal += numero
    }

    const media = somaTotal / numerosPraMedia.length
}



const calculadora = {
    
    somaNumeros: soma(10, 10),
    subtraiNumeros: subtracao(8, 3),
    multiplicaNumeros: multiplicacao(3, 5),
    dividiNumeros: divisao(10, 0),
    mediaNotas: calculaMedia(numerosPraMedia)
}

console.log(calculadora);