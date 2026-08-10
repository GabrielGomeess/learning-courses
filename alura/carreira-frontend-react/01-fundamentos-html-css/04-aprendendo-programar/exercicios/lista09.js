// Exercicio 01
console.log("--------------");
console.log("Exercicio - 01");

const nomes = ['Gabriel', 'Fatima', 'Jose', 'Neides', 'Bidu']

for (i = 0; i < nomes.length; i++) {
    console.log(i, '-', nomes[i])
}



// Exercicio 02
console.log("--------------");
console.log("Exercicio - 02");

const frutas = ['Banana', 'Uva', 'Manga', 'Coco', 'Limão', 'Melancia']

console.log('Frutas(antes da adição e remoção):', frutas)

frutas.push('Mexerica')
frutas.shift()

console.log('Frutas(após adição e remoção):', frutas)



// Exercicio 03
console.log("--------------");
console.log("Exercicio - 03");

const cidades = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia']

console.log('Cidades:', cidades)
console.log('Quantidade de Cidades:', cidades.length)



// Exercicio 04
console.log("--------------");
console.log("Exercicio - 04");

const somarNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0

for (let i = 0; i < somarNumeros.length; i++) {
    soma += somarNumeros[i]
}

console.log('Soma Total:', soma)



// Exercicio 05
console.log("--------------");
console.log("Exercicio - 05");

const notas = [7, 3, 5, 6]
let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
    media = somaNotas / notas.length
}

if (media >= 7) {
    console.log("Aprovado com Média:", media)
} else {
    console.log("Reprovado com Média:", media)
}



// Exercicio 06
console.log("--------------");
console.log("Exercicio - 06");

const nomesEach = ['Gabriel', 'Fatima', 'Daniel', 'Caio']

nomesEach.forEach( (valor)=> {
    console.log('Olá,', valor)
})



// Exercicio 07
console.log("--------------");
console.log("Exercicio - 07");

const precos = [10, 20, 30, 40, 50]

const precosDescontados = precos.map( (preco)=> {
    return preco - preco * 0.10
})

console.log('Preços (sem desconto):', precos)
console.log('Preços(com desconto):', precosDescontados)



// Exercicio 08
console.log("--------------");
console.log("Exercicio - 08");

const listaIdades  = [9, 13, 16, 17, 19, 22, 25, 39, 67]

const listaIdadesFiltradas = listaIdades.filter ( (idade)=> {
    return idade >= 18
} )

console.log('Todas as Idades:', listaIdades)
console.log('Maiores de Idade:', listaIdadesFiltradas)



// Exercicio 09
console.log("--------------");
console.log("Exercicio - 09");

const precosProdutos = [10, 20, 30, 40]
let precoTotal = 0

for (let i = 0; i < precosProdutos.length; i++) {
    precoTotal += precosProdutos[i]
}

precosProdutosComDesconto = precoTotal - precoTotal * 0.20 

console.log('Preço Total:', precoTotal)
console.log('Preço Total(com 20% de desconto):', precosProdutosComDesconto)



// Exercicio 10
console.log("--------------");
console.log("Exercicio - 10");

const listaTarefas = ['Tomar Banho', 'Lavar a Louça', 'Estudar', 'Ler']
const listBooleana = [true, false, true, false]

const tarefasPendentes = listaTarefas.filter( (tarefa, indice)=> {
    return listBooleana[indice] === false
})

console.log('Tarefas Pendentes:', tarefasPendentes)


