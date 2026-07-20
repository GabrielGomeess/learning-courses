const idadeVinny = 36;
const idadeGabriel = "36";
const idadeDaniel = 9;

//Igualdade
const comparacao = idadeVinny == idadeGabriel;
console.log("São Iguais? ", comparacao);

//Diferente
const diferente = idadeVinny != idadeGabriel;
console.log("São Diferentes? ", diferente);

//Maior que
const maiorQue = idadeVinny > idadeGabriel;
console.log("É Maior Que? ", maiorQue);

//Menor que
const menorQue = idadeVinny < idadeGabriel;
console.log("É Menor Que? ", menorQue);

//Maior ou Igual
const souMaiorDeIdade = idadeGabriel >= 18;
const irmaoMaiorDeIdade = idadeDaniel >= 18;
console.log("Sou Maior de Idade? ", souMaiorDeIdade);
console.log("Meu irmão é Maior de Idade? ", irmaoMaiorDeIdade);

//Estritamente Igual
const exatamenteIgual = idadeVinny === idadeGabriel;
console.log("São Exatamente Iguais? ", exatamenteIgual);

//Estritamente Diferente
const exatamenteDiferente = idadeVinny !== idadeGabriel;
console.log("São Exatamente Diferentes? ", exatamenteDiferente);
