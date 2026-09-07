//VARIAVEIS

//Declaração
var a, b, c;

//Atribuição dos valores
a = 3;
b = 2;
c = a + b;

console.log(c);

var nome, sobrenome, nomeCompleto;

nome = "Gabriel";
sobrenome = "Gomes";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto;


var meuNome = 'Gabriel';
var meuNome = 'Fatima';

alert(meuNome); //Aqui vai sair Fatima, pq o var pode ser reatribuido


let meuOutroNome = 'Gabriel';
//let meuOutroNome = 'Fatima'; //NÃO funciona pq o let NÃO pode ser reatribuido

{
    let meuOutroNome = 'Fatima'
}

alert(meuNome); //Aqui vai sair Fatima, pq o var pode ser reatribuido
