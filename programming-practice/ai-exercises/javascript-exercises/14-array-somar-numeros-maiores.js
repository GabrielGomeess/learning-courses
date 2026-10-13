// SOMAR NUMEROS MAIORES QUE 10 DE UM ARRAY

// - Recebo um array
// - Crio uma variavel que vai guardar a somar e ir acumulando
// - Percorro o array
// - Comparo os numeros e vejo se são maiores que 10 ou não
// - Imprime no console a soma total

// recebi o array
// inicializei uma variavel em 0, pq ela vai ir acumulando os numeros q sao maiores q dez
// percorro o array, o indice em 0 pq quero do primeiro
// enquanto o indice for menor que o tamanho do array, ele vai ser executado
// se o numero que estiver no indice for maior que 10
// ele vai somar com o que tem na somatotal e atribuir nela novamente

let numeros = [5, 12, 8, 20, 15, 3, 11];

function somaNumerosMaioresQueDez(numeros) {
  let somaTotalNumerosMaiores = 0;

  for (let indice = 0; indice < numeros.length; indice++) {
    if (numeros[indice] > 10) {
      somaTotalNumerosMaiores = somaTotalNumerosMaiores + numeros[indice];
    }
  }

  console.log(somaTotalNumerosMaiores);
}

somaNumerosMaioresQueDez(numeros);

// *** Eu tinha criado o arquivo pelo terminal do proprio vscode com o codigo echo $null > 14-array-somar-numeros-maiores.js e ai não estava funcionando na hora de dar run, não sei o motivo, no console mostrou SyntaxError: Invalid or unexpected token
