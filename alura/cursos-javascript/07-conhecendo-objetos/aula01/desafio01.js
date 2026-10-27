console.log(`------------------------`);
console.log(`EXERCICIO - 01, 02 e 03`);

const livro = {
    titulo: "",
    autor: "",
    anoPublicacao: "",
    genero: "" 
}

livro.titulo = 'Noites Brancas';
livro.autor = 'Fiódor Dostoievski';
livro.anoPublicacao = '1848';
livro.genero = 'Romance'

console.log(livro)

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = Number(anoAtual) - Number(livro.anoPublicacao);
const mostrarDetalhes = `Faz ${livro.idadePublicacao} anos que ${livro.titulo} foi publicado.`;

console.log(mostrarDetalhes);

console.log(`------------------------`);
console.log(`EXERCICIO - 04`);

livro.avaliacao = null;
console.log(livro.avaliacao);

if (livro.avaliacao == null) {
    livro.avaliacao = "Excelente";
} else {
    console.log(`Este livro já foi avaliado!`);
}

console.log(livro.avaliacao);

console.log(`------------------------`);
console.log(`EXERCICIO - 05`);

console.log(livro);

livro.genero = "Aventura";

console.log(livro)


console.log(`------------------------`);
console.log(`EXERCICIO - 06`);

console.log(livro);

delete livro.avaliacao;

console.log(livro)