// SORTEIO DE PARTICIPANTES

//  Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

//     Sortear aleatoriamente um nome da lista de participantes.

//     Exibir esse nome com um pequeno atraso (como se fosse um suspense).

//     Avaliar se o participante foi premiado ou não com base na pontuação:
//         Acima de 80: "Parabéns, você foi premiado!"
//         Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
//         Abaixo de 50: "Infelizmente, não foi dessa vez."

// Sua missão é criar:

//     Uma função para sortear um nome aleatoriamente.
//     Uma função para avaliar a pontuação.
//     Uma função para exibir o nome sorteado com 2 segundos de atraso
//     Uma função final que organize o fluxo completo do sorteio.

const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 },
];

function sortearParticipante(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

const avaliarPontuação = (pontuacao) => {
  if (pontuacao > 80) {
    return `Parabéns, você foi premiado!`;
  } else if (pontuacao >= 50) {
    return `Você quase conseguiu! Fique de olho nos próximos sorteios.`;
  } else {
    return `Infelizmente, não foi dessa vez.`;
  }
};

function exibeResultado(participante) {
  console.log(`Sorteando...`);
  setTimeout(() => {
    (console.log(`Participante sorteado: ${participante.nome}`),
      console.log(`Pontuação: ${participante.pontuacao}`),
      console.log(avaliarPontuação(participante.pontuacao)));
  }, 2000);
}

function realizaSorteio(lista) {
  const sorteado = sortearParticipante(lista);
  exibeResultado(sorteado);
}

realizaSorteio(participantes);
