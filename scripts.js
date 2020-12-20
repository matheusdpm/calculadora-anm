/*
	dataVencimento;
	dataInicio=01/01/2021;
	diasDeProrrogação=288;

	ALVARÁ DE PESQUISA, GUIAS DE UTILIZAÇÃO, REGISTRO DE LICENÇA E PERMISSÃO DE LAVRA GARIMPEIRA:
prorrogar=288- (dataVencimento-dataInicio);

	TÍTULOS OUTORGADOS ENTRE 20 DE MARÇO DE 2020 E 1° DE JANEIRO DE 2021 SERÃO ACRESCIDOS DE MAIS ATÉ 288 DIAS, OBSERVANDO-SE O SEGUINTE CRITÉRIO: 
prorrogar=min(288,dataPublicação-dataInicio);

	TÍTULOS VENCIDOS EM 1° DE JANEIRO 
prorrogar = 288;

*/

var caso = "case1";

function setDate(id){
	let today = new Date();
	let month = ('0' + (today.getMonth() + 1)).slice(-2);
	let date = ('0' + today.getDate()).slice(-2);
	let year = today.getFullYear();
	document.getElementById(id).value = year+'-'+month+'-'+date;
}

setDate('data');


function getDataString(date){
	let month = ('0' + (date.getMonth() + 1)).slice(-2);
	let day = ('0' + date.getDate()).slice(-2);
	let year = date.getFullYear();
	return day+'/'+month+'/'+year
}

function updateResult(){
	let div = document.getElementById('result');
	let date = document.getElementById('data');
	let data = new Date(date.value + "GMT-0300");
	let dataInicio=new Date("01/01/2021 GMT-0300");

	var prorrogar = 288;
	var diff = dataInicio.getTime() - data.getTime();   
	var daydiff = (diff / 31536000000).toFixed(0);     
	
	if (caso == "case3") {
		prorrogar=288;
	} else if (caso == "case2") {
		prorrogar=Math.min(288,prorrogar - daydiff);
	} else {
		prorrogar=288 - daydiff;
	}

	var strtDt  = new Date("2020-03-19");
	var endDt  = new Date("2021-01-02");
	
	if (data <= strtDt){
		div.textContent = "Antes do Prazo estabelecido";
	} else if (data >= endDt){
		div.textContent = "Depois do prazo estabalecido";
	} else {
		data.setDate(data.getDate()+prorrogar)
		div.textContent = "O novo vencimento é em: " + getDataString(data);
	}
}


function updateRadio(id){
	let a = document.getElementById(id);
	let pre = document.getElementById("pre");
	caso=id;
	
	if (caso == "case3") {
		pre.textContent = "Informe a data do vencimento de vigência";
	} else if (caso == "case2") {
		pre.textContent = "Informe a data de publicação ";
	} else {
		pre.textContent = "Informe a data do vencimento";
	}
}

updateResult();