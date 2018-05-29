/* 

function montarTabela() {
    var info = document.getElementById("info").value;
    if (info === "") {
        alert("Digite algo!");    
        
    } else {
        //cria o no com as informaçoes escritas no input q serão adicionadas a tabela
        var adicionar = document.createTextNode(info);
        //seleciona o corpo da tabela q será adicionada as infos
        var corpoTab = document.querySelector("tbody");
        //cria a linha da tabela onde ficarao as infos
        var linhaTab = document.createElement("tr");
        //cria o titulo anterior a tabela 
        var algo = document.createElement("td");
        //adiciona o elemento q sera escrito pelo usuario à tabela criada
        var elemento = document.createElement("span");
        
    }
}

*/

 // ---------------------------------------
 
  function adicionar() {
 var forma = document.getElementById("nome").value;
	if(forma === "" ){
		alert("digite algo");
	} else{
	 var txt = document.createTextNode(forma);	
     var corpo = document.querySelector("tbody");
	 var linha = document.createElement("tr");
	 var algo = document.createElement("td");
	 var elemento = document.createElement("span")
	 var data = document.createElement("td");
	 var data2 = document.createElement("td");
	 var bot = document.createElement("button");
	 var txt1 = document.createTextNode("deletar");
	 var bot2 = document.createElement("button");
	 var txt2 = document.createTextNode("editar");
	 
	 bot.setAttribute("onclick", "deletar(this)");
	 bot2.setAttribute("onclick", "edite(this)");
	 bot.setAttribute("value","Delete");
	
	bot.appendChild(txt1);
	bot2.appendChild(txt2);
	elemento.appendChild(txt);
	algo.appendChild(elemento);
	data.appendChild(bot);
	data2.appendChild(bot2);
	linha.appendChild(algo);
	linha.appendChild(data2);
	linha.appendChild(data);
	corpo.appendChild(linha);
	document.getElementById("nome").value = "";
	}
 }
 function deletar(i) {
	  var p = i.parentNode.parentNode;
         p.parentNode.removeChild(p);
}
function edite(botao){
	input = document.createElement("input");
	input.setAttribute("name","editando")
	var span = botao.parentNode.parentNode.firstChild.firstChild;
	botao.parentNode.parentNode.firstChild.replaceChild(input,span);
	botao.innerHTML="Finalizar";
	botao.removeAttributeNS("onclick","edite()");
	botao.setAttribute("onclick","final(this)");
}

function final(botao){
	if (input.value === "") {
		alert("Digite algo!");
	}else{
		var span = document.createElement("span");
		span.innerHTML=input.value;
		botao.parentNode.parentNode.firstChild.replaceChild(span,input);
		botao.innerHTML="editar";
		botao.removeAttributeNS("onclick","final()");
		botao.setAttribute("onclick","edite(this)");
	}
	function saiu(){
		alert("oi");
	}
}