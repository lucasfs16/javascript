function calcular(){
    
    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    document.querySelector("#d1").innerHTML = n1+n2;
}

function calcularMult(){

    var n1 = parseInt(document.forms.form1.n1.value);
    var n2 = parseInt(document.forms.form1.n2.value);
    document.querySelector("#d1").innerHTML = n1*n2;
}

function pintar(obj){
    
    if (obj.style.backgroundColor == "white"){
        obj.style.backgroundColor = "yellow";
    } else {
        obj.style.backgroundColor = "white";
    }
    
    
}


