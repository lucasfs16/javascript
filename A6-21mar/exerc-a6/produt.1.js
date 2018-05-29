//P1:

//          RESOLVER:

/*
<table name="tb1">
    <thead name="th1">
        <tr name="nome"> NOME PRODUTO </tr>
          <tr name="preco"> PREÇO </tr>
          <tr name="qtd"> QUANTIDADE </tr>
    </thead>
    <tbody>
        <tr>
            <td>Caneta</td>
            <td>5.5</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Tesoura</td>
            <td>8.27</td>
            <td>3</td>
        </tr>
    </tbody>
*/

function produtos(obj){
    // algo assim para percorrer o vetor: (obj[i].nome + " " + obj[i].preco + " " + obj[i].qtd);
    var trC = document.createElement("tr");
    var trT = document.createElement("tr");
    
    var tdN = document.createElement("td");
    var tdP = document.createElement("td");
    var tdQ = document.createElement("td");   
    
    var tdN1 = document.createElement("td");
    var tdP1 = document.createElement("td");
    var tdQ1 = document.createElement("td");
    
    var tb = document.querySelector("tbody");
    
    tdN.innerHTML = obj[0].nome;
    tdP.innerHTML = obj[0].preco;
    tdQ.innerHTML = obj[0].qtd;
    trC.appendChild(tdN);
    trC.appendChild(tdP);
    trC.appendChild(tdQ);
    
    tb.appendChild(trC);
    
    tdN1.innerHTML = obj[1].nome;
    tdP1.innerHTML = obj[1].preco;
    tdQ1.innerHTML = obj[1].qtd;
    trT.appendChild(tdN1);
    trT.appendChild(tdP1);
    trT.appendChild(tdQ1);
    
    tb.appendChild(trT);
}