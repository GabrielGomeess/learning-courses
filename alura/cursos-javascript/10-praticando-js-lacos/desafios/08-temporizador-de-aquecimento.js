// TEMPORIZADOR DE AQUECIMENTO

// O painel deve exibir, segundo a segundo:

//     “Aquecendo... segundo X” a cada ciclo;
//     A mensagem "Temperatura ideal atingida." exatamente no segundo em que essa condição for alcançada;
//     E ao final, o total de segundos que o sistema permaneceu ligado.

// Crie um programa que simule esse funcionamento do temporizador de aquecimento
// garantindo que ele continue funcionando até atingir pelo menos 5 segundos.

// preciso criar um for
// que faça uma contagem para tempoDeAquecimento e temperaturaIdeal
// ao alcançar o tempoMinimo de Aquecimento ele exibe uma mensagem
// ao alcançar o temperaturaIdeal ele exibe uma mensagem

const tempoMinimo = 5;
const temperaturaIdeal = 3;

for (let contagem = 1; contagem <= tempoMinimo; contagem++) {
  console.log(`Aquecendo... segundo ${contagem}`);
  if (contagem === temperaturaIdeal) {
    console.log(`Temperatura ideal atingida.`);
  }
}

console.log(`Tempo total de aquecimento: ${tempoMinimo} segundos`);
