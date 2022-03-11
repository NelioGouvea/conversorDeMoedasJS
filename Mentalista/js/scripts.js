var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function Chutar(){
    var elementoResultado = document.getElementById("resultado");
    var elementoTentativas = document.getElementById("tentativas");
    var chute = parseInt(document.getElementById("valor").value);

    if(tentativas < 2){
        if(chute == numeroSecreto){
            elementoResultado.innerHTML = "Parabéns você Ganhou";
            elementoTentativas.innerHTML = " ";
        }else if(chute > 10 || chute < 0){
            elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
            var tentativasRestantes = 3 - tentativas;
            elementoTentativas.innerHTML = "Tentativas restantes: " + tentativasRestantes;
        }else if(chute > numeroSecreto){
            tentativas++;
            var tentativasRestantes = 3 - tentativas;
            elementoResultado.innerHTML = "Errou, o número secreto é menor que " + chute;
            elementoTentativas.innerHTML = "Tentativas restantes: " + tentativasRestantes;
        }else{
            tentativas++;
            var tentativasRestantes = 3 - tentativas;
            elementoResultado.innerHTML = "Errou, o número secreto é maior que " + chute;
            elementoTentativas.innerHTML = "Tentativas restantes: " + tentativasRestantes;
        }
    }else{
        elementoResultado.innerHTML = "Ops, Você Perdeu";
        elementoTentativas.innerHTML = "Nenhuma tentativa restante";
    }
}