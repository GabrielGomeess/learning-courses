// MENSAGEM COM ATRASO

// Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

// o nome do usuário, e
// uma função de callback que será executada após 3 segundos.

function respostaAtrasada(nome) {
  console.log(`Olá ${nome}! Aqui está a resposta para sua dúvida.`);
}

function responderUsuario(nome, respostaAtrasada) {
  console.log(`Processando sua pergunta...`);
  setTimeout(() => {
    respostaAtrasada(nome);
  }, 3000);
}

//console.log(responderUsuario('Camila', respostaAtrasada)); 
responderUsuario("Camila", respostaAtrasada);
