const pessoa = {
    nome: 'Gabriel',
    idade: 26,
    temCNH: true
}

pessoa.sobrenome = 'Gomes'

console.log('Nome:', pessoa.nome)
console.log('Sobrenome:', pessoa.sobrenome)

const livro = {
    titulo: 'Dom Casmurro',
    paginas: 222
}

livro.publicado = true
livro.idiomas = ['Português', 'Inglês', 'Francês']

livro.idiomas.push('Mandarim')
livro.idiomas.push('Espanhol')

console.log('Livros(antes):', livro)

delete livro.publicado

console.log('Livros(depois):', livro)

console.log('Autor do livro:', livro['autor'])
console.log('Editora:', livro['editora'])

const autor = {
    nome: 'Machado de Assis',
    idade: 99,
    nacionalidade: 'Brasileiro'
}

console.log('Autor:', autor)

livro.autor = autor
