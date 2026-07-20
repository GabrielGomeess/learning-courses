const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//            [alunos],[medias]
const lista = [alunos, medias];

console.log('Array(Alunos):', alunos)
console.log('Array(Medias):', medias)
console.log('Array(Lista):', lista)


console.log(`A Aluna da posição 1 da lista é: ${lista[0][1]}. 
    A nota dessa aluna é: ${lista[1][1]}`)