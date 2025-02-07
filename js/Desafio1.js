let titulo = document.querySelector("h1");
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2918566984.
titulo.innerHTML = "Hora do desafio";

function verificarConsole() {
  console.log("O botão CONSOLE foi clicado");
}

function exibirAlert() {
  alert("O botão ALERTA foi clicado");
}

function verificarPrompt() {
  let cidade = prompt("Qual o nome de uma cidade do Brasil?");
  alert("Estive em " + cidade + " e lembrei de você");
}

function fazerSoma() {
  let numero1 = parseInt(prompt("Digite o primeiro número:"));
  let numero2 = parseInt(prompt("Digite o segundo número:"));
  let resultado = numero1 + numero2;
  alert("O resultado da soma é: " + resultado);
}