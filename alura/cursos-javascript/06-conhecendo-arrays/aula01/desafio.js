console.log('--------------');
console.log('EXERCICIO - 01');

const arrayEsparso = [ , 1, , 4, , , , 6]
console.log(arrayEsparso)
console.log(arrayEsparso.length)



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 02');

const numeros = [4, 6, 8, 10, 12]
console.log(numeros);

numeros.unshift(2)
console.log(numeros)



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 03');

const meuArray = [];

console.log(meuArray);

meuArray.push(3);
meuArray.push(6);
meuArray.push(9);

console.log(meuArray);

meuArray[0] = meuArray[0] * 2

console.log(meuArray)



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 04');

const array = [];

console.log('Array(antes do método push()):', array);

array.push(10);
array.push(20);
array.push(30);

console.log('Array(após o método push()):', array);



//------------------------------------------------
console.log('--------------');
console.log('EXERCICIO - 05');

const filaClinica = [];

filaClinica.push('PitBull');
filaClinica.push('Rotweiller');
filaClinica.push('Poodle');

console.log('Fila de Atendimento:', filaClinica);

filaClinica.splice(0,1)
console.log('Fila de Atendimento (após Pitbull ser atendido):', filaClinica);

filaClinica.splice(0,1)
console.log('Fila de Atendimento (após Rotweiller ser atendido):', filaClinica);

filaClinica.splice(0,1)
console.log('Fila de Atendimento (após Poodle ser atendido):', filaClinica);