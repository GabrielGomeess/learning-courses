// SOMA DOS NUMEROS IMPARES ATÉ O NUMERO DIGITADO

// vamos lá, faz 4 dias que não faço os exercicios, vou tentar sem ollhar neles

// - Vou receber um número
// - Preciso percorrer todos os números até ele
// - Antes de percorrer preciso criar a variavel para guardar os valores da soma
// - Dentro do for faço uma verificação se o numero é ímpar, se for pego o valor dele e adiciono na variavel da soma

// inicio a contagem do 1, se a contagem for menor ou igual ao numero digitado executa
// a condição do if tem que ser com a contagem para ver se o número é ímpar
// ai sim ir acumulando na somaTotal
// e o console.log fora do for pq preciso só uma vez dele

function somaImparesAte(numero) {
  let somaTotal = 0;
  for (let contagem = 1; contagem <= numero; contagem++) {
    if (contagem % 2 !== 0) {
      somaTotal = somaTotal + contagem;
    }
  }
  console.log(somaTotal);
}

// esqueci de chamar a função
somaImparesAte(5);
