function verificaNumero(num) {
    if (num > 0) {
        console.log(num ,": É um Número Positivo");
    } else if (num < 0) {
        console.log(num ,": É um Número Negativo");
    } else {
        console.log(num, ": É um Número Neutro");
    }
}

verificaNumero(0);