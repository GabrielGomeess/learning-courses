const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0;

// notas.forEach(function (nota)  { 
//     somasDasNotas += nota;
// })

//Basicamente o forEach executa uma função para cada item do array
//Em seu parâmetro vai o nome da função criada ou podendo ser declarada dentro do parâmetro como anteriormente
notas.forEach(somaNotas); 

function somaNotas(nota) {
    somasDasNotas += nota;
}

const media = somasDasNotas / notas.length;

console.log(`Média: ${media}`);