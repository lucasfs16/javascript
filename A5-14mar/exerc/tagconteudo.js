
//funcao usando parametro

function fonteRosa(listaTags){
     
    for (var indice=0; indice < listaTags.length; indice++){
        listaTags[indice].style.color = "pink";
        
    }   
}

// funcao para chamar as funcoes:
function teste(){
    //ELE RETORNA UMA LISTA DE OBJETOS QUE REPRESENTAM
    //UMA TAG
  var divs = document.getElementsByTagName("div");
    fonteRosa(divs);
    someDivs(divs);
    trocaCont(divs);
    
}


function someDivs(listaTags){
    
    for(var indice=0; indice < listaTags.length; indice++) {
        if(indice % 2 != 0){
        
        listaTags[indice].style.display = "none";
    }                                
        
    }
    
}

function trocaCont(listaTags) {
   
    for(var indice=0; indice < listaTags.length; indice++){
        listaTags[indice].innerHTML = indice;
   
    }
    
}
