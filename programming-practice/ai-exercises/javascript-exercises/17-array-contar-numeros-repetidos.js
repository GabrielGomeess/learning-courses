// CONTAR NUMEROS REPETIDOS NO ARRAY

// - Recebo um array
// - Crio uma variavel que acumula a quantidade
// caramba estava pensando aqui essa vai ser treta, pq preciso comparar todos os numeros com todos
// - Percorro o array
// - Faço uma condicional que verifica se o numero do indice atual é igual à algum outro do array
// - Imprimo no console

// nossa sera que eu vou ter que fazer a comparação um por um
// a unica forma que lembro de ter esse tipo de exercicio nos cursos era a utilização do .includes e outros metodos
// mas sem ele não teve. Vou pensar um pouco, não pode fazer com metodos.

// let numeros = [4, 7, 10, 3, 7, 11, 6];

// ------------- 1° TENTATIVA ---------------------------

// function verificaRepeticaoNoArray(numeros) {
//     let numerosRepetidos = 0;

//     for (let indice = 0; indice < numeros[indice]; indice++) {
//         if (numeros )
//     }
// }

// oq acontece se eu comparar um numero com o array inteiro

// aqui não faz sentido, mas quis tentar klkkkk
// pq estou comparando valores e o valor de numeros é um array com elementos dentro

// if (7 === numeros) {
//     console.log('SIM')
// } else {
//     console.log('NÃO');
// }

// oq preciso é inicializar com a variavel sendo um dos elementos no array
// ai faço a comparação com cada um (SERÁ QUE UM FOR DENTRO DO FOR????), vou me perder mais do q ja tô
// por exemplo, o primeiro sendo comparado com todos e não encontrou
// o variavel atualizar e vamos para o proximo elemento e fazemos a comparação com todos os outros
// se tiver ai sim incrementamos na variavel de repetidos
// então preciso de duas variaveis??
// slk to pensando aqui em uma hipotese mas vai ficar gigante com if
// ou seja, não é a alternativa, acho q nem ela daria

// e se eu colocar a incrementação após o if porém dentro do for

// ------------- 2° TENTATIVA ---------------------------

/* AQUI ACHEI QUE ESTAVA CERTO NA LÓGICA DE ENCONTRAR UMA REPETIÇÃO PQ SAIU UM NO TERMINAL
    SÓ QUE EU COMPAREI SÓ O QUATRO COM O RESTANTE DAONDE QUE SAIU ESSE OUTRO QUATRO ???????
    CARAMBA ESTAVA EXPLICANDO PRA MINHA MÃE OQ EU ESTAVA TENTANDO FAZER E NA HORA QUE FALEI
    QUE PRECISAVA COMPARAR O PRIMEIRO COM O SEGUNDO PERCEBI QUE ESTAVA COMPARANDO NA PRIMEIRA VEZ
    O PRIMEIRO COM O PRIMEIRO OU SEJA O 4 COM O 4. MEU DEUS

        let numeros = [4, 7, 10, 3, 7, 11, 6];

        // let numeroAtual = numeros[0];
        // console.log(numeroAtual)

        // numeroAtual
        // console.log(numeroAtual)

        function verificaRepeticaoNoArray(numeros) {
            // Aqui eu quero ter duas variaveis
            // Uma para o indice que vai aumentando para ser comparado
            // Outra para o numeroAtual, que vai ser "fixa temporariamente" para ser comparada com outras
            // Vou ter que inicializar de formas diferentes
            // Pq o indice vai ser incrementado de uma forma e o numero atual de outra
            // Só q deu uma travada aqui

            // PERDI A POHA DO RACIOCINIO ¨_¨

            // Acho q é isso, vou deixar o indice no zero e vou incrementando
            // Já o numeroAtual

            // NÃO É ISSO NÃO MANO
            // Eu preciso ir incrementando quando eu quero, sem ser pelo for
            // indice é tranquilo para incrementar, já o numero atual vai incrementar somente o valor e não o zero [0]
            // e se eu colocar numeroAtual = numeros[indice] ele vai incrementar junto (E SE EU CRIASSE MAIS OUTRA VARIAVEL??)

            // Mano, eu vou ter um treco aqui
            // O numeroAtual vai ser o numeros[indiceAtual], ai sim eu comparo com numeros[indice]


            let qtdDeRepeticoes = 0;
            let indiceAtual = 0; //preciso que sobreviva pra comparar com outros
            let numeroAtual = numeros[indiceAtual]; //preciso que sobreviva pra comparar com outros

            for (let indice = 0; indice < numeros.length;) {

                // Se o numeroAtual for igual ao numero do indice[tal] eu incremento nas repetições
                if (numeroAtual == numeros[indice]) { // Só que o numero atual precisa saber da onde ele é
                    qtdDeRepeticoes++
                }

                indice++

            }

            console.log(qtdDeRepeticoes);
        }

        verificaRepeticaoNoArray(numeros);


*/

