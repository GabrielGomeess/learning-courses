const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return estudantes.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');

console.log(listaEnderecosIncompletos);
