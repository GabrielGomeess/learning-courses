const estudante = {
    nome: 'Gabriel Gomes',
    idade: 22,
    cpf: '1286289568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999998888', '5511977776666'],
    // enderecos: [{
    //     rua: 'Rua Gama Cerqueira',
    //     bairro: 'Cambuci', 
    //     numero: "654",
    //     complemento: 'Ap 109, Bloco A'
    // },
    // {
    //     rua: 'Av Luiz Ignacio de Anhaia Mello',
    //     bairro: 'Vila Prudente', 
    //     numero: "4001",
    //     complemento: null
    // }] 
}


//Método para Encontrar/Listar se há uma propriedade no objeto

const chavesObjeto = Object.keys(estudante); //Retorna um array com as propriedades dentro do objeto
console.log(chavesObjeto);

//Método para Ver os Valores das propriedades de um objeto

const valoresObjeto = Object.values(estudante); //Retorna um array com os valores das propriedades
console.log(valoresObjeto);

//Método para ver as Propriedades e seus Valores do objeto

const objetoCompleto = Object.entries(estudante); //Retorna um array de arrays com as propriedades e seus valores
console.log(objetoCompleto);


if (!chavesObjeto.includes('enderecos')) {
    console.error('Endereço não cadastrado!!!')
}
