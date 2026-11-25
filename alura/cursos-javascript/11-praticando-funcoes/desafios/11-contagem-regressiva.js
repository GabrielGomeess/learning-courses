// CONTAGEM REGRESSIVA RECURSIVA

// Sua missão é criar uma função chamada contagemRegressiva que:

//     Receba um número inteiro positivo (ex: 5)
//     Imprima esse número e, a cada chamada, reduza em 1
//     Quando chegar em 0, exiba a mensagem: "Lançamento!"

//     A função deve ser implementada de forma recursiva, sem usar loops (for ou while).

const contagemRegressiva = function numeroInicial(numero) {
  if (numero > 0) {
    console.log(numero);
    return numeroInicial(numero - 1);
  } else {
    console.log(`Lançamento!`);
  }
};

contagemRegressiva(5);
