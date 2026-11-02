// VERIFICANDO STATUS DE PAGAMENTO

// Você está criando um sistema de verificação de status de pagamento de clientes.
// Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".

const statusPagamento = "recusado";

switch (statusPagamento) {
  case "pendente":
    console.log(`Pagamento pendente`);
    break;

  case "aprovado":
    console.log(`Pagamento aprovado`);
    break;

  default:
    console.log(`Pagamento recusado`);
    break;
}
