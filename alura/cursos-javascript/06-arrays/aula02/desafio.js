//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 01');

function concatenaArray(alunos, medias) {

    alunos = ['Gabriel', 'Caio', 'Maria'];
    medias = [8, 7, 10];

    console.log('Array(Alunos):', alunos);
    console.log('Array(Médias):', medias);
    
    const mediasAlunos = alunos.concat(medias);
    console.log("Array Concatenado:", mediasAlunos)
}

concatenaArray();



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 02');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array(numeros):', numeros);

const parteNumeros = numeros.slice(3,8);
console.log('Array(parteNumeros):', parteNumeros);



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 03');

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log('Array(frutas):', frutas);

frutas.splice(2, 2, 'Kiwi', 'Pêssego')
console.log('Array(frutas após método splice()):', frutas);



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 04');

const menuPrincipal = ['Strogonoff', 'Lasanha', 'Carbonara', 'Risoto'];
const menuDeSobremesas = ['Petit Gateu', 'Torta Holandesa', 'Banofee', 'Pudim'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log("Menu Principal:", menuPrincipal);
console.log('Menu de Sobremesas:', menuDeSobremesas);
console.log('Menu Completo:', menuCompleto);



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 05');

//MINHA TENTATIVA

const minhaMatriz = [];

const firstLine = [1, 2, 3]
const secondLine = [4, 5, 6]
const thirdLine = [7, 8, 9]

minhaMatriz.push(firstLine);
minhaMatriz.push(secondLine);
minhaMatriz.push(thirdLine);

console.log(minhaMatriz);

//RESPOSTA

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 06');

console.log('Elemento na 2° Linha e 3° Coluna:', matriz[1][2]);



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 07');

matriz[2].splice(1, 1, 15)
console.log(matriz)
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
