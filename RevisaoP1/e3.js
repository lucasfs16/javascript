
function rolar() {
    var n = document.forms.form1.numero.value;
    
    //TESTAR var n = document.forms.form1.numero.value;
    
    var ul = document.createElement("ul");
    
    for (var i=0; i<n, i++) {
        var li = document.createElement("li");
        
        var indice = i;
        
        var txt = document.createTextNode(i); //testar
        
        
        
        li.appendChild(txt);
        
        var n = parseFloat(li.innerHTML);
        
        if (n%2 == 0) {
            li.style.color = "blue";
        } else {
            li.style.color = "red";
        }
        
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
}