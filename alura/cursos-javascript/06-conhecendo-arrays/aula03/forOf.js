notas = [10, 6.5, 8, 7.5];

let somaTotal = 0;

for (let nota of notas) {
    somaTotal += nota;
}

const media = somaTotal / notas.length;
console.log(`Média das Notas: ${media}`);