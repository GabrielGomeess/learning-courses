// Criar um laço que recebe um texto e verifica se é um palindromo
// imprimir no console o texto, informando se é ou não um palindromo

// const texto = 'alura';
// const texto = 'arara';
const texto = "luz azul";

let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

const result =
  texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`;

console.log(result);
