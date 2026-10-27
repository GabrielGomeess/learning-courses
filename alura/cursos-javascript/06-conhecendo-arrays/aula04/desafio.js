//-----------------------------------------------------
console.log('------------------------------------------');
console.log('EXERCICIO - 01');

const nomes = ['Gabriel', 'Fatima', 'Dolce'];

nomes.forEach((nome, indice) => {
    console.log(`${indice}: ${nome}`);
})



//-----------------------------------------------------
console.log('------------------------------------------');
console.log('EXERCICIO - 02');

const numeros = [2, 4, 6, 8];






//-----------------------------------------------------
console.log('------------------------------------------');
console.log('EXERCICIO - 03');

const numerosNoArray = [3, 5, 7, 9];

function VerificaSeTemNoArray(numero) {

    if (numerosNoArray.includes(numero)){
        console.log(`${numerosNoArray.indexOf(numero)} - ${numero}`)
    } else {
        console.log(`${numerosNoArray.indexOf(numero)}`)
    }
}

VerificaSeTemNoArray(9);



//-----------------------------------------------------
console.log('------------------------------------------');
console.log('EXERCICIO - 04');

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
let aluno;

todasAsTurmas.find()


