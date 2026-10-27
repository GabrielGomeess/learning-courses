const notas = [10, 9.5, 8, 7, 6];

// O metodo map pega um array PERCORRE e CRIA UM NOVO array transformado 
// Ele é utilizado quando é necessario percorrer um array, altera os seus valores e atribuir à um novo array

// const notasAtualizadas = notas.map(function (nota) {
//     return nota + 1; //É necessario o "return" para retirar/retornar algo quando for executada   
// })

//Aqui é Arrow Function => outra forma de escrita mais limpa de uma função callback
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);



console.log(notasAtualizadas);
