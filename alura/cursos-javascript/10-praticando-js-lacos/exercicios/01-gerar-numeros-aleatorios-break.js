// FOR

// Gerar numeros aleatorios de 1 a 50
// Interromper o laço caso o numero seja 15
// Interromper depois de 30 tentativas e contar a qtd de tentativas.

//

for (let contador = 1; contador <= 30; contador++) {
  const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  // Math.floor deixa o numero inteiro
  // Math.random gera um numero entre 1 e 50 (aqui nesse caso)

  if (numero === 15) {
    console.log(`${numero} em ${contador} tentativas.`);
    break;
  }
}
