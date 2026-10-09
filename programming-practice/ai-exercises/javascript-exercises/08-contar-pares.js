// CONTAR NÚMEROS PARES

// - Recebo um número
// - Percorro os números do 1 até o número digitado
// - Crio uma variavel para guardar os números pares
// - Verifico se é par ou não
// - Incremento na variavel

// Essa não consegui comentar pq foi meio que automatico, os pensamentos vieram era como se eu tivesse total confiança.
// Unica coisa que cogitei usar foi colocar a variavel numPares ao lado do let contagem;
// Mas foi questão de um segundo e já lembrei que precisaria dela fora pra imprimir no console

function contaParesAte(numero) {
  let numerosPares = 0;
  for (let contagem = 1; contagem <= numero; contagem++) {
    if (contagem % 2 === 0) {
      numerosPares++;
    }
  }
  console.log(numerosPares);
}

contaParesAte(7);
