console.log('--------------');
console.log('EXERCICIO - 01');

function saudacao(nome) {
    console.log(`Salve meu mano, ${nome}!`)
}

saudacao('Gabriel')

//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 02');

function verificaMaioridade(idade) {
    if (idade >= 18) {
        console.log(`${idade}: Você é Maior de Idade!`)
    } else {
        console.log(`${idade}: Você é Menor de Idade!`)
    }
}

verificaMaioridade(22)


//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 03');

function reverseString(str) {
    let stringReversed = str.split('').reverse().join('');

    if (stringReversed === str) {
        console.log(str, '===', stringReversed)
        return true
    } else {
        console.log(str, '!=', stringReversed)
        return false
    }

}

console.log(reverseString("radar"))


//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 04');

function verificarMaiorNumero(num1, num2, num3) {
    console.log(num1, num2, num3)

    if (num1 > num2 && num1 > num3) {
        console.log(`${num1}: é o Maior Valor entre os três`);

    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2}: é o Maior Valor entre os três`);

    } else {
        console.log(`${num3}: é o Maior Valor entre os três`);
    }
}

verificarMaiorNumero(9, 17, 12)


//-----------------------------------------
console.log('--------------');
console.log('EXERCICIO - 05');

const calculaPotencia = (base, expoente) => {
    let potencia = base ** expoente
    console.log(`${base} elevado à ${expoente} = ${potencia}`)
}

calculaPotencia(3, 2)