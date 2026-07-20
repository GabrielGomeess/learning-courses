//Exercicio 01 - Verificação Maioridade
console.log("Exercicio - 01");

let idade = 16;
let maiorIdade = idade > 18;

console.log(maiorIdade, "Não é maior de idade");

//Exercicio 02 - Situação Aluno
console.log("------------------");
console.log("Exercicio - 02");

const primeiraNota = 7;
const segundaNota = 5;
const media = (primeiraNota + segundaNota) / 2 > 7;

console.log("Média: ", media, "Média abaixo de 7");

//Exercicio 03 - Simulação Troco
console.log("------------------");
console.log("Exercicio - 03");

let valorPago = 50;
let valorRecebido = 35.9;
let valorTroco = valorPago - valorRecebido;

console.log("Troco: R$", valorTroco);

//Exercicio 04 - Senhas Iguais
console.log("------------------");
console.log("Exercicio - 04");

let primeiraSenha = "010203";
let segundaSenha = "010203";
let verificaSenha = primeiraSenha === segundaSenha;

console.log(verificaSenha, "As senhas são iguais");

//Exercicio 05 - Controle de faltas
console.log("------------------");
console.log("Exercicio - 05");

const totalAulas = 100;
const faltas = 35;

const limiteFaltas = 100 * 0.25;

console.log(faltas > limiteFaltas, "Reprovado por faltas");

//Exercicio 06 - Verificação de login
console.log("------------------");
console.log("Exercicio - 06");

const temSenha = true;
const temLogin = false;

const loginValido = temSenha === temLogin;

console.log(loginValido, "Login Inválido");

//Exercicio 07 - Valor negado
console.log("------------------");
console.log("Exercicio - 07");

let disponivel = !true;

console.log(disponivel, "Indisponível");

//Exercicio 08 - Condições compostas
console.log("------------------");
console.log("Exercicio - 08");

const n1 = 10;
const n2 = 10;

console.log(
  n1 % 2 === 0 && n1 % 2 === 0 && n1 === n2,
  "São pares e totalmente iguais",
);

//Exercicio 09 - Calculadora de Porcentagem
console.log("------------------");
console.log("Exercicio - 09");

const porcent = 120 * 0.15;

console.log("5% de 120 é: ", porcent);

//Exercicio 10 - Ordem de Operações
console.log("------------------");
console.log("Exercicio - 10");

const calculo = 2 + 3 * 5;

console.log(
  "2+3*5 =",
  calculo,
  "Por que na regra da matemática a multiplicação vem antes da adição",
);
