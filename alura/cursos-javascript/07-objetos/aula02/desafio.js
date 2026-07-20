console.log('------------------------');
console.log('Desafios da Aula 02');

const pessoa = {
    nome: 'Gabriel',
    idade: 22,
    solteiro: true,
    hobbies: ['Futebol', ' VideoGame', ' Ler']
}

//Exercicio - 02
pessoa.endereco = {
    rua: 'Av Anhaia Mello',
    cidade: 'São Paulo',
    estado: 'São Paulo'
}

function mostrarInfoPessoa(pessoa) {
    console.log(`Informações:`);
    console.log(`Nome: ${pessoa.nome} | Tipo de Dado: ${typeof pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade} | Tipo de Dado: ${typeof pessoa.idade}`);
    console.log(`Estado Civil: ${pessoa.nome} | Tipo de Dado: ${typeof pessoa.solteiro}`);
    console.log(`Hobbies: ${pessoa.hobbies} | Tipo de Dado: ${typeof pessoa.hobbies}`);

    //Exercicio - 02
    console.log(`Endereço: ${pessoa.endereco.rua} | Tipo de Dado: ${typeof pessoa.endereco}`);
    console.log(`Endereço: ${pessoa.endereco.cidade} | Tipo de Dado: ${typeof pessoa.endereco}`);
}

mostrarInfoPessoa(pessoa)