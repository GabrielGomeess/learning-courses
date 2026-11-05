// VERIFICANDO ACESSO RESTRITO

// Crie um programa que inicie a contagem em 1 e siga até 20.
// Se o número 10 for alcançado,
// o sistema deve exibir uma mensagem de alerta e interromper a contagem.

for (let contagem = 1; contagem <= 20; contagem++) {
  if (contagem == 10) {
    console.log(`Número proibido encontrado! Encerrando...`);
    break;
  }
  console.log(contagem);
}
