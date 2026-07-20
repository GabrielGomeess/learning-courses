const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João'];

//const nomesAtualizados = new Set(nomes);

// O Set é um conjunto, um tipo de dados que armazena valores unicos, ou seja, por isso ele descarta os valores repetidos.
// Ele não é um array.

const listaNomesAtualizados = [...new Set(nomes)];
//Aqui ele é transformado em um array.


//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);
