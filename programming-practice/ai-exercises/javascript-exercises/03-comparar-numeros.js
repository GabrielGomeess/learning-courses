// MAIOR OU MENOR

// - preciso fazer uma comparação entre dois numeros
// - podendo ser um maior q o outro, um menor q o outro ou então são iguais

// - começo criando uma function que recebe dois parametros
// - estou pensando em fazer com while, vou pesquisar a sintaxe, pq esqueci kkkk
// - melhor não vou deixar pra usar while quando houver iterações e loops

// as vezes eu fico pensando em diversas opções tipo um overthinking sabe
// e acabo não me decidindo

function comparaNumeros(numA, numB) {
  if (numA > numB) {
    console.log(`${numA} é MAIOR que ${numB}!`);
  } else if (numA < numB) {
    console.log(`${numA} é MENOR que ${numB}!`);
  } else {
    console.log(`${numA} e ${numB} são IGUAIS!`);
  }
}

comparaNumeros(5, 5);
