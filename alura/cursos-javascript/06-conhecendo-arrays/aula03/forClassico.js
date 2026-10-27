const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//Primeira expressão: executa uma unica vez (let indice = 0)
//Segunda expressão: condição de execução (indice < notas.length)
//Terceira expressão: executa sempre no final do bloco (indice++)

for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, '-', notas[indice])
}

//Basicamente ele inicia um "contador"(let indice = 0;) 
//Depois verifica se este contador é menor do que o tamanho total do array (indice < notas.length;)
//A verificação bateu. Então ele entra no bloco de código e o executa {console.log(indice, '-', notas[indice])}
//Após a execução do código ele então incrementa um no contador (indice++)
//E assim realizar novamente os mesmos passos até que a verificação seja FALSA