//Exercicio 01
console.log('---------------')
console.log('EXERCICIO - 01')

let meuNome = 'Gabriel';
let minhaIdade = 22;
let tenhoCarta = true;

console.log(meuNome, typeof(meuNome));
console.log(minhaIdade, typeof(minhaIdade));
console.log(tenhoCarta, typeof(tenhoCarta));

//Exercici 02
console.log('---------------')
console.log('EXERCICIO - 02')

let meuSobreNome = 'Gomes';
let nomeCompleto = meuNome + meuSobreNome;
let minhaNomeclatura = `${nomeCompleto}`;

console.log(minhaNomeclatura);

//Exercici 03
console.log('---------------')
console.log('EXERCICIO - 03')

let apresentacao = `Meu nome é ${meuNome} e tenho ${minhaIdade} anos.`
console.log(apresentacao)

//Exercici 04
console.log('---------------')
console.log('EXERCICIO - 04')

var ano = 2026
console.log(ano)

ano = 2027
console.log(ano)

//Exercici 05
console.log('---------------')
console.log('EXERCICIO - 05')

let estaChuvendo = true;

if (estaChuvendo === true) {
    console.log('Saia com o guarda-chuva!')
} else {
    console.log('Não precisa sair com o guarda-chuva!')
}
