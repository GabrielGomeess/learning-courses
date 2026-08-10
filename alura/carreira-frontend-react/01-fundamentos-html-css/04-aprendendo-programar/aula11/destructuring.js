//SEM DESTRUCTURING

const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
};
//console.log(pessoa.nome);
//console.log(pessoa.idade);

//COM DESTRUCTURING

const { nome, idade } = pessoa;
console.log(nome);
console.log(idade);




//SEM DESTRUCTURING

function saudacao(pessoa) { // PASSA O OBJETO COMPLETO COMO PARAMETRO
    console.log('Olá', pessoa.nome);
}


//COM DESTRUCTURING

function saudacao({ nome }) { // PASSA SOMENTE A PROPRIEDADE DO OBJETO QUE VAI UTILIZAR
    console.log('Olá,', nome);
}


function saudacao({ nome, idade }) { // PASSA SOMENTE A PROPRIEDADE DO OBJETO QUE VAI UTILIZAR
    console.log('Olá,', nome);
    if (idade > 18) {
        console.log('maior de idade');
    }
}