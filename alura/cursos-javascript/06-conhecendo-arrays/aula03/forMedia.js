notas = [10, 6.5, 8, 7.5];

let somaTotal = 0;

for (let i = 0; i < notas.length; i++) {
    somaTotal += notas[i];
}

const media = somaTotal / notas.length;
console.log(`Média das Notas: ${media}`);