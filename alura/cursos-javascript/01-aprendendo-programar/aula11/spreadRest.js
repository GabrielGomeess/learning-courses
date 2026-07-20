let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

const camila2 = { ...camila1 } //Clona o objeto camila1 e adiciona no camila2

camila2.idade = 30

console.log(camila1)
console.log(camila2)

camila1 = {
    ...camila2, // Copia tuda da camila2
    profissao: 'Desenvolvedora Senior', // Sobreescreve a profissao
    possuiCNH: true // Adiciona nova chave e valor
}

console.log(camila1)

const { nome, ...restante} = camila1 // Separa a propriedade nome e deixa as outras na variavel restante (ou ainda dentro do objeto)

console.log(nome)
console.log(restante)