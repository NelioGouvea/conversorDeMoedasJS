var listaFilmes = [];

listaFilmes.push("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQPbmJOl5sQWIEMAurA-Oje4DKJr2Tw02-IkKK5Hld2hD6VfSCc")
listaFilmes.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvaAqTSsLhj3Wt_S9QzfUZNqXTBbxorTIHbg4GQE1fh0paDPJ")
listaFilmes.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoFKAlVEDJr4gWmlGzlK7k_fHAZ6J5riMiudyPt_rTk9YTpuO")
listaFilmes.push("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o");
listaFilmes.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgj3C_zJc1WCLJeBLjllwTslh56YyARtlguPjnEkHNev6iumWE");

for(var i=0; i<listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">");
}

function AdicionaFilme(){
    var elementoNovoFilme = document.getElementById("novosFilmes").value;
    listaFilmes.push(elementoNovoFilme);
    var img = document.querySelector("#image");
    var lastImage = listaFilmes.length - 1;
    img.setAttribute('src', listaFilmes[lastImage]);
}
