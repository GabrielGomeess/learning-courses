const rdl = require('readline')

const leitor = rdl.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem vindo(a) ao Quiz de JavaScript no Terminal")
console.log('Reponda com a letra correta: a, b, c c\n')

let acertos = 0

leitor.question('(1° - Qual palavra usamos para criar uma função? \n(a) define\n(b) function\n(c) create\n ', (resposta1) => {

    if (resposta1 == 'b') {
        acertos++
    }

    leitor.question('(2° - Qual dessas é uma estrutura de repetição? \n(a) loopar()\n(b) repeat\n(c) for\n ', (resposta2) => {

        if (resposta2 == 'c') {
            acertos++
        }


        leitor.question('(1° - Qual valor é considerado falsy em JavaScript? \n(a) 1\n(b) 0\n(c) "texto"\n ', (resposta3) => {

            if (resposta3 == 'b') {
                acertos++
            }


            if (acertos == 3) {
                console.log('Parabéns, você acertou todas')   
            } else if (acertos == 2) {
                console.log('Muito bom, continue assim!')
            } else if (acertos == 1) {
                console.log('Está bom, continue melhorando!')
            }

           leitor.close() 
        })

    })
    
})
