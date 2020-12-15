var valor1;
const btnSalvaItens = document.querySelector("btnSalva");
function validaUnMed() {
    if(document.getElementById("selUnMed").selectedIndex == "1"){
    	document.getElementById("tipoMed").innerHTML = 'Lt';
    } else{
    	if (document.getElementById("selUnMed").selectedIndex == "2") {
    		document.getElementById("tipoMed").innerHTML = 'Kg';
    	}else{
    		if (document.getElementById("selUnMed").selectedIndex == "3") {
    			document.getElementById("tipoMed").innerHTML = 'UN';
    		}
    	}
    }
    document.getElementById('txtQuantidade').focus();
	
}
function obrigaValidade(){
	if (document.getElementById('selPerecivel').selectedIndex == "1") {
		(document.getElementById('dataValidade').setAttribute('required', true));
	}else{
		if (document.getElementById('selPerecivel').selectedIndex == "2") {
			console.log("teste5");
			(document.getElementById('dataValidade').removeAttribute('required', 'required'));
		}
	}
}

function validaVencimento(data){
	dataAtual = new Date();
	data = new Date(data);		
	if (data < dataAtual) {		
		alert('O produto informado encontra-se fora da data de validade.');
		document.getElementById("txtVencido").innerHTML = 'Produto vencido.';
	} else {
	    document.getElementById("txtVencido").innerHTML = '';
		
	}
	if(document.getElementById("selPerecivel").selectedIndex == "1"){
		console.log("teste2")
		document.getElementById('dataFabricacao').setAttribute("max", data);

		let today = new Date();
		day = today.getDate();
    	month = today.getMonth()+1;
    	year = today.getFullYear();
        	if(day < 10){
            	day = '0'+day;
        	} 
        	if(month < 10){
            	month = '0'  +month;
        	}
        	today = year  + '-' + month + '-' + day;
		document.getElementById("dataFabricacao").setAttribute("max", today);		
	}
}

function obtemData(){
	var data = new Date();
	var dia  = data.getDate();
	var mes  = data.getMonth();
	var ano  = data.getFullYear();
	var diaExtenso = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
	//document.getElementById('Data').innerHTML = data.getDay();
	var diaSemana = diaExtenso[data.getDay()];
	 if (dia < 10) {
	 	dia = '0' + dia
	 }
	 if (mes < 10) {
	 	mes = '0' + mes;
	 }
	 document.getElementById('Data').innerHTML = 'Olá, hoje é '+ diaSemana + ', '+ dia + '/' + mes + '/' + ano;
	 obtemHora();
}

function obtemHora(){
	var hora = new Date();
	var h    = hora.getHours();
	var m    = hora.getMinutes();
	var s    = hora.getSeconds();
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;
	document.getElementById('Hora').innerHTML = 'Hora atual '+h + ':' + m + ':' + s + '.';
	//setTimeout(function atualizahora(obtemHora()))
	tempo = setTimeout(function atualizaHora(){
		obtemHora()
	},1000);
}


