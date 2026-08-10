function saudacao(){
    console.log('Eae, Suave?')
}

setTimeout(saudacao, 500)

let contador = 0

const id = setInterval( () => {

    contador ++
    console.log('Tempo decorrido(s):', contador)

    if (contador == 10) {
        clearInterval(id)
    }

}, 1000 )