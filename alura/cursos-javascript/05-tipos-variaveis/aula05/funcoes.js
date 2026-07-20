//Aqui se colocarmos os consoles.log antes da criação da variável com função, ELA IRÁ FUNCIONAR. 
// Já no caso anterior, em que a função é atribuida à uma variável, NÃO PODEMOS colocar o console.log antes da função

//Uma forma de função
function exibeNomeEstudante(nome) {
    console.log(nome);
}

exibeNomeEstudante('Caroline');
 
//Outra forma de função
function exibeInfosEtudante(nome, nota) {
    return `O Nome é ${nome} e a Nota é ${nota}.`
}

console.log(exibeInfosEstudante('Gabriel', 10));
