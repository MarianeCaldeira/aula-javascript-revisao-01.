function questao1(valor){
    if (valor < 0){
      console.log("É um número negativo.")
    }
    else{
      console.log("É um número positivo.")
    }
  }
  
  function questao2(valorA, valorB, valorC){
    let soma = valorA + valorC
    if (valorA + valorC > valorB){
      console.log(valorA, valorC, "valorA + valorC = ", soma);
    }
    else {
      console.log("Os valores de valor A + Valor C é igual ao valor B.")
    }
  }
  
  function questao3(){
    var manha = prompt ("Seu horario é pela manhã?");
    var tarde = prompt ("Seu horario é pela tarde?");
    var noite = prompt ("Seu horario é pela noite?");
    if (manha == "sim"){
      console.log("Bom dia!");
    }
    else if (tarde == "sim"){
      console.log("Boa tarde!");
    }
    else if (noite == "sim"){
      console.log("Boa noite!");
    }
    else {
      console.log("Valor Inválido!");
    }
  }