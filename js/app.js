// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
   if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1; 
        window.speechSynthesis.speak(utterance); 
    }
  }
  
  function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto' );
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
  }
  
  exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    // console.log(chute == numeroSecreto);
    if (chute == numeroSecreto){
      exibirTextoNaTela('h1', "Acertou!");
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas);
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2175372212.
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
      }
      // tentativas = tentativas + 1
      tentativas++
      limparCampo();
    }
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if  (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3480326537.
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}