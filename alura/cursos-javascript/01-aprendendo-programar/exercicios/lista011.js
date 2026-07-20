// Exercicio 01
console.log("--------------");
console.log("Exercicio - 01");

const minhaPessoa = {
    nome: 'Gabriel',
    idade: 22,
    email: 'gabrielgopes@gmail.com'
}

const { nome, idade, email } = minhaPessoa
console.log('Meu nome:', nome, 'Minha idade:', idade, 'Meu email:', email)



// Exercicio 02
console.log("--------------");
console.log("Exercicio - 02");

const desenvolvimentoWeb = {
    base: 'HTML',
    estilo: 'CSS',
    interacao: 'JavaScript'
}

const ling1 = desenvolvimentoWeb.base
const ling2 = desenvolvimentoWeb.estilo
const ling3 = desenvolvimentoWeb.interacao

console.log('Linguagens para Desenvolvimento Web:', ling1, ling2, ling3)



// Exercicio 03
console.log("--------------");
console.log("Exercicio - 03");

function somarNumeros(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

console.log( 'Resultado:', somarNumeros(1, 2, 3, 4));



// Exercicio 04
console.log("--------------");
console.log("Exercicio - 04");

const frutas = ['Maçã', 'Uva', 'Abacaxi']
const maisFrutas = ['Limão', 'Laranja', 'Melancia']

const todasFrutas = [ ...frutas, ...maisFrutas ]

console.log('Array(frutas)', frutas)
console.log('Array(maisFrutas)', maisFrutas)
console.log('Array(todasFrutas)', todasFrutas)


// Exercicio 05
console.log("--------------");
console.log("Exercicio - 05");

const meuNome = { nome: 'Gabriel' }
const minhaIdade = { idade: 22 }

const meusDados = { ...meuNome, ...minhaIdade }

console.log(meusDados)



// Exercicio 06
console.log("--------------");
console.log("Exercicio - 06");

function saudacao(nome) {
    if (nome == undefined) {
        console.log('Olá, Visitante!')
    } else {
        console.log('Olá,', nome)
    }
}

saudacao('Gabriel')



// Exercicio 07
console.log("--------------");
console.log("Exercicio - 07");

const dataAgora = new Date()

console.log('Data Nâo Formatada:', dataAgora)

console.log('Data Formatada(pt-br):', dataAgora.toLocaleDateString('pt-BR'))


// Exercicio 08
console.log("--------------");
console.log("Exercicio - 08");

export function somar(a, b) {
    return a + b
}

console.log('export function somar(a, b)')


// Exercicio 09
console.log("--------------");
console.log("Exercicio - 09");


function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("1984", "George Orwell");

console.log(livro1);
console.log(livro2);



// Exercicio 10
console.log("--------------");
console.log("Exercicio - 10");

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());
