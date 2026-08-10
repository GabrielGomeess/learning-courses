const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter( (numero)=> {
    return numero % 2 === 0
} )

const numerosImpares = numeros.filter( (numero)=> {
    return numero % 2 != 0
} )

console.log('Números da Lista:', numeros)
console.log('Números Pares da Lista:', numerosPares)
console.log('Números Impares da Lista:', numerosImpares)


const numerosDobrados = numeros.map( (numero)=> {
    return numero * 2
})

console.log('Números da Lista Multiplicados por Dois:', numerosDobrados)