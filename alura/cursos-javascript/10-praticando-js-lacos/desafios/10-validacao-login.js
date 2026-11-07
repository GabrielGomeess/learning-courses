// VALIDAÇÃO DE LOGIN

// O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes.
// Se digitar certo, exibe uma mensagem de acesso permitido.
// Se errar 3 vezes, bloqueia o acesso.

// for (let indice = 0; indice < tentativas.length; indice++) {

//     if (tentativas[indice] !== senhaCorreta) {
//         console.log(`Tentativa ${indice + 1} inválida.`);
//         qtdTentativasErradas++

//         if (qtdTentativasErradas === 3) {
//             console.log(`Acesso Bloqueado! Número máximo de tentativas atingido.`);
//             break
//         }

//     } else {
//         console.log(`Acesso Permitido!`);
//     }

// }

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";

let indice = 0;
let acessoLiberado = false;

while (indice < tentativas.length && indice < 3) {
  if (tentativas[indice] === senhaCorreta) {
    console.log(`Acesso Permitido!`);
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${indice + 1} inválida.`);
  }

  indice++;
}

if (!acessoLiberado) {
  console.log(`Acesso Bloqueado! Número máximo de tentativas atingido.`);
}
