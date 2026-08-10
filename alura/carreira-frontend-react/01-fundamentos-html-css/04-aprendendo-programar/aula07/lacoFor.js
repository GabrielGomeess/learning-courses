//Estrutura FOR

for (let contador = 1; contador <= 5; contador++){
    console.log('Número atual: ', contador)
}

//Estrutura FOR com IF

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 == 0){
        console.log('Número par encontrado: ', numero)
    }
}


for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 != 0){
        console.log('Número ímpar encontrado: ', numero)
    }
}

//Estrutura FOR com STRING

const palavra = 'Cambuci'

//palavra.length = indica a qtd de caracteres que uma string possui
//palavra[1] - pega a letra na posição da indicada (aqui por exemplo a letra na pos1 é 'a' de Cambuci) 

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador])
}