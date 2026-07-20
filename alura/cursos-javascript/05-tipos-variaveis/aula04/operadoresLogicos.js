const notaFinal = 7;
const faltas = 5
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) {
    console.log('REPROVADO')
} else {
    console.log('APROVADO');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bônus!')
} else {
    console.log('Não recebeu bônus!');
}