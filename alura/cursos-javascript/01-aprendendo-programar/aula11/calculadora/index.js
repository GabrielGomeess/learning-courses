// const readline = require('readline')
import { createInterface } from "readline";
import {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    exponenciacao,
} from "./operacoesMatematicas.js";

const leitor = createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question("Digite o primeiro número:\n>", (numero1) => {
  leitor.question(
    "Digite a operação:\n+: Soma\n-: Subtração\n*: Multiplicação\n/: Divisão\n**: Exponenciação\n>",
    (operacao) => {
      leitor.question("Digite o segundo número:", (numero2) => {
        const num1 = Number(numero1); //transforma de string em número
        const num2 = Number(numero2); //transforma de string em número

        let resultado = null;

        if (operacao == "+") {
          resultado = soma(num1, num2);
        } else if (operacao == "-") {
          resultado = subtracao(num1, num2);
        } else if (operacao == "*") {
          resultado = multiplicacao(num1, num2);
        } else if (operacao == "/") {
          resultado = divisao(num1, num2);
        } else if (operacao == "**") {
          resultado = exponenciacao(num1, num2);
        } else {
          console.log("Operação Inválida!");
        }

        if (resultado != null) {
          console.log("O resultado da operação é:", resultado);
        }

        leitor.close();
      });
    },
  );
});
