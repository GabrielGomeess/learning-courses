// VALIDAÇÃO DE LOGIN

//O sistema deve verificar se o usuário digitado é "admin".
// Se o usuário for "admin", o login será bem-sucedido
// e será exibida a mensagem "Login bem-sucedido!".
// Caso contrário, o sistema deve exibir "Usuário inválido."

const user = "admin";

const login = user == "admin" ? `Login bem-sucedido!` : `Usuário Inválido.`;

console.log(login);
