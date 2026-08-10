const agora = new Date()

console.log(agora) //Imprime no formato ISO 8601 (Formato de String)

console.log('Ano:' ,agora.getFullYear()) //ANO
console.log('Mês(0-11)', agora.getMonth()) //MÊS
console.log('Dia do Mês:' ,agora.getDate()) //DIA
console.log('Hora do Dia:' ,agora.getHours()) //HORA
console.log('Minutos:', agora.getMinutes()) //MINUTOS


const nascimento = new Date('2003-10-21T06:10:00.000Z') // ATENÇÃO COM TIMEZONE

console.log(nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR')) //DATA EM FORMATO MAIS LEGÍVEL E DE ACORDO COM A LINGUAGEM 
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))