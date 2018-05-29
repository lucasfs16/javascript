//pegar codigo do arq "Aula5.js"


// função igual a desconstruir()
function mostraObjeto(obj){

    //só ve os atributos inteiros
    aux = ;
    for (var)

    //ve todos os atributos possiveis
	for (var indice in obj) {
		aux = aux + indice + " ->" + obj[indice];
	}
	document.write(aux);
}

//listaTags = [<p></p>, <p></p>, <p></p>, <p></p>]
function todosFundoAzulClicado(listaTags) {
    for (var indice=0; indice < listaTags.length; indice++) {
        listaTags[indice].style.backgroundColor = "blue";
        listaTags[indice].innerHTML = "Clicado";
    }
    
}

function teste() {
    //retorna uma lisra de objetos que representam a tag p
    var ps = document.getElementByTagName("p");
    todosFundoAzulClicado(ps);
    
}

/*

CODIGO DO PROF:

//desconstruir
function mostrarObjeto(obj){
    var aux = ""
    for(var indice in obj){
    //for(var indice=0; indice < obj.length; indice++){
        aux = aux + indice + " -> " + obj[indice] + "<br>";
    }
    document.write(aux);
}
//listaTags=[<p></p>, <p></p>, <p></p>, <p></p>]
function todosFundoAzulClicado(listaTags){
    for(var indice=0; indice < listaTags.length; indice++){
        listaTags[indice].style.backgroundColor = "blue";
        listaTags[indice].innerHTML = "Clicado";
    }
}

function teste(){
    //ELE RETORNA UMA LISTA DE OBJETOS QUE REPRESENTAM
    //UMA TAG p.
    var ps = document.getElementsByTagName("p");
    todosFundoAzulClicado(ps);
}

*/