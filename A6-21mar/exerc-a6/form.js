//CRIAR UM FORM Q ENTRE UM NOME DE DISCIPLINA E UMA SIGLA.
//AO INSERIR OS DADOS DIGITADOS NA PAGINA,
//MOSTRE-OS COM ALGUM ESTILO (VIA JS)

//PARA PENSAR [P1]: COMO FAZER ALGO PARECIDO SEM A ul INICIAL [sem nenhum elemento no hmtl, só no js] usando if

function inserirDisc(){
    var disc = document.forms.form1.disc.value;
    var sigla = document.forms.form1.sigla.value;
    var tabela = document.getElementById("t1");
    var tr = document.createElement("tr");
    var tdD = document.createElement("td");
    var tdS = document.createElement("td");
    var tbody = document.querySelector("tbody");
    tdD.innerHTML = disc;
    tdS.innerHTML = sigla;
    tr.appendChild(tdD);
    tr.appendChild(tdS);
    tbody.appendChild(tr);
    tabela.appendChild(tbody);
}