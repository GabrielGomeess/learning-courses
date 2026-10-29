// Classificando Temperatura

// Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"

const temperatura = 26;

if (temperatura < 15) {
  console.log(`${temperatura}° graus é Frio!`);
} else if (temperatura >= 15 && temperatura <= 25) {
  console.log(`${temperatura}° graus é Agradável!`);
} else {
  console.log(`${temperatura}° graus é Quente!`);
}
