// LISTAGEM DE NUMEROS PARES

// Crie um programa que exiba todos os números pares de 1 até o número final fornecido pelo usuário.

// preciso criar um for
// iniciando um indice a partir do 1
// o ponto de parada será no numeroFornecido
// verificar se o num que estiver no indice é divisivel por 2 e imprimi-lo
// se não for ignora

const numeroFornecido = 10;

for (let indice = 1; indice <= numeroFornecido; indice++) {
  if (indice % 2 === 0) {
    console.log(indice);
  }
}
