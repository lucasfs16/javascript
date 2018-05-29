function criar(){
    //cria/insere uma div em memoria
    var div = document.createElement("div");
    //cria um nó texto em memoria
    var txt = document.createTextNode("Ola mundo!");
    div.appendChild(txt);
    //aqui a div sera anexada a pagina:
    //document.body.appendChild(div);
    //ou
    var btn = document.getElementById("b1");
    
    //criar div antes do btn:
    //o "body" tem q ser pai do q esta no parenteses (div, btn)
    document.body.insertBefore(div, btn);
    
}

function criarListaOrdenada(){
    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var txt1 = document.createTextNode("UM");
    var txt2 = document.createTextNode("DOIS");
    var txt3 = document.createTextNode("TRES");
    
    //li3.innerHTML = "TRES";
    
    //atribuir os textos a sua lista usando seu elemento pai:
    li1.appendChild(txt1);
    li2.appendChild(txt2);
    li3.appendChild(txt3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.body.appendChild(ul);
    
}


function inserirAluno(){
    var ul = document.getElementById("ul1");
    var nome = document.forms.form1.aluno.value;
    
    if (nome == "") {
        alert("ERRO - Nome vazio");   
        
    } else {
    
    var li = document.createElement("li");
    var txt = document.createTextNode(nome);
    li.appendChild(txt);
    ul.appendChild(li);
    //apagar o nome digitado depois de clicar no btn:
    document.forms.form1.aluno.value = "";
    }
}