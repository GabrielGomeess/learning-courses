// SOMA DE 1 ATÉ N

// - Preciso somar todos os números desde o 1 até o número digitado.
// - Ex: (5) = 1 + 2 + 3 + 4 + 5
// - Recebo um número e preciso percorrer até o número recebido (for loop)
// - Inicio uma contagem, começando do um (estou colocando a palavra inteira senão me perco kkk)
// - A condição será enquanto a contagem for maior ou igual (pra inclui-lo) que o número digitado
//   (errei aqui na condição, precisa ser menor ou igual)
// - Incremento um na contagem pra ir ao próximo e chegar no numero
//   (esqueci de alterar o nome da variavel de inicio para contagem, mds)

// Vou usar o racicionio parecido com o do anterior
// Agora me lembrei desse exercicio um pouco nos cursos, que preciso criar uma variavel pra armazenar o valor e ir somando, só que preciso entender o pq de fazer isso e quando fazer (AQUI QUE PRECISO ENTENDER)
// Precisei testar o codigo como se fosse para o exercicio anterior, pra tentar entender visualmente melhor
// É tipo assim, preciso pegar o numero da contagem e somar com ela mesma? e atribuir a uma variavel né? Vou tentar aqui
// Vou criar a variavel dentro do proprio for, vai ser let pq ela vai ser alterada, apesar que toda vez que entra no loop ela vai ser criada? Fica meio estranho, vou criar fora.
// Isso vale tambem para o console.log(contagem), vou deixar ele fora e usar return na soma do total
// To pensando isso tudo sem escrever o codigo ainda kkkk, vamo la
// Calma ai que buguei
// Rapaz buguei feio aqui, calma ai recalcular rota, volta ao inicio

// MEU DEUS, ESTOU TENTANDO A MEIA HORA E SÓ AGORA QUE PERCEBI QUE ESTAVA RODANDO O SCRIPT 05 E NÃO O 06

// Agora o erro foi que não coloquei .log no console, mds

// DEU CERTOOOOOOO, foram mais erros de atenção do que de lógica kkkkk

// Então faz sentido, por exemplo, criar uma variavel para ir armazenando os valores
// E ir somando com o numero da contagem
// E se eu colocar a variavel dentro do for, ele indica que não foi definida, tem que ser fora
// Então fica assim,
// o num é 5, o totalSoma é 0
// Ele entra no for a contagem é 1, e 1 é menor que 5, ele faz o código
// o totalsoma é 0 + 1 = 1, a contagem incrementa e agora é 2
// E vai denovo contagem 2 é menor q 5, ele faz o código
// totalsoma é 1 + 2 = 3, a contagem incrementa e agora é 3
// E vai denovo contagem 3 é menor q 5, ele faz o código
// totalsoma é 3 + 3 = 6, a contagem incrementa e agora é 4
// E vai denovo contagem 4 é menor q 5, ele faz o código
// totalsoma é 6 + 4 = 10, a contagem incrementa e agora é 5
// E vai denovo contagem 5 é menor ou igual a 5, ele faz o código
// totalsoma é 10 + 5 = 15, a contagem incrementa e agora é 6
// Ele testa denovo a contagem agora é 6, e 6 é maior que a 5, e ele para por aí
// UFFA, parece que clareou mais a mente agora

function somaAte(numero) {
  let totalSoma = 0;
  for (let contagem = 1; contagem <= numero; contagem++) {
    totalSoma = totalSoma + contagem;
    // totalSoma += contagem se eu escrevesse assim iria me perder muito
  }
  console.log(totalSoma);
}

somaAte(5);
