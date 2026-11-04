// Gerar um laço que tente adivinhar um numero de 1 a 50
// e contar quantas tentativas foram até o resultado

let numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

// Enquanto o numSecreto e o numAleatorio forem diferentes FAÇA
// Se forem iguais não entra no laço
while (numeroSecreto !== numeroAleatorio) {
  numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);

  tentativas++;
}

console.log(`Adivinhou em ${tentativas}`);
