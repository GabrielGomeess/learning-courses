// OP CONDICIONAL OU OP TERNARIO

// Verificar se o estudante receberá bônus na nota.
// Estudantes recebem bônus se a nota for 8 ou acima e se tiverem max de 2 faltas.

const nome = 'Roberta';
const nota = 8
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2) 
    ? `${nome} recebe bônus` 
    : `${nome} não recebe bônus`;

console.log(recebeBonus);

//nota >= 8 && faltas <= 2 ? console.log(`${nome} recebe o bônus`) :  console.log(`${nome} NÃO recebe o bônus`);