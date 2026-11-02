// COMPATIBILIDADE DE FRUTAS

// O suco pode ser feito somente com "laranja" ou "abacaxi".
// Qualquer outra fruta que não seja "laranja" ou "abacaxi" 
// deve gerar uma mensagem de erro, informando que a fruta não é compatível.

const fruta = 'laranja';

const ingredienteReceita = fruta === ('laranja' || 'abacaxi') 
    ? `Fruta compatível com a receita` 
    : `Fruta não compatível com a receita`;

console.log(ingredienteReceita);
