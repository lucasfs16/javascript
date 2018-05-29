// exercicios da P1 de JS de 2016


//exercicio 1: mudar a cor:
/*
function capturar(){
    var div = document.querySelectorAll("div > p");
    
    for (var i=0; i < div.length; i++) {
        div[i].style.color = "pink";
    }
}
*/



function nomes(v) {
    
    var ig = 0;
    
    for (var i in v){
        
    if (v[i].acao == "MOSTRAR") {
        var p = document.createElement("p");
        p.innerHTML = v[i].nome;
        p++;
    } else {
        ig++;
        }
        var div = document.createElement("div");
        div.appendChild("qtd de nomes ignorados: " + ig);
        alert(p);
    }
        
}

