// MAIOR NÚMERO ATÉ O NUMERO DIGITADO

// - Recebo um número
// - Vou percorrer os números até o num digitado
// - Só que preciso guardar numa var, o numero maior encontrado até o numero digitado
// - Vou criar a var sem valor, pq ai eu dou o valor a ela depois da condição

// estou pensando aqui e se eu colocar
// rapaz to ficando doido com varias direções pra seguir
// calma ai

// na condição do for a contagem deve ser menor ou igual ao numero para ser executado
// logo se eu colocar um if dentro do for com a mesma condição ele vai executar até que o núm seja igual
// só que ai eu estou pensando no principio de contagem, parece meio besta
// só que o oq o meu if vai executar?
// ahhh ele pode executar uma atribuição à let maiorNumero, vamos ver

// function maiorNumeroAte(numero) {
//     let maiorNumero;
//     for(let contagem = 1; contagem <= numero; contagem++) {
//         maiorNumero = contagem
//         if (contagem > maiorNumero){
//             maiorNumero = contagem
//         }
//     }
//     console.log(maiorNumero);
// }

// maiorNumeroAte(10);

// Ficou meio redundante
// Inicializo a var sem valor
// Percorro os numeros que vão até o num digitado
// Atribuo o mesmo valor da contagem ao maiorNumero pois começam do mesmo jeito.

// Na verdade vou melhorar, agora sim não fica mais redudante
// Até tentei deixar sem valor na declaração, mas resulta em undefined no terminal
// Aqui é melhor que não precisa declarar duas vezes que o maiorNumero recebe a contagem e fica mais limpo

function maiorNumeroAte(numero) {
  let maiorNumero = 0;

  if (numero == 0) {
    console.log(`[ENTRADA INVÁLIDA]: Não há números maiores de 1 até ${numero}`);
  } else {
      for (let contagem = 1; contagem <= numero; contagem++) {
          if (contagem > maiorNumero) {
              maiorNumero = contagem;

            }
        }
        console.log(`O maior número de 1 até ${numero} é ${maiorNumero}`);
  }
}

maiorNumeroAte(50);
