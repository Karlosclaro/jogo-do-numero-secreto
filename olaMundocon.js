console.log("Olá Mundo")


  let saudacao = "Karlos!";
  console.log(saudacao);

  let numero = 150 * 2;
  console.log(numero);

  //Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
  function dobro(numero) {
    return numero * 2;
  }
  console.log(dobro(1000));

  let numeroMedia = ((7 + 99 + 18) / 3);
  console.log(Math.round(numeroMedia));
  
  let maiorNumero = Math.max(1979, 1997);
  console.log(maiorNumero);

  let multiplicaNumeroporElemesmo = (2 * 2);
  console.log(multiplicaNumeroporElemesmo);

  //pedir um numero e multiplicar por ele mesmo
  let numeroUsuario = prompt("Digite um numero");
  console.log(numeroUsuario * numeroUsuario);

  function multiplicarPorElemesmo(numero) {
    return numero * numero;
  }