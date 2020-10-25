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
	let data = new Date(date.value + "GMT-0300")
	data.setMonth( data.getMonth() + 9 );
	div.textContent = "A data para sua coisa é: " + getDataString(data);
}