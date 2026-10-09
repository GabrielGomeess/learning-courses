// CONTADOR SIMPLES

// - Preciso receber um número
// - Preciso fazer uma contagem que vai até o número digitado, ele incluso
// - Vou usar o for loop
// - Preciso criar o contador (mas do zero ou do um? Vou testar os dois pra ver oq sai)
// - A condição precisa ser numero < inicio, para incluir o numero, eu acho
// - Usar a incrementação para aumentar a contagem e ir para o proximo numero ate o numero digitado

// Vou pesquisar a sintaxe, lembro um pouco mas não tanto
// Fiquei na duvida se printava o numero ou a contagem, NOSSA a lampada do cerebro acendeu, vai ser a contagem no console, pq se for o numero ele vai se repetir a quantidade de vezes que ele for menor que a contagem, né? Ou eu to viajando.
// Pensei nisso aqui e esqueci de fazer a chamada da função hehe
// Deu errado, kkkk
// Tinha errado a condição pelo visto não é menor e sim maior, e ainda preciso colocar o = para incluir o numero digitado
// Vou deixar o inicio no 1, pra saída ser igual a sua

function contagemAte(numero) {
  for (let inicio = 1; numero >= inicio; inicio++) {
    console.log(inicio);
  }
}

contagemAte(5);
