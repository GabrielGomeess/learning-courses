//  O sistema deve calcular o consumo mensal estimado com base no uso diário, classificar o consumo (baixo, moderado ou alto) e exibir uma mensagem clara para o usuário.

// Sua missão é criar três funções separadas, com responsabilidades bem definidas:

//     calcularConsumo(potencia, horasPorDia): Retorna o consumo mensal em kWh,
//     com base na fórmula: consumo = (potencia × horasPorDia × 30) / 1000

//     classificarConsumo(consumo): Retorna a classificação com base na tabela:
//          Abaixo de 50	"Baixo consumo"
//          50 - 199	"Consumo moderado"
//          200 ou mais	"Alto consumo"

// exibirResumo(nomeAparelho, consumo, classificacao):
//      Exibe uma mensagem como:"Geladeira tem consumo de 180 kWh/mês e é classificada como Consumo moderado."

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);

function calcularConsumo(potencia, horasPorDia) {
  return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
  if (consumo < 50) {
    return `Baixo consumo`;
  } else if (consumo < 200) {
    return `Consumo moderado`;
  } else {
    return `Alto consumo`;
  }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
  return `${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao}`;
}

console.log(exibirResumo(nomeAparelho, consumo, classificacao));
