function todosFundoAzulClicado(listaTags){
    for(var indice=0; indice < listaTags.length; indice++){
        listaTags[indice].style.backgroundColor = "blue";
        listaTags[indice].innerHTML = "Clicado";
    }
}

function teste(){
    //document.querySelector -> só pega o proximo elemento
    //document.querySelectorAll -> TODOS!
    var divps = document.querySelectorAll("p , div");
    //var divps = document.querySelector("");

    todosFundoAzulClicado(divps);



    //usar seletores css

}