// ------------- 2° TENTATIVA ---------------------------

/*

        let numeros = [4, 7, 10, 3, 7, 11, 6];

        function verificaRepeticaoNoArray(numeros) {
            let qtdDeRepeticoes = 0;
            let indiceAtual = 0; // precisa sobreviver ao for
            let numeroAtual = numeros[indiceAtual]; // precisa sobreviver ao for

            for (let indice = 1; indice < numeros.length;) {

                // Aqui eu consegui fazer a comparação do primeiro numero aos proximos do array
                // Só que preciso fazer com que comece novamente e compare com o proximo elemento

                if (numeroAtual == numeros[indice]) { 
                    qtdDeRepeticoes++
                }

                indice++
                indiceAtual++
            }
            
            console.log(`Há pelo menos ${qtdDeRepeticoes} repetição`);
        }

        verificaRepeticaoNoArray(numeros);
*/

/*

        let numeros = [4, 7, 10, 3, 7, 11, 6];

        function verificaRepeticaoNoArray(numeros) {
        let qtdDeRepeticoes = 0;

        for (let indice = 0; indice < numeros.length; indice++) {
            // ESSE FOR PERCORRE O ARRAY NORMAL DO 4 PRO 7 PRO 10 e assim em diante

            // FOR que começa a partir do 7 (2° elemento)
            // Ahhhh, entendi agora toda vez que o for externo avança o interno vai ser o indice externo+1
            for (
            let proximoIndice = indice + 1;
            proximoIndice < numeros.length;
            proximoIndice++
            ) {
            // Pra mim faz sentido o if ser aqui pois acessa os dois indices
            // Ou seja, toda vez que o num que estiver no indice for igual ao num que ta no proximoIndice ele incrementa na variavel
            if (numeros[indice] === numeros[proximoIndice]) {
                qtdDeRepeticoes++;
            }

            console.log(
                `Comparando ${numeros[indice]} com ${numeros[proximoIndice]}`,
            );
            // console.log(`Há pelo menos ${qtdDeRepeticoes} repetição.`); se for aqui aparece apos cada comparação 4 com 7 (log), 4 com 10 (log)
            }

            // console.log(`Há pelo menos ${qtdDeRepeticoes} repetição.`); se for aqui aparece a depois de todas as comparações do 4, depois as do 7...
        }

        console.log(`Há pelo menos ${qtdDeRepeticoes} repetição.`);
        }

        verificaRepeticaoNoArray(numeros);

*/

let numeros = [4, 7, 10, 3, 7, 11, 6];

function verificaRepeticaoNoArray(numeros) {
  let qtdDeRepeticoes = 0;

  for (let indice = 0; indice < numeros.length; indice++) {
    for (
      let proximoIndice = indice + 1;
      proximoIndice < numeros.length;
      proximoIndice++
    ) {
      if (numeros[indice] === numeros[proximoIndice]) {
        qtdDeRepeticoes++;
      }
    }
  }

  if (qtdDeRepeticoes > 0) {
    console.log(`Há pelo menos ${qtdDeRepeticoes} repetição!`);
  } else {
    console.log(`Não números repetidos!`);
  }
}

verificaRepeticaoNoArray(numeros);
