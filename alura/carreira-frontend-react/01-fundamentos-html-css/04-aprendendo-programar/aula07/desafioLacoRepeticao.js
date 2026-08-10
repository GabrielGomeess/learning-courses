// Qtd de num pares e num impares entre 0 e 100

let totalNumPares = 0
let totalNumImpares = 0

// Laço de Repetição

for (let contador = 0; contador <= 100; contador++){
    if (contador % 2 == 0){
        totalNumPares++
    } else {
        totalNumImpares++
    }
}

console.log('Total de Números: ',totalNumPares)
console.log('Total de Números Ímpares: ',totalNumImpares)