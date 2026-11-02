// VERIFICAR ACESSO AO NIVEL DE JOGO

// Crie um programa que, dado os pontos e as vidas restantes,
// verifique se o personagem pode ou não avançar para o próximo nível.

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.

const pontos = 60;
const vidas = 1;

const personagem =
  pontos > 50 && vidas > 0
    ? `Próximo nível liberado!`
    : `Não pode avançar para o próximo nível.`;

console.log(personagem);
