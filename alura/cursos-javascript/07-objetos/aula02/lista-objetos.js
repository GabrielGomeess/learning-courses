const estudante = {
    nome: 'Gabriel Gomes',
    idade: 22,
    cpf: '1286289568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999998888', '5511977776666'],
    endereco: [{
            rua: 'Rua Gama Cerqueira',
            bairro: 'Cambuci', 
            numero: "654",
            complemento: 'Ap 109, Bloco A'
    }] 

}

estudante.endereco.push({
    rua: 'Av Luiz Ignacio de Anhaia Mello',
    bairro: 'Vila Prudente', 
    numero: "4001",
    complemento: ''
})

// console.log(estudante.endereco);
// console.log(estudante.endereco[1]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => 
    endereco.complemento
)

console.log(listaEnderecosComComplemento);
