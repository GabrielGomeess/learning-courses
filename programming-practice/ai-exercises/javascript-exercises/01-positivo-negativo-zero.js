// POSITIVO, NEGATIVO OU ZERO

// - preciso guardar o número em uma variável que depois vai ser passada como parâmetro na função (tive a sensação que essa parte não seja tão importante de ser pensado como a proxima).

// - verificar se o numero é maior que o 0, é positivo, menor é negativo ou então é zero

// Ao começar a escrever const numero, pensei, pô mas é só fazer a comparação dentro da function com a propria variavel, pois ele será passado quando chamar a função e não antes

// Quando estava escrevendo a estrutura do if/else esqueci a sintaxe, fui pesquisar na documentação e era estava esquecendo a segunda condição tbm

function verificaNumero(numero) {
  if (numero > 0) {
    console.log(`${numero} é um número POSITIVO!`);
  } else if (numero < 0) {
    console.log(`${numero} é um número NEGATIVO!`);
  } else {
    console.log(`${numero} é o número ZERO!`);
  }
}

verificaNumero(0);
