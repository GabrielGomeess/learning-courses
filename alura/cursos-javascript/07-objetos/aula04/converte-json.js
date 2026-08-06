const estudante = require('./estudante.json');
console.log(estudante)

const stringEstudante = JSON.stringify(estudante); //Vai transformar o obj em STRING
console.log(stringEstudante);
console.log(typeof stringEstudante);
console.log(stringEstudante.nome); //Não existe a prop "nome" pq o strigEstudante é uma string

const objEstudante = JSON.parse(stringEstudante); //Aqui ele transforma string em OBJETO
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome); //Agora sim existe uma prop "nome" pq é um objeto
