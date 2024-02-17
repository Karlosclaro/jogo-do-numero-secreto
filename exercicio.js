//função que calcula imc, pedido que insira a altura e o peso, cujo resultado tenha o número arredondado.
function calcularImc() {
    let altura = parseFloat(prompt("Digite sua altura:"));
    let peso = parseFloat(prompt("Digite seu peso:"));
    let imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc.toFixed(2));
}

//calcularImc();

//funcao que calcula o fatorial de um número.
function fatorial(numero) {
    let fatorial = 1;
    for (let i = numero; i > 0; i--) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(fatorial(5));

//funcao que calcula o cambio de dólar para reais.
function cambioDolar() {
    let dolar = parseFloat(prompt("Digite o valor em dólar:"));
    let cambio = dolar * 4.80;
    alert("O valor em reais é: R$" + cambio.toFixed(2));
    //como exibir na tela a função Alert?
    //alert("O valor em reais é: R$" + cambio.toFixed(2));
    //como exibir na tela a função Prompt?
    //prompt("O valor em reais é: R$" + cambio.toFixed(2));
    //como exibir na tela a função Console?
    //console.log("O valor em reais é: R$" + cambio.toFixed(2));
}
//cambioDolar();
//explique a função "parsefloat"
//parseFloat transforma a string em um número.
//parseFloat(prompt("Digite o valor em dólar:"));
// o que e uma "string"?
//string é uma sequência de caracteres.
// o que faz o ".toFixed"?
//toFixed é uma função que arredonda o número.
// o que faz o "alert"?
//alert é uma função que exibe uma mensagem na tela.
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaSala() {
    let altura = parseFloat(prompt("Digite a altura da sala:"));
    let largura = parseFloat(prompt("Digite a largura da sala:"));
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    //alert("A área da sala é: " + area + "m² e o perímetro é: " + perimetro + "m");
}
//areaSala();

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaSalaCircular() {
    let raio = parseFloat(prompt("Digite o raio da sala:"));
    let area = Math.round( Math.PI * raio * raio);
    let perimetro = Math.round(2 * Math.PI * raio);
    alert("A área da sala é: " + area + "m² e o perímetro é: " + perimetro + "m");
}
//areaSalaCircular();

//qual a o signficado da função "Math.PI"?
//Math.PI é uma constante que representa o valor de Pi.
//qual a o significado da função "Math.round"?
//Math.round é uma função que arredonda o número para o inteiro mais próximo.
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada() {
    var numero = document.getElementById('numero').value;
    var tabuada = "";
    for (var i = 1; i <= 10; i++) {
      tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
    document.getElementById("resultado").innerHTML = tabuada;
  }
//exiba o resultado da função "tabuada" no html.
//como inserir a funçao acima em uma pagina html?
//document.getElementById("tabuada").innerHTML = tabuada();
//como chamar a função "exibirTabuada" no html?
//document.getElementById("tabuada").innerHTML = exibirTabuada();
//como chamar a função "exibirTabuada" no html?

function mostrarTabuada(numero) {
  // Itera sobre os números de 1 a 10.
  for (let i = 1; i <= 10; i++) {
    // Calcula o produto do número pelo índice atual.
    let produto = numero * i;

    // Imprime o resultado da multiplicação.
    console.log(`${numero} x ${i} = ${produto}`);
  }
}

// Exemplo de uso:
mostrarTabuada(5);