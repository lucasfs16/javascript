
function vermelho(listaTags){
    for (var indice=0; indice < listaTags.length; indice++){
        listaTags[indice].style.backgroundColor = "red";
        
    }
    
}


function teste(){
    
    //materia de P1:
    var divlis = document.querySelectorAll("div > ul > li");
        vermelho(divlis);
    
}

