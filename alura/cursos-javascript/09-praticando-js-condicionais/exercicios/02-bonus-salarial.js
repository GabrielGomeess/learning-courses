// 2° - Localizar o nível de bônus de acordo com a faixa salarial

    // ex: $11000 e acima: 3% de bonus
    // ex: $10999 a $7000: 5% de bonus
    // ex: $6999 a $4000: 7% de bonus
    // ex: $3999 p/ baixo: 9% de bonus

const salario = 11000;

if (salario >= 11000) {
    console.log(`Salário (${salario} + 3% de bônus) = ${salario + (salario * 0.03)}`)

} else if (salario < 11000 && salario >= 7000) {
    console.log(`Salário (${salario} + 5% de bônus) = ${salario + (salario * 0.05)}`)

} else if (salario < 7000 && salario >= 4000) {
    console.log(`Salário (${salario} + 7% de bônus) = ${salario + (salario * 0.07)}`)

} else {
    console.log(`Salário (${salario} + 9% de bônus) = ${salario + (salario * 0.09)}`)
}
