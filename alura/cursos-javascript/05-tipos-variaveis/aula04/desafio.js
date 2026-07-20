//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 01');

let valorSaldo = 1000;
let valorDeposito = 500;
let valorSaque = 300;

function operacaoSoma(valorSaldo, valorDeposito) {
    return valorSaldo + valorDeposito
}

function operacaoSubtracao(valorSaldo, valorSaque) {
    return valorSaldo - valorSaque
}



console.log(`Valor do Saldo: ${valorSaldo}`)
console.log(`Valor do Depósito: ${valorDeposito}`);
console.log(`Valor do Saque: ${valorSaque}`);

console.log(`Valor do Saldo(atualizado): ${operacaoSoma(valorSaldo, valorDeposito)}`)
console.log(`Valor do Saldo(atualizado): ${operacaoSubtracao(valorSaldo, valorSaque)}`)


//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 02');

