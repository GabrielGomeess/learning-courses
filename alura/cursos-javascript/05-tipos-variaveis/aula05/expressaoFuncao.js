//Aqui se colocarmos os consoles.log antes da criação da variável com função, ELA NÃO FUNCIONARÁ. 
// Já no caso anterior, em que a função não é atribuida à uma variável, PODEMOS colocar o console.log antes da função

const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        return false
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));