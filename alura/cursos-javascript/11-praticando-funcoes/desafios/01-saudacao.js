//  GERANDO MENSAGENS PERSONALIZADAS

// Sua tarefa é criar uma função chamada saudacao que receba um nome como parâmetro,
// mas que funcione mesmo quando nenhum nome for informado, exibindo uma saudação genérica.
// Use o parâmetro pré-definido para lidar com isso.

function saudacao(nome) {
  if (nome) {
    console.log(`Olá ${nome}! Bem vindo(a)!`);
  } else {
    console.log(`Olá! Bem vindo(a)!`);
  }
}

saudacao("Gabriel");
saudacao();
