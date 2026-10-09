// PAR OU ÍMPAR

// - Vou criar uma função que verifica se um número é par ou impar

// - Lembro-me que para um número ser par, ele é dividido por dois e o resto tem que ser 0

// - Pra isso vou utilizar na condição do if essa operação

// Estou mais confiante só de ter terminado o exercicio anterior, e talvez por estar me lembrando dos exercicios das aulas

// Estava pensando em uma etapa desnecessária, colocar else if sendo que é só par OU impar, não tem outra saída

// Testei o código para ver no terminal e não deu certo a primeira vez por ter usado o return com a template string, mas eu queria que mostrasse no console, ai troquei para verificar e ter certeza se a lógica estava funcionando

function verificaNumeroParOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é um número PAR`);
  } else {
    console.log(`${numero} é um número ÍMPAR`);
  }
}

verificaNumeroParOuImpar(5);
