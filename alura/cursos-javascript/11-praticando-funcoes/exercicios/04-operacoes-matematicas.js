// CALLBACK

// Criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// Função deve receber por parâmetro: operação desejada, valor1 e valor 2
function soma(numA, numB) { return numA + numB; }

function multiplica(numA, numB) { return numA * numB; }

function calculaOperacao(operacao, numA, numB) {
  return operacao(numA, numB); // Isso vai chamar uma função no argumento e executar com os parametros passados()
}

console.log(calculaOperacao(soma, 4, 3)); // Aqui é passado somente a referencia à função e não a sua execução
console.log(calculaOperacao(multiplica, 4, 3));
