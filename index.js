const prompt = require("prompt-sync")();
function calcular(numero1, numero2, operacao) {
  let resultado;

  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      if (numero2 === 0) {
        console.log("Divisão por zero!");
      }
      resultado = numero1 / numero2;
      break;
    case "%":
      if (numero2 === 0) {
        console.log("Divisão por zero!");
      }
      resultado = (numero1 / 100) * numero2;
      break;
    default:
      console.log("Operação inválida!");
  }

  return resultado;
}

function obterNumeroDoUsuario(mensagem) {
  let numero;

  do {
    numero = parseFloat(prompt(mensagem));
  } while (isNaN(numero));

  return numero;
}

function obterOperacaoDoUsuario() {
  let operacao;

  do {
    operacao = prompt("Escolha a operação (+, -, *, /, %):");
  } while (!["+", "-", "*", "/", "%"].includes(operacao));

  return operacao;
}

const numero1 = obterNumeroDoUsuario("Digite o primeiro número: ");
const numero2 = obterNumeroDoUsuario("Digite o segundo número: ");
const operacao = obterOperacaoDoUsuario();

const resultado = calcular(numero1, numero2, operacao);

console.log(`${numero1} ${operacao} ${numero2} = `, resultado);
