// Sua tarefa é criar uma função chamada processarPedido, que receba três parâmetros:

//   o nome do cliente,
//   o tipo do cliente (vip, novo ou comum),
//   e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

function exibeMensagem(nome, tipoDeCliente) {
  if (tipoDeCliente === "vip") {
    return `Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`;
  } else if (tipoDeCliente === "novo") {
    return `Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`;
  } else {
    return `Obrigado pela sua compra, ${nome}!`;
  }
}

function processarPedido(nome, tipoDeCliente, exibeMensagem) {
  console.log(`Processando pedido de ${nome}...`);
  return exibeMensagem(nome, tipoDeCliente);
}

console.log(processarPedido("Gabriel", "novo", exibeMensagem));
