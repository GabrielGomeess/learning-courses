const estaAprovado = true;

if (estaAprovado === true) {
    console.log('Aprovado');
}

if ('0' == 0) { // DOIS IGUAIS == o JavasScript compara o valor
    console.log('Passou na Comparação');
} else {
    console.log('Não Passou')
}

if ('0' === 0) { // TRÊS IGUAIS === o JavasScript compara o tipo do valor
    console.log('Passou na Comparação');
} else {
    console.log('Não Passou')
}