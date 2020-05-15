//envia una alerta al navegador solo cuando javaaScript esta habilitado

var texto = prompt("ingrese un texto");

console.log(desmenusar(texto));

function desmenusar (texto){

	if( texto == texto.toUpperCase())
		return('Son todas mayúsculas');
	else if (texto == texto.toLowerCase())
		return('Son todas minúsculas');
	else
		return('El texto contiene mayúsculas y minúsculas');
}

