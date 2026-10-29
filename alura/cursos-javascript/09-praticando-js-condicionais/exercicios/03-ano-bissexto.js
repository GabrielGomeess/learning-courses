// 3 - Verificar se um ano é bissexto 

    // um ano bé bissexto quando: 
    // deve ser divisivel por 4 mas não por 100
    // OU
    // deve ser divisivel por 100 e por 400

const ano = 2016;

if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
}else {
    console.log(`${ano} NÃO é bissexto`);
}
