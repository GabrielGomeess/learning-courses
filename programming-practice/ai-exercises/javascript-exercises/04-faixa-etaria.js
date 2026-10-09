// IDENTIFICAR FAIXA ETÁRIA DE UMA PESSOA

// - preciso identificar a faixa etária de acordo com a idade digitada
// - preciso criar uma função que receba uma idade
// - essa idade vai ser verificada em uma condição
// - e executar a ação que passar na condição

// - se a idade for menor que 12 é uma "Criança"
// - se for de 12 até 17 é um "Adolescente"
// - se for 18 ou mais é um "Adulto"

// bem oq vc falou comecei escrever as respostas para as 'perguntas'
// e comecei a overthinkar kkk

// dei uma bugada agora na condição com && e ||
// nossa me endoidei aqui, estava usando o ||, confundi no, se for maior ou igual a 12 ou idade < 18, (só que era E no lugar de OU)

function verificaFaixaEtaria(idade) {
  if (idade < 12) {
    console.log(`${idade} anos, é uma CRIANÇA!`);
  } else if (idade >= 12 && idade < 18) {
    console.log(`${idade} anos, é um ADOLESCENTE!`);
  } else {
    console.log(`${idade} anos, é um ADULTO!`);
  }
}

verificaFaixaEtaria(18);
