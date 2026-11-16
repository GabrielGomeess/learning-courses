// CALCULANDO MEDIA DE DUAS NOTAS

// A ideia é que o aluno insira suas duas notas principais 
// e o sistema exiba a média aritmética entre elas.

// Sua tarefa é criar uma arrow function chamada calcularMedia 
// que receba duas notas e retorne a média entre elas.

const calcularMedia = (primeiraNota, segundaNota) => {
    const media = (primeiraNota + segundaNota) / 2;
    return media;
}

console.log(calcularMedia(7, 9));