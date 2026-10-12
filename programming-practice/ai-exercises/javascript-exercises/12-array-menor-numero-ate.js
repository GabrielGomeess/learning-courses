// MENOR NÚMERO DE UM ARRAY

// - Recebo um array
// - Percorro este array
// - Preciso criar uma variavel para guardar o menor numero

// primeiro obstaculo a contagem que eu estava criando vai ser usado para indice?
// caraca buguei aqui
// pq, como crio a variavel indice e quando utilizo e se utilizo a contagem ou uma só ja serve?

// vou fazer o seguinte, o indice vai começar com zero
// vou usar ele no numeros[indice], na condição do for
// pq se numeros[indice] for menor que o menorNumeroAtual ai ele atualiza a variavel com
// menorNumeroAtual = numeros[indice]

// se não for menor ele aumenta um no indice e ja vai pro proximo né
// isso me deu uma bugada tbm, estava pensando igual em um dos exercicios anteriores de que precisava fazer incrementação para que o array passasse para o proximo elemento

/*

let numeros = [8, 3, 12, 5, 9];

function menorNumeroDoArray(numeros) {
    let menorNumeroAtual = numeros[0];

    for (let indice = 0; numeros[indice] < menorNumeroAtual; indice++) {
        menorNumeroAtual = numeros[indice];
    }

    console.log(menorNumeroAtual);
}

menorNumeroDoArray(numeros);

*/

// deu ruim, não era isso

/*

let numeros = [8, 3, 12, 5, 1];

function menorNumeroDoArray(numeros) {
    let menorNumeroAtual = numeros[0]; // inicializa pelo primeiro valor

    for (let indice = 1; numeros[indice] <= numeros.length; indice++) { // começa pelo um pq ja iniciei na variavel
        // Não lembrava do numeros.length, só depois que fui ver as orietações q lembrei

        // Aqui foi meio que a lampada do cerebro piscou, e percebi q poderia fazer a atribuição depois da verificação
        // Eu estava fazendo a verificação dentro da condição do for a atribuição dentro do for 
        if (numeros[indice] < menorNumeroAtual) {
            menorNumeroAtual = numeros[indice];
        }
    }

    console.log(menorNumeroAtual);
}

menorNumeroDoArray(numeros);

*/

// Mesmo depois dessa tentativa, não deu certo. Eu mudei o numero 9 por 1 e percebi que não estava indo até o final.

// Pensei de uma forma aqui em utiliza o else.

// ---- OUTRA TENTATIVA ------

// O indice deve ser comparado com o tamanho do array para ter onde finalizar
// Ele deve ser começado no um pq ja inicializei na variavel com o numeros[0]
// E tambem o tamanho do array é 5 já o indice vai até 4, se fosse do zero não iria bater, eu acho

// Vamos lá, se o menorNumenroAtual for menor que o numeros[indice]
// então esse numeros[indice] será atribuido no menorNumeroAtual
// na verdade escrevi errado
// Se o numeros[indice] for menor que o menorNumeroAtual
// Ai sim o menorNumeroAtual recebe o numeros[indice]

// AEEEE KARAIII

// DEIXEI COM '1' NO ARRAY PARA VER SE ESTAVA SENDO PERCORRIDO ATE O FINAL

// let numeros = [8, 3, 12, 5, 1];    

// function menorNumeroDoArray(numeros) {
//     let menorNumeroAtual = numeros[0];

//     for (let indice = 1; indice <= numeros.length ; indice++) { 
//         if (numeros[indice] < menorNumeroAtual) {
//             menorNumeroAtual = numeros[indice]
//         }
//     }

//     console.log(menorNumeroAtual);
// }

// menorNumeroDoArray(numeros);


let numeros = [8, 3, 12, 5, 9];    

function menorNumeroDoArray(numeros) {
    let menorNumeroAtual = numeros[0];

    for (let indice = 1; indice < numeros.length ; indice++) { 
        if (numeros[indice] < menorNumeroAtual) {
            menorNumeroAtual = numeros[indice];
        }
    }

    console.log(menorNumeroAtual);
}

menorNumeroDoArray(numeros);