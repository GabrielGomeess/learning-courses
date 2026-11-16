// Imagine que você está construindo o módulo de entrega de um aplicativo de entregas locais. Para cada pedido,
// o sistema precisa calcular o valor do frete.
// com base na distância até o endereço do cliente.

// A regra é a seguinte:

//   Até 5 km: frete fixo de R$ 5
//   De 5.1 km até 20 km: R$ 0,50 por quilômetro
//   Acima de 20 km: frete fixo de R$ 20

function calculaFrete(km) {
  if (km < 5) {
    return 5;
  } else if (km >= 5.1 && km <= 20) {
    return km * 0.5;
  } else {
    return 20;
  }
}

console.log(calculaFrete(12));
