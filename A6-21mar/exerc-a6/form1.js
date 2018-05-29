//CRIAR UM FORM Q ENTRE UM NOME DE DISCIPLINA E UMA SIGLA.
//AO INSERIR OS DADOS DIGITADOS NA PAGINA,
//MOSTRE-OS COM ALGUM ESTILO (VIA JS)

//PARA PENSAR [P1]: COMO FAZER ALGO PARECIDO SEM A ul INICIAL [sem nenhum elemento no hmtl, só no js] usando if

//CORRIGIR:


function inserirDisc(){
    var disc = document.forms.form1.disc.value;
    var sigla = document.forms.form1.sigla.value;
    var tabela = document.getElementById("t1");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var tdD = document.createElement("td");
    var tdS = document.createElement("td");
    tdD.innerHTML = disc;
    tdS.innerHTML = sigla;
    tr.appendChild(tdD);
    tr.appendChild(tdS);
    tabela.appendChild(tr);
    
}
//---------------------------

function disciplina(){
    var div = document.getElementById("div1");
    var disc = document.forms.form1.disciplina.value;
    var sig = document.forms.form1.sigla.value;
    
    //if((disc || sig) === ""){
        
      //  alert("Erro - campo vazio");
        
    //}
    //else{
        
        var p = document.createElement("p");
        var txt = document.createTextNode(disc);
        var txt2 = document.createTextNode(sig);
        
        p.appendChild(txt);
        p.appendChild(txt2);
        div.appendChild(p);
        
        //apagar o nome digitado depois de clicar no btn:
        document.forms.form1.disciplina.value = "";
        document.forms.form1.sigla.value = "";
    
    
        
    //}
}