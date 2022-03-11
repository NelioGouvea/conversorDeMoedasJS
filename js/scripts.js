function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorConvertidoDolar = valorEmRealNumerico / 5;
    var valorConvertido =
      "O resultado em dólar é U$" + valorConvertidoDolar.toFixed(2);
    elementoValorConvertidoEmDolar = document.getElementById(
      "valorConvertidoEmDolar"
    );
    elementoValorConvertidoEmDolar.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorConvertidoEuro = valorEmRealNumerico / 5.6;
    var valorConvertido =
      "O resultado em euro é €" + valorConvertidoEuro.toFixed(2);
    elementoValorConvertidoEmEuro = document.getElementById(
      "valorConvertidoEmEuro"
    );
    elementoValorConvertidoEmEuro.innerHTML = valorConvertido;
  }
  