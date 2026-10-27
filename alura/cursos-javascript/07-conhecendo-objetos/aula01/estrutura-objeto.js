const estudante = {
    nome: 'João Silva',
    idade: 32,
    cpf: '12345432123',
    turma: 'JavaScript'
}

console.log("Objeto completo:", estudante);
console.log("Chave 'nome' no objeto:", estudante.nome);
console.log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}`)
