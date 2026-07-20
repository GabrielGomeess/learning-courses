const pessoa = {
  nome: "Gabriel",
  idade: 22,
  nacionalidade: "Brasileiro",
};

for (const chaves in pessoa) {
  console.log("Chave:", chaves);
  console.log("Valor:", pessoa[chaves]);
}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log('Entradas(chaves/valores):', entradas)
