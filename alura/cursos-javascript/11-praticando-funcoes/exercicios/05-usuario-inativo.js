// CALLBACK

// criar uma função que emita uma mensagem
// caso usuário x não esteja interagindo com o sistema após qtd y de tempo

const userId = "4545656";

const avisaUsuario = (userId) =>
  console.log(`sessão de ${userId} está inativa`);

// aqui precisa passar o parâmetro que a função interna avisaUsuario(userID) precisa
setTimeout(avisaUsuario, 2000, userId);

// ou fazer acoplado assim:

setTimeout(
  (userId) => console.log(`sessão de ${userId} ainda está inativa`),
  4000,
  userId,
);
// aqui a função callback não possui mais referência à nenhuma variável
