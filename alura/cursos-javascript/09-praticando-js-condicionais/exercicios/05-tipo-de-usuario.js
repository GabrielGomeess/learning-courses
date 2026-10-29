//  SWITCH AND CASE

// criar um fluxo que identifica o tipo de usuario e comunica de acordo.
// ex: usuario free tem acesso limitado
//     usuario premium tem acesso a todas as funções
//     usuario super premium tem acesso total e bônus especiais

const user = 'super premium'

switch (user) {
    case 'free': 
        console.log(`O usário é ${user} e possui acesso limitado!`);
        break;
    case 'premium':
        console.log(`O usário é ${user} e possui acesso a todas as funções!`);
        break;
    case 'super premium':
        console.log(`O usário é ${user} e possui acesso total e bônus especiais!`);
        break;
    default:
        console.log(`Usuário não cadastrado!`);
        break;
}