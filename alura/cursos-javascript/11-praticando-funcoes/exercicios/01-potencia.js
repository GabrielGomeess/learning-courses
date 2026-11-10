// FUNCTION

// elevar um número x à uma potência y

function calculaPotencia(numero, potencia) {
    let resultado = 1;

    for(let i = 0; i < potencia; i++) {
        resultado = resultado * numero;
    }
    
    return resultado;
}

console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(5, 5));
console.log(calculaPotencia(3, 4));