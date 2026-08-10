const idade = 18

const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH
console.log("Pode Dirigir? ", podeDirigir)

const podeViajarSozinho = maiorDeIdade || possuiCNH
console.log("Pode Viajar Sozinho? ", podeViajarSozinho)

const precisaDeAcompanhante = maiorDeIdade