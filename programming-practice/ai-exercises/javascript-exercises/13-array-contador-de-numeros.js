// CONTAR NUMEROS MAIORES QUE 10 DE UM ARRAY

// - Recebo um array
// - Crio uma variavel que conta todos os numeros maiores que 10
    // pensando aqui vou ter que incrementar essa variavel 
// - Percorro ele
// - Verifico quais numeros são maiores e incremento na variavel criada
// - Imprime no console o total de numeros maiores que 10

// 

let numeros = [5, 12, 8, 20, 15, 3, 11];

function verificaNumerosMaiores(numeros) {
    let totalNumerosMaiores = 0;

    // O indice aqui começa do zero, para começar com o 5 no array
    for (let indice = 0; indice < numeros.length; indice++) {

        //se o numero que estiver no indice definido pelo for, for maior que dez ele conta um
        if (numeros[indice] > 10) {
            totalNumerosMaiores++
        }
    }

    console.log(totalNumerosMaiores);
}

verificaNumerosMaiores(numeros);