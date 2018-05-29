function calcular(){
    
    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    document.querySelector("#d1").innerHTML = n1+n2;
}

function pintarAmarelo(obj){
    obj.style.backgroundColor = "yellow";
}

function pintarBranco(obj){
    obj.style.backgroundColor = "white";
}