const idade = 35;

// if (idade >= 18) {
//   console.log("É Maior de Idade");
// } else {
//   console.log("É Menor de Idade");
// }

idade >= 18 ? console.log("É Maior de Idade") : console.log("É Menor de Idade");

// if (idade < 18) {
//   console.log("É Menor de Idade");
// }

const notaAluno = 5;

if (notaAluno >= 9) {
  console.log("Nota Excelente");
} else if (notaAluno >= 7) {
  console.log("Nota Boa");
} else if (notaAluno >= 4) {
  console.log("Nota Mediana");
} else {
  console.log("Nota Ruim");
}

notaAluno >= 9 ? console.log("Excelente") :
    notaAluno >= 7 ? console.log("Boa") :
        notaAluno >= 4 ? console.log('Média'):
            console.log('Ruim')

