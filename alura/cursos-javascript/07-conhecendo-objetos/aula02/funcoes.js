const estudante = {
    nome: 'Gabriel Gomes',
    idade: 22,
    cpf: '1286289568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999998888', '5511977776666'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}


console.log(estudante.estaAprovado(5));
