// Classificação de Idades

// Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.

// Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

const idade = 11;

if (idade < 12) {
    console.log(`${idade} anos é Criança!`);
} else if (idade >=12 && idade < 18) {
    console.log(`${idade} anos é Juvenil!`);
} else {
    console.log(`${idade} anos é Adulto!`);
}