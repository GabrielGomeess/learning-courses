const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ' , (nome)=> {
    console.log('Olá,', nome)
    console.log('Boas Vindas ao nosso sistema! ')

    leitor.question('Qual é a sua idade? ', (idade)=> {

        if(idade >= 18){
            console.log('Você já pode tirar a sua CNH')
        } else {
            console.log('Você ainda não pode tirar a sua CNH')
        }

        leitor.close()
    })

})