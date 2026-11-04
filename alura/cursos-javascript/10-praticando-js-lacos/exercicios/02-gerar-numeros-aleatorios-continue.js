// FOR

// Gerar numeros aleatorios de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisiveis por 5
// No final, exibir o valor do contador

let contador = 0;

for (let i = 1; i <= 30; i++) {
  const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);

  if (numero % 5 === 0) {
    continue;
  }

  contador++;
}

console.log(contador);
