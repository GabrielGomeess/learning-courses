// SOLICITANDO NOMES ATÉ DIGITAR FIM

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles,
// e encerre somente quando encontrar o valor "fim".

// preciso criar um for
// que vai percorrer um array
// e verificar se há a palavra fim nele
// se tiver encerra a iteração na hora

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

for (let indice = 0; indice < entradas.length; indice++) {
  if (entradas[indice] !== "fim") {
    console.log(`Nome: ${entradas[indice]}`);
  }
}
