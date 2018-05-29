

function acao (){
    var divs = document.getElementsByTagName("div");
    
    rosa(divs);
    //sumir(divs);
    trocanr(divs);
}

function rosa(conteudo){
    
    for (var indice = 0; indice < conteudo.length; indice++) {
        conteudo[indice].style.color = "pink";
        
    }
    
}

//sumir as divs pares
function sumir(conteudo){
    
    for (var indice = 0; indice < conteudo.length; indice++) {
        
        if(indice % 2 != 0){
            conteudo[indice].style.display = "none";    
        }
    }
}

//trocar conteudo [innerHTML] das divs por 0,...,6 [indices de cada div]:
function trocanr(conteudo){
    
    for (var indice = 0; indice < conteudo.length; indice++){
        conteudo[indice].innerHTML = indice;
    }
}
