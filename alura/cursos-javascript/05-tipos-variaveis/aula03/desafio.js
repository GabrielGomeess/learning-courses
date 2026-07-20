//EXERCICIO - 01
console.log('--------------------');
console.log('EXERCICIO - 01');

const saudacao = 'Olá Mundo!'
console.log(saudacao)
console.log('Comprimento da Variavél:', saudacao.length)
console.log('Variável com a função .toUpperCase():', saudacao.toUpperCase())


//EXERCICIO - 02
console.log('--------------------');
console.log('EXERCICIO - 02');

let estudante;
const notaEstudante = null;

console.log('Tipo de Valor da variável (estudante):', typeof estudante);
console.log('Tipo de Valor da variável (notaEstudante):', typeof notaEstudante);


//EXERCICIO - 03
console.log('--------------------');
console.log('EXERCICIO - 03');

const meuNome = 'Gabriel';
const minhaIdade = 22;
const tenhoCNH = true;

console.log(`Meu nome é ${meuNome}, tenho ${minhaIdade} anos. Será que possuo CNH? ${tenhoCNH}. Sim eu possuo.`)


//EXERCICIO - 04
console.log('--------------------');
console.log('EXERCICIO - 04');

const hoje = String(15);
const amanhã = Number("16");

console.log('Conversão de Number -> String:', hoje);
console.log('Conversão de String -> Number:', amanhã);


//EXERCICIO - 05
console.log('--------------------');
console.log('EXERCICIO - 05');

const frase = 'Vai Corinthians!!!';

console.log('Frase em Maiúscula:', frase.toUpperCase())
console.log('Frase em Minúscula:', frase.toLowerCase())
console.log('Frase em Parte:', frase.slice(0, 11))
