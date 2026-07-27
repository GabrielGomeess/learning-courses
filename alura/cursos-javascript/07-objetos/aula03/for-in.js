const estudante = {
  nome: "Gabriel",
  idade: 22,
  cpf: 11122233344,
  bolsista: true,
  turma: "JavaScript",
  telefones: ["11987654321", "11912345678"],
  enderecos: [
    {
      rua: "Rua Gama Cerqueira",
      bairro: "Cambuci",
      numero: "654",
      complemento: "Ap 109, Bloco A",
    },
    {
      rua: "Rua Paula Ney",
      bairro: "Aclimação",
      numero: "9",
      complemento: null,
    },
  ],
};

for (let chave in estudante) {
  const tipo = typeof estudante[chave];

  if (tipo !== "object" && tipo !== "function") {
    console.log(`${chave}: ${estudante[chave]}`);
  }
}
