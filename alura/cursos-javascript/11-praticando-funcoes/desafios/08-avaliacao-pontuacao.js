// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

//   a pontuação final do jogador
//   uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

// Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

//   Foi aprovado, se a pontuação for igual ou maior que 70
//   Precisa de reforço, se a pontuação estiver entre 50 e 69
//   Foi reprovado, se a pontuação for menor que 50

function exibirMensagem(pontuacao) {
  if (pontuacao >= 70) {
    return `Parabéns! Você foi aprovado!`;
  } else if (pontuacao >= 50) {
    return `Você precisa de reforço.`;
  } else {
    return `Você foi reprovado.`;
  }
}

function avaliarDesempenho(pontuacao, exibirMensagem) {
  console.log(`Pontuação: ${pontuacao}`);
  return exibirMensagem(pontuacao);
}

console.log(avaliarDesempenho(69, exibirMensagem));
