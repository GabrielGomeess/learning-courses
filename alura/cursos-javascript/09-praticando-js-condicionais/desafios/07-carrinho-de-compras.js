// CARRINHO DE COMPRAS

// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada.
// Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!".
// Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

const carrinhoDeCompras = false;

if (carrinhoDeCompras === false) {
  console.log("Não é possível finalizar a compra: carrinho vazio.");
} else {
  console.log("Compra finalizada com sucesso!");
}
