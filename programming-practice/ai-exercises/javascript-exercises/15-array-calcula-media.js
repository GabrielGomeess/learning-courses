// CALCULAR MÉDIA DE UM ARRAY

// - Recebo um array
// - Crio uma variavel que guarda a soma de todos os elementos
// - Percorro o array
// - Crio uma variavel que guarda o calculo da media
// - Exibo o resultado no console

// fiz primeiro o codigo que faz somente a soma
// como ja sabia foi mais facil, ainda sim escrevi length errado

// agora vou criar uma variavel 'media' que recebe a soma total dividida pelo numeros.length
// que o tamanho do array é igual à qtd de elementos nele

let numeros = [7, 8, 5, 10, 10];

function calculaMedia(numeros) {
  let somaTotal = 0;

  for (let indice = 0; indice < numeros.length; indice++) {
    somaTotal = somaTotal + numeros[indice];
  }

  let media = somaTotal / numeros.length;

  console.log(media);
}

calculaMedia(numeros);
