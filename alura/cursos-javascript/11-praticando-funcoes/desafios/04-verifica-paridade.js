// VERIFICANDO SE UM NUMERO É PAR OU ÍMPAR

// Sua missão é criar uma arrow function chamada verificarParidade que receba um número como parâmetro e retorne a string:

// "Par" se o número for par
// "Ímpar" se for ímpar

const verificaParidade = (num) => {
  if (num % 2 === 0) {
    return `Par`;
  } else {
    return `Ìmpar`;
  }
};

console.log(verificaParidade(8));
