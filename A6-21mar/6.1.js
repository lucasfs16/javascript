//inserir, remover e update:

function inserir(){
    var p= document.querySelector("p");
    var span= document.createElement("span");
    var a = document.querySelector("a");
    var btn = document.createElement("button");
    btn.innerHTML="botaozinho";
    span.innerHTML="testezinho";
    span.innerHTML="TCHAU QUERIDA,ANA";
    //document.body.insertBefore(span,p);
    
    //parentNode = pega o pai do p, q e body
    
    //document.body.insertBefore(span,p.nextElementSibling); = prox linha
    p.parentNode.insertBefore(span,p.nextElementSibling);
    
    p.parentNode.removeChild(p);
    a.parentNode.replaceChild(btn,a);
}

