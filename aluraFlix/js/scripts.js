function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito);
    }else{
        console.error("Endereço Inválido");
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filmeFavorito) {
    var elementoImgFilmeFavorito = "<img src=" + filmeFavorito + ">"; 
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoImgFilmeFavorito;
}