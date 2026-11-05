// EXIBINDO CARACTERES

// Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// preciso percorrer uma string e exibir todos os caracteres um por um

// vou criar um for
// iniciar o indice no zero, pq vou trabalhar com as posições dos caracteres
// o ponto de parada vai ser senha.lenght
// e vou imprimir o indice e depois o caractere na posição do indice

const senha = "segurança@2025";

for (let indice = 0; indice < senha.length; indice++) {
  console.log(`Caractere ${indice}: ${senha[indice]}`);
}
