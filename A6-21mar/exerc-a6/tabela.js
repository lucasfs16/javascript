 function adicionar() {
 var forma = document.getElementById("nome").value;
	if(forma === "" ){
		
		
		alert("digite algo");
	}
	else{
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
	 bot2.setAttribute("onclick", "edite()");
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
	
	}
 }
 function deletar(i) {
	  var p = i.parentNode.parentNode;
         p.parentNode.removeChild(p);
}
function edite(){
	     

	
	
}
