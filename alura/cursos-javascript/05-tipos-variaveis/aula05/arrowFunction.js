//Também não podem ser chamadas antes de serem declaradas

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

//Forma reduzida para função que possui uma linha.
const exibeNome = (nome) => nome; 