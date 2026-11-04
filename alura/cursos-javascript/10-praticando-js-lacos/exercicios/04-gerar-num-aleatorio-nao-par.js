// Criar um laço que gere um número aleatório de 1 a 50
// executar o laço enquanto não gerar um número par

let numeroRandom = 0;

do {
  // Gere um num random de 1 até 50
  numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
  // Se o 1° gerado for par ele nem entra no while
  console.log(numeroRandom);
} while (numeroRandom % 2 !== 0); // Enquanto esse num for diferente de par

console.log(numeroRandom);
