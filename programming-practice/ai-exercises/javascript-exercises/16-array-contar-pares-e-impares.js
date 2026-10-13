// CONTAR NUMEROS PARES E IMPARES DE UM ARRAY

// - Recebo um array
// - Crio duas variaveis inicializando em 0, uma para pares e outra para impares
// - Percorro o array
// - Verifico se o numero atual é par ou impar
// - Se for par incrementa na variavel de pares
// - Se for impar incrementa na variavel de impares
// - Imprimo no console as duas variaveis

// crio o for com o indice no zero, para conseguir ir avançando de elemento em elemento com a incrementação
// e faço a condicional (indice < numeros.length) para conseguir parar o loop
// escrevi essa parte para deixar mais fresco ainda na mente e não fazer só por lembrar

// a condição do if vai ser se o numero que estiver no indice for dividido e o seu resto for zero
// significa que ele é par, logo podemos incrementar um na variavel de pares
// o else é brabo nem precisa falar nada ele ja sabe o q fazer

let numeros = [4, 7, 10, 3, 8, 11, 6];

function contadorDeParesImpares(numeros) {
  let numerosPares = 0;
  let numerosImpares = 0;

  for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }
  }

  console.log(`Quantidade de Pares: ${numerosPares}`);
  console.log(`Quantidade de Impares: ${numerosImpares}`);
}

contadorDeParesImpares(numeros);
