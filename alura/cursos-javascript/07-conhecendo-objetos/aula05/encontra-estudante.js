const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {

    //Como todo JSON pode ser um array
    //Podemos utilizar o métodos de array, no caso aqui 
    //O método CALLBACK FIND() 
    return lista.find((estudante) => estudante[chave].includes(valor))
}

//Atribui a function a uma variavel
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')

const telEstudante = buscaInformacao(estudantes, 'telefone', '5896279799')

console.log(estudanteEncontrado);
console.log(telEstudante);
