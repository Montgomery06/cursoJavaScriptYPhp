//envia una alerta al navegador solo cuando javaaScript esta habilitado

function desmenusar (){

var enlace = document.getElementsByTagName('a');
var parrafos = document.getElementsByTagName('p');
var aux = parrafos[parrafos.length-1].getElementsByTagName('a');


var contador = 0;

console.log('Numero de enlaces: '+enlace.length);



for (var i = 0; i<enlace.length; i++) {
	if(enlace[i] == enlace.length-2){
		console.log('Penultimo enlace: '+ enlace[i].href);
	}
}


for (var i = 0; i<enlace.length; i++) {
	if(enlace[i].href == 'http://prueba/'){
		contador++;
			
	}
}

console.log('Numero de enlaces repetidos: '+contador);


console.log('Numero de enlaces en el ultimo parrafo: '+aux.length);

}

desmenusar();



