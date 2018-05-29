//essa função permanece quase sempre igual, a estrutura é sempre a mesma
//só muda o "var data...",
//"POST", ""

/*
function cadastrar() {
    var data = {name:"OLA MUNDO BACK-END"};
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://hask4-romefeller.c9users.io/department");
    xhr.responseType = "application/json";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE &&  xhr.status == 200) {
            var resposta = xhr.responseText; //String
            var obj = JSON.parse(resposta) // JSON
            mostrarRespNaDiv(obj);
        }
    }
    xhr.send(JSON.stringify(data));
}
*/




function consultar(){


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hask4-romefeller.c9users.io/department");
    xhr.responseType = "application/json";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE &&  xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.send();
}




//function cadastrar comentada
function consultar(){
    
    var data = {name:"TESTE JS"};
    
    //constante: valor q nao muda OBVIAMENTE
    const xhr = new XMLHttpRequest();
    //XMLHttpRequest() - obj q permite fazer requisições no servidor
    
    //open: abre a conexao com o backend
    //POST - metodo http (usando diretivas do )
    //AJAX suporta: hast[arquitetura]: POST; GET; DELETE; PATCH: modificar só uma parte;
    // PUSH: modifica o registro inteiro; 
    //OPTIONS: opções
    xhr.open("POST", "https://hask4-romefeller.c9users.io/department");
    //a linha acima representa cadastro de departamento pq post 
    
    //retorna um obj do js q é o json. 
    //Qnd um retorno é json significa q é interação entre
    // programa com programa e nao humano interagindo com programa
    xhr.responseType = "application/json";
    
    //no momento q o backend se mover essa função function deve ser disparada
    xhr.onreadystatechange = function() {
        
        //pergunta se a requisição já executou/acabou e se o status é 200 [codigo ok]
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){
            //var resposta= xhr.responseText; //string
            //var obj = JSON.parse(resposta);
            
            console.log(xhr.responseText);
            
            //alert("Inserido com sucesso! :D");
            
            //mostrarRespNaDiv(obj);
            
            mostrarTodosDepto();
        }
    }
    
    //envia a info para o backend, transforma um obj em string
    //xhr.send(JSON.stringify(data));

    xhr.send();
    
}


/*
//obj = {resp:"ksahdka"}
function mostrarRespNaDiv(obj){
    var div = document.querySelector(".resposta");
    div.innerHTML = obj["resp"];
    div.style.backgroundColor = "green";
    
} 
*/

function mostrarTodosDepto(obj){
    //var div = document.querySelector(".resposta");
    //div.innerHTML = obj["resp"];
    //div.style.backgroundColor = "green";

    var vetorObj = obj["resp"];
    var tb = document.getElementById("tb1");
    tb.parentNode.removeChild(tb);
    var tb1 = document.createElement("table");

    //o parametro do setAttribute é o q vai no html
    tb1.setAttribute("id","tb1");
    var th = document.createElement("thead");
    var trHead = document.createElement("tr");
    var trHeadId = document.createElement("td");
    var trHeadNome = document.createElement("td");
    
    trHeadId.innerHTML = "id";
    trHeadNome.innerHTML = "nome";
    
    trHead.appendChild(trHeadId);
    trHead.appendChild(trHeadNome);
    th.appendChild(trHead);
    tb1.appendChild(th);
    
    for(var i=0; i<vetorObj.length;i++){
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdNome = document.createElement("td");
        tdId.innerHTML = vetorObj[i].id;
        tdNome.innerHTML = vetorObj[i].name;
        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tb1.appendChild(tr);
    }
    
    document.body.appendChild(tb1);
}


