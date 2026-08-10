const frutas = ['Uva', 'Laranja', 'Maçã', 'Goiaba', 'Kiwi', 'Banana']

console.log(frutas) //Mostra todos os valores do array frutas

console.log('Primeira fruta:', frutas[0]) // (array[]) - Mostra a fruta na posição[0] - Primeira posição 
console.log('Última fruta:', frutas[5]) // (array[]) - Mostra a fruta na posição[5] - Última posição
console.log('Total de Frutas:', frutas.length) // (.length) - Mostra o total de valores dentro do array frutas

frutas.push('Melancia') //(.push) - Adiciona um valor ao array frutas

console.log(frutas)
console.log('Total de frutas após adicionar Melancia', frutas.length)
console.log('Última Fruta: ', frutas[frutas.length - 1]) //(array[]) - Mostra a fruta na posição[array.length-1] - Última posição

frutas.splice(2, 1) //Remove um(1) valor na posição[2] do Array frutas
console.log("Frutas(após remover Maçã):", frutas, '\n')

//FORMAS DE PERCORRER POR UM ARRAY

console.log('Usando FOR')
for (i = 0; i < frutas.length; i++){
    console.log('Indice:', i)
    console.log(frutas[i])
}

console.log('\n')

console.log('Usando FOR EACH')
frutas.forEach( (valor, indice) => {
    console.log('Indice:', indice, valor)
})

console.log('\n')

console.log('Usando FOR OF')
for (const fruta of frutas) {
    console.log('Fruta Atual:', fruta)
}


