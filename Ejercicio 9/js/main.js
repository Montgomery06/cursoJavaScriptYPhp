//envia una alerta al navegador solo cuando javaaScript esta habilitado

var numero = prompt("ingrese un numero");

console.log(definirPoI(numero));

function definirPoI (num){

	var aux = num%2; 
	if( aux == 0 )
		return('es un numero par');
	else 
		return('ees un numero impar');

}