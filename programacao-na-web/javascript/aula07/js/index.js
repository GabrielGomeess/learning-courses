// OPERADORES MATEMÁTICOS

// OP ARITMÉTICOS (+ , - , * , /)

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
total = valor1 - valor2;
total = valor1 * valor2;
total = valor1 / valor2;

// OP ATRIBUIÇÃO (=)
valor1 = valor1 + valor2
valor1 += valor2


// OP COMPARAÇÃO (== , === , !=)

valor1 = 8;
valor2 = '8';

total = (valor1 == valor2) //Verifica o valor se é verdadeiro ou falso 
total = (valor1 === valor2) //Verifica o valor e o tipo do valor se é verdadeiro ou falso

total = (valor1 != valor2) //Verifica se o valor é diferente do outro
total = (valor1 !== valor2) //Verifica se o valor e o tipo do valor são diferentes do outro

total = (valor1 < valor2) //Verifica se o valor1 é MENOR que o valor2
total = (valor1 <= valor2) //Verifica se o valor1 é MENOR ou IGUAL ao valor2

total = (valor1 > valor2) //Verifica se o valor1 é MAIOR que o valor2
total = (valor1 >= valor2) //Verifica se o valor1 é MAIOR ou IGUAL ao valor2


// OP TERNÁRIO ((CONDIÇÃO) ? "AÇÃO VERDADEIRA" : "AÇÃO FALSA")

var idade, eleitor, resultado;
idade = 18;

eleitor = (idade>18) ? 'NÃO é ELEITOR' : 'SIM é ELEITOR'
alert('A resposta é: ' + eleitor + ' a idade dele é: ' + idade);

// OP LÓGICO (&& , ||)

resultado = (idade > 60 && idade < 70); // idade maior que 60 E menor que 70

resultado = (idade == 60 || idade == 70); // idade igual a 60 OU igual a 70

resultado = !(idade === 65); // NÃO IGUAL A 65