const estudante = {
    nome: 'Gabriel Gomes',
    idade: 22,
    cpf: '1286289568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999998888', '5511977776666'],
    enderecos: [{
        rua: 'Rua Gama Cerqueira',
        bairro: 'Cambuci', 
        numero: "654",
        complemento: 'Ap 109, Bloco A'
    },
    {
        rua: 'Av Luiz Ignacio de Anhaia Mello',
        bairro: 'Vila Prudente', 
        numero: "4001",
        complemento: null
    }] 
}

function exibirTelefones(telefoneUm, telefoneDois) {
    console.log(telefoneUm);
    console.log(telefoneDois);
}

//exibirTelefones(estudante.telefones[0], estudante.telefones[1])

//Ao inves de colocar o indice de um array varias vezes(o que não é uma boa prática).
//Utilizamos o método SPREAD ...(objeto) que vai espalhar os valores de um array

exibirTelefones(...estudante.telefones)


const dadosEnvio = {
    destinatario: estudante.nome,
    //endereco: estudante.enderecos[0]
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);
