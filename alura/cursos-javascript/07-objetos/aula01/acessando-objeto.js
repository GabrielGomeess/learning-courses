const estudante = {
    nome: 'João Silva',
    idade: 32,
    cpf: '12345432123',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.nome)
console.log(estudante[0])
console.log(estudante['cpf'])

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));