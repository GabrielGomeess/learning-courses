//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 01');

const listaNomes = ['Gabriel', 'Fatima', 'Davi', 'Daniel'];

for (let i = 0; i < listaNomes.length; i++) {
    console.log(`${i} - ${listaNomes[i]}`);
}



//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 02');

function imprimeIndiceValor(listaNomes) {
    for (let i = 0; i < listaNomes.length; i++) {
    console.log(`O indice ${i} possui valor ${listaNomes[i]}`);
}
}

imprimeIndiceValor(listaNomes);



//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 03');

const numeros = [10, 20, 30, 40];
let somaDosNumeros = 0;

function somaNumeros(numeros) {
    for (let numero of numeros) {
        somaDosNumeros += numero;
    }
    console.log(`A soma dos números do Array é: ${somaDosNumeros}`);
}

somaNumeros(numeros);



//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 04');

const numerosInteiros = [5, 37, 18, 59, 12, -5];

let MaiorNumero = 0;
let MenorNumero = 0;

function verificaMenorMaior(numerosInteiros) {
    for (let i = 0; i < numerosInteiros.length; i++) {
        
        if (numerosInteiros[i] > MaiorNumero) {
            MaiorNumero = numerosInteiros[i];
        }
        if (numerosInteiros[i] < MenorNumero) {
            MenorNumero = numerosInteiros[i];
        }
    }

    console.log(`O Maior Número é ${MaiorNumero} e o Menor Número é ${MenorNumero}`);
}

verificaMenorMaior(numerosInteiros);



//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 05');

const numerosAleatorios = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let i = 0; i < numerosAleatorios.length; i++) {
    if (numerosAleatorios[i] % 2 == 0){
        console.log(`${i} - ${numerosAleatorios[i]} é PAR`)
    }
}



//----------------------------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 06');

const notas = [10, 5, 3, 8];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

const media = somaNotas / notas.length;

console.log(`Média: ${media}`);