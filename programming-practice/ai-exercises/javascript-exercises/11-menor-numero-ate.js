// MENOR NÚMERO ATÉ O NUMERO DIGITADO

// - Recebo um número
// - Percorro do 1 até ele
// - Preciso criar uma variavel que guarda o menor
// - Essa variavel vai ser verificada com a contagem
// - Se passar na verificação, ela é atribuida com o menor numero

// se definir o menorNumero com 0, sempre vai ser 0

function menorNumeroAte(numero) {
    let menorNumeroAtual = 1 // Vai ser inicializado com 1
    for (let contagem = 1; contagem <= numero; contagem++) {
        if(contagem < menorNumeroAtual) {
            menorNumeroAtual = contagem
        }
    }
    console.log(menorNumeroAtual);
}

menorNumeroAte(5);

// Esse da um pouco de insegurança na resposta pq da a sensação de que não está sendo utilizado uma lógica
// E somente uma impressão no console do mesmo numero sempre
