// FATORIAL

// criar uma função que calcula o fatorial de um número usando recursão
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 * 4 * 3 * 2 * 1

// Consegue me dar uma explicada nesse código aqui, 
// oq me deu uma bugada é que a função é recursiva e vai sendo chamada enquanto tiver passando na verificação né?
// então a verificação aqui seria esse if que enquanto o numero passado como argumento for 1 ou 0 ele retorna
// se não for ele vai pro return debaixo e faz a operação
// fez a operação chama a função denovo até retornar no if? É isso?

// Na recursividade, cada chamada deixa um trabalho pendente 
// enquanto aguarda o resultado da próxima chamada.
// pra no fim fazer as operações, caso haja, na função

const fatorial = function f(numero) {

    // AQUI É O CASO BASE
    // CONDIÇÃO QUE DETERMINA QUANDO DEVE PARAR DE CHAMAR A SI MESMA
    // OU SEJA, SE O NUMERO FOR 0 OU 1 ELA RETORNA 1 E PARA DE CHAMAR A SI MESMA
    if (numero === 0 || numero === 1) return 1;

    
    // AQUI É A CHAMADA RECURSIVA
    // NO QUAL, SE NÃO PARAR NA CONDIÇÃO ACIMA
    // ELA SERÁ SENDO CHAMADA PARA IR EXECUTANDO ESSA OPERAÇÃO    
    return numero * f(numero - 1); 

}   

console.log(fatorial(5));

// 5 * fatorial(4)24 = 120
// 4 * fatorial(3)6  = 24
// 3 * fatorial(2)2  = 6
// 2 * fatorial(1)1  = 2
// 1 * fatorial(0)1  = 1