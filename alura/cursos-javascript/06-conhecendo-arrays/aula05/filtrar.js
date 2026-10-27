const alunos = ['Ana','Marcos', 'Maria', 'Mauro'];
const medias = [7, 6.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { 
    //Como não está utilizando o parametro aluno pode deixar um _ no lugar
    return medias[indice] < 7;
})

//O método FILTER basicamente adiciona um novo array à uma variavel, de acordo com o bloco de código com a condição


console.log(reprovados);
