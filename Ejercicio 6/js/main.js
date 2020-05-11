//envia una alerta al navegador solo cuando javaaScript esta habilitado

var numero = prompt("Ingrese un numero");
var letra = prompt("Ingrese una letra");


var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
'H', 'L', 'C', 'K', 'E', 'T'];

if( numero < 0 || numero > 99999999){
	alert("El número proporcionado no es válido.");
}else{
	auxNumero = numero/23;
	auxNumero = Math.trunc(auxNumero);
	console.log(auxNumero);
    auxLetra = letras[auxNumero];
    console.log(auxLetra);

	if (letra == auxLetra) {
		alert("El numero y la letra de DNI son correctos")
	}else{
		alert("La letra que ha indicado no es correcta.")
	}
}
