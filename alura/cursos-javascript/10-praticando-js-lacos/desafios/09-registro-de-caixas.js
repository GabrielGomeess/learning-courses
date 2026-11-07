// REGISTRO DE CAIXAS PROCESSADAS

// Crie um programa que simule o processamento das caixas,
// exibindo as válidas e ignorando as danificadas.
// O programa deve parar o processamento assim que 5 caixas válidas forem processadas.

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];

let caixasProcessadas = 0;

for (let indice = 0; indice < caixas.length; indice++) {
  if (caixasProcessadas < 5) {
    if (caixas[indice] >= 0) {
      console.log(`Caixa Processada: ${caixas[indice]}`);
      caixasProcessadas++;
    } else {
      console.log(`Caixa Danificada, ignorada.`);
    }
  } else {
    console.log(`Limite de caixas processadas atingido!`);
    break;
  }
}
