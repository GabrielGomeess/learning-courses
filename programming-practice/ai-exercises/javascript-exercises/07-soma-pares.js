// SOMAR SOMENTE NUMEROS PARES

// - Recebo um número
// - Percorro os números do 1 até o número digitado
// - Faço uma verificação com cada pra ver se é par
// - Ai sim eu crio uma variavel para acumular (ou antes da condição? vou testar depois da condição primeiro)
//      (essa parte aqui me deixou cafuso kkk)
// - E começo a fazer uma soma para acumular

// Vou testar as condições primeiro, tipo if(contagem % 2 === 0) {faz o codigo} else {contagem++}
//  (Acho q faz sentido, né? Pq senão não ira sair do num que é impar)
// Primeiro coloquei o console(contagem) fora do for, só que eu o declarei dentro dele ai não deu certo
// Já dentro ele funciona, mas era só pra testar se minha lógica esta certa, que incrementa se não for par

// Vou fazer o seguinte, declarar o totalSoma dentro do for, mas fora do if

/* 

    TESTEI ASSIM E DEU TUDO ZERO KKKK
    MAS ACHO Q JA SEI, É PQ PRECISO DO CONSOLE(TOTALSOMA) FORA DO FOR, E CONSEQUENTEMENTE O TOTALSOMA TBM VOU TESTAR

        function somaParesAte(numero) {
            for(let contagem = 1; contagem <= numero; contagem++) {
                let totalSoma = 0
                if(contagem % 2 === 0) {
                    totalSoma = totalSoma + contagem
                } else {
                    contagem++;
                }
                console.log(totalSoma);
            }
        }

        somaParesAte(10)
*/

// NÃO ERA OQ ACHAVA
// Preciso fazer com q o acumulador sobreviva

// Caramba fritou aqui
// Basicamente ele não está acumulando, o valor que foi definido é o que está sendo exibido

// É foda kkkk
// o console.log(somatotal) tem que estar no mesmo escopo da declaração da variavel ou escopos adentro
// E se eu colocar a declaração fora da function, funciona? Mas ai teria que sair da function e voltar pro for

// Vou tentar tudo denovo kkk

// console.log('AQUI SÃO OS PARES ATÉ O NUMERO DIGITADO')

// function somaParesAte(numero) {
//     for(let contagem = 1; contagem <= numero; contagem++){
//         if(contagem % 2 == 0) {
//             console.log(contagem);
//         }
//     }
// }

// somaParesAte(10);

console.log("------------------------");

// RAPAZ SERÁ Q SE EU DECLARAR DENTRO DO FOR??
// CAPTEI VOSSA MENSAGEM, ACHO Q É ISSO

// NÃO ERA POHAAA KKKKKK

// VOU IR JANTAR PRA VE SE A MENTE AMPLIA

// MANO, O CONSOLE.LOG(SOMATOTAL) TEM QUE SER FORA DO FOR, PARA NÃO REPETIR

// ERA JUSTAMENTE A MINHA LÓGICA QUE ESTAVA DANDO O PROBLEMA, AS VEZES É MELHOR IGNORAR AS COISAS DO QUE TER Q TOMAR UMA AÇÃO SOBRE ELA, isso não é nem sobre tecnologia

// Eu voltei no exercicio anterior e vi as posições da declaração e do console. Que era algo q ja sabia
// Depois lembrei que você falou sobre apos a decisão falsa do if "ignore". Ai pensei, será que a minha lógica é desnecessária, foi doloroso mas tive que tirar ela e olha só funcionou, caramba kkkk

function somaParesAte(numero) {
  let somaTotal = 0;
  for (let contagem = 1; contagem <= numero; contagem++) {
    if (contagem % 2 == 0) {
      somaTotal = somaTotal + contagem;
    }
  }
  console.log(somaTotal);
}

somaParesAte(10);
