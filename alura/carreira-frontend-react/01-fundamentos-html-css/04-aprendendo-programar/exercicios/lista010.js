// Exercicio 01
console.log("--------------");
console.log("Exercicio - 01");

const minhaPessoa = {
    nome: 'Gabriel',
    idade: 22,
    profissao: 'Desempregado'
}

console.log(minhaPessoa)



// Exercicio 02
console.log("--------------");
console.log("Exercicio - 02");

console.log('Meu nome:', minhaPessoa.nome)



// Exercicio 03
console.log("--------------");
console.log("Exercicio - 03");

minhaPessoa.idade = 23

console.log('Minha Idade:', minhaPessoa.idade)



// Exercicio 04
console.log("--------------");
console.log("Exercicio - 04");

minhaPessoa.cidade = 'São Paulo'

console.log('Minha cidade:', minhaPessoa.cidade)



// Exercicio 05
console.log("--------------");
console.log("Exercicio - 05");

function outraPessoa() {
    pessoa = {
        nome: 'Fatima',
        idade: '42',
        profissao: 'Diarista'
    }

    return console.log(`Minha mâe se chama ${pessoa.nome}, tem ${pessoa.idade} anos e é ${pessoa.profissao}.`)
}

outraPessoa()



// Exercicio 06
console.log("--------------");
console.log("Exercicio - 06");

const pessoas = [
    pessoa = {nome: 'Daniel', idade: 9},
    pessoa = {nome: 'Bernardo', idade: 3},
    pessoa = {nome: 'Izac', idade: 40}
]

console.log(pessoas)



// Exercicio 07
console.log("--------------");
console.log("Exercicio - 07");

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 18) {
        console.log('Pessoa maior de idade:', pessoas[i])
    }
}



// Exercicio 08
console.log("--------------");
console.log("Exercicio - 08");

const usuario = {
    nome: 'Gabriel',
    saudacao: ()=> {
        console.log('Boa noite,', usuario.nome)
    }
}

usuario.saudacao()


// Exercicio 09
console.log("--------------");
console.log("Exercicio - 09");

for (const chaves in minhaPessoa) {
    console.log('Chave:', chaves, '|', 'Valor:', minhaPessoa[chaves])
}



// Exercicio 10
console.log("--------------");
console.log("Exercicio - 10");

const compra = {
    preco: 2.50,
    quantidade: 4,

    totalCompra: ()=> {
        console.log('Total da Compra:', compra.preco * compra.quantidade)
    }
}

compra.totalCompra()


