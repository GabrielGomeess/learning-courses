// SOMANDO OS PRIMEIROS N NUMEROS

// Crie um programa que calcule o total economizado ao final de 10 dias.

// Iniciando em R$1 no primeiro dia e aumentando esse valor em R$1 a cada novo dia.
// Ou seja, a cada dia que passa, ela economiza R$1 a mais do que no anterior.

let totalDias = 30;
let totalEconomizado = 0;
let economiaDiaria = 1;

for (let contagem = 1; contagem <= totalDias; contagem++) {
  totalEconomizado = totalEconomizado + economiaDiaria;
  economiaDiaria++;
}

console.log(`Total economizado: R$${totalEconomizado}`);
